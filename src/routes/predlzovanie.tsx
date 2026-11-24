import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingPill } from "@/components/BookingPill";

export const Route = createFileRoute("/predlzovanie")({
  head: () => ({
    meta: [
      { title: "Predlžovanie a Zahusťovanie | STUDIO EXCLUSIVE" },
      { name: "description", content: "Predlžovanie a zahusťovanie vlasov certifikovanou NEVIDITEĽNOU metódou v Bratislave. Šetrná metóda, ktorá neničí Vaše vlasy." },
    ],
  }),
  component: Predlzovanie,
});

const WIX = "https://static.wixstatic.com/media/";

const vyhody: (string | { lead: string; bold: string[]; tail: string })[] = [
  "Nevytrháva Vaše vlasy a neoslabuje vlasové korienky",
  "Nepoužívajú sa žiadne lepidlá ani teplo",
  "Šetrí vlasovú pokožku aj samotné vlasy",
  "Rýchla aplikácia aj bezbolestné následné posúvanie",
  "Rozdiel medzi napojenými a Vašimi vlasmi je úplne neviditeľný",
  "Napojené vlasy nevypadávajú (teda ich nezbierate všade po domácnosti)",
  "Nevzniká žiadne pramienkovanie",
  "Je neviditeľná aj pri vypnutí vlasov hore",
  {
    lead: "Vhodná aj pre krátke a jemné vlasy, či",
    bold: ["onko pacientky", "5 cm"],
    tail: ". Predlžovanie je vhodné na dĺžku vlasov klientky už od",
  },
];

function Predlzovanie() {
  return (
    <div className="overflow-x-hidden bg-blush text-mocha">
      <SiteNav />

      {/* HERO */}
      <div className="relative mt-[72px] overflow-hidden md:mt-[104px]">
        <div className="flex">
          {[0, 1, 2].map((i) => (
            <img
              key={i}
              src={`${WIX}eb5e78_1d2865fed2844535972a7fb4f2f1fd95~mv2.jpg`}
              alt=""
              className="w-1/3 block"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h1 className="break-words text-2xl font-normal uppercase tracking-wide text-primary-foreground sm:text-4xl md:text-[56px]">
            Zahusťovanie a Predlžovanie Vlasov
          </h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bg-white px-6 py-4 text-sm text-mocha/50 md:px-16">
        <Link to="/sluzby" className="hover:text-mocha transition-colors">Naše Služby</Link>
        <span className="mx-2">›</span>
        <span className="text-mocha">Predlžovanie a Zahusťovanie</span>
      </div>

      {/* INTRO */}
      <section className="bg-white px-6 py-16 text-center md:px-16 md:py-20">
        <div className="mx-auto max-w-[860px]">
          <h2 className="text-2xl font-normal leading-snug sm:text-3xl md:text-[40px] md:leading-snug">
            <span className="uppercase tracking-wide">Zahusťujeme a predlžujeme</span>{" "}
            vlasy certifikovanou metódou,{" "}
            ktorá neničí <span className="uppercase tracking-wide">Vaše</span> vlasy ani korienky vlasov.
          </h2>
          <p className="mx-auto mt-8 max-w-[520px] text-lg font-light leading-relaxed text-mocha/80 md:text-xl">
            Jej názov je <strong className="font-medium">INVISIBLE method</strong>{" "}
            <span className="text-mocha/60">(NEVIDITEĽNÁ metóda).</span>
          </p>
          <p className="mx-auto mt-6 max-w-[640px] text-lg font-light italic leading-relaxed text-mocha/75 sm:text-xl md:text-2xl">
            Výsledný efekt INVISIBLE METHOD/ Neviditeľnej metódy je nádherný a objemný – pritom vôbec nezaťažuje ani nepoškodzuje Vaše vlastné vlasy či korienky.
          </p>
        </div>
      </section>

      {/* VÝHODY */}
      <section className="bg-blush px-6 py-14 md:px-16 md:py-20">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-center text-3xl font-normal sm:text-4xl md:text-5xl">
            Výhody tejto <span className="italic-accent">metódy</span>
          </h2>
          <ul className="mx-auto mt-10 max-w-[640px] space-y-4">
            {vyhody.map((v, i) => (
              <li key={i} className="flex items-start gap-3 text-base leading-snug sm:text-lg">
                <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-mauve" />
                <span>
                  {typeof v === "string"
                    ? v
                    : (
                      <>
                        {v.lead} <strong className="font-medium">{v.bold[0]}</strong>
                        {v.tail} <strong className="font-medium">{v.bold[1]}</strong>
                      </>
                    )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ÚDRŽBA */}
      <section className="bg-mocha px-6 py-14 text-primary-foreground md:px-16 md:py-20">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-3xl font-normal sm:text-4xl md:text-5xl">
            <span className="italic-accent text-blush">Údržba</span>
          </h2>
          <p className="mx-auto mt-8 max-w-[620px] text-base font-light leading-relaxed sm:text-lg md:text-xl">
            Posúvať, teda prepojiť vlasy, je potrebné každé <strong className="font-medium text-blush">3 až 4 mesiace</strong> — závisí od toho, ako rýchlo rastú Vaše vlasy.
          </p>
          <p className="mx-auto mt-6 max-w-[620px] text-base font-light leading-relaxed sm:text-lg md:text-xl">
            Používame najkvalitnejšie vlasy na svete (nie sú ťažké ako napríklad ruské vlasy). Ich životnosť je až <strong className="font-medium text-blush">do 5 rokov</strong> — závisí aj od starostlivosti o ne.
          </p>
        </div>
      </section>

      {/* CENA */}
      <section className="bg-mauve px-6 py-14 text-center text-primary-foreground md:px-16 md:py-20">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-3xl font-normal sm:text-4xl md:text-5xl">
            <span className="italic-accent text-blush">Cena</span>
          </h2>
          <p className="mt-8 text-3xl font-light sm:text-4xl md:text-5xl">od 400 € do 2 000 €</p>
          <p className="mx-auto mt-4 max-w-[480px] text-base font-light leading-relaxed text-primary-foreground/80 md:text-lg">
            (vypočítava sa podľa požadovanej dĺžky, hustoty a farby vlasov)
          </p>
        </div>
      </section>

      {/* ODHADNITE CENU */}
      <section className="bg-mocha px-6 py-14 text-center text-primary-foreground md:px-16 md:py-20">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-3xl font-normal sm:text-4xl md:text-5xl">
            Pre odhad ceny <span className="italic-accent text-blush">na diaľku</span>
          </h2>
          <p className="mt-8 text-base font-light sm:text-lg md:text-xl">Prepošlite nám, prosím:</p>
          <ul className="mx-auto mt-4 max-w-[440px] space-y-2 text-left text-base font-light leading-relaxed sm:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-blush" />
              Vaše aktuálne foto vlasov, najlepšie zozadu
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-blush" />
              foto vlasov, aké sa Vám páčia
            </li>
          </ul>
          <Link
            to="/"
            hash="kontakt"
            className="mt-10 inline-flex h-12 items-center rounded-[300px] bg-blush px-10 text-[15px] font-medium uppercase tracking-[0.14em] text-mocha"
          >
            Napíšte nám
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-14 text-center">
        <h2 className="text-2xl font-normal sm:text-3xl md:text-4xl">
          Máte záujem? <span className="italic-accent text-mauve">Kontaktujte nás</span>
        </h2>
        <p className="mt-4 text-base text-mocha/70 sm:text-lg">Poprípade doporučujeme prísť na osobnú bezplatnú konzultáciu.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
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
