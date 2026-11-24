import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingPill } from "@/components/BookingPill";

export const Route = createFileRoute("/osetrenenie")({
  head: () => ({
    meta: [
      { title: "Ošetrenie | STUDIO EXCLUSIVE" },
      { name: "description", content: "Enzymoterapia, brazílsky keratín a vegánske masky — organická regenerácia vlasov, absolútna novinka na Slovensku." },
    ],
  }),
  component: Osetrenenie,
});

const WIX = "https://static.wixstatic.com/media/";

function Osetrenenie() {
  return (
    <div className="overflow-x-hidden bg-blush text-mocha">
      <SiteNav />

      {/* HERO */}
      <div className="relative mt-[72px] overflow-hidden md:mt-[104px]">
        <div className="flex">
          {[0, 1, 2].map((i) => (
            <img
              key={i}
              src={`${WIX}eb5e78_f45ec5f4cbea47fa843de6f532feb036~mv2.jpeg`}
              alt=""
              className="w-1/3 block aspect-[736/890] object-cover"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h1 className="break-words text-3xl font-normal uppercase tracking-wide text-primary-foreground sm:text-4xl md:text-[56px]">
            Ošetrenie
          </h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bg-white px-6 py-4 text-sm text-mocha/50 md:px-16">
        <Link to="/sluzby" className="hover:text-mocha transition-colors">Naše Služby</Link>
        <span className="mx-2">›</span>
        <span className="text-mocha">Ošetrenie</span>
      </div>

      {/* INTRO */}
      <section className="bg-white px-6 py-14 md:px-16">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-lg leading-relaxed md:text-xl">
            Ponúkame absolútnu novinku na Slovensku — <strong>ORGANICKÁ kúra:</strong>
          </p>
        </div>
      </section>

      {/* ENZYMOTERAPIA */}
      <section className="bg-blush px-6 py-14 md:px-16">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-2xl font-normal uppercase tracking-wide sm:text-3xl md:text-4xl">
            Enzymoterapia
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              "Vlasy po nej nadobudnú lesk, silu a pružnosť.",
              "Kúra vydrží vo vlasoch individuálne od 2–4 mesiacov.",
              "Doporučujeme na unavené a vysušené vlasy, poprípde po dovolenkovom období, kedy sú vlasy vystavené častému slnku a slanej vode.",
              "Vlasy po tejto kúre neostanú rovné, ponechajú si svoju štruktúru ako mali, iba sú hĺbkovo ozdravené.",
            ].map((v) => (
              <li key={v} className="flex items-start gap-3 text-lg leading-snug">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-mauve" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BRAZÍLSKY KERATÍN + VEGÁNSKE MASKY */}
      <section className="bg-white px-6 py-14 md:px-16">
        <div className="mx-auto grid max-w-[760px] gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium uppercase tracking-wide">Brazílsky Keratín</h3>
            <p className="mt-4 text-lg font-light leading-relaxed text-mocha/80">
              Je hĺbková kúra, ktorá ponúka ošetrenie a zároveň aj vyrovnanie vlasov.
            </p>
            <p className="mt-4 text-lg font-light leading-relaxed text-mocha/80">
              Vhodný pre klientky, ktoré si radi žehlia vlasy, potrebujú sa zbaviť objemu a vlasy oživiť a zaceliť.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium uppercase tracking-wide">Vegánske Masky</h3>
            <p className="mt-4 text-lg font-light leading-relaxed text-mocha/80">
              Zahŕňa krátkodobejšie ošetrenie vlasov. Ponúkajú taktiež okamžitý efekt, vydržia pár umytí.
            </p>
            <p className="mt-4 text-lg font-light leading-relaxed text-mocha/80">
              Je potrebné si ich jednoducho aplikovať aj doma na pár minút, podľa potreby — cca raz do mesiaca.
            </p>
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <section className="bg-mauve px-6 py-14 text-center text-primary-foreground md:px-16">
        <div className="mx-auto max-w-[660px]">
          <p className="text-lg leading-relaxed md:text-xl">
            Ošetrenie je <strong>ideálny doplnok</strong> pre každého, kto chce <strong>zdravé, lesklé a silné vlasy</strong> bez ohľadu na ich aktuálny stav.
          </p>
        </div>
      </section>

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
