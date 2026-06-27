import { Cube, Ruler, Buildings, Check } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

type Group = {
  Icon: Icon;
  title: string;
  items: string[];
};

const DESIGN: Group = {
  Icon: Cube,
  title: "Design & Visualization",
  items: [
    "2D Planning & 3D Modeling",
    "3D Rendering (Exterior & Interior)",
    "Walk-thru Architectural Animation",
  ],
};

const ARCHITECTURAL: Group = {
  Icon: Ruler,
  title: "Architectural Services",
  items: [
    "Structural Plans & Analysis",
    "Electrical Plans & Analysis",
    "Plumbing / Sanitary Plans & Design",
    "Bill of Materials & Technical Specs",
    "Sign & Seal of Approved Plans",
  ],
};

const CONSTRUCTION: Group = {
  Icon: Buildings,
  title: "Construction Services",
  items: [
    "Full Construction (concept to completion)",
    "Renovation & Home Improvement",
    "Interior Fit-outs",
    "Retrofitting",
    "Demolition Works",
    "Finishing Works (painting, tile setting)",
    "Plumbing & Sanitary Works",
    "Electrical Works",
    "Excavation & Backfilling",
    "Land Development",
    "Road Works",
  ],
};

function ServiceItem({ label }: { label: string }) {
  return (
    <li className="flex gap-2 text-[0.8rem] leading-snug text-cream-dim">
      <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-accent" />
      {label}
    </li>
  );
}

function CardHeader({ Icon, title }: { Icon: Icon; title: string }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 text-accent">
        <Icon size={18} weight="regular" />
      </span>
      <h3 className="font-display text-lg font-600 text-cream">{title}</h3>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Eyebrow index="02" label="What we do" />
        <Reveal>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-400 leading-tight text-cream sm:text-4xl">
            Services tailored to{" "}
            <span className="italic text-accent-soft">your needs</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream-dim">
            From first sketch to final finish, we cover the full build.
          </p>
        </Reveal>

        {/* Asymmetric bento: Construction is the wide pillar, two specialist
            cards fill the right column. Exactly 3 cells, no empty tiles. */}
        <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_1fr]">
          <Reveal
            delay={0.1}
            className="lg:col-span-2 lg:row-span-2 lg:h-full"
          >
            <div className="flex h-full flex-col edge rounded-2xl bg-olive-600/25 p-5 backdrop-blur-sm transition-colors hover:border-accent/30">
              <CardHeader Icon={CONSTRUCTION.Icon} title={CONSTRUCTION.title} />
              <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {CONSTRUCTION.items.map((item) => (
                  <ServiceItem key={item} label={item} />
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex h-full flex-col edge rounded-2xl bg-olive-600/25 p-5 backdrop-blur-sm transition-colors hover:border-accent/30">
              <CardHeader Icon={DESIGN.Icon} title={DESIGN.title} />
              <ul className="space-y-1.5">
                {DESIGN.items.map((item) => (
                  <ServiceItem key={item} label={item} />
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="flex h-full flex-col edge rounded-2xl bg-olive-600/25 p-5 backdrop-blur-sm transition-colors hover:border-accent/30">
              <CardHeader Icon={ARCHITECTURAL.Icon} title={ARCHITECTURAL.title} />
              <ul className="space-y-1.5">
                {ARCHITECTURAL.items.map((item) => (
                  <ServiceItem key={item} label={item} />
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
