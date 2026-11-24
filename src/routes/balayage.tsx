import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingPill } from "@/components/BookingPill";

export const Route = createFileRoute("/balayage")({
  head: () => ({
    meta: [
      { title: "Balayage | STUDIO EXCLUSIVE" },
      { name: "description", content: "Balayage — prírodne vyzerajúce melírovanie vo voľnom štýle. Prirodzený prechod farby, žiadne ostré línie, minimálna údržba." },
    ],
  }),
  component: Balayage,
});

const WIX = "https://static.wixstatic.com/media/";

const vyhody = [
  "Kvalita vlasov po tejto technike je výborná, vlasy ostanú zdravé a lesklé",
  "Nie je potrebné časté dofarbovanie, lebo odrastajúce vlasy pôsobia nerušivo",
  "Vlasy vyzerajú prirodzene a luxusne",
];

function Balayage() {
  return (
    <div className="overflow-x-hidden bg-blush text-mocha">
      <SiteNav />

      {/* HERO */}
      <div className="relative mt-[72px] overflow-hidden md:mt-[104px]">
        <div className="flex">
          {[0, 1, 2].map((i) => (
            <img
              key={i}
              src={`${WIX}eb5e78_1df78630f6734e2abaa27b3d17a0ca0f~mv2.jpeg`}
              alt=""
              className="w-1/3 block"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h1 className="break-words text-3xl font-normal uppercase tracking-wide text-primary-foreground sm:text-4xl md:text-[56px]">
            Balayage
          </h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bg-white px-6 py-4 text-sm text-mocha/50 md:px-16">
        <Link to="/sluzby" className="hover:text-mocha transition-colors">Naše Služby</Link>
        <span className="mx-2">›</span>
        <span className="text-mocha">Balayage</span>
      </div>

      {/* INTRO */}
      <section className="bg-white px-6 py-14 md:px-16">
        <div className="mx-auto max-w-[760px] space-y-6">
          <p className="text-lg leading-relaxed md:text-xl">
            <strong>BALAYAGE</strong> je novodobá francúzska technika farbenia, po ktorej vlasy pôsobia veľmi prirodzene a luxusne.
          </p>
          <p className="text-lg leading-relaxed md:text-xl">
            Táto technika farbenia sa dá prispôsobiť na všetky odtiene a kombinácie farieb.
          </p>
          <p className="text-lg leading-relaxed md:text-xl">
            Taktiež na rôzne dĺžky vlasov.
          </p>
        </div>
      </section>

      {/* VÝHODY */}
      <section className="bg-blush px-6 py-14 md:px-16">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-2xl font-normal sm:text-3xl md:text-4xl">
            Výhody tejto <span className="italic-accent">techniky</span>
          </h2>
          <ul className="mt-8 space-y-4">
            {vyhody.map((v) => (
              <li key={v} className="flex items-start gap-3 text-lg leading-snug">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-mauve" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MELÍR vs BALAYAGE */}
      <section className="bg-mocha px-6 py-14 text-primary-foreground md:px-16">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-2xl font-normal sm:text-3xl md:text-4xl">
            MELÍR vs <span className="italic-accent">BALAYAGE</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed md:text-xl">
            Po melírovaní sú vlasy suché a lámavé. Prechod medzi vyrastajúcimi vlasmi je viditeľný, častokrát akoby odseknutý.
          </p>
        </div>
      </section>

      {/* ÚDRŽBA + CENA */}
      <section className="bg-white px-6 py-14 md:px-16">
        <div className="mx-auto grid max-w-[760px] gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium uppercase tracking-wide">Údržba</h3>
            <p className="mt-4 text-lg font-light leading-relaxed text-mocha/80">
              Balayage vyžaduje <strong>menej údržby</strong> ako klasické melírovanie. Odporúčame navštíviť salón každých <strong>3 až 6 mesiacov</strong> podľa toho, ako rýchlo rastú Vaše vlasy a aký kontrast preferujete.
            </p>
            <p className="mt-4 text-lg font-light leading-relaxed text-mocha/80">
              Pre zachovanie farebného efektu Vám radi poradíme v našom štúdiu.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium uppercase tracking-wide">Cena</h3>
            <p className="mt-4 text-base leading-relaxed text-mocha/80">
              Cena je individuálna, pre presnejší výpočet nám pošlite:
            </p>
            <ul className="mt-2 space-y-1 text-base text-mocha/80">
              <li>– foto Vašich aktuálnych vlasov na dennom svetle</li>
              <li>– foto vlasov, aké sa Vám páčia</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <section className="bg-mauve px-6 py-14 text-center text-primary-foreground md:px-16">
        <div className="mx-auto max-w-[660px]">
          <p className="text-lg leading-relaxed md:text-xl">
            Balayage je <strong>umenie prispôsobené každej klientke na mieru</strong>
          </p>
          <p className="mt-6 text-lg leading-relaxed md:text-xl">
            Radi Vám navrhneme odtieň alebo kombináciu farieb k Vaším prirodzeným tónom vlasov aj pleti.
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
