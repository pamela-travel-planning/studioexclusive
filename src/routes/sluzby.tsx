import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingPill } from "@/components/BookingPill";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Naše Služby | STUDIO EXCLUSIVE" },
      { name: "description", content: "Predlžovanie, zahusťovanie, balayage a ošetrenie vlasov v Bratislave. Luxusný kadernícky salón STUDIO EXCLUSIVE." },
    ],
  }),
  component: Sluzby,
});

const WIX = "https://static.wixstatic.com/media/";

const services = [
  {
    slug: "predlzovanie",
    title: "Zahusťovanie a Predlžovanie",
    desc: "Výsledný efekt INVISIBLE METHOD/ Neviditeľnej metódy je nádherný a objemný – pritom vôbec nezaťažuje ani nepoškodzuje Vaše vlastné vlasy či korienky.",
    img: `${WIX}eb5e78_1d2865fed2844535972a7fb4f2f1fd95~mv2.jpg/v1/fill/w_800,h_900,al_c,q_85/IMG_6040.jpg`,
    imgAlt: "Predlžovanie a zahusťovanie vlasov",
    reverse: false,
  },
  {
    slug: "balayage",
    title: "Balayage",
    desc: "Balayage je najnovšia farbiaca technika, vďaka ktorej vlasy pôsobia prirodzene, zdravo a luxusne – a to aj po úplnom presvetlení.",
    img: `${WIX}eb5e78_1df78630f6734e2abaa27b3d17a0ca0f~mv2.jpeg/v1/fill/w_800,h_900,al_c,q_85/Rock_Blond.jpeg`,
    imgAlt: "Balayage vlasy",
    reverse: true,
  },
  {
    slug: "osetrenenie",
    title: "Ošetrenie",
    desc: "Enzymoterapia je organická regenerácia vlasov – novinka na slovenskom trhu. Vlasy získajú viditeľný lesk, silu a pružnosť.",
    img: `${WIX}eb5e78_f45ec5f4cbea47fa843de6f532feb036~mv2.jpeg/v1/fill/w_800,h_900,al_c,q_85/Transform.jpeg`,
    imgAlt: "Ošetrenie vlasov",
    reverse: false,
  },
];

function Sluzby() {
  return (
    <div className="overflow-x-hidden bg-blush text-mocha">
      <SiteNav />

      {/* PAGE HEADER */}
      <div className="mt-[72px] md:mt-[104px] bg-white px-5 py-16 text-center">
        <h1 className="text-4xl font-normal text-mocha sm:text-5xl lg:text-[72px]">
          Naše <span className="italic-accent">Služby</span>
        </h1>
      </div>

      {/* SERVICE ROWS */}
      {services.map((s) => (
        <section
          key={s.slug}
          className={`flex flex-col ${s.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          {/* IMAGE */}
          <div className="md:w-1/2">
            <img
              src={s.img}
              alt={s.imgAlt}
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>

          {/* TEXT */}
          <div className={`flex flex-col justify-center px-8 py-12 md:w-1/2 md:px-16 ${s.reverse ? "bg-white" : "bg-blush"}`}>
            <h2 className="text-2xl font-normal uppercase tracking-wide sm:text-3xl md:text-4xl">{s.title}</h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-mocha/75">{s.desc}</p>
            <Link
              to={`/${s.slug}` as never}
              className="mt-10 inline-flex h-11 w-fit items-center rounded-[300px] bg-mocha px-8 text-[15px] tracking-wide text-primary-foreground"
            >
              Viac info
            </Link>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-white px-6 py-14 text-center">
        <h2 className="text-2xl font-normal sm:text-3xl md:text-4xl">
          Máte záujem? <span className="italic-accent text-mauve">Kontaktujte nás</span>
        </h2>
        <p className="mt-4 text-lg text-mocha/70">Poprípade doporučujeme prísť na osobnú bezplatnú konzultáciu.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <BookingPill />
          <a
            href="tel:+421908653820"
            className="inline-flex h-12 items-center rounded-[300px] border border-mocha px-8 text-[15px] tracking-wide text-mocha"
          >
            +421 908 653 820
          </a>
          <a
            href="mailto:studio.exclusive@gmail.com"
            className="inline-flex h-12 items-center rounded-[300px] border border-mocha px-8 text-[15px] tracking-wide text-mocha"
          >
            studio.exclusive@gmail.com
          </a>
        </div>
      </section>

      <SiteFooter simple />
    </div>
  );
}
