import React, { useMemo, useState } from 'react'
import { Star, UserCheck } from 'lucide-react'
import { SectionHeading } from './ManualAtoms'

type ReviewType = 'todos' | 'res' | 'com' | 'ind' | 'inv'

type Review = {
  name: string
  type: ReviewType
  role: string
  text: string
  stars: number
  avatar: string
}

const avatars = ['/assets/person1.jpg', '/assets/person2.jpg', '/assets/person3.jpg', '/assets/person4.jpg']

const baseReviews: Omit<Review, 'avatar'>[] = [
  {
    name: 'Rogério M.',
    type: 'ind',
    role: 'Indústria',
    text: 'Economizei R$ 40k evitando um inversor subdimensionado. O manual se pagou na primeira leitura.',
    stars: 5,
  },
  {
    name: 'Carlos J.',
    type: 'com',
    role: 'Gestor Predial',
    text: 'Fica claro quem é vendedor de kit e quem é engenheiro depois de ler o primeiro capítulo.',
    stars: 5,
  },
  {
    name: 'Ricardo T.',
    type: 'inv',
    role: 'Investidor',
    text: 'Não assine nada sem ler isso. Imprescindível para quem vai investir alto.',
    stars: 5,
  },
  {
    name: 'Mariana',
    type: 'res',
    role: 'Residencial',
    text: 'Comparei 7 propostas. Escolhi com confiança e economizei 15% na proposta final.',
    stars: 5,
  },
  {
    name: 'Felipe S.',
    type: 'com',
    role: 'Comerciante',
    text: 'O checklist de contrato salvou minha pele. Tinha uma pegadinha na garantia que eu não vi.',
    stars: 5,
  },
  {
    name: 'André L.',
    type: 'inv',
    role: 'Fundo Solar',
    text: 'Uso os critérios do Francis para homologar integradores no meu fundo.',
    stars: 5,
  },
]

const reviews: Review[] = baseReviews.map((review, index) => ({
  ...review,
  avatar: avatars[index % avatars.length],
}))

export const ReviewsSection: React.FC = () => {
  const [reviewFilter, setReviewFilter] = useState<ReviewType>('todos')

  const filteredReviews = useMemo(() => {
    if (reviewFilter === 'todos') {
      return reviews
    }
    return reviews.filter((review) => review.type === reviewFilter)
  }, [reviewFilter])

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Cada sorriso conta uma experiência."
          subtitle="Feedbacks reais de quem aplicou o manual. Veja como ele fez a diferença."
          theme="light"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'res', label: 'Residencial' },
            { id: 'com', label: 'Comercial' },
            { id: 'ind', label: 'Indústria' },
            { id: 'inv', label: 'Investidor' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setReviewFilter(tab.id as ReviewType)}
              type="button"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                reviewFilter === tab.id
                  ? 'bg-[#0F172A] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-in fade-in duration-500">
          {filteredReviews.map((review) => (
            <div
              key={`${review.name}-${review.role}`}
              className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-0.5 text-[#F97316]">
                  {[...Array(review.stars)].map((_, index) => (
                    <Star key={`${review.name}-${index}`} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold uppercase text-slate-400">
                  {review.role}
                </span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                  <img src={review.avatar} alt={review.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#0F172A]">{review.name}</p>
                  <p className="text-[10px] text-green-600 flex items-center gap-1">
                    <UserCheck className="w-3 h-3" /> Compra Verificada
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
