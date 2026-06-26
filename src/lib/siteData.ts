export const SITE = {
  name: "Astra Titan Arabia Marine Services",
  shortName: "Astra Titan Arabia",
  domain: "https://www.atamarinesa.com",
  email: "sales@atamarinesa.com",
  phone: "+966510549892",
  whatsapp: "https://wa.me/966510549892",
  address: "King Abdulaziz St, Al-Mousa Complex, Saudi Arabia",
  hours: "Sat - Thu, 7:00 AM - 6:00 PM",
  founded: "2019",
  description:
    "Astra Titan Arabia is a Saudi Arabia-based marine and industrial supply company providing ship spares, marine equipment, PPE & safety gear, provisions, medical supplies, chemicals & lubricants, and vessel inspection services across the Eastern Province.",
  tagline: "Reliable Marine & Industrial Supply Across Saudi Arabia",
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  highlights: string[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "safety-firefighting-equipment",
    title: "Safety & Firefighting Equipment",
    shortDescription:
      "PPE, firefighting gear, and safety equipment for vessels and crew.",
    description:
      "We supply a complete range of Personal Protective Equipment (PPE) and firefighting equipment to keep your crew and vessels safe and compliant with marine safety regulations. From everyday protective gear to critical firefighting tools, we ensure fast sourcing and delivery across Saudi ports.",
    image: "/images/services/safetyfire.jpg",
    highlights: [
      "Safety helmets, gloves, and high-visibility clothing",
      "Safety glasses and hearing protection",
      "Fire extinguishers and firefighting equipment",
      "SOLAS-compliant safety gear",
    ],
    keywords: [
      "marine PPE Saudi Arabia",
      "firefighting equipment supplier",
      "ship safety gear",
    ],
  },
  {
    slug: "marine-equipment",
    title: "Marine Equipment",
    shortDescription:
      "Navigation, safety, deck, and power equipment for vessels of all types.",
    description:
      "We provide a wide range of marine equipment covering navigation, safety, deck, and power systems. Whether you need to replace critical onboard systems or upgrade vessel capability, our procurement team sources quality equipment from trusted manufacturers and delivers it to your vessel or port location.",
    image: "/images/services/marineequipment.jpg",
    highlights: [
      "Navigation & Safety: GPS, Radar, AIS, life jackets, life rafts",
      "Deck & Power: anchors, winches, batteries, motors",
      "Communication and electronic systems",
      "Spare parts sourcing for major equipment brands",
    ],
    keywords: [
      "marine equipment supplier Saudi Arabia",
      "ship spares Dammam",
      "vessel deck equipment",
    ],
  },
  {
    slug: "ship-provisions",
    title: "Ship Provisions",
    shortDescription:
      "Bulk food, fresh produce, and dry stores delivered 24/7.",
    description:
      "Our ship provisioning service ensures your vessel and crew are well-stocked with bulk food, fresh produce, and dry stores. We coordinate fast, reliable delivery to your vessel around the clock, minimizing turnaround time at port and keeping your crew well supplied for every voyage.",
    image: "/images/services/provision.jpg",
    highlights: [
      "Fresh produce and frozen goods",
      "Bulk dry stores and pantry essentials",
      "24/7 delivery coordination to vessel",
      "Customized provisioning lists per crew requirements",
    ],
    keywords: [
      "ship chandler Saudi Arabia",
      "vessel provisions supplier",
      "ship supply Dammam",
    ],
  },
  {
    slug: "medical-supplies",
    title: "Medical Supplies",
    shortDescription:
      "WHO-standard first aid kits and medical supplies for vessels and offshore crews.",
    description:
      "We supply essential medical equipment and WHO-standard first aid kits designed for vessels and offshore operations. Our medical supply packages help ensure your crew is prepared for emergencies and routine medical needs while at sea or offshore.",
    image: "/images/services/medicalsupplies.jpg",
    highlights: [
      "WHO-standard first aid kits",
      "Medical consumables and PPE",
      "Offshore crew medical packages",
      "Restocking and replenishment service",
    ],
    keywords: [
      "marine first aid kits Saudi Arabia",
      "offshore medical supplies",
      "vessel medical kit supplier",
    ],
  },
  {
    slug: "chemicals-lubricants",
    title: "Chemicals & Lubricants",
    shortDescription:
      "Industrial cleaners, water treatment chemicals, and marine engine lubricants.",
    description:
      "We supply industrial cleaning chemicals, water treatment products, and specialized marine lubricants formulated for marine engines and onboard systems. Our team sources from established manufacturers to ensure compatibility with your equipment and compliance with operational standards.",
    image: "/images/services/oil&chemical.jpg",
    highlights: [
      "Marine engine oils and lubricants",
      "Industrial cleaning chemicals",
      "Water treatment chemicals",
      "Bulk and drum supply options",
    ],
    keywords: [
      "marine lubricants supplier Saudi Arabia",
      "industrial chemicals Dammam",
      "ship engine oil supplier",
    ],
  },
  {
    slug: "inspection-services",
    title: "Inspection Services",
    shortDescription:
      "Hull, engine, and safety inspections with full certification and reporting.",
    description:
      "Our inspection services cover comprehensive hull, engine, and safety assessments for all vessel types. We provide detailed reporting and full certification support, helping you stay compliant with regulatory requirements and maintain vessel safety standards.",
    image: "/images/services/inspection.jpg",
    highlights: [
      "Hull condition surveys",
      "Engine and machinery inspections",
      "Safety equipment audits",
      "Certification and detailed reporting",
    ],
    keywords: [
      "ship inspection services Saudi Arabia",
      "vessel survey Dammam",
      "marine certification support",
    ],
  },
];



export type Port = {
  slug: string;
  name: string;
  location: string;
  description: string;
  image: string;
  services: string[];
  highlights: string[];
};

export const ports: Port[] = [
  {
    slug: "king-abdulaziz-port",
    name: "King Abdulaziz Port",
    location: "Dammam, Saudi Arabia",
    description:
      "One of the largest and busiest ports in the Arabian Gulf, serving commercial, industrial, and offshore vessels.",
    image: "/images/ports/dammamport.jpg",
    services: [
      "Ship Chandling",
      "Marine Equipment Supply",
      "Safety Equipment Delivery",
      "Technical Procurement",
    ],
    highlights: [
      "24/7 Vessel Support",
      "Major Gulf Trade Hub",
      "Container & Bulk Cargo Operations",
      "Fast Delivery to Anchorage",
    ],
  },

  {
    slug: "jubail-commercial-port",
    name: "Jubail Commercial Port",
    location: "Jubail, Saudi Arabia",
    description:
      "Strategically located to support industrial and petrochemical operations within Jubail Industrial City.",
    image: "/images/ports/jubailport.jpg",
    services: [
      "Industrial Supplies",
      "Offshore Support",
      "PPE & Safety Equipment",
      "Ship Provisions",
    ],
    highlights: [
      "Industrial City Access",
      "Offshore Project Support",
      "Petrochemical Hub",
      "Rapid Procurement Services",
    ],
  },

  {
  slug: "king-fahd-industrial-port",
  name: "King Fahd Industrial Port",
  location: "Jubail, Saudi Arabia",
  description:
    "One of the world's largest industrial ports, supporting petrochemical, oil, gas, and bulk cargo operations in the Arabian Gulf.",
  image: "/images/ports/jubailindustryport.jpg",
  services: [
    "Ship Chandling",
    "Marine Equipment Supply",
    "Safety Equipment Delivery",
    "Industrial Procurement",
  ],
  highlights: [
    "One of the Largest Industrial Ports Globally",
    "Petrochemical & Oil Industry Hub",
    "24/7 Vessel Support",
    "Bulk, Tanker & Offshore Vessel Operations",
  ],
},

  {
    slug: "Ras-Tanura-Aramco - Ras-Tanura",
    name: "Ras Tanura Aramco - Ras Tanura",
    location: "Jubail, Saudi Arabia",
    description:
      "A major industrial port handling petrochemical exports and large-scale industrial cargo.",
    image: "/images/ports/rastanuraport.jpg",
    services: [
      "Marine Chemicals",
      "Lubricants Supply",
      "Technical Equipment",
      "Inspection Services",
    ],
    highlights: [
      "Largest Industrial Port",
      "Bulk Cargo Operations",
      "Petrochemical Exports",
      "Industrial Marine Support",
    ],
  },

  {
  slug: "ras-al-khair-port",
  name: "Ras Al-Khair Port",
  location: "Ras Al-Khair, Saudi Arabia",
  description:
    "A strategic industrial and mining port on the Arabian Gulf, supporting mining exports, industrial projects, offshore operations, and vessel services in the Ras Al-Khair Industrial City.",
  image: "/images/ports/rasalkhairport.jpg",
  services: [
    "Ship Chandling",
    "Marine Equipment Supply",
    "Safety Equipment Delivery",
    "Technical Procurement",
  ],
  highlights: [
    "Major Mining & Industrial Port",
    "Supports Ma'aden Industrial Operations",
    "Offshore & Project Cargo Handling",
    "24/7 Vessel Supply Support",
  ],
},

];

export type Client = {
  name: string;
  logo: string;
};

export const clients: Client[] = [
  { name: "zamil Offshore", logo: "/images/clients/zamil.png" },
  { name: "Rawabi Vallianz Offshore Services", logo: "/images/clients/rawabi.jpg" },
  { name: "GAC", logo: "/images/clients/gac.png" },
  { name: "Seacor Marine", logo: "/images/clients/seacor.webp" },
  { name: "zaki", logo: "/images/clients/zaki.png" },
  { name: "Astro", logo: "/images/clients/astro.jpg" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Ports We Serve", href: "/ports-we-serve" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];
