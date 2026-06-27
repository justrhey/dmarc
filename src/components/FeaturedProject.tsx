import { useReducedMotion } from "motion/react";
import { Check } from "@phosphor-icons/react";
import CircularGallery from "./CircularGallery";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

/**
 * Finished-project posters. Each is a full DM ARC project sheet (location
 * title + photo collage on a white background). The WebGL CircularGallery
 * sweeps through them; a static grid is shown under reduced-motion.
 * Sheets live in /public/projects/posters.
 */
const POSTERS = [
  { src: "/projects/posters/limay.jpg", location: "Limay, Bataan" },
  { src: "/projects/posters/pilar.jpg", location: "Pilar, Bataan" },
  { src: "/projects/posters/balanga.jpg", location: "Balanga, Bataan" },
  { src: "/projects/posters/dinalupihan.jpg", location: "Dinalupihan, Bataan" },
];

// The location title is already printed on each poster, so the gallery
// caption is left empty to avoid duplicating it.
const GALLERY = POSTERS.map((p) => ({ image: p.src, text: "" }));

const FEATURED = {
  location: "Clark, Pampanga",
  name: "Modern Two-Storey Home",
  features: [
    "2-Car Parking Garage",
    "2 Common Bedrooms",
    "Master bedroom with walk-in closet, bathroom & sauna",
    "High-ceiling Living Area",
    "Main Kitchen, Pantry & Dining Area",
    "Dirty Kitchen / Laundry Area",
    "Maid's Room with own Bathroom",
    "Fitness Room",
  ],
};

export default function FeaturedProject() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Eyebrow index="03" label="Selected work" />
        <Reveal>
          <h2 className="mt-7 max-w-2xl font-display text-4xl font-400 leading-tight text-cream sm:text-5xl">
            Finished <span className="italic text-accent-soft">projects</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream-dim">
            A selection of homes we have designed and delivered across Bataan.
          </p>
        </Reveal>
      </div>

      {/* Static poster grid on phones/tablets (reliable touch + render);
          the moving WebGL gallery is reserved for desktop. */}
      <div className="mt-10">
        <div className={reduce ? "" : "lg:hidden"}>
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:gap-5">
            {POSTERS.map((poster) => (
              <a
                key={poster.location}
                href={poster.src}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl bg-cream shadow-lg shadow-black/30 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-accent/40"
              >
                <img
                  src={poster.src}
                  alt={`DM ARC finished project in ${poster.location}`}
                  loading="lazy"
                  className="aspect-[676/915] w-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>

        {!reduce && (
          <div className="relative hidden h-[640px] lg:block">
            <CircularGallery
              items={GALLERY}
              bend={0}
              borderRadius={0.04}
              scrollSpeed={1.5}
              scrollEase={0.05}
            />
          </div>
        )}
      </div>

      {/* Featured project detail with real house features. */}
      <div className="mx-auto mt-12 max-w-6xl">
        <Reveal>
          <div className="edge rounded-3xl bg-olive-600/25 p-7 backdrop-blur-sm sm:p-9">
            <p className="font-label text-[0.7rem] font-600 uppercase tracking-[0.22em] text-accent">
              Finished project in {FEATURED.location}
            </p>
            <h3 className="mt-2 font-display text-3xl font-400 italic text-cream">
              {FEATURED.name}
            </h3>
            <p className="mt-5 font-label text-[0.7rem] font-600 uppercase tracking-[0.18em] text-cream-dim">
              House Features
            </p>
            <ul className="mt-3 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {FEATURED.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2.5 text-sm leading-snug text-cream-dim"
                >
                  <Check
                    size={16}
                    weight="bold"
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
