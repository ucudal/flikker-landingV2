"use client";

import React, { type ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const STEP_DURATION_MS = 3200;

/* ── Phone frame ── */
function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative rounded-[38px] bg-[#1c1c1e]"
      style={{
        padding: "9px",
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.08), 0 32px 64px rgba(0,0,0,0.28), 0 8px 20px rgba(0,0,0,0.18)",
      }}
    >
      <div className="absolute left-1/2 top-[11px] z-10 h-[18px] w-[56px] -translate-x-1/2 rounded-full bg-[#1c1c1e]" />
      <div className="absolute -left-[3px] top-[78px] h-[30px] w-[3px] rounded-l-sm bg-[#2a2a2c]" />
      <div className="absolute -left-[3px] top-[118px] h-[52px] w-[3px] rounded-l-sm bg-[#2a2a2c]" />
      <div className="absolute -right-[3px] top-[96px] h-[64px] w-[3px] rounded-r-sm bg-[#2a2a2c]" />
      <div className="overflow-hidden rounded-[30px] bg-white" style={{ aspectRatio: "9 / 19.5" }}>
        {children}
      </div>
    </div>
  );
}

/* ── Google G ── */
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={cn("h-4 w-4", className)}>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8a12 12 0 1 1 7.9-21l5.7-5.7A20 20 0 1 0 44 24c0-1.2-.1-2.4-.4-3.5Z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12c3 0 5.8 1.2 7.9 3L37.6 9A20 20 0 0 0 6.3 14.7Z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.6 5C9.5 39.6 16.2 44 24 44Z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 40.3 44 35 44 24c0-1.2-.1-2.4-.4-3.5Z" />
    </svg>
  );
}

/* ── Screens ── */

function Screen1() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-white px-6 text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ede9fe]"
      >
        <Logo variant="isotype" className="h-8 w-auto" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-5 font-display text-[15px] font-bold text-midnight"
      >
        Flikker conectado
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-3 flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-semibold text-emerald-700">Activo</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 text-[10px] leading-snug text-midnight/50"
      >
        Tus clientes empezarán a<br />recibir mensajes automáticamente.
      </motion.p>
    </div>
  );
}

function Screen2() {
  const messages = [
    { delay: 0.1, text: "Hola Carlos 👋 Gracias por visitarnos hoy.", right: false },
    { delay: 0.5, text: "¿Nos contás cómo fue tu experiencia?", right: false },
    { delay: 0.9, text: "flikker.app/r/tulocal", right: false, link: true },
    { delay: 1.6, text: "¡Muy buena! Todo perfecto 😊", right: true },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-[#ece5dd]">
      <div className="flex items-center gap-2.5 bg-[#128c7e] px-3 pb-2.5 pt-3 text-white">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
          <Logo variant="isotype" className="h-3.5 w-auto" />
        </div>
        <div className="leading-tight">
          <p className="text-[11px] font-semibold">Flikker</p>
          <p className="text-[9px] text-white/80">en línea</p>
        </div>
      </div>
      <div className="flex-1 space-y-2 px-2.5 py-3">
        {messages.map(({ delay, text, right, link }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay }}
            className={cn(
              "max-w-[85%] rounded-lg px-2.5 py-2 text-[10px] leading-snug shadow-sm",
              right
                ? "ml-auto rounded-tr-sm bg-[#dcf8c6] text-zinc-800"
                : "rounded-tl-sm bg-white text-zinc-800",
              link && "font-semibold text-[#128c7e]"
            )}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Screen3() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-white px-5 text-center">
      <Logo variant="default" className="h-12 w-auto" />
      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-periwinkle">Tu local</p>
      <p className="mt-1 font-display text-[14px] font-bold leading-tight text-midnight">
        ¿Cómo fue tu experiencia?
      </p>
      <div className="mt-4 flex gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.2 }}
          >
            <Star className="h-6 w-6 fill-[#fbbc04] text-[#fbbc04]" />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-5 flex items-center gap-1.5 rounded-full bg-midnight px-3.5 py-2 text-[10px] font-semibold text-white"
      >
        <GoogleG className="h-3 w-3" />
        Dejar reseña en Google
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-3 text-[9px] text-midnight/40"
      >
        Las malas van a vos primero.
      </motion.p>
    </div>
  );
}

function Screen4() {
  const reviews = [
    { name: "María G.", stars: 5, text: "Excelente atención, vuelvo siempre." },
    { name: "Carlos R.", stars: 5, text: "Muy profesionales y rápidos." },
    { name: "Ana P.", stars: 4, text: "Muy buena experiencia general." },
  ];
  return (
    <div className="flex h-full flex-col bg-white px-3 pb-3 pt-8">
      <div className="flex items-center gap-2 border-b border-neutral-100 pb-2.5">
        <GoogleG className="h-5 w-5" />
        <div>
          <p className="text-[11px] font-bold text-neutral-800">Reseñas de Google</p>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-semibold text-neutral-700">4.9</span>
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3 w-3 fill-[#fbbc04] text-[#fbbc04]" />
              ))}
            </div>
            <span className="text-[9px] text-neutral-400">(51)</span>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-3 overflow-hidden pt-2.5">
        {reviews.map(({ name, stars, text }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.18 }}
            className="flex gap-2"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ede9fe] text-[10px] font-semibold text-[#7c3aed]">
              {name[0]}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-semibold text-neutral-800">{name}</span>
              </div>
              <div className="flex gap-px">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} className="h-2.5 w-2.5 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <p className="mt-0.5 text-[9px] leading-snug text-neutral-500">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Screen5() {
  const reviews = [
    { init: "MG", name: "María G.", text: "Excelente atención, vuelvo siempre." },
    { init: "CR", name: "Carlos R.", text: "Muy profesionales y rápidos." },
  ];
  return (
    <div className="flex h-full flex-col bg-[#f4f4f6]">
      {/* Mini browser bar */}
      <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-white px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-red-400" />
        <div className="h-2 w-2 rounded-full bg-yellow-400" />
        <div className="h-2 w-2 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 rounded bg-neutral-100 px-2 py-0.5 text-[8px] text-neutral-400">
          tulocal.com
        </div>
      </div>

      {/* Page content */}
      <div className="flex flex-1 flex-col items-center justify-center px-3 py-4">
        {/* Fake hero text */}
        <div className="mb-4 w-full space-y-1.5">
          <div className="h-2 w-3/4 rounded bg-neutral-300" />
          <div className="h-2 w-1/2 rounded bg-neutral-200" />
        </div>

        {/* Widget card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2">
            <div className="flex items-center gap-1.5">
              <GoogleG className="h-3.5 w-3.5" />
              <span className="text-[10px] font-semibold text-neutral-800">Reseñas</span>
            </div>
            <div className="flex items-center gap-0.5">
              <span className="text-[10px] font-bold text-neutral-700">4.9</span>
              {[0,1,2,3,4].map(i => (
                <Star key={i} className="h-2.5 w-2.5 fill-[#fbbc04] text-[#fbbc04]" />
              ))}
            </div>
          </div>
          <div className="divide-y divide-neutral-100">
            {reviews.map(({ init, name, text }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="flex items-start gap-2 px-3 py-2"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ede9fe] text-[9px] font-semibold text-[#7c3aed]">
                  {init}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-neutral-800">{name}</p>
                  <div className="flex gap-px">
                    {[0,1,2,3,4].map(i => <Star key={i} className="h-2 w-2 fill-[#fbbc04] text-[#fbbc04]" />)}
                  </div>
                  <p className="mt-0.5 truncate text-[9px] text-neutral-500">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-1 border-t border-neutral-100 px-3 py-1.5">
            <svg viewBox="197.18 0 516.34 402.57" className="h-2.5 w-auto" aria-hidden="true">
              <polygon fill="#9188f5" points="366.82 200.96 411.51 149.16 370.5 101.62 197.18 302.58 283.4 402.57 370.5 301.6 457.6 402.57 543.88 302.58 497.76 249.13 453.05 300.95 366.82 200.96" />
              <polygon fill="#9188f5" points="627.29 300.95 713.52 200.96 540.17 0 411.51 149.16 497.76 249.13 540.17 199.96 627.29 300.95" />
            </svg>
            <span className="text-[8px] text-neutral-400">Powered by Flikker</span>
          </div>
        </motion.div>

        {/* Notification toast */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="mt-3 flex w-full items-center gap-2 rounded-xl border border-[#ede9fe] bg-[#f5f3ff] px-3 py-2.5 shadow-sm"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#7c3aed]">
            <Star className="h-3.5 w-3.5 fill-white" strokeWidth={0} />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-neutral-900">Ana P. nos dejó 5 estrellas</p>
            <div className="flex gap-px">
              {[0,1,2,3,4].map(i => <Star key={i} className="h-2 w-2 fill-[#fbbc04] text-[#fbbc04]" />)}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Screen6() {
  const messages = [
    { delay: 0.1, text: "Hola Laura 👋 Hace un tiempo que no te vemos.", right: false },
    { delay: 0.55, text: "¿Volvés esta semana? Tenemos algo especial para vos. 🎁", right: false },
    { delay: 1.2, text: "¡Qué bueno! Ya agendé para el jueves 😊", right: true },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-[#ece5dd]">
      <div className="flex items-center gap-2.5 bg-[#128c7e] px-3 pb-2.5 pt-3 text-white">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
          <Logo variant="isotype" className="h-3.5 w-auto" />
        </div>
        <div className="leading-tight">
          <p className="text-[11px] font-semibold">Flikker</p>
          <p className="text-[9px] text-white/80">en línea</p>
        </div>
      </div>
      <div className="flex-1 space-y-2 px-2.5 py-3">
        {messages.map(({ delay, text, right }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay }}
            className={cn(
              "max-w-[85%] rounded-lg px-2.5 py-2 text-[10px] leading-snug shadow-sm",
              right
                ? "ml-auto rounded-tr-sm bg-[#dcf8c6] text-zinc-800"
                : "rounded-tl-sm bg-white text-zinc-800"
            )}
          >
            {text}
          </motion.div>
        ))}
      </div>
      <div className="border-t border-black/5 bg-white/80 px-3 py-2">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-center text-[9px] text-neutral-400"
        >
          Enviado automáticamente por Flikker · 60 días sin visita
        </motion.p>
      </div>
    </div>
  );
}

/* ── Steps data — component refs, not pre-created JSX ── */
const STEPS: { number: string; title: string; body: string; Screen: () => React.ReactElement }[] = [
  {
    number: "01",
    title: "Conectamos Flikker a tu negocio",
    body: "Nos integramos a tu flujo de ventas o visitas en minutos. Sin app, sin técnicos, sin complicaciones.",
    Screen: Screen1,
  },
  {
    number: "02",
    title: "El cliente recibe un WhatsApp automático",
    body: "Después de cada compra o visita, Flikker le escribe con tu marca en el momento justo.",
    Screen: Screen2,
  },
  {
    number: "03",
    title: "Filtramos la experiencia",
    body: "Si fue buena, lo llevamos directo a Google. Si fue mala, te avisamos a vos primero para que puedas resolverlo.",
    Screen: Screen3,
  },
  {
    number: "04",
    title: "Tu calificación sube sola",
    body: "Más reseñas reales, mejor posición en Google Maps, más clientes nuevos.",
    Screen: Screen4,
  },
  {
    number: "05",
    title: "Mostramos tus reseñas en tu web",
    body: "Si tenés página web, embebemos un widget que muestra tus reseñas en vivo y una notificación cada vez que llega una nueva estrella.",
    Screen: Screen5,
  },
  {
    number: "06",
    title: "Reactivamos clientes inactivos",
    body: "Flikker detecta clientes que no volvieron y les manda un mensaje automático con tu marca. Sin lista manual, sin recordatorios.",
    Screen: Screen6,
  },
];

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % STEPS.length),
      STEP_DURATION_MS
    );
    return () => window.clearTimeout(id);
  }, [active, shouldReduceMotion]);

  return (
    <section className="bg-white px-6 py-24 text-midnight md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

        {/* Left — copy + steps */}
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
            Cómo funciona
          </span>
          <h2 className="font-display mt-4 text-[36px] font-black leading-[1.05] tracking-[-0.03em] md:text-[50px]">
            Simple para el cliente.{" "}
            <span className="text-periwinkle">Poderoso para vos.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-[1.65] text-midnight/60 md:text-lg">
            Usamos la tecnología que ya está en cada celular. Sin descargas, sin
            fricción — tus clientes reciben un WhatsApp y en dos toques dejan su
            reseña.
          </p>

          {/* Steps */}
          <div className="mt-10 space-y-0">
            {STEPS.map((step, i) => {
              const isActive = active === i;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "group w-full border-b border-midnight/10 py-5 text-left transition-colors last:border-b-0",
                    isActive ? "border-periwinkle/30" : "hover:border-midnight/20"
                  )}
                >
                  <div className="flex items-start gap-5">
                    <span
                      className={cn(
                        "mt-0.5 shrink-0 font-display text-[13px] font-bold tabular-nums transition-colors",
                        isActive ? "text-periwinkle" : "text-midnight/25"
                      )}
                    >
                      {step.number}
                    </span>
                    <div className="min-w-0">
                      <p
                        className={cn(
                          "text-[15px] font-bold leading-snug transition-colors md:text-base",
                          isActive ? "text-midnight" : "text-midnight/35"
                        )}
                      >
                        {step.title}
                      </p>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          isActive ? "mt-2 max-h-20 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <p className="text-[13px] leading-[1.65] text-midnight/55">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  {isActive && (
                    <div className="ml-10 mt-3 h-[2px] overflow-hidden rounded-full bg-midnight/10">
                      <motion.div
                        className="h-full rounded-full bg-periwinkle"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: STEP_DURATION_MS / 1000, ease: "linear" }}
                        key={active}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-[260px] md:w-[290px]">
            <PhoneFrame>
              <div className="relative h-full w-full bg-white">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {React.createElement(STEPS[active].Screen)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </PhoneFrame>
          </div>
        </div>

      </div>
    </section>
  );
}
