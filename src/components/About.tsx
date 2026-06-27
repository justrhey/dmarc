import { motion, useReducedMotion } from "motion/react";
import {
  ShieldCheck,
  Medal,
  Handshake,
  Smiley,
  CalendarBlank,
  MapPin,
  Buildings,
} from "@phosphor-icons/react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const VALUES = [
  {
    Icon: ShieldCheck,
    title: "Safety First",
    body: "Protecting our workers, clients, and communities on every site.",
  },
  {
    Icon: Medal,
    title: "Quality Workmanship",
    body: "Building structures that last, with craftsmanship we stand behind.",
  },
  {
    Icon: Handshake,
    title: "Integrity",
    body: "Honest communication and transparent processes, start to finish.",
  },
  {
    Icon: Smiley,
    title: "Client Satisfaction",
    body: "Delivering what we promise, every single time.",
  },
];

const STATS = [
  { Icon: CalendarBlank, value: "2020", label: "Established" },
  { Icon: MapPin, value: "3 Provinces", label: "Bataan, Batangas, Pampanga" },
  { Icon: Buildings, value: "Full-service", label: "Design to build" },
];

// DM ARC two-storey duplex render — the hero of the Our Story section.
const ABOUT_IMG = "/projects/about-story.jpg";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Soft lime glow for depth behind the section. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Lead statement */}
        <Eyebrow index="01" label="Who we are" />
        <Reveal>
          <p className="mt-7 max-w-3xl font-display text-2xl font-400 leading-snug text-cream sm:text-[2rem]">
            DM Arc Construction is a trusted name in the construction industry,
            delivering high-quality building solutions for{" "}
            <span className="italic text-accent-soft">
              residential, commercial,
            </span>{" "}
            and <span className="italic text-accent-soft">infrastructure</span>{" "}
            projects. We bring visions to life, on time and within budget.
          </p>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Image card with hover zoom + floating badge */}
          <motion.div
            className="group relative min-h-72 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-olive-deep/50"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={ABOUT_IMG}
              alt="DM ARC two-storey duplex home design"
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/80 via-transparent to-transparent" />
            <motion.div
              className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-olive-deep/70 px-5 py-3 backdrop-blur-md"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="font-display text-3xl font-500 italic leading-none text-accent-soft">
                Est. 2020
              </p>
              <p className="mt-1 text-xs text-cream-dim">
                Built on quality and trust
              </p>
            </motion.div>
          </motion.div>

          {/* Story + animated stats */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <h2 className="font-display text-3xl font-700 leading-tight text-cream sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-dim">
                Founded in <span className="text-cream">2020</span> by{" "}
                <span className="text-cream">Monique Dela Rosa</span>, DM Arc
                Construction began as a small team with a big ambition: to raise
                the standards of construction through quality craftsmanship and
                reliable service. Over the years, we have grown into a
                full-service construction firm known for our professionalism and
                integrity.
              </p>
            </Reveal>

            <motion.div
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {STATS.map(({ Icon, value, label }) => (
                <motion.div
                  key={value}
                  variants={{
                    hidden: reduce ? {} : { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/10 bg-olive-600/40 p-4"
                >
                  <Icon size={22} weight="regular" className="text-accent" />
                  <p className="mt-3 font-display text-lg font-700 leading-tight text-cream">
                    {value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-cream-dim">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Our Values: staggered cards with hover lift */}
        <div className="mt-20">
          <Reveal>
            <h2 className="font-display text-3xl font-700 leading-tight text-cream sm:text-4xl">
              Our Values
            </h2>
          </Reveal>

          <motion.div
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {VALUES.map(({ Icon, title, body }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: reduce ? {} : { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={reduce ? undefined : { y: -6 }}
                className="rounded-3xl border border-white/10 bg-olive-600/30 p-6 backdrop-blur-sm transition-colors hover:border-accent/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-olive-deep/40 text-accent">
                  <Icon size={24} weight="regular" />
                </span>
                <h3 className="mt-4 font-display text-lg font-700 text-cream">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-dim">
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
