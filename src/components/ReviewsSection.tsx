import React from 'react'
import { Star, BadgeCheck } from 'lucide-react'

const filters = ['Todos', 'Residencial', 'Comercial', 'Indústria', 'Investidor']

const reviews = [
  {
    label: 'Indústria',
    quote:
      '"Economizei R$ 40k evitando um inversor subdimensionado. O manual se pagou na primeira leitura."',
    name: 'Rogério M.',
    initial: 'R',
  },
  {
    label: 'Gestor Predial',
    quote:
      '"Fica claro quem é vendedor de kit e quem é engenheiro depois de ler o primeiro capítulo."',
    name: 'Carlos J.',
    initial: 'C',
  },
  {
    label: 'Investidor',
    quote:
      '"Não assine nada sem ler isso. Imprescindível para quem vai investir alto."',
    name: 'Ricardo T.',
    initial: 'R',
  },
  {
    label: 'Residencial',
    quote:
      '"Comparei 7 propostas. Escolhi com confiança e economizei 15% na proposta final."',
    name: 'Mariana',
    initial: 'M',
  },
  {
    label: 'Comerciante',
    quote:
      '"O checklist de contrato salvou minha pele. Tinha uma pegadinha na garantia que eu não vi."',
    name: 'Felipe S.',
    initial: 'F',
  },
  {
    label: 'Fundo Solar',
    quote:
      '"Uso os critérios do Francis para homologar integradores no meu fundo."',
    name: 'André L.',
    initial: 'A',
  },
]

export const ReviewsSection: React.FC = () => {
  return (
    <section className="section-diagonal section-diagonal-light bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-4xl">
            Quem Já Usou Para Escolher Melhor
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Filtre por perfil e veja como o manual impacta diferentes negociações:
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                filter === 'Todos'
                  ? 'bg-navy-900 text-white shadow-soft'
                  : 'border border-slate-200 text-slate-500 hover:text-slate-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="glass-light rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-orange-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-orange-500" />
                  ))}
                </div>
                <span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-semibold uppercase text-slate-400">
                  {review.label}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600">{review.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
                  {review.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{review.name}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-emerald-600">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Compra Verificada
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
