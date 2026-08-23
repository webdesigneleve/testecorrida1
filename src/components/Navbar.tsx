"use client";

import { useEffect, useState } from "react";
import { IcMenu, IcClose, IcBolt } from "./Icons";

const LINKS = [
  { label: "O Evento", href: "#evento" },
  { label: "Percurso", href: "#percurso" },
  { label: "Premiação", href: "#premiacao" },
  { label: "Kit", href: "#kit" },
  { label: "FAQ", href: "#faq" },
];

function Logo() {
  return (
    <a href="#topo" className="group flex items-center gap-3" aria-label="Corrida InforsService">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006BDF] text-white shadow-[0_8px_24px_-8px_rgba(0,107,223,0.8)] transition-transform duration-300 group-hover:rotate-6">
        <IcBolt className="h-5 w-5" strokeWidth={2} />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[12px] font-800 tracking-[0.12em] text-ivory" style={{ fontWeight: 800 }}>
          INFORSERVICE
        </span>
        <span className="mt-1 block font-data text-[9px] uppercase tracking-[0.38em] text-gold">
          Corrida · 2026
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-hair bg-ink/90 py-3 backdrop-blur-md" : "border-b border-transparent bg-transparent py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="group relative font-data text-[11px] uppercase tracking-[0.24em] text-ivory/70 transition-colors hover:text-ivory">
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#inscricao" className="btn-gold hidden !px-5 !py-2.5 text-[12px] sm:inline-flex">Inscreva-se</a>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-hair text-ivory lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Fechar menu" : "Abrir menu"}>
            {open ? <IcClose className="h-5 w-5" /> : <IcMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div className={`overflow-hidden border-b border-hair bg-ink/95 backdrop-blur-md transition-all duration-500 lg:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-data text-sm uppercase tracking-[0.2em] text-ivory/80 hover:bg-white/5 hover:text-gold">{l.label}</a>)}
          <a href="#inscricao" onClick={() => setOpen(false)} className="btn-gold mt-2 w-full">Inscreva-se agora</a>
        </nav>
      </div>
    </header>
  );
}
