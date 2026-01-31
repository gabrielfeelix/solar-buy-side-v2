import React from 'react'
import { ShieldCheck, Target, UserCheck, Settings2, Sparkles, BookOpen } from 'lucide-react'

export const SellerCodeSection: React.FC = () => {
  const contentItems = [
    {
      title: 'Índice de Confiabilidade',
      desc: 'Aprenda a medir e provar a segurança da sua proposta de forma estruturada e profissional.',
      icon: <ShieldCheck className="text-[#F97316]" size={24} />,
    },
    {
      title: 'Ajuste de Precisão com Checklist',
      desc: 'Refine seus materiais de vendas com base no que compradores realmente avaliam (e o que eles descartam).',
      icon: <Settings2 className="text-[#F97316]" size={24} />,
    },
    {
      title: 'Estratégia Anti-Leilão',
      desc: 'Saiba exatamente como agir com clientes focados apenas em preço e recupere sua margem de lucro.',
      icon: <Target className="text-[#F97316]" size={24} />,
    },
    {
      title: 'Postura Consultiva de Elite',
      desc: 'Prepare-se para fechar contratos com clientes técnicos e criteriosos que costumam ignorar vendedores comuns.',
      icon: <UserCheck className="text-[#F97316]" size={24} />,
    },
  ]

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Luz ambiente de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] right-[-5%] w-[800px] h-[800px] bg-[#F97316]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[#F97316]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-8 py-28 relative z-10">
        {/* Título e Subtítulo */}
        <div className="mb-24 text-center lg:text-left max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
            O Segredo por trás dos resultados: <br />
            <span className="text-[#F97316]">O Código do Vendedor Consultivo</span>
          </h2>

          <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-4xl">
            O sucesso do Rodrigo <span className="text-white font-medium italic">não foi por acaso.</span>{' '}
            Além de aplicar o Manual Solar Buy-Side, ele dominou a estratégia que inverte o jogo:{' '}
            <span className="text-white border-b border-[#F97316]/50">
              aprender a pensar como um comprador profissional para dominar a venda.
            </span>
          </p>
        </div>

        {/* Grade Principal do Bônus */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Lado Esquerdo: Benefícios do Guia */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Sparkles size={14} className="text-[#F97316]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F97316]">
                [BÔNUS EXCLUSIVO]
              </span>
            </div>

            <h3 className="text-3xl font-bold mb-4">E-book: O Código do Vendedor Consultivo</h3>
            <p className="text-lg text-gray-500 mb-12">
              O método de imersão no Manual Solar Buy-Side para quem não aceita mais perder vendas por preço.
            </p>

            <div className="grid grid-cols-1 gap-y-10">
              {contentItems.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="mt-1 w-12 h-12 flex-shrink-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent flex items-center justify-center border border-white/10 group-hover:border-[#F97316]/40 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-100 mb-1 group-hover:text-[#F97316] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Mockup do E-book */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group" style={{ perspective: '1200px' }}>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#F97316]/10 blur-[90px] rounded-full scale-110 opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />

              {/* Livro Tridimensional */}
              <div
                className="relative w-64 md:w-80 h-[460px] transition-transform duration-700 ease-out shadow-[30px_50px_100px_rgba(0,0,0,0.7)]"
                style={{
                  transform: 'rotateY(-15deg) rotateX(5deg)',
                }}
              >
                {/* Lombo */}
                <div className="absolute left-0 top-0 bottom-0 w-[14px] bg-[#050505] rounded-l-sm shadow-inner z-20 border-r border-white/10" />

                {/* Capa Principal */}
                <div className="absolute inset-0 bg-[#111] border border-white/10 rounded-r-xl overflow-hidden flex flex-col justify-between p-10">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-10 opacity-40">
                      <BookOpen size={20} className="text-[#F97316]" />
                      <div className="h-[1px] w-12 bg-white" />
                    </div>

                    <p className="text-[10px] font-black tracking-[0.5em] text-[#F97316] mb-2 uppercase">
                      Método Buy-Side
                    </p>
                    <h3 className="text-3xl font-bold leading-tight text-white">
                      O CÓDIGO DO <br />
                      <span className="text-[#F97316]">VENDEDOR</span> <br />
                      CONSULTIVO
                    </h3>
                  </div>

                  <div className="relative z-10 pt-10 border-t border-white/5">
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-[0.2em] leading-relaxed">
                      Aprenda a pensar como um <br /> comprador profissional.
                    </p>
                  </div>

                  {/* Subtle Gradient Shine */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Badge de "Gratuito" */}
              <div className="absolute -bottom-8 -left-8 bg-[#F97316] text-black px-6 py-4 rounded-xl shadow-2xl transform -rotate-12 border-4 border-[#0a0a0a] flex flex-col items-center">
                <span className="text-[10px] font-bold uppercase tracking-tighter leading-none opacity-80">
                  Edição
                </span>
                <span className="text-2xl font-black leading-none">FREE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
