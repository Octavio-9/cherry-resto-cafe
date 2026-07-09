import { CherryDivider } from "@/components/CherryDivider";
import { Reveal } from "@/components/Reveal";
import { MenuGrid } from "@/components/MenuGrid";

export const metadata = {
  title: "Menu — La carte Cherry",
  description:
    "La carte du Cherry Resto Cafe à Conakry : burgers, shawarma, pâtisseries artisanales, petits-déjeuners et boissons fraîches. Sur place, à emporter ou en livraison."
};

export default function MenuPage() {
  return (
    <>
      {/* Hero compact éditorial */}
      <section className="relative bg-dark overflow-hidden min-h-[46vh] flex flex-col justify-end pb-14 pt-20">
        {/* Watermark */}
        <span
          className="text-outline pointer-events-none select-none absolute -top-2 right-0 font-display italic text-[clamp(4rem,14vw,11rem)] leading-none whitespace-nowrap"
          aria-hidden="true"
        >
          La Carte
        </span>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 12% 8%, rgba(181,16,60,0.10), transparent 60%)"
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-primary" />
              <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                Notre Carte
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium text-ivoire leading-[1.05]">
              La carte <em className="italic font-normal text-primary">Cherry</em>
            </h1>
            <p className="mt-5 font-body text-[14px] font-light tracking-wide text-champagne/65">
              Burgers · Shawarma · Pâtisseries · Boissons · Petits-déjeuners
            </p>
          </Reveal>
        </div>
      </section>

      <CherryDivider label="Choisissez" />

      <section className="bg-ivoire py-16 md:py-24">
        <MenuGrid />
      </section>
    </>
  );
}
