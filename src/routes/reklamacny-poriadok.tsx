import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTitle } from "@/components/PageTitle";

export const Route = createFileRoute("/reklamacny-poriadok")({
  head: () => ({
    meta: [
      { title: "Reklamačný Poriadok | STUDIO EXCLUSIVE" },
      { name: "description", content: "Reklamačný poriadok STUDIO EXCLUSIVE, Nám. SNP 19, Bratislava — povinnosti prevádzky a podmienky reklamácie." },
      { property: "og:title", content: "Reklamačný Poriadok | STUDIO EXCLUSIVE" },
      { property: "og:description", content: "Podmienky reklamácie kaderníckych služieb STUDIO EXCLUSIVE." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

const rules = [
  "Vykonávať svoje služby iba odborne vyškoleným personálom, ktorí vlastní príslušné oprávnenie na výkon svojej profesie.",
  "Vykonávať požadovanú službu zodpovedne, podľa správnych technologických postupov, prislúchajúcich konkrétnemu pracovnému úkonu s materiálmi, výrobkami k tomu určenými a ktoré neprekročili dobu záruky a podliehajúcimi normám EU.",
  "Zákazník je povinný vo vlastnom záujme informovať osobu poskytujúcu služby na dôležité zdravotné problémy, ktoré by mohli mať vplyv na kvalitu poskytovanej služby a trvanlivosť a priebeh výkonu príslušnej služby. Kontraindikáciami sú napríklad diabetes, užívanie antibiotík, kortizónu, tehotenstvo, alergie, dojčenie, ľahká tvorba hematómu, zapálená pokožka, otvorené rany.",
  "Ak má zákazník poškodené vlasy, nechty alebo pleť, je vopred oboznámený s možnosťou, že nasledujúci zásah môže ale nemusí byť 100%, kvôli predošlému poškodeniu vlasov, alebo pokožky.",
  "Dodržanie správneho technologického postupu sa prejavuje okamžite, najneskôr však do 24 hodín. Reklamácia na nedodržanie technologického postupu je možná len do nasledujúceho dňa po vykonaní služby.",
  "Zákazník bol pred začatím vykonávania služby oboznámený s následnou domácou starostlivosťou a s možnosťou prípadnej reklamácie.",
  "Za správnu manipuláciu a dodržanie doporučených pokynov v nasledujúcich dňoch preberá zodpovednosť zákazník. Neskoršia reklamácia nie je možná vzhľadom na fakt, že je ťažké preukázať alebo vylúčiť nesprávnu alebo nevhodnú starostlivosť zákazníka.",
  "Pracovník prevádzky je povinný vydať zákazníkovi pri reklamácií potvrdenie.",
  "Pracovník prevádzky je povinný viesť evidenciu reklamácií a predložiť ju na požiadanie orgánu dozoru na nazretie. Evidencia o reklamácií musí obsahovať informácie o dátume uplatnenia reklamácie a spôsobe vybavenia reklamácie.",
  "Zákazník si vykonanú službu starostlivo prezrie pred zaplatením. Zaplatením za službu sa vzdáva nároku na reklamáciu estetického vzhľadu služby.",
];

function Page() {
  return (
    <div className="overflow-x-hidden bg-background text-mocha">
      <SiteNav />
      <PageTitle title="Reklamačný Poriadok" />

      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-[760px] text-lg leading-relaxed">
          <p className="text-2xl font-medium uppercase tracking-[0.04em]">STUDIO EXCLUSIVE</p>
          <p className="mt-5">
            <strong>Prevádzka:</strong>
            <br />
            Nám. SNP 19, budova City Gate, 81101 Bratislava
          </p>
          <p className="mt-6 font-light text-mocha/80">
            Prevádzka poskytujúca služby starostlivosti o ľudské telo, v tomto pripade kadernícke
            služby, a služby spojené so skrášľovaním ľudského tela musia mať platné živnostenské
            oprávnenie.
          </p>

          <h2 className="mt-12 text-xl font-medium uppercase tracking-[0.06em]">
            Povinnosti prevádzky:
          </h2>
          <ol className="mt-6 space-y-5 border-t border-mauve/50 pt-8">
            {rules.map((r, i) => (
              <li key={i} className="flex gap-4 font-light text-mocha/80">
                <span className="w-7 shrink-0 font-medium text-mocha">{i + 1}.</span>
                <span>{r}</span>
              </li>
            ))}
          </ol>

          <p className="mt-10 border-t border-mauve/50 pt-8 font-medium">
            Reklamačný poriadok s platnosťou a účinnosťou od 01.01.2021
          </p>
        </div>
      </section>

      <SiteFooter simple />
    </div>
  );
}
