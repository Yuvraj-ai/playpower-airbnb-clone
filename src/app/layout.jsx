import "./globals.css";

export const metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Serviced apartments for Rent in Candolim, Goa, India - Airbnb",
  description:
    "Entire serviced apartment in Candolim, India. 3 guests · 1 bedroom · 1 bed · 1 bath. Jacuzzi, pool, high-speed WiFi, gym, and tropical patio. Rated 4.95 with 19 reviews.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-ink-primary font-cereal antialiased selection:bg-rose-100 selection:text-airbnb-dark">
        {children}
      </body>
    </html>
  );
}
