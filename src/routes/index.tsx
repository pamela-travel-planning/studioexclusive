import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Instagram, Facebook, Phone, Mail, CalendarCheck } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { ContactIcon, ContactMark } from "@/components/ContactIcon";
import { SiteFooter } from "@/components/SiteFooter";
import { submitContact } from "@/lib/contact.functions";

const HERO_VIDEO = "https://video.wixstatic.com/video/eb5e78_44709926881e4fb08073e0c0633f7f2b/1080p/mp4/file.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STUDIO EXCLUSIVE – Luxusné zahustenie a predĺženie vlasov Bratislava" },
      { name: "description", content: "Luxusný kadernícky salón v Bratislave. Predlžovanie, zahusťovanie, balayage, výkup a ošetrenie vlasov." },
      { property: "og:title", content: "STUDIO EXCLUSIVE – Koruna Krásy" },
      { property: "og:description", content: "Zažite zázrak luxusného zahustenia a predĺženia vlasov v Bratislave." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WIX = "https://static.wixstatic.com/media/";

const services = [
  { t: "Predlžovanie / Zahusťovanie", d: "Výsledný efekt INVISIBLE METHOD/ Neviditeľnej metódy je nádherný a objemný – pritom vôbec nezaťažuje ani nepoškodzuje Vaše vlastné vlasy či korienky.", b: "Viac info", to: "/predlzovanie", img: `${WIX}eb5e78_1d2865fed2844535972a7fb4f2f1fd95~mv2.jpg/v1/fill/w_480,h_520,al_c,q_85/IMG_6040.jpg` },
  { t: "Výkup vlasov", d: "Odkúpime Vaše nefarbené, prirodzené vlasy s dĺžkou minimálne 35 cm. Strih je u nás bezplatný.", b: null, to: null, img: `${WIX}eb5e78_4c1b9cb94a3f4535a03fe5a2ed3afde6~mv2.jpeg/v1/crop/x_95,y_509,w_554,h_595/fill/w_480,h_520,al_c,q_85/Blonde_hair.jpeg` },
  { t: "Balayage", d: "Balayage je najnovšia farbiaca technika, vďaka ktorej vlasy pôsobia prirodzene, zdravo a luxusne – a to aj po úplnom presvetlení.", b: "Viac info", to: "/balayage", img: `${WIX}eb5e78_1df78630f6734e2abaa27b3d17a0ca0f~mv2.jpeg/v1/fill/w_480,h_520,al_c,q_85/Rock_Blond.jpeg` },
  { t: "Ošetrenie", d: "Enzymoterapia je organická regenerácia vlasov – novinka na slovenskom trhu. Vlasy získajú viditeľný lesk, silu a pružnosť.", b: "Viac info", to: "/osetrenenie", img: `${WIX}eb5e78_f45ec5f4cbea47fa843de6f532feb036~mv2.jpeg/v1/fill/w_480,h_520,al_c,q_85/Transform.jpeg` },
];

const circleImgs = [
  `${WIX}eb5e78_f97a53bef290427ea840389f602208b3~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_398b10aa5c0b4b1288414ac658d16e5c~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_143376bffea547909444ccf8fb230e9e~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_05b3a275832b488bb9bd478c445c0fc7~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_02dfc8a4c0ea49c3bf87a27a154272b0~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_f9200e86547d462482e56709e53cef2b~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_385d945dc42043b3a09a2004475d4bbe~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_d6d7a0608bc0429ab26c222d24ee20c6~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_1795092c143c4befa0efec6fd7546e8f~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_a293841e7f094d5e844b290cb35018c6~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_325c279230454b71911c752d50dde510~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_81faed62a0ff4dd3acd48f408bbc7e14~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_a4f07dba511e49ae83732f1585bdbeaf~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_efff523a297e4a729b1cd7477bee0e87~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_abb80542ebc14bf58f7fe627c615cad1~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
  `${WIX}eb5e78_5b7e31f203e24f33af0ae294c812903f~mv2.jpg/v1/fill/w_370,h_370,al_c,q_85/photo.jpg`,
];

const MAG1 = `${WIX}eb5e78_39854689a2ec412ca7a7670f422a1c14~mv2.png/v1/fill/w_580,h_840,al_c,q_85/MojeZdravie1.png`;
const MAG2 = `${WIX}eb5e78_a9da7ba53f38479aa9ea3968de42c997~mv2.png/v1/fill/w_550,h_840,al_c,q_85/MojeZdravie2.png`;

function NapisaliONas() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section className="pt-12">
      <h2 className="mx-auto max-w-[940px] px-5 text-center text-4xl sm:text-5xl lg:text-[72px]">
        <span className="text-primary-foreground">Napísali</span> <span className="italic-accent text-mocha">o Nás</span>
      </h2>
      <div className="mx-auto mt-8 grid max-w-[1080px] grid-cols-2 items-center gap-4 rounded-[24px] border border-mauve/60 bg-white mx-5 px-5 py-8 shadow-xl sm:mx-auto sm:gap-6 sm:rounded-[32px] sm:px-8 sm:py-10 xl:grid-cols-[300px_1fr_300px] xl:gap-12 xl:px-16 xl:py-14">
        <button onClick={() => setLightbox(MAG1)} className="cursor-zoom-in overflow-hidden rounded-[8px] border border-mauve/50 shadow-md focus:outline-none">
          <img src={MAG1} alt="Moje Zdravie" className="aspect-[3/4] w-full object-cover object-top" />
        </button>
        <div className="order-first col-span-2 text-center xl:order-none xl:col-span-1">
          <h3 className="italic-accent text-2xl text-mocha sm:text-3xl xl:text-[40px]">Moje Zdravie</h3>
          <p className="mt-1 text-xs uppercase tracking-widest text-mauve">časopis</p>
          <div className="mx-auto mt-5 h-px w-16 bg-mauve/70 sm:mt-7" />
          <p className="mx-auto mt-5 max-w-[46ch] text-[15px] font-light leading-relaxed text-mocha/85 sm:mt-7 sm:text-lg">
            Veľmi si vážime, že sme mohli byť súčasťou článku v magazíne Moje Zdravie, ktorý otvoril dôležitú tému ženského sebavedomia počas onkologickej liečby.
          </p>
          <p className="mx-auto mt-4 max-w-[46ch] text-[15px] font-light leading-relaxed text-mocha/85 sm:mt-5 sm:text-lg">V STUDIO EXCLUSIVE veríme, že vlasy nie sú len o vzhľade, ale aj o pocite ženskosti, sily a identity.</p>
        </div>
        <button onClick={() => setLightbox(MAG2)} className="cursor-zoom-in overflow-hidden rounded-[8px] border border-mauve/50 shadow-md focus:outline-none">
          <img src={MAG2} alt="Moje Zdravie" className="aspect-[3/4] w-full object-cover object-top" />
        </button>
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
            aria-label="Zavrieť"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            alt="Moje Zdravie"
            className="max-h-[90vh] max-w-[90vw] rounded-[16px] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

type Service = (typeof services)[number];

function ServiceCard({ s }: { s: Service }) {
  const [open, setOpen] = useState(false);
  const [needs, setNeeds] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (open) return;
    const check = () => {
      const el = ref.current;
      if (el && el.scrollHeight - el.clientHeight > 4) setNeeds(true);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [open, s.d]);

  return (
    <div className="flex items-start gap-4 sm:gap-7 md:justify-center min-[1440px]:justify-start">
      <div className="relative h-[176px] w-[118px] shrink-0 overflow-hidden rounded-[14px] sm:h-[217px] sm:w-[307px] sm:rounded-[4px] xl:h-[221px]">
        <img src={s.img} alt={s.t} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="flex min-w-0 flex-col sm:max-w-[295px]">
        <p className="min-h-[40px] text-base font-medium uppercase leading-tight sm:min-h-[51px] sm:text-xl">{s.t}</p>
        <p
          ref={ref}
          className={`mt-1.5 min-h-[60px] text-sm font-light leading-snug text-mocha/75 sm:mt-2 sm:min-h-[72px] sm:text-[17px] xl:min-h-[94px] ${open ? "" : "line-clamp-3 xl:line-clamp-4"}`}
        >
          {s.d}
        </p>
        <div className="min-h-[22px] pt-1 xl:min-h-0">
          {needs && (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="flex w-fit items-center gap-1.5 text-sm leading-none font-medium text-mocha/80 transition-colors hover:text-mocha sm:text-[17px] xl:hidden"
            >
              {open ? "Menej" : "Čítať ďalej"}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
            </button>
          )}
        </div>
        <div className="mt-auto flex min-h-[48px] items-center pt-3 sm:min-h-[64px] sm:pt-6">
          {s.b && (s.to ? (
            <Link to={s.to as never} className="inline-flex h-9 items-center justify-center rounded-[300px] bg-mocha px-5 text-[13px] tracking-wide text-primary-foreground sm:h-10 sm:px-6 sm:text-[15px]">{s.b}</Link>
          ) : (
            <a href="#kontakt" className="inline-flex h-9 items-center justify-center rounded-[300px] bg-mocha px-5 text-[13px] tracking-wide text-primary-foreground sm:h-10 sm:px-6 sm:text-[15px]">{s.b}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [sent, setSent] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);
  const scrollCircles = (dir: "left" | "right") => {
    const el = circleRef.current;
    if (el) el.scrollBy({ left: dir === "right" ? 220 : -220, behavior: "smooth" });
  };
  return (
    <div className="overflow-x-hidden bg-blush text-mocha">
      <SiteNav />

      {/* HERO */}
      <section className="relative mt-[72px] flex h-[calc(100svh-72px)] min-h-[500px] items-center overflow-hidden bg-ink md:mt-[104px] md:h-[830px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: "scale(1.2) translateX(2%)" }}
          src={HERO_VIDEO} autoPlay muted loop playsInline
        />
        <div className="relative z-10 mx-auto w-full max-w-[940px] px-5 pb-28 text-center text-primary-foreground md:pb-40">
          <h1 className="text-5xl font-normal leading-none sm:text-6xl md:text-7xl lg:text-[96px]">
            Koruna <span className="italic-accent text-[1.15em] text-blush">Krásy</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[26ch] text-base font-light leading-snug sm:text-xl md:mt-6 md:text-2xl lg:text-[30px]">Zažite zázrak Luxusného Zahustenia a Predĺženia vlasov</p>
          <div className="mt-7 flex justify-center sm:mt-10">
            <Link
              to="/konzultacia"
              className="inline-flex h-11 items-center justify-center gap-3 rounded-[300px] border border-blush bg-blush px-7 text-xs font-medium uppercase tracking-[0.18em] text-mocha sm:h-[50px] sm:px-9 md:px-11"
            >
              <CalendarCheck className="h-4 w-4 shrink-0 text-mocha" strokeWidth={1.25} />
              <span className="-mr-[0.18em] whitespace-nowrap">Objednajte sa online</span>
            </Link>
          </div>
        </div>
        <svg className="absolute -bottom-[2px] left-0 z-10 h-[20%] w-full sm:h-[28%]" viewBox="0 0 1920 260" preserveAspectRatio="none">
          <path d="M0,0 C500,40 900,120 1300,150 C1600,170 1800,150 1920,140 L1920,264 L0,264 Z" fill="#C2B2B4" opacity="0.55" />
          <path d="M0,40 C500,70 900,140 1300,170 C1600,190 1800,175 1920,170 L1920,264 L0,264 Z" fill="#C2B2B4" opacity="0.8" />
          <path d="M0,70 C500,100 900,170 1300,200 C1600,220 1800,205 1920,205 L1920,264 L0,264 Z" fill="#FADDDD" />
        </svg>
      </section>

      {/* SLUŽBY */}
      <section className="relative z-20 -mt-8 px-5 pb-10 pt-10 sm:pt-11 lg:pt-12">
        <h2 className="text-center text-4xl sm:text-5xl lg:text-[72px]">
          <span className="text-primary-foreground">Naše</span> <span className="italic-accent">Služby</span>
        </h2>
        <div className="mx-auto mt-12 grid max-w-[1390px] gap-x-16 gap-y-10 sm:mt-14 sm:gap-x-20 sm:gap-y-12 md:mt-16 min-[1440px]:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.t} s={s} />
          ))}
        </div>
      </section>

      <div aria-hidden="true" className="mx-auto mt-14 h-px w-full max-w-[220px] bg-mocha/60" />

      {/* NAPÍSALI O NÁS */}
      <NapisaliONas />

      {/* ZAHUSŤOVANIE */}
      <svg className="relative -mb-[2px] block w-full" viewBox="0 0 1920 80" preserveAspectRatio="none" style={{ height: 80 }}>
        <path d="M0,80 Q960,-40 1920,80 L1920,84 L0,84 Z" fill="#503C35" />
      </svg>
      <section className="bg-mocha px-5 pb-14 text-center text-primary-foreground">
        <h2 className="text-4xl leading-tight sm:text-5xl lg:text-[72px]">Zahusťovanie<br /><span className="italic-accent text-blush">a Predlžovanie</span></h2>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-[30px]">Metódou, ktorá konečne neničí vlasy</p>
        <div className="relative mx-auto mt-10 max-w-[1760px] px-10">
          <button
            onClick={() => scrollCircles("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-blush/20 text-primary-foreground hover:bg-blush/40 transition-colors"
            aria-label="Predchádzajúce"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div ref={circleRef} className="flex gap-4 overflow-x-auto sm:gap-7 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {circleImgs.map((src, i) => <img key={i} src={src} alt="" className="h-[110px] w-[110px] shrink-0 rounded-full sm:h-[185px] sm:w-[185px] object-cover" />)}
          </div>
          <button
            onClick={() => scrollCircles("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-blush/20 text-primary-foreground hover:bg-blush/40 transition-colors"
            aria-label="Nasledujúce"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <Link to="/predlzovanie" className="mt-10 inline-flex min-h-10 items-center rounded-xl bg-blush px-5 py-2 text-[13px] sm:mt-16 sm:px-6 sm:text-[15px] text-mocha">Viac o Metóde Predlžovania a Zahustenia</Link>

        {/* BRATISLAVA */}
        <div aria-hidden="true" className="mx-auto mt-16 h-px w-full max-w-[220px] bg-primary-foreground/30 sm:hidden" />
        <h2 className="mt-12 text-4xl sm:text-5xl lg:text-[72px]">Nájdete nás <span className="italic-accent text-blush">v Bratislave</span></h2>
        <div className="mt-6 flex justify-center gap-3 sm:gap-4">
          <ContactIcon Icon={Instagram} href="https://www.instagram.com/studioexclusive.sk/" label="Instagram" tone="dark" />
          <ContactIcon Icon={Facebook} href="https://www.facebook.com/StudioExclusiveBratislava" label="Facebook" tone="dark" />
        </div>
        <div className="mx-auto mt-8 max-w-[1200px] overflow-hidden rounded-[24px]">
          <iframe title="Mapa" className="h-56 w-full sm:h-72 md:h-[360px]" loading="lazy" src="https://www.google.com/maps?q=N%C3%A1mestie+SNP+19%2C+811+01+Bratislava&output=embed" />
        </div>
      </section>

      {/* OBJEDNAJTE SA – ellipse */}
      <section className="relative bg-mocha">
        <div className="relative mx-[-30%] rounded-[50%] bg-mauve px-[32%] py-20 text-center md:mx-[-10%] md:px-[14%] md:py-24">
          <h2 className="text-4xl sm:text-5xl lg:text-[72px]"><span className="italic-accent text-blush">Objednajte sa</span> <span className="text-primary-foreground">tu</span></h2>
          <p className="mx-auto mt-6 max-w-[520px] text-center text-base font-light leading-relaxed text-primary-foreground sm:text-lg">Pondelok – Piatok : 9:30 – 15:30</p>
          <div className="mx-auto mt-10 w-fit max-w-full rounded-[50px] border border-primary-foreground/70 px-6 py-10 lg:px-16">
            <div className="flex flex-col items-stretch gap-6 text-center lg:flex-row lg:items-center lg:justify-center lg:gap-14">
              <div className="flex shrink-0 items-center justify-center gap-4">
                <ContactMark Icon={CalendarCheck} />
                <Link to="/konzultacia" className="flex h-9 w-48 items-center justify-center rounded-[300px] bg-blush text-sm font-medium text-mocha transition-opacity hover:opacity-85">
                  Objednajte sa online
                </Link>
              </div>
              <div className="flex shrink-0 items-center justify-center gap-4">
                <ContactMark Icon={Mail} />
                <a href="mailto:studio.exclusive@gmail.com?subject=Objedn%C3%A1vka%20vlasy" className="flex h-9 w-48 items-center justify-center rounded-[300px] bg-blush text-sm font-medium">Email</a>
              </div>
              <div className="flex shrink-0 items-center justify-center gap-4">
                <ContactMark Icon={Phone} />
                <a href="tel:+421908653820" className="flex h-9 w-48 items-center justify-center rounded-[300px] bg-blush text-sm font-medium">+421 908 653 820</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="bg-mocha px-5 pb-8 pt-12 text-center text-primary-foreground">
        <h2 className="text-4xl sm:text-5xl lg:text-[72px]"><span className="italic-accent text-blush">Kontaktujte</span> nás</h2>
        <p className="mt-1 text-xl sm:text-2xl lg:text-[30px]">sme tu pre Vás</p>
        {sent ? (
          <p className="py-16 text-xl text-blush">Ďakujeme, čoskoro sa vám ozveme.</p>
        ) : (
          <form className="mx-auto mt-10 flex max-w-[695px] flex-col gap-1.5" onSubmit={async (e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            try {
              await submitContact({ data: { form: "kontakt", name: String(f.get("name")), email: String(f.get("email")), phone: String(f.get("phone")), message: String(f.get("message") ?? "") } });
              setSent(true);
            } catch { alert("Správu sa nepodarilo odoslať, skúste to prosím znova."); }
          }}>
            {[["Vaše meno *", "text", "name"], ["Email *", "email", "email"], ["Tel. kontakt *", "tel", "phone"]].map(([p, t, n]) => (
              <input key={p} name={n} required type={t} placeholder={p} maxLength={120} className="h-[35px] rounded-[10px] bg-blush px-4 text-sm text-mocha placeholder:text-mocha outline-none" />
            ))}
            <textarea name="message" placeholder="Vaša správa pre nás" maxLength={1000} rows={5} className="h-[130px] rounded-[10px] bg-blush px-4 py-3 text-sm text-mocha placeholder:text-mocha outline-none" />
            <button className="mx-auto mt-8 h-[43px] w-[142px] rounded-[10px] bg-blush text-sm font-medium text-mocha">Odoslať</button>
          </form>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
