import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTitle } from "@/components/PageTitle";

const BOOKING_URL = "https://app.acuityscheduling.com/schedule.php?owner=40753252&locale=sk";

export const Route = createFileRoute("/konzultacia")({
  head: () => ({
    meta: [
      { title: "Objednajte sa online | STUDIO EXCLUSIVE Bratislava" },
      {
        name: "description",
        content:
          "Objednajte sa online do STUDIO EXCLUSIVE Bratislava — vyberte si službu a termín, ktorý Vám vyhovuje.",
      },
      { property: "og:title", content: "Objednajte sa online | STUDIO EXCLUSIVE Bratislava" },
      {
        property: "og:description",
        content:
          "Objednajte sa online do STUDIO EXCLUSIVE Bratislava — vyberte si službu a termín, ktorý Vám vyhovuje.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="overflow-x-hidden bg-background text-mocha">
      <SiteNav />
      <PageTitle
        title={
          <span className="normal-case">
            <span className="italic-accent">Objednajte sa</span> online
          </span>
        }
        subtitle={
          <>
            <p className="font-medium uppercase tracking-[0.12em]">
              Vyberte si službu a termín
            </p>
            <p className="font-light text-mocha/80">
              Vyberte si službu, o ktorú máte záujem, a termín, ktorý Vám vyhovuje.
            </p>
            <p>📍 Námestie SNP 19, 811 01 Bratislava</p>
          </>
        }
      />

      <section className="bg-mauve px-4 py-10 sm:px-6 md:py-14">
        <BookingFrame />
        <p className="mx-auto mt-6 max-w-[1000px] text-center text-sm font-light text-primary-foreground/80">
          Ak sa Vám kalendár nezobrazí,{" "}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            otvorte si ho priamo
          </a>
          .
        </p>
      </section>

      <SiteFooter simple />
    </div>
  );
}

const ACUITY_ORIGIN = "https://app.acuityscheduling.com";

function BookingFrame() {
  const [height, setHeight] = useState(900);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== ACUITY_ORIGIN) return;
      if (typeof event.data !== "string") return;
      const match = /^sizing:(\d+)$/.exec(event.data.trim());
      if (!match) return;
      const next = Number(match[1]);
      if (Number.isFinite(next) && next > 0) {
        setHeight(Math.max(next + 2, 480));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      title="Online objednanie – STUDIO EXCLUSIVE"
      src={BOOKING_URL}
      loading="lazy"
      style={{ height }}
      className="mx-auto block w-full max-w-[1000px] border-0"
    />
  );
}
