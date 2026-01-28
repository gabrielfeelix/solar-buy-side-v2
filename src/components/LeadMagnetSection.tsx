import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { ButtonSuccess } from './ManualAtoms'

const ebookImage = '/assets/ebook-free.webp'

const freebies = [
  'Os 3 riscos na compra de sistemas solares',
  'As 4 fases que seu cliente seguirá antes de comprar',
  'Como sua proposta será avaliada e comparada',
  'O índice detalhado do Manual Solar Buy-Side',
]

export const LeadMagnetSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Se, mesmo com todas essas informações, você ainda tem dúvidas sobre o impacto do Manual Buy-Side,
            temos uma prévia gratuita para você.
          </h2>
          <p className="text-slate-600 mb-6">
            Garanta agora seu e-book grátis e entenda por que a imersão Solar Buy-Side faz vendedores
            venderem mais e melhor.
          </p>
          <ul className="space-y-3 mb-8">
            {freebies.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ButtonSuccess className="px-8">Baixar ebook grátis agora</ButtonSuccess>
        </div>

        <div className="flex justify-center">
          <div className="relative w-64 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
            <img src={ebookImage} alt="E-book grátis Manual Solar Buy-Side" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
