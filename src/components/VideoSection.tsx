import React from 'react'
import { Play } from 'lucide-react'

const lessons = [
  {
    title: 'Os 3 grandes RISCOS',
    description: 'Risco técnico (equipamento), financeiro (payback) e operacional (suporte).',
  },
  {
    title: 'Comprador Informado',
    description: 'Como identificar promessas exageradas e red flags em propostas.',
  },
  {
    title: 'Jornada Planejada',
    description: 'As 4 fases da decisão de compra e onde o vendedor perde a venda.',
  },
]

export const VideoSection: React.FC = () => {
  return (
    <section className="section-diagonal section-diagonal-light bg-white pb-24 pt-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="pill pill-light">Realidade de Mercado</span>
          <h2 className="mt-5 text-2xl font-semibold text-slate-900 sm:text-4xl">
            Descubra O Que O Manual Ensina Aos Compradores
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative">
            <div className="glass-dark flex h-[320px] flex-col justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-deep sm:h-[360px]">
              <div className="flex h-full items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
                  <Play className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-auto">
                <div className="h-1 w-full rounded-full bg-white/10">
                  <div className="h-1 w-1/3 rounded-full bg-orange-500" />
                </div>
                <div className="mt-2 flex justify-end text-xs text-slate-300">
                  02:14 / 08:45
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {lessons.map((lesson, index) => (
              <div key={lesson.title} className="glass-light flex gap-4 rounded-xl px-4 py-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{lesson.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{lesson.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
