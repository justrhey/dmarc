import { motion, useReducedMotion } from "motion/react";
import { House, MapPin } from "@phosphor-icons/react";
import Button from "./Button";

// Real DM ARC home render, shown inside a floating "modal" layer.
const HERO_IMG = "/home_dm.png";

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    // Outer layer: the olive "sheet" that frames the floating modal.
    <section
      id="home"
      className="relative min-h-[100dvh] bg-olive-deep px-2 pb-6 pt-20 sm:px-3"
    >
      <div className="relative mx-auto max-w-[104rem]">
        {/* Inner layer: the floating image modal. */}
        <motion.div
          className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/50 ring-1 ring-white/10"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background photo with a slow zoom */}
          <motion.img
            src={HERO_IMG}
            alt="Modern two-storey home designed and built by DM ARC"
            className="absolute inset-0 h-full w-full object-cover"
            initial={reduce ? false : { scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 9, ease: "easeOut" }}
          />
          {/* Olive washes keep the headline legible over the bright render. */}
          <div className="absolute inset-0 bg-gradient-to-r from-olive-deep via-olive-deep/75 to-olive-deep/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/85 via-transparent to-olive-deep/30" />

          {/* Content sits on the photo */}
          <div className="relative grid min-h-[78dvh] items-center gap-12 p-6 sm:p-12 lg:min-h-[86dvh] lg:grid-cols-[1.05fr_0.95fr] lg:p-16">
            <div>
              <motion.div
                className="mb-6 flex items-center gap-4"
                {...fade(0.12)}
              >
                <span className="font-label text-[0.7rem] font-600 uppercase tracking-[0.28em] text-accent">
                  Design &amp; Build
                </span>
                <span className="h-px w-12 bg-accent/40" />
                <span className="font-label text-[0.7rem] font-600 uppercase tracking-[0.28em] text-cream-dim">
                  Est. 2020
                </span>
              </motion.div>

              <motion.h1
                className="font-display text-5xl font-400 leading-[1.04] text-cream sm:text-7xl"
                {...fade(0.2)}
              >
                Spaces designed,
                <br />
                for{" "}
                <span className="italic text-accent-soft">better living.</span>
              </motion.h1>

              <motion.p
                className="mt-7 max-w-md text-base leading-relaxed text-cream-dim sm:text-lg"
                {...fade(0.34)}
              >
                We design and build thoughtful homes and commercial spaces that
                endure, on time and within budget.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-wrap items-center gap-3"
                {...fade(0.48)}
              >
                <Button href="#projects" variant="solid">
                  Explore Projects
                </Button>
                <Button href="#services">Our Services</Button>
              </motion.div>
            </div>

            {/* Glass cards live inside the modal (the second layer). */}
            <div className="hidden flex-col items-end gap-4 lg:flex">
              <motion.div
                className="edge w-full max-w-xs rounded-2xl bg-olive-deep/55 p-5 backdrop-blur-md"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-accent">
                  <House size={18} weight="regular" />
                </div>
                <p className="font-label text-[0.65rem] font-600 uppercase tracking-[0.22em] text-cream-dim">
                  Featured project
                </p>
                <h3 className="mt-2 font-display text-3xl font-500 italic leading-tight text-cream">
                  Clark
                  <br />
                  Residence
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-cream-dim">
                  <MapPin size={14} weight="fill" className="text-accent" />
                  Clark, Pampanga
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-3 text-xs text-cream">
                  <span>Two-Storey</span>
                  <span>Sauna</span>
                  <span>Finished</span>
                </div>
              </motion.div>

              <motion.div
                className="edge w-full max-w-xs rounded-2xl bg-olive-deep/65 p-5 backdrop-blur-md"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.74, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-label text-[0.65rem] font-600 uppercase tracking-[0.22em] text-cream-dim">
                  Established
                </p>
                <p className="mt-1 font-display text-5xl font-500 text-accent-soft">
                  2020
                </p>
                <p className="text-sm font-600 text-cream">
                  A trusted local builder
                </p>
                <p className="mt-2 text-xs leading-relaxed text-cream-dim">
                  Quality craftsmanship and reliable service across Bataan and
                  Batangas.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
