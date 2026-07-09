import Link from "next/link";
import { Phone } from "lucide-react";
import { site, locations } from "@/data/site";

const navLinks = [
  ["Accueil", "/"],
  ["Menu", "/menu"],
  ["Nos Adresses", "/adresses"],
  ["Lounge", "/lounge"],
  ["Contact", "/contact"]
];

const orderLinks = [
  ["Livraison à domicile", "/contact"],
  ["Click & Collect", "/contact"],
  ["Réserver une table", "/contact"],
  ["WhatsApp", locations[0].whatsapp]
];

export function Footer() {
  const mainPhone = locations[0].phones[0];

  return (
    <footer className="relative bg-dark border-t border-cacao/50 px-6 md:px-12 lg:px-24 py-14 overflow-hidden">
      {/* Watermark éditorial */}
      <span
        className="text-outline pointer-events-none select-none absolute -bottom-8 left-1/2 -translate-x-1/2 font-display italic text-[clamp(5rem,18vw,15rem)] leading-none whitespace-nowrap"
        aria-hidden="true"
      >
        Cherry
      </span>
      <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
        {/* Marque */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-headings text-[20px] text-secondary font-normal">
              <span className="text-primary italic">Cherry</span> Resto Cafe
            </span>
          </div>
          <p className="font-body text-[12px] font-light text-muted-foreground leading-relaxed max-w-[240px]">
            Restaurant · Café · Pâtisserie · Lounge. Conakry, Guinée.
          </p>
        </div>

        {/* Liens */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-16">
          <div>
            <div className="font-body text-[10px] font-semibold tracking-widest uppercase text-primary mb-5">
              Navigation
            </div>
            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="block font-body text-[12px] font-light text-dark-foreground/50 mb-3 transition-colors hover:text-dark-foreground"
              >
                {label}
              </Link>
            ))}
          </div>
          <div>
            <div className="font-body text-[10px] font-semibold tracking-widest uppercase text-primary mb-5">
              Commander
            </div>
            {orderLinks.map(([label, href]) =>
              href.startsWith("http") ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-body text-[12px] font-light text-dark-foreground/50 mb-3 transition-colors hover:text-dark-foreground"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="block font-body text-[12px] font-light text-dark-foreground/50 mb-3 transition-colors hover:text-dark-foreground"
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* CTA */}
        <div>
          <div className="font-body text-[10px] font-semibold tracking-widest uppercase text-primary mb-5">
            Commander maintenant
          </div>
          <Link
            href="/contact"
            className="font-body text-[10px] font-semibold tracking-widest uppercase bg-primary text-primary-foreground px-7 py-4 rounded-sm block text-center mb-4 transition-colors hover:bg-cherry-deep"
          >
            Passer commande
          </Link>
          <div className="flex items-center gap-3 justify-center">
            <Phone size={14} className="text-primary" />
            <a
              href={`tel:${mainPhone.replace(/\s/g, "")}`}
              className="font-body text-[12px] text-dark-foreground/60 font-light transition-colors hover:text-dark-foreground"
            >
              {mainPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="relative flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-cacao/40">
        <span className="font-body text-[10px] text-muted-foreground font-light">
          © {new Date().getFullYear()} {site.name} · Conakry, Guinée
        </span>
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-primary" />
          <span className="font-body text-[10px] font-light text-muted-foreground">
            Halal certifié · Ouvert 7j/7
          </span>
        </div>
      </div>
    </footer>
  );
}
