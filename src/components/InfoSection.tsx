"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import ShareButtons from "./ShareButtons";
import { EVENTO, REGULAMENTO, formatBRL } from "@/lib/event";
import { IcCalendar, IcClock, IcPin, IcRoute, IcCard, IcUsers, IcChevron, IcRunner, IcAlert } from "./Icons";

const INFO = [
  { icon: IcCalendar, label: "Data", value: "21 de novembro de 2026 · sábado" },
  { icon: IcClock, label: "Horário", value: "Concentração e largada serão divulgadas pela organização" },
  { icon: IcPin, label: "Saída", value: "Em frente à InforsService Informática e Papelaria" },
  { icon: IcPin, label: "Endereço", value: "Tv. Altíno Costa, 1205 — Centro" },
  { icon: IcRoute, label: "Percurso", value: "4 km · corrida de rua em trajeto único" },
  { icon: IcCard, label: "Inscrição", value: `1º lote: ${formatBRL(EVENTO.precoLote1)}` },
  { icon: IcUsers, label: "Categorias", value: "Geral Masculino/Feminino · Top 5 · LGBTQIA+" },
  { icon: IcRunner, label: "No evento", value: "Café da manhã, mingau, água, medalhas e premiação" },
];

export default function InfoSection() {
  const [regOpen, setRegOpen] = useState(false);
  return <section id="evento" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
    <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
    <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start"><Reveal>
        <div className="flex items-center gap-4"><span className="font-data text-xs tracking-[0.4em] text-gold">01</span><span className="h-px flex-1 bg-hair" /><span className="font-data text-[10px] uppercase tracking-[0.34em] text-mut">O evento</span></div>
        <h2 className="mt-6 font-display text-4xl leading-[1.02] sm:text-5xl" style={{ fontWeight: 800 }}>Tudo o que<br />você precisa<br /><span className="gold-grad-text">para correr.</span></h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-mut">A Corrida InforsService é um encontro para quem quer sair do ponto de partida, viver o esporte e celebrar cada chegada. Um percurso de 4 km, estrutura acolhedora e premiação que reconhece cada conquista.</p>
        <div className="mt-8 flex flex-wrap items-center gap-4"><button className="btn-ghost text-xs" onClick={() => setRegOpen((v) => !v)}>{regOpen ? "Fechar regulamento" : "Ler resumo do regulamento"}<IcChevron className={`h-4 w-4 transition-transform duration-300 ${regOpen ? "rotate-180" : ""}`} /></button><ShareButtons /></div>
      </Reveal>
      <div className={`grid transition-all duration-500 ease-out ${regOpen ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><ol className="panel space-y-4 p-6">{REGULAMENTO.map((r, i) => <li key={i} className="flex gap-3 text-[13px] leading-relaxed text-ivory/75"><span className="font-data text-[11px] font-700 text-gold" style={{ fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</span>{r}</li>)}</ol></div></div>
      </div>
      <div><Reveal><div className="panel divide-y divide-[color:var(--color-hair)] overflow-hidden">{INFO.map((it, i) => { const Icon = it.icon; return <div key={it.label} className="group flex items-start gap-4 px-6 py-5 transition-colors duration-300 hover:bg-white/[0.025]"><span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-hair bg-ink2 text-gold transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_-4px_rgba(0,107,223,0.5)]"><Icon className="h-4.5 w-4.5" /></span><span className="min-w-0"><span className="block font-data text-[10px] uppercase tracking-[0.3em] text-mut">{it.label}</span><span className="mt-1 block text-sm font-600 text-ivory" style={{ fontWeight: 600 }}>{it.value}</span></span><span className="ml-auto hidden self-center font-data text-[10px] text-mut/50 sm:block">{String(i + 1).padStart(2, "0")}</span></div>; })}</div></Reveal>
      <Reveal delay={120}><div className="mt-6 flex items-start gap-4 rounded-2xl border border-gold/35 bg-gold/[0.09] p-5"><IcAlert className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><p className="text-[13px] leading-relaxed text-ivory/80">O horário da concentração, o regulamento completo e os detalhes operacionais serão divulgados pela organização. Confirme sempre as informações nos canais oficiais antes do evento.</p></div></Reveal></div>
    </div>
  </section>;
}
