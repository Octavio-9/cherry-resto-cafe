import { Phone, MapPin, Check } from "lucide-react";
import { CherryDivider } from "@/components/CherryDivider";
import { Reveal } from "@/components/Reveal";
import { MapSection } from "@/components/MapSection";
import { locations } from "@/data/site";

export const metadata = {
  title: "Nos adresses — Camayenne & Nongo",
  description:
    "Cherry Resto Cafe vous accueille à deux adresses à Conakry : Corniche Nord à Camayenne et KPC Complexe à Nongo Tady. Ouvert 7j/7 de 8h à minuit."
};

const services = ["Sur place", "À emporter", "Livraison", "Paiement carte"];

export default function AdressesPage() {
  return (
    <>
      {/* Hero compact éditorial */}
      <section className="relative bg-dark overflow-hidden min-h-[46vh] flex flex-col justify-end pb-14 pt-20">
        <span
          className="text-outline pointer-events-none select-none absolute -top-2 right-0 font-display italic text-[clamp(4rem,14vw,11rem)] leading-none whitespace-nowrap"
          aria-hidden="true"
        >
          Conakry
        </span>
        <div className="relative max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-primary" />
              <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                Camayenne · Nongo Tady
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium text-ivoire leading-[1.05]">
              Nous <em className="italic font-normal text-primary">trouver</em>
            </h1>
            <p className="mt-5 font-body text-[15px] font-light text-champagne/65">
              Deux adresses pour vous servir à Conakry
            </p>
          </Reveal>
        </div>
      </section>

      <CherryDivider label="Nous trouver" />

      {/* Fiches adresses */}
      <section className="bg-ivoire py-16 md:py-24">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 grid gap-8 lg:grid-cols-2">
          {locations.map((loc, i) => {
            const isOr = loc.accent === "or";
            return (
              <Reveal key={loc.id} delay={i * 0.1}>
                <article
                  className={`h-full rounded-lg border bg-white p-8 md:p-12 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(14,10,10,0.08)] ${
                    isOr ? "border-gold/40" : "border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full ${isOr ? "bg-gold" : "bg-primary"}`}
                    />
                    <span
                      className={`font-body text-[10px] font-semibold tracking-[0.3em] uppercase ${
                        isOr ? "text-gold" : "text-primary"
                      }`}
                    >
                      Cherry Resto Cafe
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.4rem)] font-semibold text-noir leading-tight">
                    {loc.name}
                  </h2>
                  <p className="mt-3 font-body text-[13.5px] font-light leading-[1.8] text-cacao/80">
                    {loc.address}
                  </p>

                  {/* Horaires */}
                  <div className="mt-8">
                    <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-gris-mid mb-3">
                      Horaires
                    </p>
                    <table className="w-full text-[13px]">
                      <tbody>
                        {loc.schedule.map((row) => (
                          <tr key={row.days} className="border-b border-cacao/10">
                            <td className="py-2.5 font-body font-medium text-cacao">
                              {row.days}
                            </td>
                            <td className="py-2.5 text-right font-display text-[16px] font-semibold text-gold">
                              {row.hours}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Téléphones */}
                  <div className="mt-8">
                    <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-gris-mid mb-3">
                      Téléphone
                    </p>
                    <ul className="space-y-2">
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
                    </ul>
                  </div>

                  {/* Services */}
                  <div className="mt-8">
                    <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-gris-mid mb-3">
                      Services disponibles
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center gap-2 font-body text-[13px] font-light text-cacao"
                        >
                          <Check
                            size={14}
                            className={isOr ? "text-gold" : "text-primary"}
                            aria-hidden="true"
                          />
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 inline-flex items-center gap-2 rounded-sm px-6 py-3.5 font-body text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-px ${
                      isOr
                        ? "bg-gold text-noir hover:brightness-110"
                        : "bg-primary text-white hover:bg-cherry-deep"
                    }`}
                  >
                    <MapPin size={13} aria-hidden="true" /> Ouvrir dans Maps
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CherryDivider label="Sur la carte" />

      {/* Cartes Google Maps */}
      <MapSection />
    </>
  );
}
