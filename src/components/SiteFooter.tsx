import { Link } from "@tanstack/react-router";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import { ContactIcon } from "@/components/ContactIcon";

const contactLinks = [
  { Icon: Phone, href: "tel:+421908653820", label: "Telefón" },
  { Icon: Mail, href: "mailto:studio.exclusive@gmail.com", label: "Email" },
  { Icon: Instagram, href: "https://www.instagram.com/studioexclusive.sk/", label: "Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/StudioExclusiveBratislava", label: "Facebook" },
];

const WIX = "https://static.wixstatic.com/media/";

const brandLogos = [
  { src: `${WIX}eb5e78_63c22624ae244c2d9c439d5c70f2f9fe~mv2.webp/v1/fill/w_120,h_120,al_c,q_80,enc_avif,quality_auto/urban-alchemy.webp`, alt: "Urban Alchemy", tall: true },
  { src: `${WIX}eb5e78_7b585ca05c804fc4b3d707c9d2b46c02~mv2.png/v1/fill/w_160,h_62,al_c,q_85,enc_avif,quality_auto/kindpng_6357988.png`, alt: "Cruelty Free & Vegan" },
  { src: `${WIX}eb5e78_16d853b1943e4434a0235c85c4a20b52~mv2.png/v1/fill/w_160,h_50,al_c,q_85,enc_avif,quality_auto/maria-nila-logos.png`, alt: "Maria Nila Stockholm" },
  { src: `${WIX}eb5e78_f22b7ebc6ce74fc5bfef4d412ef552ed~mv2.png/v1/fill/w_120,h_46,al_c,q_85,enc_avif,quality_auto/seliar.png`, alt: "Seliar" },
  { src: `${WIX}eb5e78_738f40ad8246437e893bc388f647edd4~mv2.png/v1/fill/w_160,h_58,al_c,q_85,enc_avif,quality_auto/olaplex-logo.png`, alt: "Olaplex" },
  { src: `${WIX}eb5e78_33a5f3911a564df280d9b15b734f5cab~mv2.png/v1/fill/w_140,h_44,al_c,q_85,enc_avif,quality_auto/Redken-Logo-2019-Black.png`, alt: "Redken" },
];

export function SiteFooter({ simple = false }: { simple?: boolean }) {
  return (
    <>
      {!simple && (
        <div className="relative -mt-px bg-background">
          <svg className="block h-[110px] w-full sm:h-[160px] md:h-[200px]" viewBox="0 0 1920 200" preserveAspectRatio="none">
            <path d="M0,-4 L1920,-4 L1920,10 C1500,10 1100,110 700,170 C400,200 150,195 0,196 Z" fill="#503C35" />
          </svg>
        </div>
      )}
      <footer className={`-mt-px px-5 py-8 sm:py-10 ${simple ? "border-t border-mauve/50 bg-white" : "bg-background"}`}>
        <div className="mx-auto grid max-w-[940px] gap-9 sm:gap-12 md:grid-cols-[1fr_1.4fr_1fr]">
          <div className="text-center">
            <p className="text-base uppercase text-mocha sm:text-lg">Kontakt</p>
            <div className="mt-4 flex justify-center gap-2.5 sm:mt-6 sm:gap-3">
              {contactLinks.map(({ Icon, href, label }) => (
                <ContactIcon key={label} Icon={Icon} href={href} label={label} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-base uppercase sm:text-lg">Company Brands</p>
            <div className="mt-3 flex justify-center sm:mt-4">
              <img
                src={`${WIX}eb5e78_e8783e7a7a0b46fba945705a4db6de54~mv2.png/v1/fill/w_220,h_50,al_c,q_85,enc_avif,quality_auto/color-wow-hair-logo-1.png`}
                alt="Color WOW"
                className="h-8 w-auto object-contain mix-blend-multiply sm:h-10"
              />
            </div>
            <div className="mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-3 sm:mt-5 sm:gap-5">
              {brandLogos.map((b) => (
                <img key={b.alt} src={b.src} alt={b.alt} className={`${'tall' in b && b.tall ? 'h-14 sm:h-20' : 'h-6 sm:h-8'} w-auto object-contain opacity-80 mix-blend-multiply hover:opacity-100 transition-opacity`} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <Link to="/reklamacny-poriadok" className="text-base uppercase underline sm:text-lg">Reklamačný<br className="hidden md:inline" /> poriadok</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
