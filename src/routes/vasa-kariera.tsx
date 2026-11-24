import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { ContactIcon } from "@/components/ContactIcon";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingPill } from "@/components/BookingPill";
import { PageTitle } from "@/components/PageTitle";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/vasa-kariera")({
  head: () => ({
    meta: [
      { title: "Vaša Kariéra | STUDIO EXCLUSIVE" },
      { name: "description", content: "Radi privítame do nášho tímu nových ľudí. Robíme akreditované aj klasické školenia." },
      { property: "og:title", content: "Vaša Kariéra | STUDIO EXCLUSIVE" },
      { property: "og:description", content: "Pridajte sa k tímu STUDIO EXCLUSIVE v Bratislave." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

const field =
  "h-[35px] rounded-[10px] bg-blush px-4 text-sm text-mocha placeholder:text-mocha outline-none";

function Page() {
  const [sent, setSent] = useState(false);

  return (
    <div className="overflow-x-hidden bg-blush text-mocha">
      <SiteNav />
      <PageTitle
        bold
        title="Radi privítame do nášho tímu nových šikovných ľudí"
        subtitle={
          <>
            <p className="font-light text-mocha/80">
              Ak Vás práca s vlasmi napĺňa, kontaktujte nás
            </p>
          </>
        }
      />

      <section className="bg-mauve px-6 py-14 md:py-16">
        <div className="mx-auto max-w-[695px]">
          {sent ? (
            <p className="py-10 text-center text-xl text-mocha">
              Ďakujeme, čoskoro sa vám ozveme.
            </p>
          ) : (
            <form
              className="grid gap-1.5 md:grid-cols-2"
              onSubmit={async (e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                try {
                  await submitContact({
                    data: {
                      form: "kariera",
                      name: `${f.get("first")} ${f.get("last")}`,
                      email: String(f.get("email")),
                      phone: String(f.get("phone")),
                      message: String(f.get("message")),
                    },
                  });
                  setSent(true);
                } catch {
                  alert("Správu sa nepodarilo odoslať, skúste to prosím znova.");
                }
              }}
            >
              <input name="first" required placeholder="Meno" maxLength={120} className={field} />
              <input name="last" required placeholder="Priezvisko" maxLength={120} className={field} />
              <input name="email" required type="email" placeholder="Email" maxLength={120} className={field} />
              <input name="phone" required type="tel" placeholder="Tel. kontakt" maxLength={120} className={field} />
              <textarea
                name="message"
                required
                placeholder="Priestor pre Váš text"
                maxLength={1000}
                rows={5}
                className="h-[130px] rounded-[10px] bg-blush px-4 py-3 text-sm text-mocha placeholder:text-mocha outline-none md:col-span-2"
              />
              <button className="mx-auto mt-8 h-[43px] w-[142px] rounded-[10px] bg-blush text-sm font-medium text-mocha md:col-span-2">
                Odoslať
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="px-6 pb-6 pt-14 text-center md:pb-8 md:pt-16">
        <a
          href="mailto:studio.exclusive@gmail.com"
          className="text-lg underline underline-offset-4 transition-opacity hover:opacity-70 md:text-xl"
        >
          studio.exclusive@gmail.com
        </a>
        <div className="mt-6 flex justify-center gap-3">
          <ContactIcon Icon={Instagram} href="https://www.instagram.com/studioexclusive.sk/" label="Instagram" />
          <ContactIcon Icon={Facebook} href="https://www.facebook.com/StudioExclusiveBratislava" label="Facebook" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blush px-6 py-14 text-center">
        <h2 className="text-2xl font-normal sm:text-3xl md:text-4xl">
          Máte záujem? <span className="italic-accent text-mauve">Kontaktujte nás</span>
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <BookingPill />
          <a
            href="tel:+421908653820"
            className="inline-flex h-12 items-center rounded-[300px] border border-mocha px-8 text-[15px] tracking-wide text-mocha"
          >
            +421 908 653 820
          </a>
        </div>
      </section>

      <SiteFooter simple />
    </div>
  );
}
