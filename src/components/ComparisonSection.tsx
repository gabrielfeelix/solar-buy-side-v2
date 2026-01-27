import React from 'react'
import { Check, X } from 'lucide-react'

const commonPoints = [
  'Foca em preço/Wp e desconto.',
  '"Garantia de 25 anos" (genérico).',
  'Envia proposta padrão em PDF.',
  'Reclama da concorrência "prostituída".',
]

const expertPoints = [
  'Vende LCOE, TIR e Payback Ajustado.',
  'Explica riscos ocultos de garantia.',
  'Constrói o cenário financeiro com o cliente.',
  'Usa a concorrência fraca como escada.',
]

export const ComparisonSection: React.FC = () => {
  return (
    <section className="bg-navy-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-2xl font-semibold sm:text-4xl">Por que eles ganham e você perde?</h2>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-6 text-left text-slate-400">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
              Vendedor Comum
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {commonPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <X className="mt-1 h-4 w-4 text-red-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border border-orange-500/70 bg-[#0f172a] p-6 text-left">
            <div className="absolute right-4 top-4 rounded-md bg-orange-500 px-2 py-1 text-[10px] font-semibold uppercase">
              Você Hoje
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
              Especialista Buy-Side
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {expertPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 text-orange-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute left-1/2 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-900 shadow-soft lg:flex">
            VS
          </div>
        </div>
      </div>
    </section>
  )
}
