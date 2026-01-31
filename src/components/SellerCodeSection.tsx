import React from 'react'
import { ShieldCheck, Target, UserCheck, Settings2, ArrowRight } from 'lucide-react'

export const SellerCodeSection: React.FC = () => {
  const contentItems = [
    {
      title: 'Índice de Confiabilidade',
      desc: 'Como mensurar e validar a segurança da sua proposta para o cliente final.',
      icon: <ShieldCheck className="text-[#F97316]" size={18} />,
    },
    {
      title: 'Ajuste de Precisão',
      desc: 'Refino de materiais baseado em critérios reais de avaliação técnica.',
      icon: <Settings2 className="text-[#F97316]" size={18} />,
    },
    {
      title: 'Estratégia Anti-Leilão',
      desc: 'Posicionamento estratégico para neutralizar compradores focados apenas em preço.',
      icon: <Target className="text-[#F97316]" size={18} />,
    },
    {
      title: 'Postura de Elite',
      desc: 'Domine o comportamento consultivo necessário para fechar contratos complexos.',
      icon: <UserCheck className="text-[#F97316]" size={18} />,
    },
  ]

  return (
    <section className="min-h-screen bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* HERO SECTION */}
        <div className="mb-12 md:mb-20">
          {/* Badge Minimalista */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
            </div>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">
              Executive Content <span className="text-slate-300 mx-1">|</span> Nível Sênior
            </span>
          </div>

          <h2 className="text-4xl md:text-[56px] font-extrabold tracking-tight leading-[1.05] text-slate-900 mb-8 max-w-4xl">
            Inverta a lógica do jogo: <br />
            <span className="text-[#F97316]">O Código do Vendedor Consultivo</span>
          </h2>

          <div className="max-w-3xl">
            <p className="text-xs md:text-sm font-medium text-slate-400 leading-relaxed uppercase tracking-[0.15em] opacity-80">
              O sucesso do Rodrigo não foi por acaso. Dominar a estratégia que inverte o jogo significa aprender a
              pensar como um comprador profissional para dominar a venda.
            </p>
          </div>
        </div>

        {/* LAYOUT PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Coluna da Esquerda: Cards de Conteúdo */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
              {contentItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/40 hover:bg-white hover:border-[#F97316]/20 hover:shadow-xl transition-all duration-500"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:bg-[#F97316] transition-all">
                    <div className="group-hover:text-white transition-colors">{item.icon}</div>
                  </div>
                  <h3 className="text-base font-bold mb-3 text-slate-800 flex items-center gap-2">
                    {item.title}
                    <ArrowRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#F97316]"
                    />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna da Direita: Visual do Livro (Sticky) */}
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-12">
            <div className="relative group">
              {/* Glow sutil */}
              <div className="absolute -inset-4 bg-[#F97316]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(249,115,22,0.15)] group-hover:-translate-y-2">
                {/* Detalhe de acabamento */}
                <div className="h-1.5 bg-gradient-to-r from-[#F97316]/60 via-[#F97316] to-[#F97316]/80" />

                <div className="p-12">
                  <div className="flex justify-between items-center mb-20">
                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs">B</span>
                    </div>
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">
                      BUY-SIDE
                    </span>
                  </div>

                  <div className="space-y-2 mb-20">
                    <p className="text-[10px] font-bold tracking-[0.5em] text-[#F97316] mb-4 uppercase">
                      Special Release
                    </p>
                    <h3 className="text-3xl font-black leading-[1.1] tracking-tighter text-slate-900">
                      O CÓDIGO DO <br />
                      VENDEDOR <br />
                      <span className="text-[#F97316] whitespace-nowrap">CONSULTIVO</span>
                    </h3>
                  </div>

                  <div className="pt-10 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                        Expert Method
                      </p>
                      <p className="text-xs font-bold text-slate-800">Francis & Ovídio</p>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-[#F97316] transition-colors">
                      <ArrowRight
                        className="text-[#F97316] group-hover:text-white transition-colors"
                        size={18}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag Minimalista Lateral */}
              <div className="absolute top-12 -right-3 bg-slate-900 text-white text-[9px] font-bold px-4 py-1.5 rounded-l-md shadow-lg">
                V2.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
