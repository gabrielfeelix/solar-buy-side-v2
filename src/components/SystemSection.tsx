import React from 'react'
import { Eye, Target, Grid2X2, ArrowRight } from 'lucide-react'

export const SystemSection: React.FC = () => {
  return (
    <section className="bg-grid-light section-diagonal section-diagonal-light py-24 text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            O Sistema Operacional do
            <span className="block">Vendedor de Alta Performance.</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            O Manual Buy-Side não é um livro de dicas. É uma arquitetura de decisão.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="glass-light flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                <Eye className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Imersão na jornada de compra SOB A ÓTICA DO COMPRADOR. Compreensão estratégica dos
                critérios de decisão e objeções.
              </p>
            </div>
            <div className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Inteligência Pura
            </div>
          </div>

          <div className="grid gap-6">
            <div className="glass-light flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">O Resultado Prático</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Ao dominar o conceito Buy-Side, você estará apto a lapidar sua abordagem, entregar
                  valor real e elevar sua credibilidade.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
              <div className="glass-light rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                  <Grid2X2 className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-sm font-semibold">O Tabuleiro</h4>
                <p className="mt-2 text-xs text-slate-500">
                  "Se vender é xadrez, este manual ensina a pensar como seu oponente."
                </p>
              </div>

              <button
                type="button"
                className="cta-orange flex items-center justify-center gap-2 rounded-2xl px-6 py-6 text-sm font-semibold uppercase tracking-wide"
              >
                Acessar Arquitetura
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
