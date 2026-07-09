import { MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/data/site";

export function MapSection({ label = "Sur la carte", numbered }) {
  return (
    <section className="bg-ivoire px-6 md:px-12 lg:px-24 py-24">
      <Reveal>
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
              {numbered ? `${numbered} — ` : ""}
              {label}
            </span>
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-medium text-foreground leading-[1.1]">
            Retrouvez-nous{" "}
            <em className="italic font-normal text-primary">à Conakry</em>
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        {locations.map((loc, i) => {
          const isOr = loc.accent === "or";
          return (
            <Reveal key={loc.id} delay={i * 0.08}>
              <figure
                className={`group rounded-lg border bg-background overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(14,10,10,0.10)] ${
                  isOr ? "border-gold/30" : "border-primary/30"
                }`}
              >
                {/* En-tête de la carte */}
                <figcaption className="flex items-center gap-3 px-6 py-4 border-b border-border">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${isOr ? "bg-gold" : "bg-primary"}`}
                  />
                  <span className="font-display text-[19px] font-semibold text-foreground">
                    {loc.name}
                  </span>
                  <span className="hidden sm:flex items-center gap-1.5 font-body text-[11px] font-light text-muted-foreground">
                    <MapPin size={11} aria-hidden="true" />
                    {loc.shortAddress}
                  </span>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-cacao link-underline transition-colors duration-200 hover:text-primary"
                  >
                    Ouvrir dans Maps
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                </figcaption>

                {/* Carte embarquée — sépia doux, couleurs au survol */}
                <div className="map-frame h-[320px]">
                  <iframe
                    src={loc.mapEmbed}
                    title={`Carte Google Maps — Cherry Resto Cafe ${loc.name}`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
