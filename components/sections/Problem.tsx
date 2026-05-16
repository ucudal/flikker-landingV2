"use client";

import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Problem() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <section className="bg-white px-6 py-24 text-midnight md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — photo + floating stat */}
          <motion.div
            initial={initial}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            {/* Photo */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80"
                alt="Negocio local"
                className="h-full w-full object-cover grayscale"
              />
              {/* dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* Floating stat — bottom left */}
            <div
              className="absolute bottom-5 left-5 rounded-2xl px-5 py-4 text-white"
              style={{ background: "rgba(10,8,40,0.85)", backdropFilter: "blur(12px)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60">
                Clientes felices sin reseña
              </p>
              <p className="mt-1 font-display text-[2.75rem] font-black leading-none tracking-tight">
                94%
              </p>
            </div>
          </motion.div>

          {/* Right — copy + stat cards */}
          <motion.div
            initial={initial}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
              El problema
            </span>

            <h2 className="font-display mt-4 text-[32px] font-black leading-[1.1] tracking-[-0.02em] md:text-[44px]">
              El 94% de tus clientes felices no deja reseña.
            </h2>

            <p className="mt-5 text-base leading-[1.65] text-midnight/65 md:text-lg">
              <span className="text-periwinkle font-medium">Nadie pide reseñas, la gente no las deja sola.</span>{" "}
              Mientras tanto, tu competencia acumula opiniones y aparece primero en Google — aunque atienda peor que vos.
            </p>

            {/* Stat cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {/* Light card */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
                  Sin reseñas
                </p>
                <p className="font-display mt-2 text-[2rem] font-black leading-none tracking-tight text-midnight">
                  −63%
                </p>
                <p className="mt-2 text-[13px] leading-snug text-midnight/55">
                  menos clics en Google frente a negocios con más de 50 reseñas.
                </p>
              </div>

              {/* Dark card */}
              <div className="rounded-2xl px-5 py-5 text-white" style={{ background: "#07060f" }}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">
                  Con reseñas
                </p>
                <p className="font-display mt-2 text-[2rem] font-black leading-none tracking-tight">
                  +28%
                </p>
                <p className="mt-2 text-[13px] leading-snug text-white/55">
                  de ingresos con solo mejorar media estrella en tu calificación.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
