// Central photo registry with deterministic global ordering (1 to 43)

export const PHOTO_CATEGORIES = [
  {
    "id": "living-room-1",
    "title": "Living room 1",
    "features": [
      "Sofa",
      "Air conditioning",
      "Ceiling fan",
      "TV"
    ],
    "photos": [
      {
        "file": "a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg",
        "alt": "Living room with orange sofa, wooden cabinet, and dining table",
        "layout": "full"
      },
      {
        "file": "79addceb-8c2d-419b-80ff-e29af426a94c.jpeg",
        "alt": "Living room view with TV and dining area",
        "layout": "half"
      },
      {
        "file": "f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg",
        "alt": "Living room seating and dining perspective",
        "layout": "half"
      }
    ],
    "startIndex": 1
  },
  {
    "id": "living-room-2",
    "title": "Living room 2",
    "features": [
      "Ceiling fan",
      "Hot tub"
    ],
    "photos": [
      {
        "file": "090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg",
        "alt": "Outdoor lounge patio with wicker sofa set and jacuzzi",
        "layout": "full"
      },
      {
        "file": "9be71047-fc52-438a-9270-75cb470f6752.jpeg",
        "alt": "Private wooden-clad hot tub jacuzzi",
        "layout": "half"
      },
      {
        "file": "f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg",
        "alt": "Patio courtyard architectural perspective",
        "layout": "half"
      },
      {
        "file": "2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg",
        "alt": "Spacious jacuzzi lounge patio with ambient lighting",
        "layout": "full"
      },
      {
        "file": "34529829-a971-44d3-ac2f-90ea3678a34d.jpeg",
        "alt": "Patio entryway with kitchen connection",
        "layout": "half"
      },
      {
        "file": "153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg",
        "alt": "Courtyard seating area under open atrium",
        "layout": "half"
      }
    ],
    "startIndex": 4
  },
  {
    "id": "full-kitchen",
    "title": "Full kitchen",
    "features": [
      "Freezer",
      "Fridge",
      "Blender",
      "Cooker",
      "Cooking basics",
      "Kettle",
      "Microwave",
      "Toaster",
      "Wine glasses",
      "Coffee",
      "Crockery and cutlery"
    ],
    "photos": [
      {
        "file": "56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg",
        "alt": "Modern kitchen cabinets with microwave, fridge and countertop stove",
        "layout": "half"
      },
      {
        "file": "ddc853d7-e658-405c-bedc-8f31106c447e.jpeg",
        "alt": "Kitchen view opening to dining area",
        "layout": "half"
      }
    ],
    "startIndex": 10
  },
  {
    "id": "bedroom",
    "title": "Bedroom",
    "features": [
      "Double bed",
      "Air conditioning",
      "Bed linen",
      "Ceiling fan",
      "Clothes storage",
      "Cot",
      "Hangers",
      "Iron",
      "Room-darkening blinds",
      "Cleaning available during stay",
      "Cleaning products",
      "Long-term stays allowed",
      "Private entrance",
      "Wifi"
    ],
    "photos": [
      {
        "file": "67c61c6f-6260-4809-9510-0360e58a345d.jpeg",
        "alt": "Bedroom with double bed, hardwood flooring and window curtains",
        "layout": "full"
      },
      {
        "file": "1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg",
        "alt": "Bedroom doorway leading to patio",
        "layout": "half"
      },
      {
        "file": "0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg",
        "alt": "Cozy bedroom lighting and bedside pendant lamps",
        "layout": "half"
      },
      {
        "file": "3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg",
        "alt": "Full bedroom angle with wardrobe and mirror",
        "layout": "full"
      },
      {
        "file": "3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg",
        "alt": "Bedroom nightstand with reading lamp",
        "layout": "half"
      },
      {
        "file": "48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg",
        "alt": "Bedroom wardrobe storage space",
        "layout": "half"
      },
      {
        "file": "862d936c-0f34-4e50-af87-b519e2781d19.jpeg",
        "alt": "Bedroom interior decor and mirror view",
        "layout": "full"
      },
      {
        "file": "a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg",
        "alt": "Bedroom with air conditioning and bed linens",
        "layout": "half"
      },
      {
        "file": "c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg",
        "alt": "Bedroom window view and natural light",
        "layout": "half"
      }
    ],
    "startIndex": 12
  },
  {
    "id": "full-bathroom",
    "title": "Full bathroom",
    "features": [
      "Hairdryer",
      "Hot water",
      "Shampoo",
      "Shower gel"
    ],
    "photos": [
      {
        "file": "97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg",
        "alt": "Modern bathroom with glass shower cubicle, contemporary mirror and vanity",
        "layout": "full"
      }
    ],
    "startIndex": 21
  },
  {
    "id": "gym",
    "title": "Gym",
    "features": [
      "Air conditioning",
      "Gym",
      "Exercise equipment",
      "Ceiling fan"
    ],
    "photos": [
      {
        "file": "246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg",
        "alt": "Gym multi-gym weight training station and exercise ball",
        "layout": "full"
      },
      {
        "file": "9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg",
        "alt": "Well-equipped gym with treadmills, stationary bike, and free weights",
        "layout": "half"
      },
      {
        "file": "4fede77d-7a71-446f-89e3-263af937f3fa.jpeg",
        "alt": "Spacious fitness center with wooden flooring",
        "layout": "half"
      },
      {
        "file": "79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg",
        "alt": "Gym equipment and treadmill workout area",
        "layout": "half"
      },
      {
        "file": "f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg",
        "alt": "Gym training space and workout mats",
        "layout": "half"
      }
    ],
    "startIndex": 22
  },
  {
    "id": "exterior",
    "title": "Exterior",
    "features": [],
    "photos": [
      {
        "file": "23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg",
        "alt": "Aerial view of Amor De Goa residential complex and surroundings",
        "layout": "full"
      },
      {
        "file": "5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg",
        "alt": "Scenic Candolim landscape with lush greenery",
        "layout": "half"
      },
      {
        "file": "608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg",
        "alt": "Amor De Goa building facade and entrance street",
        "layout": "half"
      },
      {
        "file": "5b856fde-a393-41bf-b373-c9d02e64221f.jpeg",
        "alt": "Amor De Goa multi-story architectural view",
        "layout": "full"
      },
      {
        "file": "a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg",
        "alt": "Street view of building entrance and perimeter security",
        "layout": "half"
      },
      {
        "file": "42befad7-fb29-473d-91db-b03e7a544d1d.jpeg",
        "alt": "Aerial perspective of property and neighborhood",
        "layout": "half"
      }
    ],
    "startIndex": 27
  },
  {
    "id": "pool",
    "title": "Pool",
    "features": [
      "Pool"
    ],
    "photos": [
      {
        "file": "8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg",
        "alt": "Central swimming pool in courtyard surrounded by residential wings",
        "layout": "full"
      },
      {
        "file": "929545d3-e241-46c0-8a70-c24531ce7b54.jpeg",
        "alt": "Swimming pool crystal blue water and wooden pool deck",
        "layout": "half"
      },
      {
        "file": "fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg",
        "alt": "Courtyard swimming pool viewed from upper angle",
        "layout": "half"
      }
    ],
    "startIndex": 33
  },
  {
    "id": "additional-photos",
    "title": "Additional photos",
    "features": [],
    "photos": [
      {
        "file": "70325367-cbae-4993-b560-18cd3f6edd53.jpeg",
        "alt": "Jacuzzi lounge seating with evening wall spotlights",
        "layout": "full"
      },
      {
        "file": "cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg",
        "alt": "Atrium courtyard with sunken jacuzzi and skylight",
        "layout": "half"
      },
      {
        "file": "30ad93b2-293f-494d-b645-626303c6cb93.jpeg",
        "alt": "Jacuzzi wooden deck and comfortable lounge chairs",
        "layout": "half"
      },
      {
        "file": "9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg",
        "alt": "Outdoor kitchenette with washing machine and wall art",
        "layout": "full"
      },
      {
        "file": "b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg",
        "alt": "Courtyard seating area with jacuzzi lounge atmosphere",
        "layout": "half"
      },
      {
        "file": "dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg",
        "alt": "Dining table in open courtyard setting",
        "layout": "half"
      },
      {
        "file": "fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg",
        "alt": "Washing machine and outdoor counter with Mona Lisa art",
        "layout": "full"
      },
      {
        "file": "3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg",
        "alt": "Living room entertainment center and cozy lighting",
        "layout": "full"
      }
    ],
    "startIndex": 36
  }
];

export const ALL_PHOTOS = [
  {
    "id": "photo-01",
    "src": "/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg",
    "category": "living-room-1",
    "categoryTitle": "Living room 1",
    "index": 1,
    "alt": "Living room with orange sofa, wooden cabinet, and dining table",
    "layout": "full"
  },
  {
    "id": "photo-02",
    "src": "/images/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg",
    "category": "living-room-1",
    "categoryTitle": "Living room 1",
    "index": 2,
    "alt": "Living room view with TV and dining area",
    "layout": "half"
  },
  {
    "id": "photo-03",
    "src": "/images/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg",
    "category": "living-room-1",
    "categoryTitle": "Living room 1",
    "index": 3,
    "alt": "Living room seating and dining perspective",
    "layout": "half"
  },
  {
    "id": "photo-04",
    "src": "/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg",
    "category": "living-room-2",
    "categoryTitle": "Living room 2",
    "index": 4,
    "alt": "Outdoor lounge patio with wicker sofa set and jacuzzi",
    "layout": "full"
  },
  {
    "id": "photo-05",
    "src": "/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg",
    "category": "living-room-2",
    "categoryTitle": "Living room 2",
    "index": 5,
    "alt": "Private wooden-clad hot tub jacuzzi",
    "layout": "half"
  },
  {
    "id": "photo-06",
    "src": "/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg",
    "category": "living-room-2",
    "categoryTitle": "Living room 2",
    "index": 6,
    "alt": "Patio courtyard architectural perspective",
    "layout": "half"
  },
  {
    "id": "photo-07",
    "src": "/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg",
    "category": "living-room-2",
    "categoryTitle": "Living room 2",
    "index": 7,
    "alt": "Spacious jacuzzi lounge patio with ambient lighting",
    "layout": "full"
  },
  {
    "id": "photo-08",
    "src": "/images/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg",
    "category": "living-room-2",
    "categoryTitle": "Living room 2",
    "index": 8,
    "alt": "Patio entryway with kitchen connection",
    "layout": "half"
  },
  {
    "id": "photo-09",
    "src": "/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg",
    "category": "living-room-2",
    "categoryTitle": "Living room 2",
    "index": 9,
    "alt": "Courtyard seating area under open atrium",
    "layout": "half"
  },
  {
    "id": "photo-10",
    "src": "/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg",
    "category": "full-kitchen",
    "categoryTitle": "Full kitchen",
    "index": 10,
    "alt": "Modern kitchen cabinets with microwave, fridge and countertop stove",
    "layout": "half"
  },
  {
    "id": "photo-11",
    "src": "/images/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg",
    "category": "full-kitchen",
    "categoryTitle": "Full kitchen",
    "index": 11,
    "alt": "Kitchen view opening to dining area",
    "layout": "half"
  },
  {
    "id": "photo-12",
    "src": "/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg",
    "category": "bedroom",
    "categoryTitle": "Bedroom",
    "index": 12,
    "alt": "Bedroom with double bed, hardwood flooring and window curtains",
    "layout": "full"
  },
  {
    "id": "photo-13",
    "src": "/images/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg",
    "category": "bedroom",
    "categoryTitle": "Bedroom",
    "index": 13,
    "alt": "Bedroom doorway leading to patio",
    "layout": "half"
  },
  {
    "id": "photo-14",
    "src": "/images/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg",
    "category": "bedroom",
    "categoryTitle": "Bedroom",
    "index": 14,
    "alt": "Cozy bedroom lighting and bedside pendant lamps",
    "layout": "half"
  },
  {
    "id": "photo-15",
    "src": "/images/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg",
    "category": "bedroom",
    "categoryTitle": "Bedroom",
    "index": 15,
    "alt": "Full bedroom angle with wardrobe and mirror",
    "layout": "full"
  },
  {
    "id": "photo-16",
    "src": "/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg",
    "category": "bedroom",
    "categoryTitle": "Bedroom",
    "index": 16,
    "alt": "Bedroom nightstand with reading lamp",
    "layout": "half"
  },
  {
    "id": "photo-17",
    "src": "/images/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg",
    "category": "bedroom",
    "categoryTitle": "Bedroom",
    "index": 17,
    "alt": "Bedroom wardrobe storage space",
    "layout": "half"
  },
  {
    "id": "photo-18",
    "src": "/images/862d936c-0f34-4e50-af87-b519e2781d19.jpeg",
    "category": "bedroom",
    "categoryTitle": "Bedroom",
    "index": 18,
    "alt": "Bedroom interior decor and mirror view",
    "layout": "full"
  },
  {
    "id": "photo-19",
    "src": "/images/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg",
    "category": "bedroom",
    "categoryTitle": "Bedroom",
    "index": 19,
    "alt": "Bedroom with air conditioning and bed linens",
    "layout": "half"
  },
  {
    "id": "photo-20",
    "src": "/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg",
    "category": "bedroom",
    "categoryTitle": "Bedroom",
    "index": 20,
    "alt": "Bedroom window view and natural light",
    "layout": "half"
  },
  {
    "id": "photo-21",
    "src": "/images/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg",
    "category": "full-bathroom",
    "categoryTitle": "Full bathroom",
    "index": 21,
    "alt": "Modern bathroom with glass shower cubicle, contemporary mirror and vanity",
    "layout": "full"
  },
  {
    "id": "photo-22",
    "src": "/images/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg",
    "category": "gym",
    "categoryTitle": "Gym",
    "index": 22,
    "alt": "Gym multi-gym weight training station and exercise ball",
    "layout": "full"
  },
  {
    "id": "photo-23",
    "src": "/images/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg",
    "category": "gym",
    "categoryTitle": "Gym",
    "index": 23,
    "alt": "Well-equipped gym with treadmills, stationary bike, and free weights",
    "layout": "half"
  },
  {
    "id": "photo-24",
    "src": "/images/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg",
    "category": "gym",
    "categoryTitle": "Gym",
    "index": 24,
    "alt": "Spacious fitness center with wooden flooring",
    "layout": "half"
  },
  {
    "id": "photo-25",
    "src": "/images/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg",
    "category": "gym",
    "categoryTitle": "Gym",
    "index": 25,
    "alt": "Gym equipment and treadmill workout area",
    "layout": "half"
  },
  {
    "id": "photo-26",
    "src": "/images/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg",
    "category": "gym",
    "categoryTitle": "Gym",
    "index": 26,
    "alt": "Gym training space and workout mats",
    "layout": "half"
  },
  {
    "id": "photo-27",
    "src": "/images/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg",
    "category": "exterior",
    "categoryTitle": "Exterior",
    "index": 27,
    "alt": "Aerial view of Amor De Goa residential complex and surroundings",
    "layout": "full"
  },
  {
    "id": "photo-28",
    "src": "/images/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg",
    "category": "exterior",
    "categoryTitle": "Exterior",
    "index": 28,
    "alt": "Scenic Candolim landscape with lush greenery",
    "layout": "half"
  },
  {
    "id": "photo-29",
    "src": "/images/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg",
    "category": "exterior",
    "categoryTitle": "Exterior",
    "index": 29,
    "alt": "Amor De Goa building facade and entrance street",
    "layout": "half"
  },
  {
    "id": "photo-30",
    "src": "/images/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg",
    "category": "exterior",
    "categoryTitle": "Exterior",
    "index": 30,
    "alt": "Amor De Goa multi-story architectural view",
    "layout": "full"
  },
  {
    "id": "photo-31",
    "src": "/images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg",
    "category": "exterior",
    "categoryTitle": "Exterior",
    "index": 31,
    "alt": "Street view of building entrance and perimeter security",
    "layout": "half"
  },
  {
    "id": "photo-32",
    "src": "/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg",
    "category": "exterior",
    "categoryTitle": "Exterior",
    "index": 32,
    "alt": "Aerial perspective of property and neighborhood",
    "layout": "half"
  },
  {
    "id": "photo-33",
    "src": "/images/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg",
    "category": "pool",
    "categoryTitle": "Pool",
    "index": 33,
    "alt": "Central swimming pool in courtyard surrounded by residential wings",
    "layout": "full"
  },
  {
    "id": "photo-34",
    "src": "/images/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg",
    "category": "pool",
    "categoryTitle": "Pool",
    "index": 34,
    "alt": "Swimming pool crystal blue water and wooden pool deck",
    "layout": "half"
  },
  {
    "id": "photo-35",
    "src": "/images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg",
    "category": "pool",
    "categoryTitle": "Pool",
    "index": 35,
    "alt": "Courtyard swimming pool viewed from upper angle",
    "layout": "half"
  },
  {
    "id": "photo-36",
    "src": "/images/70325367-cbae-4993-b560-18cd3f6edd53.jpeg",
    "category": "additional-photos",
    "categoryTitle": "Additional photos",
    "index": 36,
    "alt": "Jacuzzi lounge seating with evening wall spotlights",
    "layout": "full"
  },
  {
    "id": "photo-37",
    "src": "/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg",
    "category": "additional-photos",
    "categoryTitle": "Additional photos",
    "index": 37,
    "alt": "Atrium courtyard with sunken jacuzzi and skylight",
    "layout": "half"
  },
  {
    "id": "photo-38",
    "src": "/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg",
    "category": "additional-photos",
    "categoryTitle": "Additional photos",
    "index": 38,
    "alt": "Jacuzzi wooden deck and comfortable lounge chairs",
    "layout": "half"
  },
  {
    "id": "photo-39",
    "src": "/images/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg",
    "category": "additional-photos",
    "categoryTitle": "Additional photos",
    "index": 39,
    "alt": "Outdoor kitchenette with washing machine and wall art",
    "layout": "full"
  },
  {
    "id": "photo-40",
    "src": "/images/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg",
    "category": "additional-photos",
    "categoryTitle": "Additional photos",
    "index": 40,
    "alt": "Courtyard seating area with jacuzzi lounge atmosphere",
    "layout": "half"
  },
  {
    "id": "photo-41",
    "src": "/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg",
    "category": "additional-photos",
    "categoryTitle": "Additional photos",
    "index": 41,
    "alt": "Dining table in open courtyard setting",
    "layout": "half"
  },
  {
    "id": "photo-42",
    "src": "/images/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg",
    "category": "additional-photos",
    "categoryTitle": "Additional photos",
    "index": 42,
    "alt": "Washing machine and outdoor counter with Mona Lisa art",
    "layout": "full"
  },
  {
    "id": "photo-43",
    "src": "/images/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg",
    "category": "additional-photos",
    "categoryTitle": "Additional photos",
    "index": 43,
    "alt": "Living room entertainment center and cozy lighting",
    "layout": "full"
  }
];

export function getPhotoByIndex(index) {
  return ALL_PHOTOS.find((p) => p.index === index) || ALL_PHOTOS[0];
}

export function getCategoryById(categoryId) {
  return PHOTO_CATEGORIES.find((c) => c.id === categoryId);
}
