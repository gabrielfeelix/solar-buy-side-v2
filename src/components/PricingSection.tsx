import React from 'react'
import { CheckCircle2, Lock, ShieldCheck } from 'lucide-react'
import { ButtonPrimary } from './ManualAtoms'

type PricingSectionProps = {
  id?: string
}

export const PricingSection: React.FC<PricingSectionProps> = ({ id }) => {
  return (
    <section id={id} className="pb-24 pt-12 px-6 bg-[#020617]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Com o aumento de preços dos equipamentos importados e o financiamento mais caro, a regra do jogo mudou.
          Mas enquanto seus concorrentes reclamam, você pode se destacar. Este manual oferece a vantagem que você
          precisa para conquistar a preferência do cliente e fechar negócios, mesmo em tempos difíceis.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8">
          Por isso, não perca tempo nem posição no mercado.<br />
          Veja tudo que você recebe:
        </h2>

        <div className="mt-6 flex flex-col items-center gap-3 text-slate-300">
          {[
            'Acesso imediato ao Manual Solar Buy-Side',
            '130 páginas técnicas + 160 tópicos interativos',
            'Método de jornada de compra completo em 4 fases',
            'Anexos técnicos exclusivos',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm md:text-base">
              <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm md:text-base text-[#F97316] font-semibold">
          Apenas 1.000 unidades na Pré-venda Profissional garantem essa oferta especial!
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-12 text-center border border-slate-800 bg-[#0F172A] rounded-2xl p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-purple-500"></div>
        <h2 className="text-4xl text-white font-bold mb-2">Plano Vitalício</h2>
        <p className="text-slate-400 mb-8">Acesso Imediato + Atualizações 2026</p>
        <div className="text-6xl font-bold text-white mb-2 tracking-tighter">
          R$ 47,25<span className="text-lg text-slate-500 font-normal">/mês</span>
        </div>
        <p className="text-slate-500 text-sm mb-8">ou R$ 567,00 à vista</p>
        <ButtonPrimary className="w-full text-lg shadow-orange-500/20 mb-6">Garantir Vaga Agora</ButtonPrimary>
        <div className="flex justify-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3" /> Seguro
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> 7 Dias Garantia
          </span>
        </div>
      </div>
    </section>
  )
}
