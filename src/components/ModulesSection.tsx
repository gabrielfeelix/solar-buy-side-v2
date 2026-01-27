import React from 'react'
import { Hourglass, BadgeCheck } from 'lucide-react'

const modules = [
  'Módulo 1: A Mente do Comprador',
  'Módulo 2: Finanças Solares Avançadas',
  'Módulo 3: Técnica Anti-Objeção',
]

export const ModulesSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="bg-orange-50 py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            <Hourglass className="h-4 w-4" />
            Tempo Limitado
          </div>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">
            O Mercado não espera. <span className="text-orange-500">Sua vantagem é agora.</span>
          </h3>
          <p className="mt-2 text-xs text-slate-500">
            Não espere até que seus clientes saibam mais que você. Manual Completo + Bônus = Vantagem
            Imediata.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Clientes Acessando
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Bônus Esgotando
            </span>
          </div>
        </div>
      </div>

      <div className="section-diagonal section-diagonal-light py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-4xl">
              Não é Teoria. É Campo de Batalha.
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Estruturado para consulta rápida durante a negociação.
            </p>

            <div className="mt-6 space-y-4">
              {modules.map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-soft">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-500">
                    {index + 1}
                  </div>
                  <div className="text-sm font-semibold text-slate-700">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-56 w-40 -rotate-8 rounded-xl bg-orange-500 shadow-deep" />
            <div className="relative h-60 w-44 rotate-3 rounded-xl bg-[#0f172a] shadow-deep">
              <div className="flex h-full flex-col items-center justify-center text-white">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-300">Manual</span>
                <span className="text-lg font-semibold">Solar</span>
              </div>
            </div>
            <div className="absolute -bottom-6 left-4 rounded-xl bg-white px-4 py-3 text-xs text-slate-500 shadow-soft">
              <div className="flex items-center gap-2 text-orange-500">
                <BadgeCheck className="h-4 w-4" />
                Checklist Pronto
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
