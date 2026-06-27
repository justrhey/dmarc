import { useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  motion,
} from "motion/react";
import { List, X } from "@phosphor-icons/react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // Motion's scroll value avoids a per-frame window scroll listener (Section 5.D).
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 24;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`relative mx-auto flex items-center justify-between gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "mt-3 w-[min(94%,46rem)] rounded-full border border-white/10 bg-olive-deep/80 px-4 py-2.5 shadow-lg shadow-black/25 backdrop-blur-md"
            : "h-[72px] w-full max-w-6xl border border-transparent px-5 sm:px-6"
        }`}
      >
        {/* Brand: transparent logo rendered white for the dark navbar */}
        <a href="#home" className="flex items-center">
          <img
            src="/dm-arc-logo.png"
            alt="DM ARC Construction Services"
            className={`w-auto brightness-0 invert transition-all duration-500 ${
              scrolled ? "h-8 sm:h-9" : "h-9 sm:h-11"
            }`}
          />
        </a>

        {/* Center nav, desktop only */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-500 text-cream/85 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side: Contact (desktop) + mobile menu toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-cream px-5 py-2 text-sm font-600 text-olive-deep transition-transform duration-200 hover:scale-105 active:scale-[0.98] sm:inline-block"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:text-accent md:hidden"
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-full mt-2 rounded-2xl border border-white/10 bg-olive-deep/95 p-2 shadow-xl shadow-black/30 backdrop-blur-md md:hidden"
            >
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-600 text-cream/90 transition-colors hover:bg-white/5 hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-cream px-4 py-3 text-center text-sm font-600 text-olive-deep"
              >
                Contact
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
