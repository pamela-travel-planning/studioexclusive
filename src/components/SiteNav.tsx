import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";

const WIX = "https://static.wixstatic.com/media/";

const navLinks = [
  { label: "Domov", to: "/" },
  {
    label: "Naše Služby",
    to: "/sluzby",
    children: [
      { label: "Predlžovanie a Zahusťovanie", to: "/predlzovanie" },
      { label: "Balayage", to: "/balayage" },
      { label: "Ošetrenie", to: "/osetrenenie" },
      { label: "Starostlivosť o napojené vlasy", to: "/starostlivost" },
    ],
  },
  { label: "Objednajte sa online", to: "/konzultacia" },
  { label: "Náš Príbeh", to: "/nas-pribeh" },
  { label: "Vaša Kariéra", to: "/vasa-kariera" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 bg-mauve">
        <div className="mx-auto flex h-[72px] max-w-[940px] items-center justify-between px-5 md:h-[104px]">
          <span className="flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[300px] bg-blush px-3 text-xs sm:h-10 sm:text-sm md:h-[44px] md:gap-2 md:px-4">🇸🇰 SK <span className="text-xs">▾</span></span>
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={`${WIX}eb5e78_b82300eb6e6544e9a8afd1e90ee1e1cd~mv2.png/v1/fill/w_199,h_76,al_c,q_90,enc_avif,quality_auto/white%20(1).png`} alt="STUDIO EXCLUSIVE" className="h-12 w-auto sm:h-12 md:h-16" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 shrink-0 items-center gap-2.5 whitespace-nowrap rounded-[300px] bg-blush px-3 text-xs uppercase tracking-[0.18em] text-mocha/70 sm:h-10 sm:text-sm md:h-[44px] md:gap-4 md:px-5"
          >
            {open ? <X className="h-4 w-4" /> : "Menu"}
            {!open && <span className="h-3 w-3 rounded-full bg-mauve" />}
          </button>
        </div>
      </nav>

      {/* Dropdown menu */}
      {open && (
        <div className="fixed inset-x-0 top-[72px] z-40 bg-mauve shadow-lg md:top-[104px]">
          <ul className="mx-auto max-w-[940px] px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.to} className="border-b border-primary-foreground/10 last:border-none">
                <Link
                  to={link.to as never}
                  onClick={() => setOpen(false)}
                  className={`block py-4 text-lg uppercase tracking-[0.18em] transition-colors hover:text-blush ${
                    isActive(link.to) ? "text-blush" : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
                {"children" in link && link.children && (
                  <ul className="pb-3 pl-4">
                    {link.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to as never}
                          onClick={() => setOpen(false)}
                          className={`block py-2 text-sm uppercase tracking-[0.15em] transition-colors hover:text-blush ${
                            isActive(child.to) ? "text-blush" : "text-primary-foreground/70"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
