import type { ReactNode } from "react";

export function PageTitle({
  title,
  subtitle,
  bold = false,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  bold?: boolean;
}) {
  return (
    <header className="bg-background px-6 pb-14 pt-[128px] text-center md:pb-20 md:pt-[184px]">
      <h1 className={`mx-auto max-w-[900px] break-words text-[28px] leading-[1.08] sm:text-[38px] tracking-[0.04em] uppercase md:text-[56px] ${bold ? "font-bold" : "font-normal"}`}>
        {title}
      </h1>
      {subtitle ? (
        <div className="mx-auto mt-8 max-w-[760px] space-y-4 text-lg leading-relaxed md:text-xl">
          {subtitle}
        </div>
      ) : null}
    </header>
  );
}
