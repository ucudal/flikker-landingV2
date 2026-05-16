"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X, Star } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const CONS = [
  "Pedís reseñas de forma manual",
  "Los clientes se olvidan o no saben cómo",
  "Las malas experiencias quedan públicas",
  "Sin datos de quién respondió o no",
  "Perdés clientes inactivos sin saberlo",
];

const PROS = [
  "WhatsApp automático en el momento justo",
  "Las malas experiencias llegan a vos primero",
  "Reseñas reales en Google sin esfuerzo",
  "Panel con datos en tiempo real",
  "Reactivación automática de clientes inactivos",
];

/* ── Left visual: stacked paper cards ── */
function PaperCards() {
  return (
    <div className="relative flex h-full items-center justify-center">
      {/* Back card */}
      <div
        className="absolute rounded-2xl bg-white shadow-md"
        style={{
          width: 200,
          padding: "18px 20px 20px",
          transform: "rotate(-6deg) translateY(8px)",
          opacity: 0.5,
        }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-400">
          Por favor
        </p>
        <div className="mt-2 flex gap-0.5">
          {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-neutral-200 text-neutral-200" />)}
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-2 w-full rounded bg-neutral-100" />
          <div className="h-2 w-3/4 rounded bg-neutral-100" />
        </div>
      </div>

      {/* Middle card */}
      <div
        className="absolute rounded-2xl bg-white shadow-md"
        style={{
          width: 200,
          padding: "18px 20px 20px",
          transform: "rotate(3deg) translateY(4px)",
          opacity: 0.7,
        }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-400">
          Por favor
        </p>
        <div className="mt-2 flex gap-0.5">
          {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-neutral-200 text-neutral-200" />)}
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-2 w-full rounded bg-neutral-100" />
          <div className="h-2 w-2/3 rounded bg-neutral-100" />
        </div>
      </div>

      {/* Front card */}
      <div
        className="relative rounded-2xl bg-white shadow-xl"
        style={{ width: 210, padding: "20px 22px 22px" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400">
          ¿Te gustó la atención?
        </p>
        <div className="mt-2.5 flex gap-1">
          {[0,1,2,3,4].map(i => (
            <Star key={i} className="h-5 w-5 fill-neutral-200 text-neutral-200" />
          ))}
        </div>
        <p className="mt-3 text-[11px] leading-snug text-neutral-400">
          Buscanos en Google y dejanos tu reseña. ¡Gracias!
        </p>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-neutral-100" />
          <div className="space-y-1">
            <div className="h-1.5 w-20 rounded bg-neutral-100" />
            <div className="h-1.5 w-14 rounded bg-neutral-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Right visual: phone with WhatsApp review flow ── */
function PhoneVisual() {
  const msgs = [
    { text: "Hola Carlos 👋 Gracias por visitarnos hoy.", right: false },
    { text: "¿Nos contás cómo fue tu experiencia?", right: false },
    { text: "flikker.app/r/tulocal", right: false, link: true },
    { text: "¡Muy buena! Todo perfecto 😊", right: true },
  ];

  return (
    <div
      className="relative overflow-hidden rounded-[32px]"
      style={{
        width: 240,
        background: "#1c1c1e",
        padding: "8px",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 32px 64px rgba(0,0,0,0.6)",
      }}
    >
      {/* Dynamic island */}
      <div
        className="absolute left-1/2 top-[10px] z-10 -translate-x-1/2 rounded-full bg-[#1c1c1e]"
        style={{ width: 80, height: 26 }}
      />
      <div className="overflow-hidden rounded-[25px] bg-[#ece5dd]">
        {/* WA header */}
        <div className="flex items-center gap-2.5 bg-[#128c7e] px-3 pb-3 pt-10 text-white">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
            <Logo variant="isotype" className="h-4 w-auto" />
          </div>
          <div>
            <p className="text-[12px] font-semibold">Flikker</p>
            <p className="text-[10px] text-white/70">en línea</p>
          </div>
        </div>
        {/* Messages */}
        <div className="space-y-2 px-3 py-3">
          {msgs.map(({ text, right, link }, i) => (
            <div
              key={i}
              className={[
                "max-w-[82%] rounded-xl px-3 py-2 text-[11px] leading-snug shadow-sm",
                right
                  ? "ml-auto rounded-tr-sm bg-[#dcf8c6] text-zinc-800"
                  : "rounded-tl-sm bg-white text-zinc-800",
                link ? "font-semibold text-[#128c7e]" : "",
              ].join(" ")}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Comparison() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <section className="bg-white px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={initial}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
            Comparativa
          </span>
          <h2 className="font-display mt-4 text-[32px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[48px]">
            Pedir reseñas a mano
            <br />
            vs. usar Flikker.
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={initial}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="relative mt-12 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {/* VS badge */}
          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-neutral-200 text-[11px] font-black tracking-tight text-neutral-500">
              VS
            </div>
          </div>

          {/* Left — without Flikker */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden rounded-3xl border border-neutral-200"
          >
            {/* Visual area */}
            <div
              className="flex h-52 items-center justify-center"
              style={{ background: "#ebe7e0" }}
            >
              <PaperCards />
            </div>

            {/* List */}
            <div className="px-7 py-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                Sin Flikker
              </p>
              <ul className="mt-4 space-y-3">
                {CONS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-3 w-3 text-red-500" strokeWidth={2.5} />
                    </span>
                    <span className="text-[14px] leading-snug text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — with Flikker */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden rounded-3xl"
            style={{ background: "#07060f" }}
          >
            {/* Visual area */}
            <div className="relative flex h-64 items-center justify-center overflow-hidden" style={{ background: "#0d0b1e" }}>
              <PhoneVisual />
            </div>

            {/* List */}
            <div className="px-7 py-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-periwinkle">
                Con Flikker
              </p>
              <ul className="mt-4 space-y-3">
                {PROS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-periwinkle/20">
                      <Check className="h-3 w-3 text-periwinkle" strokeWidth={2.5} />
                    </span>
                    <span className="text-[14px] leading-snug text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
