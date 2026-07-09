"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion
} from "framer-motion";
import { Star, ArrowRight, ChevronDown } from "lucide-react";
import { site } from "@/data/site";

const HERO_IMAGE =
  "https://firebasestorage.googleapis.com/v0/b/banani-prod.appspot.com/o/reference-images%2Fa00de113-5c07-40f2-a8ec-3d6552ffc224?alt=media&token=193bd2b5-2421-4be4-adfe-01cde260a0e7";

const EASE = [0.22, 1, 0.36, 1];

// Cascade d'entrée — chaque enfant se révèle en décalé
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.35 }
  }
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } }
};

// Lignes de titre révélées par balayage vertical (masque)
const maskLine = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.95, ease: EASE } }
};

function Stars({ size = 12 }) {
  return (
    <span className="flex items-center gap-0.5 text-gold" aria-label="5 étoiles">
      {[0, 1, 2, 3, 4].map((s) => (
        <Star key={s} size={size} fill="currentColor" strokeWidth={0} aria-hidden="true" />
      ))}
    </span>
  );
}

export function Hero() {
  const heroRef = useRef(null);
  const boxRef = useRef(null);
  const imgRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const [signBox, setSignBox] = useState(null);

  // Progression du scroll sur toute la hauteur du hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallaxe : l'image dérive plus lentement, le texte s'élève et s'estompe
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const chevronOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // Cale le halo exactement sur l'enseigne CHERRY quel que soit le recadrage
  // object-cover (qui dépend de la largeur ET du ratio de l'écran). On calcule
  // la position réelle de l'enseigne à partir de la géométrie de l'image.
  useEffect(() => {
    const box = boxRef.current;
    const img = imgRef.current;
    if (!box || !img) return;

    // Position de l'enseigne dans la PHOTO source (fractions, constantes)
    const FX = 0.514; // centre horizontal des lettres
    const FY_TOP = 0.335; // haut du « C »
    const FY_BOT = 0.625; // bas du « Y »
    const SIGN_W = 0.055; // largeur des lettres

    const compute = () => {
      const natW = img.naturalWidth;
      const natH = img.naturalHeight;
      if (!natW || !natH) return;
      const BW = box.offsetWidth;
      const BH = box.offsetHeight;
      const s = Math.max(BW / natW, BH / natH); // échelle object-cover
      const rW = natW * s;
      const rH = natH * s;
      const offX = (BW - rW) / 2; // object-position: center
      const offY = (BH - rH) / 2;
      const cx = offX + FX * rW;
      const topY = offY + FY_TOP * rH;
      const botY = offY + FY_BOT * rH;
      const w = Math.max(rW * SIGN_W * 1.8, 56);
      const vm = rH * 0.015; // petite marge verticale
      setSignBox({
        left: cx - w / 2,
        top: topY - vm,
        width: w,
        height: botY - topY + vm * 2
      });
    };

    const ro = new ResizeObserver(compute);
    ro.observe(box);
    if (img.complete) compute();
    img.addEventListener("load", compute);
    return () => {
      ro.disconnect();
      img.removeEventListener("load", compute);
    };
  }, []);

  const initial = prefersReduced ? "show" : "hidden";

  return (
    <section
      ref={heroRef}
      className="relative bg-dark overflow-hidden min-h-[92vh]"
    >
      {/* Plan-image — zoom Ken Burns continu + parallaxe */}
      <motion.div
        className="absolute inset-x-0 -top-[10%] h-[120%] overflow-hidden"
        style={prefersReduced ? undefined : { y: imageY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Couche Ken Burns : image + halo se déplacent ensemble */}
        <div ref={boxRef} className="animate-kenburns relative w-full h-full">
          <img
            ref={imgRef}
            src={HERO_IMAGE}
            alt="Le bâtiment Cherry Resto Cafe à Conakry"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.38) saturate(0.85)" }}
          />
          {/* Halo doré qui descend le long de l'enseigne CHERRY (C → Y),
              positionné dynamiquement sur les lettres réelles */}
          {signBox && (
            <div
              className="hero-sign pointer-events-none absolute"
              style={{
                left: signBox.left,
                top: signBox.top,
                width: signBox.width,
                height: signBox.height
              }}
              aria-hidden="true"
            >
              <span className="hero-sign__glow" />
            </div>
          )}
        </div>
      </motion.div>

      {/* Voile cherry + dégradé vers le noir */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(181,16,60,0.25) 0%, transparent 50%), linear-gradient(to top, #0E0A0A 2%, rgba(14,10,10,0.5) 48%, rgba(14,10,10,0.12) 100%)"
        }}
      />

      {/* Label vertical éditorial */}
      <span
        className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 font-body text-[10px] font-medium tracking-[0.4em] uppercase text-champagne/35"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden="true"
      >
        Conakry — Guinée · Depuis le matin jusqu&apos;à minuit
      </span>

      {/* Contenu — parallaxe + fondu au scroll */}
      <motion.div
        className="relative z-10 flex flex-col justify-end min-h-[92vh] px-6 md:px-12 lg:px-24 pb-28 md:pb-24"
        style={prefersReduced ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div variants={container} initial={initial} animate="show">
          {/* Eyebrow */}
          <motion.div variants={item} className="mb-5 flex items-center gap-3">
            <motion.span
              className="h-px bg-primary origin-left"
              initial={prefersReduced ? { width: "2.5rem" } : { width: 0 }}
              animate={{ width: "2.5rem" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            />
            <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
              Restaurant · Café · Pâtisserie · Lounge
            </span>
          </motion.div>

          {/* Titre — révélation ligne par ligne au balayage */}
          <h1 className="font-display text-[clamp(2.75rem,7.5vw,5.75rem)] font-medium text-secondary leading-[1.04] mb-4 max-w-4xl">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={maskLine} className="block">
                L&apos;adresse{" "}
                <em className="italic font-normal text-primary">incontournable</em>
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={maskLine} className="block">
                de Conakry
              </motion.span>
            </span>
          </h1>

          {/* Sous-titre */}
          <motion.p
            variants={item}
            className="font-body text-[16px] font-light text-dark-foreground/65 mb-10 max-w-[460px] leading-[1.8]"
          >
            Burgers signature, shawarma maison, pâtisseries artisanales — et le
            soir, un lounge qui prend toute sa dimension.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 font-body text-[11px] font-semibold tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 rounded-sm transition-all duration-300 hover:bg-cherry-deep hover:-translate-y-px"
            >
              Commander maintenant
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center font-body text-[11px] font-semibold tracking-[0.2em] uppercase border border-secondary/35 text-secondary px-8 py-4 rounded-sm transition-all duration-300 hover:border-secondary hover:-translate-y-px"
            >
              Voir la carte
            </Link>
            <span className="sm:ml-6 flex items-center gap-3">
              <Stars />
              <span className="font-body text-[11px] text-dark-foreground/50 font-light">
                Noté {site.rating} · TripAdvisor
              </span>
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll — s'estompe dès qu'on descend */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-champagne/30 animate-bounce"
        style={prefersReduced ? undefined : { opacity: chevronOpacity }}
        aria-hidden="true"
      >
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
