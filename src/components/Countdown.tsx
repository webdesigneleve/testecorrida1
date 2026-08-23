"use client";

import { useEffect, useState } from "react";
const TARGET = new Date("2026-11-21T00:00:00-03:00").getTime();
type Diff = { d: number; h: number; m: number; s: number; over: boolean };
function getDiff(): Diff { const t = TARGET - Date.now(); if (t <= 0) return { d: 0, h: 0, m: 0, s: 0, over: true }; return { d: Math.floor(t / 864e5), h: Math.floor(t / 36e5) % 24, m: Math.floor(t / 6e4) % 60, s: Math.floor(t / 1e3) % 60, over: false }; }
const pad = (n: number) => String(n).padStart(2, "0");
function Cell({ value, label }: { value: number; label: string }) { return <div className="flex flex-col items-center gap-1.5"><div className="relative w-full overflow-hidden rounded-xl border border-hair bg-black/80 px-1 py-3 text-center"><span key={value} className="digit-in font-data text-3xl font-700 tabular-nums text-gold sm:text-4xl" style={{ fontWeight: 700 }}>{pad(value)}</span></div><span className="font-data text-[10px] uppercase tracking-[0.28em] text-mut">{label}</span></div>; }
export default function Countdown() { const [diff, setDiff] = useState<Diff>({ d: 0, h: 0, m: 0, s: 0, over: true }); useEffect(() => { setDiff(getDiff()); const id = setInterval(() => setDiff(getDiff()), 1000); return () => clearInterval(id); }, []); if (diff.over) return <div className="font-display text-2xl font-800 gold-grad-text" style={{ fontWeight: 800 }}>É HOJE!</div>; return <div className="grid grid-cols-4 gap-2.5 sm:gap-3"><Cell value={diff.d} label="Dias" /><Cell value={diff.h} label="Horas" /><Cell value={diff.m} label="Min" /><Cell value={diff.s} label="Seg" /></div>; }
