import React from 'react'
import { ShieldCheck, BadgeCheck } from 'lucide-react'

export const PricingSection: React.FC = () => {
  return (
    <section className="bg-navy-950 py-24 text-white">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-8 shadow-deep">
          <div className="h-1 w-full rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-sky-400" />
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold">Plano Vitalício</h2>
            <p className="mt-2 text-sm text-slate-300">Acesso Imediato + Atualizações 2026</p>
            <div className="mt-6 text-4xl font-semibold">R$ 47,25<span className="text-base font-normal text-slate-400">/mês</span></div>
            <div className="mt-1 text-xs text-slate-400">ou R$ 567,00 à vista</div>
          </div>

          <button
            type="button"
            className="relative mt-8 w-full overflow-hidden rounded-xl bg-orange-500 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white"
          >
            <span className="relative z-10">Garantir vaga agora</span>
            <span className="absolute inset-0 -left-10 h-full w-2/3 -skew-x-12 bg-orange-300/50" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Seguro
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4" />
              7 Dias Garantia
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
