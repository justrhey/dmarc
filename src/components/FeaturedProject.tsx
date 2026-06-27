import { useReducedMotion } from "motion/react";
import { Check } from "@phosphor-icons/react";
import CircularGallery from "./CircularGallery";
import type { CircularGalleryItem } from "./CircularGallery";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

/**
 * Projects gallery. The WebGL CircularGallery is the showcase centerpiece;
 * a static grid is rendered instead under prefers-reduced-motion.
 * Real DM ARC finished-project photography lives in /public/projects.
 */
const GALLERY: CircularGalleryItem[] = [
  { image: "/projects/limay.jpg", text: "Limay, Bataan" },
  { image: "/projects/pilar.jpg", text: "Pilar, Bataan" },
  { image: "/projects/balanga.jpg", text: "Balanga, Bataan" },
  { image: "/projects/munting.jpg", text: "Munting, Batangas" },
];

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

function GalleryFallback() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {GALLERY.map((item) => (
        <figure
          key={item.text}
          className="overflow-hidden rounded-3xl border border-white/10 bg-olive-600/30"
        >
          <img
            src={item.image}
            alt={`DM ARC project in ${item.text}`}
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="p-4 font-display text-base font-600 text-cream">
            {item.text}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

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
            Drag or scroll through a few of the spaces we have delivered.
          </p>
        </Reveal>
      </div>

      {/* Gallery breaks out of the content max-width for an immersive sweep. */}
      <div className="mt-10">
        {reduce ? (
          <div className="mx-auto max-w-6xl px-0 sm:px-6">
            <GalleryFallback />
          </div>
        ) : (
          <div className="relative h-[380px] sm:h-[520px]">
            <CircularGallery
              items={GALLERY}
              bend={0}
              textColor="#f5f2e6"
              borderRadius={0.05}
              font="500 30px 'Fraunces Variable'"
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
