"use client";

import { useState } from "react";
import {
  UtensilsCrossed,
  Beef,
  Sandwich,
  CakeSlice,
  Croissant,
  CupSoda
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { categories, sections, menuItems } from "@/data/menu";

const icons = { UtensilsCrossed, Beef, Sandwich, CakeSlice, Croissant, CupSoda };

const badgeStyles = {
  Bestseller: "bg-primary text-primary-foreground",
  Nouveau: "bg-gold text-foreground",
  Populaire: "bg-gold text-foreground"
};

export function MenuGrid() {
  const [active, setActive] = useState("all");

  const visibleSections = sections
    .filter((s) => active === "all" || s.id === active)
    .map((s) => ({
      ...s,
      items: menuItems.filter((i) => i.category === s.id)
    }));

  return (
    <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
      {/* Filtres de catégorie */}
      <div
        className="flex gap-3 overflow-x-auto no-scrollbar py-2 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap"
        role="tablist"
        aria-label="Catégories du menu"
      >
        {categories.map((cat) => {
          const Icon = icons[cat.icon] ?? UtensilsCrossed;
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat.id)}
              className={`shrink-0 inline-flex items-center gap-2 rounded-sm px-5 py-2.5 font-body text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent border border-cacao/25 text-cacao hover:border-primary/50 hover:text-primary"
              }`}
            >
              <Icon size={13} aria-hidden="true" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Sections de la carte — style bistrot typographique */}
      {visibleSections.map((section, sIdx) => {
        const Icon = icons[section.icon] ?? UtensilsCrossed;
        return (
          <section key={section.id} id={section.id} className="mt-16 scroll-mt-24">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="font-display italic text-[15px] text-primary">
                  {String(sIdx + 1).padStart(2, "0")}
                </span>
                <h2 className="shrink-0 flex items-center gap-3 font-display text-[26px] md:text-[32px] font-medium text-noir">
                  <Icon size={20} className="text-gold" aria-hidden="true" />
                  {section.title}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-cherry/40 to-transparent self-center" />
              </div>
            </Reveal>

            <div className="mt-8 grid gap-x-16 gap-y-8 md:grid-cols-2">
              {section.items.map((item, i) => (
                <Reveal key={item.id} delay={(i % 2) * 0.06}>
                  <article className="group">
                    <div className="flex items-baseline">
                      <h3 className="font-display text-[19px] font-medium text-noir leading-snug transition-colors duration-200 group-hover:text-primary">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span
                          className={`ml-3 shrink-0 self-center rounded-sm px-2 py-0.5 font-body text-[8.5px] font-semibold tracking-[0.15em] uppercase ${
                            badgeStyles[item.badge] ?? "bg-primary text-primary-foreground"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      <span className="menu-dots" aria-hidden="true" />
                      <span className="shrink-0 font-display text-[17px] font-semibold text-gold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-md font-body text-[12.5px] font-light leading-relaxed text-cacao/70">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
