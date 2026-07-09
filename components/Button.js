import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] py-3.5 px-7 text-[11px] font-semibold tracking-widest2 uppercase transition-all duration-200";

const variants = {
  // Fond cherry, texte blanc — CTA principal
  primary: `${base} bg-cherry text-white hover:bg-cherry-deep hover:scale-[1.02]`,
  // Bordure champagne — pour fond sombre
  secondary: `${base} border border-champagne/60 text-champagne hover:border-champagne hover:bg-champagne/10 hover:scale-[1.02]`,
  // Bordure cherry — pour fond clair
  ghost: `${base} border border-cherry text-cherry hover:bg-cherry hover:text-white hover:scale-[1.02]`,
  // WhatsApp
  whatsapp: `${base} bg-whatsapp text-white hover:brightness-110 hover:scale-[1.02]`
};

export function Button({ variant = "primary", href, external = false, children, className = "" }) {
  const cls = `${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  if (href?.startsWith("tel:")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
