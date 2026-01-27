import React from 'react'
import { Download, Check } from 'lucide-react'

export const LeadMagnetSection: React.FC = () => {
  return (
    <section className="section-diagonal section-diagonal-light bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-gradient-to-br from-[#0f172a] via-[#121a30] to-[#1f2937] p-8 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Download className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Prefere testar antes?</h3>
            <p className="mt-2 text-sm text-slate-300">
              Baixe o Capítulo Zero gratuitamente. Entenda as 4 Fases da Maturidade do Comprador.
            </p>
            <button type="button" className="cta-green mt-8 w-full rounded-xl px-6 py-4 text-sm font-semibold uppercase">
              Baixar no Whatsapp
            </button>
          </div>

          <div className="p-8">
            <h4 className="text-sm font-semibold text-slate-900">O que você recebe grátis:</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {['Os 3 Riscos Ocultos da Compra', 'As 4 Fases da Decisão', 'Checklist de Avaliação'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <p className="mt-6 text-xs italic text-slate-400">
              "Se você ler isso e achar que não muda o jogo, não compre o manual."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
