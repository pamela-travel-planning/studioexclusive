const WIX = "https://static.wixstatic.com/media/";
export const SUBPAGE_HERO = `${WIX}eb5e78_12383cc2539944768da3effaca031838~mv2.jpg`;

export function SubpageHero({ title, image = SUBPAGE_HERO }: { title: string; image?: string }) {
  return (
    <div className="relative mt-[72px] overflow-hidden md:mt-[104px]">
      <div className="flex">
        {[0, 1, 2].map((i) => (
          <img key={i} src={image} alt="" className="block aspect-[736/890] w-1/3 object-cover" />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <h1 className="break-words text-3xl font-normal uppercase tracking-wide text-primary-foreground sm:text-4xl md:text-[56px]">{title}</h1>
      </div>
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((v) => (
        <li key={v} className="flex items-start gap-3 text-lg leading-snug">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mauve" />
          <span>{v}</span>
        </li>
      ))}
    </ul>
  );
}
