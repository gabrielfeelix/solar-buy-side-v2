import React from 'react'
import { BookOpen, Layers, Sheet, Target } from 'lucide-react'

export const DeliverablesSection: React.FC = () => {
  return (
    <section className="section-diagonal section-diagonal-light bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-4xl">
            Especificações & Entregáveis
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Conteúdo técnico denso, estruturado para aplicação imediata.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.7fr_1fr_0.7fr]">
          <div className="grid gap-6">
            <div className="glass-light flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft">
              <BookOpen className="h-7 w-7 text-orange-500" />
              <div>
                <div className="text-sm font-semibold">130+ Páginas</div>
                <div className="text-xs text-slate-500">Densidade Profissional</div>
              </div>
            </div>
            <div className="glass-light flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft">
              <Target className="h-7 w-7 text-orange-500" />
              <div>
                <div className="text-sm font-semibold">4 Fases</div>
                <div className="text-xs text-slate-500">Metodologia Completa</div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl border border-slate-200 bg-gradient-to-br from-orange-50 via-white to-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <Layers className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-semibold uppercase text-orange-500">
                Apenas Pré-venda
              </span>
            </div>
            <p className="mt-5 text-sm text-slate-500">
              Scripts reais de negociação, checklists de "Red Flags" e como conduzir compradores
              iludidos pelo menor preço.
            </p>
            <div className="mt-4 text-xs font-semibold text-orange-500">Vale o preço do manual.</div>

            <div className="mt-10 h-1.5 w-full rounded-full bg-slate-200">
              <div className="h-1.5 w-3/5 rounded-full bg-orange-500" />
            </div>
            <div className="mt-2 text-right text-[10px] text-slate-400">327/1000 Restantes</div>
          </div>

          <div className="grid gap-6">
            <div className="glass-light flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft">
              <Layers className="h-7 w-7 text-orange-500" />
              <div>
                <div className="text-sm font-semibold">160 Tópicos</div>
                <div className="text-xs text-slate-500">Índice Interativo</div>
              </div>
            </div>
            <div className="glass-light flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft">
              <Sheet className="h-7 w-7 text-orange-500" />
              <div>
                <div className="text-sm font-semibold">Anexos .XLS</div>
                <div className="text-xs text-slate-500">Ferramentas Prontas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
