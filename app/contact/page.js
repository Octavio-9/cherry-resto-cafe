import { Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { CherryDivider } from "@/components/CherryDivider";
import { Reveal } from "@/components/Reveal";
import { site, locations } from "@/data/site";

export const metadata = {
  title: "Commander & nous contacter",
  description:
    "Commandez au Cherry Resto Cafe via WhatsApp — livraison et à emporter à Conakry. Retrouvez tous nos numéros pour Camayenne et Nongo Tady."
};

export default function ContactPage() {
  const [camayenne, nongo] = locations;

  return (
    <>
      {/* Hero compact éditorial */}
      <section className="relative bg-dark overflow-hidden min-h-[46vh] flex flex-col justify-end pb-14 pt-20">
        <span
          className="text-outline pointer-events-none select-none absolute -top-2 right-0 font-display italic text-[clamp(4rem,14vw,11rem)] leading-none whitespace-nowrap"
          aria-hidden="true"
        >
          Allô Cherry
        </span>
        <div className="relative max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-primary" />
              <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                Livraison · À emporter · Sur place
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium text-ivoire leading-[1.05]">
              Commander &amp;
              <br />
              nous <em className="italic font-normal text-primary">contacter</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <CherryDivider label="En un clic" />

      <section className="bg-ivoire py-16 md:py-24">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 grid gap-16 lg:grid-cols-2">
          {/* Colonne gauche — Contact */}
          <Reveal>
            <SectionLabel>Nous Joindre</SectionLabel>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] text-noir">
              Toujours <em className="italic font-normal text-primary">disponibles</em>{" "}
              pour vous
            </h2>

            <div className="mt-10 space-y-10">
              {[camayenne, nongo].map((loc) => {
                const isOr = loc.accent === "or";
                return (
                  <div key={loc.id}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2 h-2 rounded-full ${isOr ? "bg-gold" : "bg-primary"}`}
                      />
                      <h3 className="font-display text-[24px] font-semibold text-noir">
                        {loc.name}
                      </h3>
                    </div>
                    <ul className="mt-4 space-y-2 pl-5">
                      {loc.phones.map((phone) => (
                        <li key={phone}>
                          <a
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="inline-flex items-center gap-2 font-body text-[14px] text-cacao transition-colors duration-200 hover:text-primary"
                          >
                            <Phone
                              size={14}
                              className={isOr ? "text-gold" : "text-primary"}
                              aria-hidden="true"
                            />
                            {phone}
                          </a>
                        </li>
                      ))}
                      <li className="inline-flex items-center gap-2 font-body text-[14px] font-light text-gris-mid">
                        <MapPin
                          size={14}
                          className={isOr ? "text-gold" : "text-primary"}
                          aria-hidden="true"
                        />
                        {loc.shortAddress}
                      </li>
                    </ul>
                  </div>
                );
              })}

              {/* Réseaux sociaux */}
              <div>
                <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-gris-mid mb-4">
                  Réseaux sociaux
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-cacao/20 px-5 py-3 font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-cacao transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-px"
                  >
                    <Facebook size={14} aria-hidden="true" /> Facebook
                  </a>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-cacao/20 px-5 py-3 font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-cacao transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-px"
                  >
                    <Instagram size={14} aria-hidden="true" /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Colonne droite — Commander */}
          <Reveal delay={0.1}>
            <SectionLabel>Commander</SectionLabel>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] text-noir">
              Livraison &amp; <em className="italic font-normal text-primary">emporter</em>
            </h2>
            <p className="mt-6 max-w-md font-body text-[14.5px] font-light leading-[1.8] text-cacao/85">
              Contactez-nous directement via WhatsApp pour passer votre
              commande. Précisez votre adresse Cherry, les plats souhaités et
              votre adresse de livraison.
            </p>

            <div className="mt-10 flex flex-col gap-4 max-w-md">
              <a
                href={camayenne.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-sm bg-whatsapp px-7 py-4 font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-px"
              >
                <MessageCircle size={16} aria-hidden="true" /> Commander — Camayenne
              </a>
              <a
                href={nongo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-sm bg-whatsapp px-7 py-4 font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-px"
              >
                <MessageCircle size={16} aria-hidden="true" /> Commander — Nongo
              </a>
              <p className="text-center font-body text-[12px] font-light text-gris-mid">
                Livraison disponible · Lun–Sam 8h–23h
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
