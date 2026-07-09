"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  ["Menu", "/menu"],
  ["Nos Adresses", "/adresses"],
  ["Lounge", "/lounge"],
  ["Contact", "/contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Ferme le menu mobile à chaque navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-dark relative z-50">
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-5">
        {/* Marque */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Cherry Resto Cafe"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-secondary/25"
          />
          <span className="font-headings text-[20px] text-secondary font-normal tracking-wide">
            <span className="text-primary italic">Cherry</span> Resto Cafe
          </span>
        </Link>

        {/* Liens desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`link-underline font-body text-[11px] font-light tracking-[0.2em] uppercase transition-opacity duration-200 ${
                pathname === href
                  ? "text-primary opacity-100"
                  : "text-dark-foreground opacity-70 hover:opacity-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/menu"
            className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase border border-secondary/30 text-secondary px-5 py-3 rounded-sm transition-all duration-300 hover:border-secondary/70 hover:-translate-y-px"
          >
            Voir la carte
          </Link>
          <Link
            href="/contact"
            className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase bg-primary text-primary-foreground px-5 py-3 rounded-sm transition-all duration-300 hover:bg-cherry-deep hover:-translate-y-px"
          >
            Commander
          </Link>
        </div>

        {/* Bouton hamburger mobile */}
        <button
          type="button"
          className="lg:hidden text-ivoire p-2"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden overflow-hidden bg-dark transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-primary/20">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`py-3 font-body text-[12px] font-light tracking-widest uppercase ${
                pathname === href ? "text-primary" : "text-dark-foreground/80"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 rounded-sm bg-primary px-5 py-3 text-center font-body text-[11px] font-semibold tracking-widest uppercase text-primary-foreground"
          >
            Commander
          </Link>
        </div>
      </div>
    </nav>
  );
}
