import React from 'react'
import { Quote, AlertTriangle } from 'lucide-react'

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-diagonal section-diagonal-light bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="relative h-full min-h-[360px] rounded-3xl bg-gradient-to-br from-[#111a30] via-[#0f172a] to-[#1c0f12] p-8 text-white shadow-deep">
              <Quote className="h-10 w-10 text-orange-500" />
              <div className="absolute bottom-8 left-8">
                <div className="text-sm font-semibold">Rodrigo M.</div>
                <div className="text-xs text-slate-300">Integrador Solar, SP</div>
              </div>
            </div>
            <div className="absolute right-6 top-6 rounded-xl bg-white px-4 py-3 text-center text-xs shadow-soft">
              <div className="text-[10px] font-semibold text-slate-500">CRESCIMENTO</div>
              <div className="text-lg font-semibold text-orange-500">+5 Sistemas</div>
              <div className="text-[11px] text-slate-400">Fechados em 30 dias</div>
            </div>
          </div>

          <div className="glass-light rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-2xl font-semibold leading-tight text-slate-900">
              "Eu não fechei apenas uma venda.
              <span className="block text-orange-500 italic">Eu mudei meu modelo de negócio."</span>
            </h3>
            <p className="mt-6 text-sm text-slate-500">
              "Antes eu perdia tempo explicando datasheet e brigando por centavos. O Manual Buy-Side
              me ensinou a sentar na mesa do cliente como um consultor, não como um vendedor."
            </p>
            <p className="mt-4 text-sm text-slate-500">
              "Quando mostrei o cálculo de inflação energética que aprendi no módulo 3, o cliente
              parou de cotar com os outros na hora. A percepção de valor foi imediata."
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border-l-2 border-orange-500 bg-orange-50/60 p-4 text-xs text-slate-600">
              <AlertTriangle className="mt-0.5 h-4 w-4 text-orange-500" />
              <div>
                <div className="font-semibold uppercase text-orange-500">Reality Check</div>
                <div className="mt-1">
                  Você acha que os concorrentes que perderam essa venda sabiam que o Rodrigo estava
                  usando técnicas de valuation financeiro? Eles nunca tiveram chance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
