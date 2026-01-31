import React, { useState } from 'react'
import { ShieldCheck, Target, UserCheck, Settings2, Sparkles, ArrowRight, BookOpen } from 'lucide-react'

export const SellerCodeSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const contentItems = [
    {
      title: 'Índice de Confiabilidade',
      desc: 'Aprenda a medir e provar a segurança da sua proposta de forma estruturada e profissional.',
      icon: <ShieldCheck size={20} />,
    },
    {
      title: 'Ajuste de Precisão com Checklist',
      desc: 'Refine seus materiais de vendas com base no que compradores realmente avaliam (e o que eles descartam).',
      icon: <Settings2 size={20} />,
    },
    {
      title: 'Estratégia Anti-Leilão',
      desc: 'Saiba exatamente como agir com clientes focados apenas em preço e recupere sua margem de lucro.',
      icon: <Target size={20} />,
    },
    {
      title: 'Postura Consultiva de Elite',
      desc: 'Prepare-se para fechar contratos com clientes técnicos e criteriosos que costumam ignorar vendedores comuns.',
      icon: <UserCheck size={20} />,
    },
  ]

  return (
    <section className="bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* CONTAINER GERAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* COLUNA ESQUERDA: NARRATIVA E LISTA */}
          <div className="lg:col-span-7 space-y-20">
            {/* Header Narrativo */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 border-b border-slate-900 pb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Case Study</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  / Rodrigo & Team
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-slate-900">
                O Segredo por trás <br /> dos resultados: <br />
                <span className="text-[#F97316]">O Código do Vendedor Consultivo</span>
              </h2>

              <div className="pl-6 border-l-2 border-slate-100">
                <p className="text-lg md:text-xl text-slate-500 font-normal leading-relaxed">
                  O sucesso do Rodrigo <span className="text-slate-900 font-medium">não foi por acaso.</span> Além de
                  aplicar o Manual Solar Buy-Side, ele dominou a estratégia que inverte o jogo:{' '}
                  <span className="italic text-slate-700">
                    aprender a pensar como um comprador profissional para dominar a venda.
                  </span>
                </p>
              </div>
            </div>

            {/* O BÔNUS (Header da Lista) */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 text-[#F97316]">
                  <Sparkles size={14} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Oferta Especial
                  </span>
                  <span className="block text-sm font-bold text-slate-900 uppercase tracking-tight">
                    [BÔNUS EXCLUSIVO]
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-4 tracking-tight">E-book: O Código do Vendedor Consultivo</h3>
              <p className="text-slate-500 text-lg font-light mb-12">
                O método de imersão no Manual Solar Buy-Side para quem não aceita mais perder vendas por preço.
              </p>

              {/* LISTA INTERATIVA (Apple Style Specs) */}
              <div className="space-y-0" onMouseLeave={() => setHoveredIndex(null)}>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">
                  O que você vai dominar:
                </h4>

                {contentItems.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    className={`group py-8 border-b border-slate-100 transition-all duration-500 cursor-default ${
                      hoveredIndex !== null && hoveredIndex !== idx ? 'opacity-30 blur-[1px]' : 'opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={`mt-1 transition-colors duration-300 ${
                          hoveredIndex === idx ? 'text-[#F97316]' : 'text-slate-300'
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-xl font-semibold text-slate-900 flex items-center gap-3">
                          {item.title}
                          <ArrowRight
                            size={16}
                            className={`transition-all duration-300 ${
                              hoveredIndex === idx
                                ? 'opacity-100 translate-x-2 text-[#F97316]'
                                : 'opacity-0 -translate-x-2'
                            }`}
                          />
                        </h5>
                        <p className="text-base text-slate-500 leading-relaxed max-w-lg">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: O LIVRO (Clean & Floating) */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="sticky top-24 flex justify-center lg:justify-end">
              <div className="relative group" style={{ perspective: '2000px' }}>
              {/* Efeito de Sombra Colorida (Aura) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-200/30 blur-[120px] rounded-full pointer-events-none opacity-60"></div>

              {/* O Livro */}
              <div className="relative w-[340px] aspect-[3/4] transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1">
                {/* Capa */}
                <div className="absolute inset-0 bg-white rounded-sm shadow-[0_30px_60px_-10px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden flex flex-col">
                  {/* Faixa Lateral (Lombada Visual) */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-slate-50 border-r border-slate-100"></div>

                  <div className="flex-1 p-12 pl-16 flex flex-col justify-between relative z-10">
                    {/* Topo da Capa */}
                    <div>
                      <div className="flex items-center gap-3 mb-10">
                        <BookOpen size={20} className="text-slate-900" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          BUY-SIDE PRESS
                        </span>
                      </div>

                      <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-6">
                        CÓDIGO <br />
                        <span className="text-[#F97316]">VENDEDOR</span> <br />
                        CONSULTIVO
                      </h3>

                      <div className="w-12 h-1 bg-slate-900 mt-2"></div>
                    </div>

                    {/* Base da Capa */}
                    <div className="space-y-4">
                      <p className="text-[10px] font-mono font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
                        Estratégias de negociação <br />
                        para o mercado de energia.
                      </p>
                      <div className="pt-6 border-t border-slate-100 flex justify-between items-end">
                        <div>
                          <p className="text-[8px] font-bold text-slate-300 uppercase">Author</p>
                          <p className="text-xs font-bold text-slate-900">Francis & Ovídio</p>
                        </div>
                        <span className="text-4xl font-black text-slate-100">01</span>
                      </div>
                    </div>
                  </div>

                  {/* Brilho Glossy */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/5 pointer-events-none"></div>
                </div>

                {/* Detalhe de Páginas (Simulação 3D) */}
                <div className="absolute top-1 right-1 bottom-1 w-4 bg-slate-100 -z-10 rounded-r-sm shadow-inner transform translate-x-2 translate-y-2 border-r border-slate-200"></div>
              </div>

              {/* Badge Flutuante Clean */}
              <div
                className="absolute -bottom-6 -right-2 bg-white px-6 py-4 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-3"
                style={{ animation: 'bounce-slow 4s infinite ease-in-out' }}
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Status</p>
                  <p className="text-xs font-black text-slate-900 uppercase">100% Gratuito</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `,
        }}
      />
    </section>
  )
}
