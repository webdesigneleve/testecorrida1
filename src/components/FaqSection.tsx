"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { FAQ } from "@/lib/event";
import { IcChevron } from "./Icons";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-data text-xs tracking-[0.4em] text-gold">06</span>
          <span className="h-px flex-1 bg-hair" />
          <span className="font-data text-[10px] uppercase tracking-[0.34em] text-mut">
            Perguntas frequentes
          </span>
        </div>
        <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl" style={{ fontWeight: 800 }}>
          Antes de cruzar a <span className="gold-grad-text">linha</span>
        </h2>
      </Reveal>

      <div className="mt-12 space-y-3">
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 60}>
              <div
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen ? "border-gold/45 bg-ink2/80" : "border-hair bg-ink/50 hover:border-ivory/20"
                }`}
              >
                <button
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-data text-[11px] tracking-[0.2em] ${isOpen ? "text-gold" : "text-mut"}`}
                    style={{ fontWeight: 600 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 font-display text-[15px] sm:text-base ${isOpen ? "text-ivory" : "text-ivory/85"}`}
                    style={{ fontWeight: 600 }}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                      isOpen ? "rotate-180 border-gold/60 text-gold" : "border-hair text-mut"
                    }`}
                  >
                    <IcChevron className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pl-[3.4rem] text-sm leading-relaxed text-mut">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
