import Link from "next/link";
import {
  Clock,
  Music,
  MapPin,
  Phone,
  Star,
  Cherry,
  ArrowRight
} from "lucide-react";
import { CherryDivider } from "@/components/CherryDivider";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/Hero";
import { DishCard } from "@/components/DishCard";
import { MapSection } from "@/components/MapSection";
import { homeBestsellers } from "@/data/menu";
import { site, locations } from "@/data/site";

const marqueeItems = [
  "Burgers Signature",
  "Shawarma Maison",
  "Pâtisseries Artisanales",
  "Café & Petit-déj",
  "Lounge le soir",
  "Livraison à Conakry"
];

const loungeInfos = [
  { Icon: Clock, text: "Ouvert dès 19h · Jusqu'à minuit" },
  { Icon: Music, text: "Live le vendredi & samedi soir" },
  { Icon: MapPin, text: "Camayenne & Nongo" }
];

const testimonials = [
  {
    name: "Mariama D.",
    text: "Le meilleur burger de Conakry, sans hésitation. Le lounge le soir c'est une autre ambiance !",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=crop"
  },
  {
    name: "Ibrahima K.",
    text: "Service impeccable, les pâtisseries sont dignes d'une boulangerie parisienne. Bravo Cherry !",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop"
  },
  {
    name: "Kadiatou S.",
    text: "J'y vais chaque semaine. Le shawarma maison est exceptionnel et le cadre est sublime.",
    avatar:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=200&q=80&auto=format&fit=crop"
  }
];

const loungeImages = [
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80&auto=format&fit=crop",
    alt: "Bar du lounge, ambiance tamisée",
    ratio: "aspect-[3/4]"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop",
    alt: "Salle du restaurant aux chandelles",
    ratio: "aspect-[4/3]"
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80&auto=format&fit=crop",
    alt: "Pâtisseries artisanales",
    ratio: "aspect-[4/3]"
  }
];

function Stars({ size = 12 }) {
  return (
    <span className="flex items-center gap-0.5 text-gold" aria-label="5 étoiles">
      {[0, 1, 2, 3, 4].map((s) => (
        <Star key={s} size={size} fill="currentColor" strokeWidth={0} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function HomePage() {
  const [camayenne, nongo] = locations;
  const addressCards = [
    {
      loc: camayenne,
      desc: "Notre adresse principale. Déjeuner, café, pâtisserie et lounge du soir.",
      tag: "Lounge disponible",
      tagClass: "bg-primary text-primary-foreground",
      dotClass: "bg-primary",
      borderClass: "border-primary/30"
    },
    {
      loc: nongo,
      desc: "Notre deuxième adresse. Fast-food, café et livraison à domicile.",
      tag: "Livraison",
      tagClass: "bg-gold text-foreground",
      dotClass: "bg-gold",
      borderClass: "border-gold/30"
    }
  ];

  return (
    <>
      {/* ── HERO — plan d'ouverture cinématographique ── */}
      <Hero />

      {/* ── Bandeau défilant signature ── */}
      <div className="bg-dark border-y border-cacao/50 py-4 overflow-hidden" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-6 pr-6 font-display italic text-[15px] text-champagne/45 whitespace-nowrap"
                >
                  {item}
                  <Cherry size={11} className="text-primary/70" strokeWidth={1.5} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── BESTSELLERS — fond ivoire ── */}
      <section className="bg-ivoire px-6 md:px-12 lg:px-24 py-24 relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-primary" />
                <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                  01 — Nos incontournables
                </span>
              </div>
              <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-medium text-foreground leading-[1.1] max-w-xl">
                Ce que tout le monde{" "}
                <em className="italic font-normal text-primary">commande</em>
              </h2>
            </div>
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-cacao self-start md:self-auto link-underline"
            >
              Voir toute la carte
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeBestsellers.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08} className={i % 2 === 1 ? "lg:mt-10" : ""}>
              <DishCard item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Séparateur signature : jour → nuit ── */}
      <CherryDivider label="Ce soir au lounge" />

      {/* ── LOUNGE — section sombre ── */}
      <section className="relative bg-dark px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
        {/* Watermark éditorial */}
        <span
          className="text-outline pointer-events-none select-none absolute -top-4 left-1/2 -translate-x-1/2 font-display italic text-[clamp(5rem,16vw,13rem)] leading-none whitespace-nowrap"
          aria-hidden="true"
        >
          Lounge
        </span>
        {/* Halo ambiant */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 80% 70%, rgba(181,16,60,0.10), transparent 65%)"
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Texte */}
          <div className="flex-1">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-primary" />
                <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                  02 — Le Lounge · 1er étage
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium text-secondary leading-[1.08] mb-6">
                Le soir,{" "}
                <em className="italic font-normal text-primary">
                  Cherry prend vie
                </em>
              </h2>
              <p className="font-body text-[14.5px] font-light text-dark-foreground/65 leading-[1.9] mb-8 max-w-[400px]">
                Au 1er étage, le Lounge vous accueille chaque soir dans une
                ambiance tamisée. Cocktails maison, grillades et musique live le
                week-end.
              </p>
              <div className="flex flex-col gap-3 mb-10">
                {loungeInfos.map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon size={14} className="text-primary shrink-0" aria-hidden="true" />
                    <span className="font-body text-[12.5px] font-light text-dark-foreground/60">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/lounge"
                className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.2em] uppercase border border-primary text-primary px-8 py-4 rounded-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-px"
              >
                Découvrir le lounge
              </Link>
            </Reveal>
          </div>

          {/* Collage d'images */}
          <div className="flex gap-4 flex-[1.2] justify-center">
            <div className="flex flex-col gap-4 mt-12">
              <Reveal delay={0.1}>
                <div className={`img-zoom rounded-lg w-40 md:w-56 ${loungeImages[0].ratio}`}>
                  <img
                    src={loungeImages[0].src}
                    alt={loungeImages[0].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
            <div className="flex flex-col gap-4">
              {loungeImages.slice(1).map((img, i) => (
                <Reveal key={img.src} delay={0.15 + i * 0.08}>
                  <div className={`img-zoom rounded-lg w-40 md:w-56 ${img.ratio}`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES — sombre ── */}
      <section className="bg-dark px-6 md:px-12 lg:px-24 pb-24 pt-4">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-primary" />
            <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary shrink-0">
              03 — Ils en parlent
            </span>
            <span className="flex-1 h-px bg-cacao/50" />
            <span className="flex items-center gap-2 font-body text-[11px] text-muted-foreground font-light shrink-0">
              <Star size={11} fill="currentColor" strokeWidth={0} className="text-gold" aria-hidden="true" />
              {site.rating} · {site.ranking}
            </span>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.08}>
              <figure className="border border-cacao/50 rounded-lg p-8 bg-white/[0.03] h-full flex flex-col transition-colors duration-300 hover:border-cacao">
                <Stars size={11} />
                <blockquote className="mt-5 font-display text-[17px] font-normal text-secondary leading-[1.65] italic flex-1">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt=""
                    className="w-9 h-9 rounded-full object-cover"
                    loading="lazy"
                  />
                  <span className="font-body text-[12px] font-medium text-dark-foreground/70">
                    {review.name}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Séparateur signature : nuit → jour ── */}
      <CherryDivider label="Nos adresses" />

      {/* ── ADRESSES — fond ivoire ── */}
      <section className="bg-ivoire px-6 md:px-12 lg:px-24 py-24">
        <Reveal>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary" />
              <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                04 — Nos Adresses
              </span>
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-medium text-foreground leading-[1.1]">
              Deux adresses pour{" "}
              <em className="italic font-normal text-primary">vous servir</em>
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {addressCards.map(({ loc, desc, tag, tagClass, dotClass, borderClass }, i) => (
            <Reveal key={loc.id} delay={i * 0.08}>
              <div
                className={`border ${borderClass} rounded-lg p-8 md:p-10 bg-background h-full transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(14,10,10,0.08)]`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${dotClass}`} />
                  <h3 className="font-display text-[26px] font-semibold text-foreground">
                    {loc.name}
                  </h3>
                  <span
                    className={`ml-auto font-body text-[9px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm ${tagClass}`}
                  >
                    {tag}
                  </span>
                </div>
                <p className="font-body text-[13px] font-light text-cacao/85 leading-relaxed mb-6">
                  {desc}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Clock size={14} className="text-primary shrink-0" aria-hidden="true" />
                    <span className="font-body text-[12.5px] text-muted-foreground font-light">
                      {loc.hours}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-primary shrink-0" aria-hidden="true" />
                    <a
                      href={`tel:${loc.phones[0].replace(/\s/g, "")}`}
                      className="font-body text-[12.5px] text-primary font-medium link-underline"
                    >
                      {loc.phones[0]}
                    </a>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-[10px] font-semibold tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-3.5 rounded-sm transition-all duration-300 hover:bg-cherry-deep hover:-translate-y-px"
                  >
                    <MapPin size={12} aria-hidden="true" /> Itinéraire
                  </a>
                  <a
                    href={`tel:${loc.phones[0].replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 font-body text-[10px] font-semibold tracking-[0.2em] uppercase border border-border text-cacao px-6 py-3.5 rounded-sm transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-px"
                  >
                    <Phone size={12} aria-hidden="true" /> Appeler
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CARTE — les deux adresses sur Google Maps ── */}
      <MapSection numbered="05" />
    </>
  );
}
