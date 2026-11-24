import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingPill } from "@/components/BookingPill";
import { Bullets } from "@/components/SubpageHero";

export const Route = createFileRoute("/starostlivost")({
  head: () => ({
    meta: [
      { title: "Starostlivosť o napojené vlasy | STUDIO EXCLUSIVE" },
      { name: "description", content: "Ako sa starať o vlasy napojené neviditeľnou metódou — česanie, umývanie a čo nikdy nerobiť." },
      { property: "og:title", content: "Starostlivosť o napojené vlasy | STUDIO EXCLUSIVE" },
      { property: "og:description", content: "Rady k česaniu, umývaniu a starostlivosti o napojené vlasy." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

const sections = [
  {
    title: "Česanie",
    bg: "bg-blush",
    items: [
      "Vlasy si prečesávajte každý deň kefou zakúpenou u nás v STUDIO EXCLUSIVE, ráno aj večer a to tak, aby ste ju cítili až na vlasovej pokožke.",
      "Neplatí to, ak máte vlasy kučeravé a chcete si zachovať ich prirodzené kučery. Vtedy vlasy poriadne rozčesávame iba pri umývaní vlasov hneď po nanesení kondicionéru v mokrom stave.",
      "Je potrebné prejsť kefou cez našitý spoj a to z vrchnej aj zo spodnej strany. /z dôvodu, aby sa predišlo zanedbaniu a následnému zamotaniu Vašich vlasov s napojenými/",
      "Ak sa Vám vyskytne niekde nejaký uzlíček, treba ho vždy pekne trpezlivo rozčesať, aby sa neskôr zbytočne nezväčšoval.",
    ],
  },
  {
    title: "Umývanie",
    bg: "bg-white",
    items: [
      "Vlasy si umývajte najlepšie profesionálnym šampónom - radi Vám poradíme v našom štúdiu, ktorý je najvhodnejší podľa kvality a odtieňa aj Vašich aj napojených vlasov.",
      "Pri umývaní vlasov sa povenujte viac masáži pokožky pod spojom, tie miesta následne aj o čosi dlhšie vyplachujte vodou /keďže v týchto miestach sú vlasy najhustejšie/.",
      "Po umytí naneste ošetrenie - profesionálny kondicionér na dĺžky a konce vlasov.",
    ],
  },
  {
    title: "Čo nikdy nerobiť",
    bg: "bg-blush",
    items: [
      "Nikdy nechoďte spať s mokrými vlasmi.",
      "Nikdy nezanedbávajte česanie a ošetrovanie či svojich, alebo napojených vlasov.",
      "Nesnažte sa do spojov zasahovať doma, alebo v iných kaderníctvach, kde nemajú certifikát na túto metódu /môžte si výrazne poškodiť napojené a aj Vaše vlasy/.",
      "Ak idete k moru - zvýšte starostlivosť o vlasy - každý deň si ich dôkladne vymyte od morskej vody, umyte šampónom a následne ich oštrite kondicionérom, maskou, regeneračným a ochranným mliečkom, najlepšie zakúpenými v STUDIO EXCLUSIVE a nakoniec starostlivo prečešte v mokrom prípadne aj suchom stave.",
    ],
  },
  {
    title: "Čo očakávať po napojení",
    bg: "bg-white",
    items: [
      "Hneď po napojení vlasov môžete mať citlivejšiu pokožku po dobu 3 dni.",
      "V tomto čase nedoporučujeme vypínať vlasy do hora.",
      "V prípade vyššej citlivosti, pomáha si vlasy umyť.",
      "Je to u každej klientky individuálne.",
    ],
  },
];

function Page() {
  return (
    <div className="overflow-x-hidden bg-blush text-mocha">
      <SiteNav />

      {/* HERO — text only, no pictures */}
      <div className="mt-[72px] bg-mocha px-6 py-20 text-center md:mt-[104px] md:py-32">
        <h1 className="mx-auto max-w-[900px] break-words text-3xl font-normal uppercase tracking-wide text-primary-foreground sm:text-4xl md:text-[56px]">
          Starostlivosť o napojené vlasy
        </h1>
        <p className="mx-auto mt-6 max-w-[760px] text-base font-medium leading-relaxed text-blush md:text-lg">
          INVISIBLE method/neviditeľná metóda zahusťovania a predlžovania vlasov
        </p>
      </div>

      {/* BREADCRUMB */}
      <div className="bg-white px-6 py-4 text-sm text-mocha/50 md:px-16">
        <Link to="/sluzby" className="transition-colors hover:text-mocha">Naše Služby</Link>
        <span className="mx-2">›</span>
        <span className="text-mocha">Starostlivosť</span>
      </div>

      {/* INTRO */}
      <section className="bg-white px-6 py-14 md:px-16">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-lg leading-relaxed md:text-xl">
            Radi by sme Vám poskytli zopár informácií, ako sa starať o vlasy napojené touto metódou.
          </p>
        </div>
      </section>

      {/* SECTIONED ADVICE */}
      {sections.map((s) => (
        <section key={s.title} className={`${s.bg} px-6 py-14 md:px-16`}>
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-2xl font-normal uppercase tracking-wide sm:text-3xl md:text-4xl">
              {s.title}
            </h2>
            <Bullets items={s.items} />
          </div>
        </section>
      ))}

      {/* CALLOUT */}
      <section className="bg-mauve px-6 py-14 text-center text-primary-foreground md:px-16">
        <div className="mx-auto max-w-[660px]">
          <p className="text-lg leading-relaxed md:text-xl">
            Na prepojenie vlasov je potrebné prísť do nášho štúdia <strong>každé 3–4 mesiace</strong> — je to individuálne u každej klientky inak.
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
