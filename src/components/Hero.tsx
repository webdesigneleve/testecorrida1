import Countdown from "./Countdown";
import { EVENTO, formatBRL } from "@/lib/event";
import { IcArrow, IcPin } from "./Icons";

const META = [
  { label: "Data", value: "Sáb · 21 Nov 2026" },
  { label: "Percurso", value: "4 km" },
  { label: "Saída", value: "Em frente à InforsService" },
  { label: "1º lote", value: formatBRL(EVENTO.precoLote1) },
];

export default function Hero() {
  return (
    <section id="topo" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero.jpg" alt="Atletas correndo em uma corrida de rua" className="kenburns h-full w-full object-cover grayscale-[25%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/25 to-black/70" />
        <div className="absolute inset-0 bg-[#006BDF]/10 mix-blend-color" />
      </div>
      <span aria-hidden className="absolute right-7 top-1/2 hidden -translate-y-1/2 font-data text-[11px] uppercase tracking-[0.55em] text-ivory/35 xl:block" style={{ writingMode: "vertical-rl" }}>
        21 · Nov · 2026 — 4 quilômetros
      </span>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pt-32 lg:px-8">
        <div className="flex flex-col gap-10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
          <div className="max-w-3xl">
            <div className="mask-line"><span style={{ ["--d" as string]: "80ms" }}><span className="inline-flex items-center gap-3"><span className="h-px w-10 bg-gold" /><span className="font-data text-[11px] font-600 uppercase tracking-[0.4em] text-gold sm:text-xs" style={{ fontWeight: 600 }}>Corrida de rua · 4 km</span></span></span></div>
            <h1 className="mt-5 leading-[0.92]">
              <span className="mask-line"><span className="outline-ivory font-display text-[clamp(2rem,5.8vw,4.5rem)] tracking-[0.08em]" style={{ ["--d" as string]: "180ms", fontWeight: 700 }}>CORRIDA</span></span>
              <span className="mask-line"><span className="gold-grad-text font-display text-[clamp(2.7rem,8.8vw,7.1rem)] tracking-[-0.04em]" style={{ ["--d" as string]: "300ms", fontWeight: 900 }}>INFORSERVICE</span></span>
              <span className="mask-line"><span className="outline-gold font-display text-[clamp(2.2rem,6.6vw,5.2rem)]" style={{ ["--d" as string]: "430ms", fontWeight: 800 }}>21 NOV · SÁBADO</span></span>
            </h1>
            <div className="mask-line mt-7"><span style={{ ["--d" as string]: "560ms" }}><span className="block max-w-xl text-sm leading-relaxed text-ivory/75 sm:text-base">Uma corrida feita para se superar, celebrar e cruzar a linha junto. <strong className="font-700 text-ivory" style={{ fontWeight: 700 }}>São 4 km de energia, acolhimento e conquistas.</strong> Café da manhã e mingau antes da prova; água, medalha e premiação ao final.</span></span></div>
            <div className="mask-line mt-8"><span style={{ ["--d" as string]: "680ms" }}><span className="flex flex-wrap items-center gap-4"><a href="#inscricao" className="btn-gold text-sm">Garantir inscrição <IcArrow className="h-4 w-4" /></a><a href="#percurso" className="btn-ghost text-sm">Conhecer o percurso</a><span className="hidden items-center gap-2 font-data text-[11px] uppercase tracking-[0.22em] text-ivory/50 md:inline-flex"><IcPin className="h-4 w-4 text-gold" />{EVENTO.localCompleto}</span></span></span></div>
          </div>
          <div className="w-full max-w-sm"><div className="float-slow panel relative overflow-hidden p-6 backdrop-blur-sm"><div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/15 blur-2xl" /><div className="flex items-center justify-between"><span className="font-data text-[10px] uppercase tracking-[0.34em] text-mut">Contagem regressiva</span><span className="pulse-dot h-2 w-2 rounded-full bg-gold" /></div><p className="mt-3 font-display text-sm font-700 text-ivory" style={{ fontWeight: 700 }}>Faltam para a corrida</p><div className="mt-4"><Countdown /></div><p className="mt-4 border-t border-hair pt-3 font-data text-[10px] uppercase tracking-[0.22em] text-mut">{EVENTO.dataExib} · horário em breve</p></div></div>
        </div>
        <div className="mask-line border-t border-hair"><span style={{ ["--d" as string]: "800ms" }}><span className="grid grid-cols-2 gap-y-6 py-7 md:grid-cols-4">{META.map((m) => <span key={m.label} className="flex flex-col gap-1 pr-6"><span className="font-data text-[10px] uppercase tracking-[0.34em] text-gold">{m.label}</span><span className="font-display text-sm font-600 text-ivory sm:text-base" style={{ fontWeight: 600 }}>{m.value}</span></span>)}</span></span></div>
      </div>
    </section>
  );
}
