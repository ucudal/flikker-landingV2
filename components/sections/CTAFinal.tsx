"use client";

import { useEffect, useState } from "react";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const PARTICLE_COUNT = 18;

function FloatingStars() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: 2 + Math.random() * 96,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 8,
        size: 10 + Math.random() * 10,
      }))
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes cta-float {
          0%   { transform: translateY(0px);   opacity: 0; }
          8%   { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(-520px); opacity: 0; }
        }
      `}</style>

      {particles.map((p) => (
        <div
          key={p.id}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 select-none"
          style={{
            left: `${p.left}%`,
            animation: `cta-float ${p.duration}s ${p.delay}s linear infinite`,
            opacity: 0,
            color: "rgba(145,136,245,0.35)",
            fontSize: p.size,
            lineHeight: 1,
          }}
        >
          ★
        </div>
      ))}
    </>
  );
}

export function CTAFinal() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-8 py-20 text-center text-white md:px-16 md:py-24"
        style={{ background: "#07060f" }}
      >
        {/* Purple radial glow at top center */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0"
          aria-hidden="true"
          style={{
            height: "55%",
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(110,60,255,0.45) 0%, transparent 100%)",
          }}
        />

        {/* Floating review stars */}
        <FloatingStars />

        <div className="relative">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-periwinkle">
            ¿Empezamos?
          </span>

          <h2 className="font-display mt-6 text-[36px] font-black leading-[1.05] tracking-[-0.03em] md:text-[60px] lg:text-[72px]">
            Tu próximo cliente ya te{" "}
            <span className="text-periwinkle">está googleando.</span>
          </h2>

          <p className="mt-6 mx-auto max-w-xl text-base leading-[1.6] text-white/60 md:text-lg">
            Hablemos 15 minutos. Te mostramos el dashboard, te damos un número
            estimado para tu negocio. Sin compromiso, sin sales pitch.
          </p>

          <div className="mt-10">
            <WhatsAppButton
              size="xl"
              message={WHATSAPP_MESSAGES.ctaFinal}
              className="px-10 py-5 text-lg md:px-14 md:py-6 md:text-xl"
            >
              Hablemos por WhatsApp
            </WhatsAppButton>
          </div>

          <p className="mt-5 text-sm text-white/40">
            Te escribe el fundador. En persona. Sin bots.
          </p>
        </div>
      </div>
    </section>
  );
}
