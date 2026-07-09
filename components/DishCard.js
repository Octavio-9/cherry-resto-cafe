import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function DishCard({ item, index }) {
  return (
    <Link
      href="/menu"
      className="group block cursor-pointer bg-background border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_16px_40px_rgba(14,10,10,0.10)]"
    >
      {/* Photo */}
      <div className="img-zoom relative h-52">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/45 via-transparent to-transparent" />
        {/* Index éditorial */}
        <span className="absolute top-4 left-4 font-display italic text-[14px] text-ivoire/90">
          {String(index + 1).padStart(2, "0")}
        </span>
        {item.badge && (
          <span className="absolute top-4 right-4 rounded-sm bg-primary/90 px-2.5 py-1 font-body text-[9px] font-semibold tracking-widest uppercase text-primary-foreground backdrop-blur-sm">
            {item.badge}
          </span>
        )}
        {/* Prix posé sur la photo */}
        <span className="absolute bottom-4 left-4 font-display text-[17px] font-medium text-ivoire">
          {item.price}
        </span>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[19px] font-medium text-foreground leading-snug">
            {item.name}
          </h3>
          <ArrowUpRight
            size={16}
            className="mt-1 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
        <p className="mt-2 font-body text-[12.5px] font-light leading-relaxed text-cacao/75">
          {item.description}
        </p>
      </div>
    </Link>
  );
}
