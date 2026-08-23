import { IcDiamond } from "./Icons";

const ITEMS = ["Inscrições abertas", "Sábado · 21 de novembro", "Percurso único · 4 km", "1º lote · R$ 85,00", "Saída: InforsService", "Café da manhã + mingau", "Premiação por categoria"];
function Row() { return <div className="flex shrink-0 items-center">{ITEMS.map((it) => <span key={it} className="flex items-center"><span className="whitespace-nowrap px-6 font-display text-[11px] font-700 uppercase tracking-[0.3em] text-white sm:px-8 sm:text-xs" style={{ fontWeight: 700 }}>{it}</span><IcDiamond className="h-2.5 w-2.5 text-white/55" /></span>)}</div>; }
export default function Ticker() { return <div className="relative z-10 overflow-hidden border-y border-white/10 bg-[#006BDF] py-3"><div className="marquee-track" aria-hidden="true"><Row /><Row /><Row /><Row /></div><span className="sr-only">Inscrições abertas para a Corrida InforsService 2026, sábado 21 de novembro, percurso de 4 quilômetros.</span></div>; }
