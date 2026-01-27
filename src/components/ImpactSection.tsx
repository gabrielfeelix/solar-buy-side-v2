import React from 'react'
import { Brain, BadgeCheck, Sparkle } from 'lucide-react'

export const ImpactSection: React.FC = () => {
  return (
    <section className="bg-navy-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-semibold sm:text-4xl">
          Impacto na Rotina: O Que Você Domina?
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#101a31] to-[#0c1326] p-6 shadow-deep">
            <div className="flex items-center gap-3 text-sm font-semibold">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/15 text-purple-400">
                <Brain className="h-5 w-5" />
              </div>
              Domínio Psicológico
            </div>

            <ul className="mt-6 space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <Sparkle className="mt-1 h-4 w-4 text-purple-400" />
                <div>
                  <div className="font-semibold">Dores Reais</div>
                  <div className="text-xs text-slate-400">
                    Compreender profundamente, não as que você imagina.
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Sparkle className="mt-1 h-4 w-4 text-purple-400" />
                <div>
                  <div className="font-semibold">Postura Consultiva</div>
                  <div className="text-xs text-slate-400">Pare de "empurrar" produto. Vire parceiro.</div>
                </div>
              </li>
            </ul>

            <div className="mt-6 rounded-md border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-center text-xs text-purple-200">
              Vendedores com essa skill fecham 30% mais.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#101a31] to-[#0c1326] p-6 shadow-deep">
            <div className="flex items-center gap-3 text-sm font-semibold">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-400">
                <BadgeCheck className="h-5 w-5" />
              </div>
              Hard Skills & Foco
            </div>

            <ul className="mt-6 space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <Sparkle className="mt-1 h-4 w-4 text-sky-400" />
                <div>
                  <div className="font-semibold">Apresentações Persuasivas</div>
                  <div className="text-xs text-slate-400">
                    Use dados do PRÓPRIO cliente para personalizar.
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Sparkle className="mt-1 h-4 w-4 text-sky-400" />
                <div>
                  <div className="font-semibold">Confiança Instantânea</div>
                  <div className="text-xs text-slate-400">O cliente sente que você SABE o que diz.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
