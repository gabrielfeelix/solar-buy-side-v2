import React from 'react'
import { AlertTriangle, ShieldCheck, Target } from 'lucide-react'
import { ButtonPrimary } from './ManualAtoms'

const buyerMastery = [
  'Conceitos essenciais para uma compra técnica e segura',
  'Reconhecimento de marcas e distribuidores de alta confiança',
  'Critérios para selecionar empresas sérias e competentes',
]

const buyerSkills = [
  'Analisar propostas com critérios técnicos e financeiros',
  'Avaliar reputação e suporte de pós-venda com precisão',
  'Tomar decisão com segurança e embasamento técnico',
]

export const BuyerWaveSection: React.FC = () => {
  const handleCta = () => {
    const element = document.getElementById('oferta-final')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 px-6 bg-[#020617] text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/40 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            E se você ainda duvida do que está em jogo,
          </h2>
          <p className="text-lg text-slate-400 mt-4">
            veja tudo o que seus compradores aprenderão muito em breve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 border border-red-500/40 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-red-400" />
              <h3 className="text-xl font-bold text-white">O que o comprador vai dominar</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              {buyerMastery.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/60 border border-[#F97316]/40 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-[#F97316]" />
              <h3 className="text-xl font-bold text-white">Principais focos e habilidades</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              {buyerSkills.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#F97316]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 text-center bg-slate-900/70 border border-slate-800 rounded-2xl p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Vem aí uma onda de compradores altamente informados.
          </h3>
          <p className="text-lg text-slate-300 mb-6">
            Só quem estiver preparado vai conquistar essas vendas. Você vai ser o vendedor que ensina o cliente,
            ou o vendedor que o cliente ensina?
          </p>
          <ButtonPrimary className="px-10" onClick={handleCta}>
            Garantir minha vantagem agora
          </ButtonPrimary>
        </div>
      </div>
    </section>
  )
}
