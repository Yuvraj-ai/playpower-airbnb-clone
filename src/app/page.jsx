"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import Header from "@/components/layout/Header";
import StickySubNav from "@/components/layout/StickySubNav";
import ListingHeader from "@/components/listing/ListingHeader";
import HeroGallery from "@/components/listing/HeroGallery";
import ListingSummary from "@/components/listing/ListingSummary";
import HighlightsSection from "@/components/listing/HighlightsSection";
import DescriptionSection from "@/components/listing/DescriptionSection";
import SleepSection from "@/components/listing/SleepSection";
import AmenitiesSection from "@/components/listing/AmenitiesSection";
import CalendarSection from "@/components/listing/CalendarSection";
import ReviewsSection from "@/components/listing/ReviewsSection";
import LocationSection from "@/components/listing/LocationSection";
import HostSection from "@/components/listing/HostSection";
import ThingsToKnow from "@/components/listing/ThingsToKnow";
import NearbyStays from "@/components/listing/NearbyStays";
import Footer from "@/components/layout/Footer";
import StickyBookingCard from "@/components/booking/StickyBookingCard";
import PhotoTour from "@/components/photoTour/PhotoTour";
import Lightbox from "@/components/lightbox/Lightbox";

import { LISTING_DATA } from "@/data/listing";
import { REVIEWS_DATA } from "@/data/reviews";
import { NEARBY_STAYS } from "@/data/nearbyStays";
import { ALL_PHOTOS } from "@/data/photos";

function ListingApp() {
  // Navigation views: 'listing' | 'photos' | 'lightbox'
  const [currentView, setCurrentView] = useState("listing");
  const [activePhotoIndex, setActivePhotoIndex] = useState(1);

  // Date selection state (shared between calendar & booking card)
  const [startDate, setStartDate] = useState(LISTING_DATA.defaultStartDate);
  const [endDate, setEndDate] = useState(LISTING_DATA.defaultEndDate);

  // Synchronize with URL query params and browser history
  const updateUrl = useCallback((view, photoIdx, isReplace = false) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);

    if (view === "listing") {
      url.searchParams.delete("view");
      url.searchParams.delete("photo");
    } else if (view === "photos") {
      url.searchParams.set("view", "photos");
      url.searchParams.delete("photo");
    } else if (view === "lightbox") {
      url.searchParams.set("view", "photos");
      url.searchParams.set("photo", String(photoIdx || 1));
    }

    if (isReplace) {
      window.history.replaceState({ view, photoIdx }, "", url.toString());
    } else {
      window.history.pushState({ view, photoIdx }, "", url.toString());
    }
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (e) => {
      const state = e.state;
      if (!state || !state.view || state.view === "listing") {
        setCurrentView("listing");
      } else if (state.view === "photos") {
        setCurrentView("photos");
      } else if (state.view === "lightbox") {
        setCurrentView("lightbox");
        setActivePhotoIndex(state.photoIdx || 1);
      } else {
        // Parse from URL directly if state is empty
        const params = new URLSearchParams(window.location.search);
        const viewParam = params.get("view");
        const photoParam = params.get("photo");
        if (viewParam === "photos") {
          if (photoParam) {
            setCurrentView("lightbox");
            setActivePhotoIndex(Number(photoParam) || 1);
          } else {
            setCurrentView("photos");
          }
        } else {
          setCurrentView("listing");
        }
      }
    };

    // Initial check on mount
    const params = new URLSearchParams(window.location.search);
    const v = params.get("view");
    const p = params.get("photo");
    if (v === "photos") {
      if (p) {
        setCurrentView("lightbox");
        setActivePhotoIndex(Number(p) || 1);
      } else {
        setCurrentView("photos");
      }
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // View transition handlers
  const openPhotoTour = (photoIndex = 1) => {
    setCurrentView("photos");
    setActivePhotoIndex(photoIndex);
    updateUrl("photos");
  };

  const closePhotoTour = () => {
    setCurrentView("listing");
    updateUrl("listing");
  };

  const openLightbox = (photoIndex) => {
    setActivePhotoIndex(photoIndex);
    setCurrentView("lightbox");
    updateUrl("lightbox", photoIndex, false);
  };

  const closeLightbox = () => {
    // Escape from lightbox returns to Photo Tour!
    setCurrentView("photos");
    updateUrl("photos");
  };

  const navigateLightbox = (nextIndex) => {
    setActivePhotoIndex(nextIndex);
    updateUrl("lightbox", nextIndex, true);
  };

  // Scroll to calendar when booking date box is clicked
  const handleDateBoxClick = () => {
    const el = document.getElementById("amenities"); // scroll to calendar region
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  // Calculate dynamic price for StickySubNav
  const calculateTotalNights = () => {
    if (!startDate || !endDate) return 5;
    const s = new Date(startDate);
    const e = new Date(endDate);
    const diff = Math.round((e - s) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 5;
  };

  const dynamicNights = calculateTotalNights();
  const dynamicTotalFormatted =
    "₹" + (dynamicNights * LISTING_DATA.pricePerNight).toLocaleString("en-IN");

  return (
    <main className="min-h-screen bg-white text-ink-primary font-cereal">
      {/* Top Main Navigation Header */}
      <Header onSearchClick={handleDateBoxClick} />

      {/* Sticky Secondary Navigation (appears on scroll) */}
      <StickySubNav
        price={dynamicTotalFormatted}
        nights={dynamicNights}
        rating={LISTING_DATA.rating}
        reviews={LISTING_DATA.reviewCount}
        onReserveClick={() => {
          window.scrollTo({ top: 1200, behavior: "smooth" });
        }}
      />

      {/* Main Listing Content Container (max 1120px width) */}
      <div className="max-w-container mx-auto px-6 xl:px-0">
        {/* Listing Title, Share & Save */}
        <ListingHeader title={LISTING_DATA.title} />

        {/* Hero Gallery Mosaic */}
        <HeroGallery
          images={LISTING_DATA.heroImages}
          onOpenPhotoTour={openPhotoTour}
        />

        {/* 2-Column Content Layout: Left Details, Right Sticky Booking Card */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 pt-8 relative">
          {/* Left Column (Details, sections, reviews, host) */}
          <div className="flex-1 min-w-0">
            {/* Listing Summary: Room stats, Guest favourite, Host */}
            <ListingSummary
              propertyType={LISTING_DATA.propertyType}
              location={LISTING_DATA.location}
              guests={LISTING_DATA.guests}
              bedrooms={LISTING_DATA.bedrooms}
              beds={LISTING_DATA.beds}
              bathrooms={LISTING_DATA.bathrooms}
              rating={LISTING_DATA.rating}
              reviewCount={LISTING_DATA.reviewCount}
              host={LISTING_DATA.host}
            />

            {/* Property Highlights */}
            <HighlightsSection highlights={LISTING_DATA.highlights} />

            {/* Description */}
            <DescriptionSection description={LISTING_DATA.description} />

            {/* Where you'll sleep */}
            <SleepSection
              sleepingArrangements={LISTING_DATA.sleepingArrangements}
              onOpenPhotoTour={openPhotoTour}
            />

            {/* Amenities Grid & Modal */}
            <AmenitiesSection
              amenitiesSummary={LISTING_DATA.amenitiesSummary}
              fullAmenities={LISTING_DATA.fullAmenities}
            />

            {/* Interactive Calendar Section */}
            <CalendarSection
              startDate={startDate}
              endDate={endDate}
              onDateChange={handleDateChange}
              location="Candolim"
            />
          </div>

          {/* Right Column: Sticky Booking Card & Promo */}
          <StickyBookingCard
            pricePerNight={LISTING_DATA.pricePerNight}
            startDate={startDate}
            endDate={endDate}
            onDateBoxClick={handleDateBoxClick}
          />
        </div>

        {/* Full-width Sections below fold */}
        {/* Reviews Section */}
        <ReviewsSection reviewsData={REVIEWS_DATA} />

        {/* Location Section */}
        <LocationSection />

        {/* Meet Your Host Section */}
        <HostSection host={LISTING_DATA.host} />

        {/* Things to Know */}
        <ThingsToKnow thingsToKnow={LISTING_DATA.thingsToKnow} />

        {/* More Stays Nearby Carousel */}
        <NearbyStays stays={NEARBY_STAYS} />
      </div>

      {/* Global Footer */}
      <Footer />

      {/* VIEW 2: Photo Tour Fullscreen View */}
      <PhotoTour
        isOpen={currentView === "photos"}
        onClose={closePhotoTour}
        onOpenLightbox={openLightbox}
      />

      {/* VIEW 3: Lightbox View */}
      <Lightbox
        isOpen={currentView === "lightbox"}
        currentPhotoIndex={activePhotoIndex}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
        onReturnToGrid={() => {
          setCurrentView("photos");
          updateUrl("photos");
        }}
      />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ListingApp />
    </Suspense>
  );
}
