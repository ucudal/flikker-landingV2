"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES, CALENDLY_URL } from "@/lib/constants";

export function MidCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-10 md:px-8 md:py-12" style={{ background: "#07060f" }}>
      <style>{`
        @keyframes mid-cta-pulse {
          0%   { opacity: 0.55; transform: translate(-50%, -50%) scale(1);    }
          50%  { opacity: 0.85; transform: translate(-50%, -50%) scale(1.18); }
          100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1);    }
        }
        @keyframes mid-cta-drift {
          0%   { transform: translate(0%, 0%)   scale(1);    }
          33%  { transform: translate(6%, -8%)  scale(1.12); }
          66%  { transform: translate(-5%, 6%)  scale(0.95); }
          100% { transform: translate(0%, 0%)   scale(1);    }
        }
      `}</style>

      {/* Animated blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/2"
        style={{
          width: 520,
          height: 260,
          background: "radial-gradient(ellipse, rgba(100,60,255,0.55) 0%, transparent 70%)",
          animation: "mid-cta-pulse 5s ease-in-out infinite",
          transformOrigin: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0"
        style={{
          width: 340,
          height: 220,
          background: "radial-gradient(ellipse, rgba(145,136,245,0.3) 0%, transparent 70%)",
          animation: "mid-cta-drift 8s ease-in-out infinite",
          transformOrigin: "center",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <h2 className="font-display text-[24px] font-black leading-[1.1] tracking-[-0.02em] text-white md:text-[32px] lg:text-[36px]">
          ¿Listo para crecer en Google?
        </h2>

        <div className="flex shrink-0 flex-wrap items-center gap-3">
          {/* Outlined — Agendar demo */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <Calendar className="h-4 w-4 shrink-0 text-white/60" />
            Agendar demo
          </a>

          {/* Filled — Empezar gratis */}
          <a
            href={buildWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-periwinkle px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(145,136,245,0.45)] transition-all hover:bg-periwinkle/90 hover:shadow-[0_4px_28px_rgba(145,136,245,0.6)]"
          >
            Empezar gratis
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
