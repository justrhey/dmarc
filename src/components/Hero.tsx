import { motion, useReducedMotion } from "motion/react";
import { House, MapPin } from "@phosphor-icons/react";

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
          <div className="relative grid min-h-[86dvh] items-center gap-12 p-8 sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:p-16">
            <div>
              <motion.h1
                className="font-display text-4xl font-800 leading-[1.02] tracking-tight text-cream sm:text-6xl"
                {...fade(0.2)}
              >
                Spaces designed,
                <br />
                for <span className="text-lime">better living.</span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-md text-base leading-relaxed text-cream-dim sm:text-lg"
                {...fade(0.34)}
              >
                We design and build thoughtful homes and commercial spaces that
                endure, on time and within budget.
              </motion.p>

              <motion.div
                className="mt-9 flex flex-wrap items-center gap-3"
                {...fade(0.48)}
              >
                <a
                  href="#projects"
                  className="rounded-lg bg-cream px-6 py-3 text-sm font-600 text-olive-deep shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 active:scale-[0.98]"
                >
                  Explore Projects
                </a>
                <a
                  href="#services"
                  className="rounded-lg border border-cream/30 px-6 py-3 text-sm font-600 text-cream transition-colors hover:border-lime hover:text-lime"
                >
                  Our Services
                </a>
              </motion.div>
            </div>

            {/* Glass cards live inside the modal (the second layer). */}
            <div className="hidden flex-col items-end gap-4 lg:flex">
              <motion.div
                className="w-full max-w-xs rounded-2xl border border-white/15 bg-olive-deep/55 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-cream">
                  <House size={18} weight="regular" />
                </div>
                <p className="text-xs font-500 text-cream-dim">Featured project</p>
                <h3 className="mt-1 font-display text-2xl font-700 leading-tight text-lime">
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
                className="w-full max-w-xs rounded-2xl border border-white/15 bg-olive-deep/65 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.74, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xs font-500 text-cream-dim">Established</p>
                <p className="mt-1 font-display text-4xl font-800 text-lime">
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
