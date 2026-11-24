import { Link } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";

/**
 * Shared "Objednajte sa online" pill used in the closing "Máte záujem?" band of
 * every service subpage. Same calendar symbol + label as the hero and the
 * "Objednajte sa tu" oval on the homepage, sized to match the phone / email
 * pills it sits next to.
 */
export function BookingPill() {
  return (
    <Link
      to="/konzultacia"
      className="inline-flex h-12 items-center justify-center gap-2 rounded-[300px] bg-mocha px-8 text-[15px] tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
    >
      <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.5} />
      Objednajte sa online
    </Link>
  );
}
