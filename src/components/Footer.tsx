import {
  Phone,
  EnvelopeSimple,
  MapPin,
  FacebookLogo,
  ArrowRight,
} from "@phosphor-icons/react";
import Reveal from "./Reveal";

const EXPLORE = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
];

// A curated taste of services. The full list lives in the Services section;
// the footer keeps it short on purpose and invites a conversation.
const SERVICES = [
  "Full Construction",
  "Renovation & Home Improvement",
  "Architectural Design & Plans",
  "Interior Fit-outs",
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10">
      {/* Closing CTA band */}
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-20">
        <Reveal>
          <h2 className="max-w-2xl font-display text-5xl font-400 leading-[1.05] text-cream sm:text-7xl">
            Let's build something
            <br />
            that <span className="italic text-accent-soft">lasts.</span>
          </h2>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="tel:+639770931188"
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-600 text-olive-deep shadow-lg shadow-black/20 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-accent-soft"
            >
              <Phone size={18} weight="fill" />
              0977 093 1188
            </a>
            <a
              href="mailto:dmarcconstruction@gmail.com"
              className="group inline-flex items-center gap-2.5 rounded-full border border-cream/20 px-7 py-3.5 text-sm font-600 text-cream transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <EnvelopeSimple size={18} weight="regular" />
              Email us
            </a>
          </div>
        </Reveal>
      </div>

      {/* Columns */}
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-white/10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Contact */}
        <Reveal>
          <h3 className="font-label text-[0.7rem] font-600 uppercase tracking-[0.2em] text-cream">Visit us</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-dim">
            <li className="flex items-center gap-2.5">
              <Phone size={16} weight="regular" className="shrink-0 text-accent" />
              <a href="tel:+639770931188" className="hover:text-accent">
                0977 093 1188
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <EnvelopeSimple
                size={16}
                weight="regular"
                className="shrink-0 text-accent"
              />
              <a
                href="mailto:dmarcconstruction@gmail.com"
                className="hover:text-accent"
              >
                dmarcconstruction@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin
                size={16}
                weight="regular"
                className="mt-0.5 shrink-0 text-accent"
              />
              <span className="leading-relaxed">
                Unit #7 The Silver's Place, 3 National Road, Abucay, Bataan
              </span>
            </li>
          </ul>
        </Reveal>

        {/* Explore */}
        <Reveal delay={0.05}>
          <h3 className="font-label text-[0.7rem] font-600 uppercase tracking-[0.2em] text-cream">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-dim">
            {EXPLORE.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Services (limited taste) */}
        <Reveal delay={0.1}>
          <h3 className="font-label text-[0.7rem] font-600 uppercase tracking-[0.2em] text-cream">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-dim">
            {SERVICES.map((service) => (
              <li key={service}>{service}</li>
            ))}
            <li>
              <a
                href="#services"
                className="font-600 text-accent hover:text-accent-soft"
              >
                and more
              </a>
            </li>
          </ul>
        </Reveal>

        {/* Upsell: see a selection, ask for more */}
        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-accent/25 bg-olive-600/30 p-5">
            <h3 className="font-label text-[0.7rem] font-600 uppercase tracking-[0.2em] text-cream">
              Want to see more?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream-dim">
              What you see here is a selection of our work. Need a full project
              gallery or a custom feature for your site? Tell us what you have in
              mind and we will add it.
            </p>
            <a
              href="mailto:dmarcconstruction@gmail.com?subject=Adding%20more%20to%20our%20website"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-700 text-accent hover:text-accent-soft"
            >
              Request more
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Oversized brand signature: thick, rounded Baloo 2, upright. */}
      <div className="mx-auto max-w-6xl overflow-hidden px-6 pb-8">
        <span
          className="inline-block select-none text-7xl font-800 leading-none text-accent sm:text-9xl"
          style={{
            fontFamily: '"Baloo 2", system-ui, sans-serif',
            letterSpacing: "-0.045em",
          }}
        >
          dmarc.
        </span>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-6 text-xs text-cream-dim sm:flex-row">
          <span>
            © {new Date().getFullYear()} DM Arc Construction Services. All
            rights reserved.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="DM Arc Construction Services on Facebook"
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <FacebookLogo size={18} weight="fill" />
              Follow us on Facebook
            </a>
            {/* QR to the Facebook page, on a light card so it scans */}
            <div className="flex items-center gap-3 rounded-xl bg-cream p-2 pr-3">
              <img
                src="/qr-dmarc-fb.svg"
                alt="QR code linking to the DM Arc Construction Facebook page"
                className="h-12 w-12"
              />
              <span className="text-[11px] font-700 leading-tight text-olive-deep">
                Scan to
                <br />
                follow us
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
