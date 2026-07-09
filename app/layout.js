import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://cherry-resto-cafe.example"),
  title: {
    default: "Cherry Resto Cafe — Restaurant, Café & Pâtisserie à Conakry",
    template: "%s | Cherry Resto Cafe"
  },
  description:
    "Cherry Resto Cafe : burgers, shawarma, pâtisseries artisanales et lounge bar. Deux adresses à Camayenne et Nongo, Conakry. Ouvert 7j/7.",
  keywords: [
    "restaurant Conakry",
    "café Conakry",
    "Cherry Resto",
    "pâtisserie Conakry",
    "lounge Nongo"
  ],
  openGraph: {
    title: "Cherry Resto Cafe · Conakry",
    description: "L'adresse incontournable de Conakry",
    locale: "fr_GN",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Cherry Resto Cafe",
    servesCuisine: ["Burgers", "Shawarma", "Pâtisserie", "Café", "Cuisine internationale"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Conakry",
      addressCountry: "GN"
    },
    telephone: "+224 621 00 00 67",
    priceRange: "$$",
    url: "https://cherry-resto-cafe.example"
  };

  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
