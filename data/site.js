export const site = {
  name: "Cherry Resto Cafe",
  shortName: "Cherry",
  city: "Conakry, Guinée",
  tagline: "Restaurant · Café · Pâtisserie · Lounge Bar",
  description:
    "Burgers, shawarma, pâtisseries artisanales et lounge bar. Deux adresses — Camayenne & Nongo.",
  rating: "4.2/5",
  ranking: "#11 sur 133 restaurants à Conakry",
  social: {
    facebook: "https://www.facebook.com/cherryrestocafe/",
    instagram: "https://www.instagram.com/cherry_resto_cafe/"
  }
};

export const locations = [
  {
    id: "camayenne",
    accent: "cherry",
    name: "Camayenne",
    shortAddress: "Corniche Nord, Camayenne",
    address:
      "Corniche Nord, quartier Camayenne, à 50m de la Clinique Ambroise, Conakry",
    phones: ["+224 621 00 00 67", "+224 666 33 33 63"],
    whatsapp: "https://wa.me/224621000067",
    hours: "Lun–Sam 8h–00h · Dim 9h–00h",
    schedule: [
      { days: "Lundi – Samedi", hours: "8h00 – 00h00" },
      { days: "Dimanche", hours: "9h00 – 00h00" }
    ],
    mapsUrl: "https://maps.google.com/?cid=14694310392031626370",
    mapEmbed:
      "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!3m2!1m1!4s14694310392031626370"
  },
  {
    id: "nongo",
    accent: "or",
    name: "Nongo Tady",
    shortAddress: "KPC Complexe, Nongo Tady",
    address: "KPC Complexe, quartier Nongo Tady, Conakry",
    phones: ["+224 623 55 55 45", "+224 666 00 00 01"],
    whatsapp: "https://wa.me/224623555545",
    hours: "Lun–Sam 8h–00h · Dim 9h–00h",
    schedule: [
      { days: "Lundi – Samedi", hours: "8h00 – 00h00" },
      { days: "Dimanche", hours: "9h00 – 00h00" }
    ],
    mapsUrl: "https://maps.google.com/?cid=12418213501056542575",
    mapEmbed:
      "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!3m2!1m1!4s12418213501056542575"
  }
];

export const reviews = [
  {
    stars: 5,
    quote:
      "Meilleur burger et poulet frit de la ville. Endroit cosy, très propre, super ambiance.",
    author: "Mohannad Hassan",
    date: "Novembre 2020",
    source: "TripAdvisor"
  },
  {
    stars: 5,
    quote:
      "Idéal pour le petit-déjeuner : bon goût, service agréable, lieu calme et propre. On peut même payer par carte.",
    author: "Visiteur",
    date: "Mai 2026",
    source: "TripAdvisor"
  },
  {
    stars: 4,
    quote:
      "Bon plan pour déjeuner en famille. Menu varié, plats généreux, prix raisonnables. Les desserts étaient excellents, les enfants ont adoré.",
    author: "Cameleo",
    date: "Août 2025",
    source: "TripAdvisor"
  }
];
