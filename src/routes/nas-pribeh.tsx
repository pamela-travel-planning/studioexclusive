import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTitle } from "@/components/PageTitle";

const LOGO =
  "https://static.wixstatic.com/media/eb5e78_b82300eb6e6544e9a8afd1e90ee1e1cd~mv2.png/v1/fill/w_199,h_76,al_c,q_90,enc_avif,quality_auto/white%20(1).png";

export const Route = createFileRoute("/nas-pribeh")({
  head: () => ({
    meta: [
      { title: "Náš Príbeh | STUDIO EXCLUSIVE" },
      { name: "description", content: "Príbeh STUDIO EXCLUSIVE sa začal v roku 2002 — špičková služba pre Vaše vlasy pod Tatrami a v Bratislave." },
      { property: "og:title", content: "Náš Príbeh | STUDIO EXCLUSIVE" },
      { property: "og:description", content: "Od roku 2002 prinášame špičkovú starostlivosť o vlasy." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

const paras = [
  "Vytvoriť na Slovensku pod Tatrami a neskôr v Bratislave špičkovú službu pre Vaše vlasy.",
  "Po viacročnej praxi v zahraničných salónoch sme boli konečne pripravení priniesť Vám túto službu aj na Slovensko.",
  "Pravidelne sa školíme v zahraničí, preto používame špičkové techniky ktoré sa dali získať iba z obrovskej chuti pracovať a stále sa zlepšovať vo svetových trendoch a technikách. ZÁKLAD sme dostali od prestížnych zahraničných hairmastrov.",
];

function Page() {
  return (
    <div className="overflow-x-hidden bg-background text-mocha">
      <SiteNav />
      <PageTitle title="Náš Príbeh" />

      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xl font-medium leading-relaxed md:text-2xl">
            Náš príbeh STUDIO EXCLUSIVE, sa začal už v roku 2001 po želaní
          </p>
          <div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-mocha/80 md:text-xl">
            {paras.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-mauve px-6 py-16 text-center text-primary-foreground md:py-20">
        <p className="italic-accent text-3xl md:text-4xl">S úctou tím</p>
        <img src={LOGO} alt="STUDIO EXCLUSIVE" className="mt-8 h-16 w-auto md:h-20" />
        <p className="mx-auto mt-8 max-w-[760px] text-lg leading-relaxed md:text-xl">
          Ak sa chcete stať súčasťou nášho tímu a máte vášeň pre vlasy,{" "}
          <Link to="/vasa-kariera" className="underline underline-offset-4 transition-opacity hover:opacity-70">
            napíšte nám
          </Link>
        </p>
      </section>

      <SiteFooter simple />
    </div>
  );
}
