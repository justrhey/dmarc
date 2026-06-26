import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Motion's scroll value avoids a per-frame window scroll listener (Section 5.D).
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 24;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`mx-auto flex items-center justify-between gap-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "mt-3 w-[min(92%,46rem)] rounded-full border border-white/10 bg-olive-deep/80 px-4 py-2.5 shadow-lg shadow-black/25 backdrop-blur-md"
            : "h-[72px] w-full max-w-6xl border border-transparent px-6"
        }`}
      >
        {/* Brand: transparent logo rendered white for the dark navbar */}
        <a href="#home" className="flex items-center">
          <img
            src="/dm-arc-logo.png"
            alt="DM ARC Construction Services"
            className={`w-auto brightness-0 invert transition-all duration-500 ${
              scrolled ? "h-9" : "h-11"
            }`}
          />
        </a>

        {/* Center nav, single line at desktop */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-500 text-cream/85 transition-colors hover:text-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact pill */}
        <a
          href="#contact"
          className="rounded-full bg-cream px-5 py-2 text-sm font-600 text-olive-deep transition-transform duration-200 hover:scale-105 active:scale-[0.98]"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
