import React from 'react'
import { Briefcase, Search } from 'lucide-react'

export const AuthoritySection: React.FC = () => {
  return (
    <section className="bg-navy-950 py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <div className="h-[420px] rounded-3xl bg-gradient-to-br from-[#1f2937] via-[#0f172a] to-[#1a1410] shadow-deep" />
          <div className="absolute bottom-6 left-6">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">O Mentor</div>
            <div className="mt-2 text-xl font-semibold">Francis Poloni</div>
            <div className="text-xs text-slate-400">Consultor Buy-Side & Sell-Side</div>
          </div>
          <div className="absolute -bottom-6 right-6 rounded-2xl bg-orange-500 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-deep">
            7+ Anos
            <div className="text-[10px] font-medium">de Experiência Dual</div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold leading-tight sm:text-4xl">
            Criado Por Quem Viveu
            <span className="block text-orange-500">Os Dois Lados da Mesa.</span>
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            Francis não apenas ensina vendas; ele viveu a compra. Assessorando indústrias e fundos,
            ele decodificou exatamente o que faz um comprador fechar negócio.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-xl border border-white/10 bg-[#0f172a] p-4">
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                  <Search className="h-5 w-5" />
                </span>
                Visão Buy-Side (Comprador)
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Due diligence, análise de contratos e validação técnica.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f172a] p-4">
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                  <Briefcase className="h-5 w-5" />
                </span>
                Visão Sell-Side (Vendedor)
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Estruturação de times comerciais e funis de alta conversão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
