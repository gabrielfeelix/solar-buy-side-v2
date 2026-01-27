import React from 'react'
import { TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Custo Equip', value: '+35%' },
  { label: 'Juros Finc', value: '+22%' },
  { label: 'Concorrência', value: '+58%' },
]

export const MarketContextSection: React.FC = () => {
  return (
    <section className="bg-navy-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300">
          <TrendingUp className="h-4 w-4 text-emerald-400" />
          Market Context 2025
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-[#0f172a] px-4 py-4 shadow-deep">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
              <div className="mt-2 text-lg font-semibold text-orange-500">{stat.value}</div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Margem pressionada = Vender VALOR é a única saída.
        </p>
      </div>
    </section>
  )
}
