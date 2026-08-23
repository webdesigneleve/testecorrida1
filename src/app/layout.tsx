import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Unbounded, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({ subsets:["latin"], weight:["400","500","600","700","800","900"], variable:"--font-unbounded" });
const manrope = Manrope({ subsets:["latin"], weight:["400","500","600","700","800"], variable:"--font-manrope" });
const spaceGrotesk = Space_Grotesk({ subsets:["latin"], weight:["400","500","600","700"], variable:"--font-grotesk" });
export const metadata: Metadata = { title:"Corrida InforsService 2026 | Inscrições abertas", description:"Corrida de rua de 4 km em 21 de novembro de 2026. Saída em frente à InforsService — Tv. Altíno Costa, 1205, Centro. 1º lote por R$ 85,00.", keywords:["Corrida InforsService","corrida 4 km","corrida de rua 2026","inscrição corrida"], openGraph:{title:"Corrida InforsService 2026",description:"21 de novembro · 4 km · 1º lote R$ 85,00 · inscrições abertas."} };
export default function RootLayout({children}:{children:ReactNode}){return <html lang="pt-BR" className={`${unbounded.variable} ${manrope.variable} ${spaceGrotesk.variable}`}><body className="bg-ink text-ivory antialiased"><div className="noise-layer" aria-hidden/>{children}</body></html>;}
