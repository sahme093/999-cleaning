// ===== Fill in each cleaner's details here =====
export const BIZ = {
  name: "999 Cleaning",
  logo: "/logo.png",
  area: "Inland Empire & North County San Diego",
  tagline: "A spotless home, seven days a week.",
  intro: "999 Cleaning cleans homes and offices across Riverside County and nearby. We're available every day from 7am to 9pm, so it's easy to find a time that works for you.",
  phone: "(951) 614-9439",
  phoneRaw: "9516149439",
  email: "[you@email.com]",
  hours: "Every day, 7am–9pm",
  responseTime: "We'll call or text you to confirm the details.",
  towns: [
    "Canyon Lake", "Lake Elsinore", "Menifee", "Claremont", "Winchester", "Beaumont", "Cabazon",
    "Calimesa", "Cathedral City", "Cherry Valley", "Coachella", "Hemet", "Murrieta", "Perris",
    "Riverside", "Temecula", "Fallbrook", "Rancho Cucamonga", "Escondido",
  ],
  // ZIP codes you serve, used by the ZIP checker
  zips: [
    "92587", // Canyon Lake
    "92530", "92532", // Lake Elsinore
    "92584", "92585", "92586", // Menifee
    "91711", // Claremont
    "92596", // Winchester
    "92223", // Beaumont, Cherry Valley
    "92230", // Cabazon
    "92320", // Calimesa
    "92234", "92235", // Cathedral City
    "92236", // Coachella
    "92543", "92544", "92545", "92546", // Hemet
    "92562", "92563", "92564", // Murrieta
    "92570", "92571", "92572", "92599", // Perris
    "92501", "92502", "92503", "92504", "92505", "92506", "92507", "92508", "92509",
    "92513", "92514", "92515", "92516", "92517", "92518", "92519", "92521", "92522", // Riverside
    "92589", "92590", "92591", "92592", "92593", // Temecula
    "92028", "92088", // Fallbrook
    "91701", "91729", "91730", "91737", "91739", // Rancho Cucamonga
    "92025", "92026", "92027", "92029", "92030", "92033", "92046", // Escondido
  ],
  rating: "", // e.g. "5.0", shown next to the stars when set
  reviewCount: "",
  googleUrl: "", // link to the Google Business profile
  services: [
    { name: "Standard cleaning", short: "Regular upkeep for your home" },
    { name: "Deep clean", short: "First visit or full reset" },
    { name: "Move-in / move-out cleaning", short: "Empty home, ready for keys" },
    { name: "Office & workplace cleaning", short: "Offices and shared workspaces" },
    { name: "General housekeeping", short: "Tidying, laundry, and day-to-day upkeep" },
    { name: "Window cleaning", short: "Interior and exterior windows" },
  ],
  // Only add real Google reviews, with the client's permission.
  reviews: [
    { name: "Piyali K.", when: "2024", text: "Unbelievable service. Arrived on time, no surprises. Highly recommended. My home is cleaner than it's ever been." },
    { name: "David G.", when: "2024", text: "I had called this cleaning company as I was in major need of help cleaning my home, I am very happy I did. Derek was awesome and made sure I was happy, my home looks brand new! Thank you" },
    { name: "Anh V.", when: "2024", text: "They did a great job for my house. Highly recommend." },
    { name: "Thuhien N.", when: "2024", text: "Very good job. 5 stars, highly recommended." },
  ],
  beforeAfterCaption: "[Room, town]",
  // Photos: put files in /public and set paths like "/hero.jpg". Leave empty to show a placeholder.
  photos: {
    hero: "/living-room.jpg",
    before: "",
    after: "",
  },
  // Photo gallery for the "Our work" section. Use this for photos that already show before and after side by side.
  gallery: [
    { src: "/shower-before-after.jpg", alt: "Shower stall before and after cleaning", caption: "Shower, before & after" },
    { src: "/fridge-before-after.jpg", alt: "Refrigerator interior before and after cleaning", caption: "Refrigerator, before & after" },
    { src: "/microwave.jpg", alt: "Spotless microwave interior", caption: "Kitchen appliances" },
  ],
  // Trust badges: set to false to hide one.
  badges: {
    insured: false,
    bonded: false,
    backgroundChecked: false,
  },
  // Sections: set to false to hide.
  showReviews: true,
  showBeforeAfter: true,
};
