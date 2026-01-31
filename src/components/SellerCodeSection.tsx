import React from 'react'
import { ShieldCheck, Target, UserCheck, Settings2 } from 'lucide-react'

export const SellerCodeSection: React.FC = () => {
  const contentItems = [
    {
      title: 'Índice de Confiabilidade',
      desc: 'Aprenda a medir e provar a segurança da sua proposta de forma estruturada e profissional.',
      icon: <ShieldCheck className="text-[#F97316]" size={20} />,
    },
    {
      title: 'Ajuste de Precisão com Checklist',
      desc: 'Refine seus materiais de vendas com base no que compradores realmente avaliam (e o que eles descartam).',
      icon: <Settings2 className="text-[#F97316]" size={20} />,
    },
    {
      title: 'Estratégia Anti-Leilão',
      desc: 'Saiba exatamente como agir com clientes focados apenas em preço e recupere sua margem de lucro.',
      icon: <Target className="text-[#F97316]" size={20} />,
    },
    {
      title: 'Postura Consultiva de Elite',
      desc: 'Prepare-se para fechar contratos com clientes técnicos e criteriosos que costumam ignorar vendedores comuns.',
      icon: <UserCheck className="text-[#F97316]" size={20} />,
    },
  ]

  return (
    <section className="relative bg-[#020617] text-white font-sans py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título e Subtítulo - Estilo minimalista */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            O Segredo por trás dos resultados:{' '}
            <span className="text-slate-400">O Código do Vendedor Consultivo</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            O sucesso do Rodrigo <span className="text-white">não foi por acaso.</span> Além de aplicar o Manual
            Solar Buy-Side, ele dominou a estratégia que inverte o jogo: aprender a pensar como um comprador
            profissional para dominar a venda.
          </p>
        </div>

        {/* Grade Principal do Bônus */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Lado Esquerdo: Benefícios do Guia */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#F97316]">
                Bônus Exclusivo
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3">E-book: O Código do Vendedor Consultivo</h3>
            <p className="text-base text-slate-400 mb-10 leading-relaxed">
              O método de imersão no Manual Solar Buy-Side para quem não aceita mais perder vendas por preço.
            </p>

            <div className="space-y-6">
              {contentItems.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-0.5 w-10 h-10 flex-shrink-0 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Mockup do E-book - Versão simplificada */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Livro simplificado */}
              <div className="relative w-72 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-white/10 shadow-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-0.5 bg-[#F97316] mb-6"></div>
                  <p className="text-[9px] font-bold tracking-widest text-[#F97316] mb-3 uppercase">
                    Método Buy-Side
                  </p>
                  <h3 className="text-2xl font-bold leading-tight text-white">
                    O Código do <br />
                    <span className="text-[#F97316]">Vendedor</span> <br />
                    Consultivo
                  </h3>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider leading-relaxed">
                    Aprenda a pensar como <br /> um comprador profissional.
                  </p>
                </div>
              </div>

              {/* Badge simplificado */}
              <div className="absolute -top-3 -right-3 bg-[#F97316] text-white px-4 py-2 rounded-lg shadow-xl">
                <span className="text-xs font-bold uppercase">Grátis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
