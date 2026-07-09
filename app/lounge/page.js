import {
  MapPin,
  Star,
  UtensilsCrossed,
  CalendarClock,
  Martini,
  Music,
  MoonStar
} from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { CherryDivider } from "@/components/CherryDivider";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Lounge Bar & À propos",
  description:
    "Le Lounge Cherry au 1er étage de Nongo Tady : mocktails créatifs, ambiance tamisée et musique douce jusqu'à minuit. Découvrez aussi l'histoire du Cherry Resto Cafe."
};

const stats = [
  { Icon: MapPin, value: "2", label: "adresses à Conakry" },
  { Icon: Star, value: "4.2/5", label: "sur TripAdvisor" },
  { Icon: UtensilsCrossed, value: "+18", label: "plats au menu" },
  { Icon: CalendarClock, value: "7j/7", label: "ouvert toute la semaine" }
];

const ambiance = [
  {
    Icon: Martini,
    title: "Cocktails & Mocktails",
    text: "Créations originales chaque soir",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80&auto=format&fit=crop"
  },
  {
    Icon: Music,
    title: "Ambiance Musicale",
    text: "Playlist soignée pour chaque moment",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80&auto=format&fit=crop"
  },
  {
    Icon: MoonStar,
    title: "Ouvert jusqu'à minuit",
    text: "Du lundi au samedi",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80&auto=format&fit=crop"
  }
];

export default function LoungePage() {
  return (
    <>
      {/* Hero éditorial */}
      <section className="relative bg-dark overflow-hidden min-h-[54vh] flex flex-col justify-end pb-16 pt-20">
        <span
          className="text-outline pointer-events-none select-none absolute -top-2 right-0 font-display italic text-[clamp(4rem,15vw,12rem)] leading-none whitespace-nowrap"
          aria-hidden="true"
        >
          Le Soir
        </span>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 85% 20%, rgba(181,16,60,0.12), transparent 60%)"
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-primary" />
              <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                1er Étage · Nongo Tady
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium text-ivoire leading-[1.05]">
              Le Lounge <em className="italic font-normal text-primary">Cherry</em>
            </h1>
            <p className="mt-5 font-body text-[15px] font-light text-champagne/65">
              Un espace à part, au-dessus de la ville — jusqu&apos;à minuit
            </p>
          </Reveal>
        </div>
      </section>

      {/* À propos */}
      <section className="bg-ivoire py-16 md:py-24">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <SectionLabel>Notre Histoire</SectionLabel>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] text-noir">
              Né d&apos;une passion pour la gastronomie{" "}
              <em className="italic font-normal text-primary">et le partage</em>
            </h2>
            <p className="mt-6 font-body text-[14.5px] font-light leading-[1.8] text-cacao/85">
              Cherry Resto Cafe est né de l&apos;ambition de créer à Conakry un
              lieu où l&apos;on mange bien, dans un cadre agréable, à toute
              heure de la journée. De l&apos;expresso du matin aux grillades du
              soir, en passant par nos pâtisseries artisanales, chaque moment
              chez Cherry est pensé pour vous donner envie de revenir.
            </p>
            <p className="mt-4 font-body text-[14.5px] font-light leading-[1.8] text-cacao/85">
              Nos équipes de cuisine, aux influences libanaises, syriennes et
              africaines, travaillent chaque jour des produits frais pour vous
              proposer une carte variée et généreuse. Deux adresses — Camayenne
              et Nongo — pour être toujours près de vous.
            </p>
          </Reveal>

          {/* Chiffres Cherry */}
          <Reveal delay={0.15}>
            <div className="rounded-lg border border-primary/20 bg-white p-8 md:p-10">
              <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-8">
                Chiffres Cherry
              </p>
              <ul className="space-y-6">
                {stats.map(({ Icon, value, label }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex w-11 h-11 shrink-0 items-center justify-center rounded-sm border border-gold/40 text-gold">
                      <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-[26px] font-semibold text-noir leading-none">
                        {value}
                      </p>
                      <p className="mt-1 font-body text-[12px] font-light text-gris-mid">
                        {label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CherryDivider label="Ce soir" />

      {/* Lounge */}
      <section className="relative bg-dark py-16 md:py-24 overflow-hidden">
        <span
          className="text-outline pointer-events-none select-none absolute top-6 left-1/2 -translate-x-1/2 font-display italic text-[clamp(4rem,14vw,11rem)] leading-none whitespace-nowrap"
          aria-hidden="true"
        >
          Atmosphère
        </span>
        <div className="relative max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <Reveal>
            <SectionLabel>Le Lounge Bar</SectionLabel>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] text-champagne">
              Au-dessus de la ville,
              <br />
              une autre <em className="italic font-normal text-primary">atmosphère</em>
            </h2>
            <p className="mt-6 max-w-2xl font-body text-[14.5px] font-light leading-[1.8] text-champagne/70">
              Au premier étage de notre adresse de Nongo Tady, le Lounge Cherry
              vous accueille dans une ambiance tamisée et soignée. Cocktails
              sans alcool, mocktails créatifs, musique douce — l&apos;endroit
              idéal pour finir la soirée entre amis ou en amoureux.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ambiance.map(({ Icon, title, text, image }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <article className="group rounded-lg border border-champagne/15 bg-white/[0.03] overflow-hidden h-full transition-colors duration-300 hover:border-champagne/30">
                  <div className="img-zoom h-44">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                      style={{ filter: "brightness(0.85) saturate(0.9)" }}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7">
                    <Icon size={20} strokeWidth={1.5} className="text-gold" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-[22px] font-medium text-champagne">
                      {title}
                    </h3>
                    <p className="mt-2 font-body text-[12.5px] font-light text-champagne/60">
                      {text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
