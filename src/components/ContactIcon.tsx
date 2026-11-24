import type { ComponentType } from "react";

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

/*
 * On phone and tablet widths the circle is drawn in its filled "hover" look,
 * because there is no mouse to reveal it. From desktop widths up it is a
 * hairline outline that fills in when the mouse is over it.
 */
const tones = {
  light:
    "border-mocha bg-mocha text-blush " +
    "xl:border-mocha/25 xl:bg-transparent xl:text-mocha/80 " +
    "xl:hover:border-mocha xl:hover:bg-mocha xl:hover:text-blush focus-visible:ring-mocha/25",
  dark:
    "border-blush bg-blush text-mocha " +
    "xl:border-blush/40 xl:bg-transparent xl:text-blush/90 " +
    "xl:hover:border-blush xl:hover:bg-blush xl:hover:text-mocha focus-visible:ring-blush/30",
} as const;

const circle =
  "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 sm:h-11 sm:w-11";
const glyph = "h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]";

/** Circular link used for every social / contact icon on the site. */
export function ContactIcon({
  Icon,
  href,
  label,
  tone = "light",
}: {
  Icon: IconType;
  href: string;
  label: string;
  tone?: keyof typeof tones;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`${circle} ${tones[tone]}`}
    >
      <Icon className={glyph} strokeWidth={1.25} />
    </a>
  );
}

/** Same circle, but decorative (sits next to a separate button). */
export function ContactMark({
  Icon,
  tone = "light",
}: {
  Icon: IconType;
  tone?: keyof typeof tones;
}) {
  return (
    <span aria-hidden="true" className={`${circle} ${tones[tone]}`}>
      <Icon className={glyph} strokeWidth={1.25} />
    </span>
  );
}
