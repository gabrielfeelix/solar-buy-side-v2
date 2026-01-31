import React from 'react'

const francisImage = '/assets/Francis Poloni LP PRO.jpg.jpeg'
const ovidioImage = '/assets/Ovídio.jpeg'

export const AuthoritySection: React.FC = () => {
  return (
    <section
      id="autor"
      className="relative overflow-hidden bg-[#F5F5F7] py-24 px-6 text-[#1D1D1F]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Linha divisória */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D2D2D7] to-transparent mb-20"></div>

        {/* Título */}
        <div className="text-left mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#F97316] text-[10px] font-bold uppercase tracking-widest mb-6">
            Experiência Dual
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] leading-tight max-w-4xl">
            Este conteúdo foi concebido por quem domina, as duas perspectivas da{' '}
            <span className="text-[#F97316]">mesa de negociação — a do comprador e a do vendedor.</span>
          </h2>
        </div>

        {/* Grid com 2 pessoas - Layout Horizontal */}
        <div className="space-y-16">
          {/* Francis Poloni */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="relative max-w-[280px] mx-auto">
                <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden relative transition-all duration-700 group shadow-lg border border-[#E5E5E7]">
                  <img src={francisImage} alt="Francis Poloni" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="md:col-span-8 space-y-4">
              <div>
                <p className="text-[#F97316] font-bold tracking-widest text-xs uppercase mb-2">Especialista</p>
                <h3 className="text-3xl font-bold text-[#1D1D1F]">Francis Poloni</h3>
              </div>
              <p className="text-[#424245] text-base leading-relaxed">
                Atua desde <strong>2018</strong> no setor de integração fotovoltaica e consultoria onde assessorou tanto no <strong>lado do comprador (Buy-Side)</strong> <strong>quanto no lado do vendedor (Sell-Side)</strong>, ajudando na tomada de decisões inteligentes e seguras.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest">
                Especialista Visão Buy-Side (Comprador)
              </div>
            </div>
          </div>

          {/* Ovídio Collesi */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="relative max-w-[280px] mx-auto">
                <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden relative transition-all duration-700 group shadow-lg border border-[#E5E5E7]">
                  <img src={ovidioImage} alt="Ovídio Collesi" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="md:col-span-8 space-y-4">
              <div>
                <p className="text-[#F97316] font-bold tracking-widest text-xs uppercase mb-2">Especialista</p>
                <h3 className="text-3xl font-bold text-[#1D1D1F]">Ovídio Collesi</h3>
              </div>
              <p className="text-[#424245] text-base leading-relaxed">
                Com vasta experiência em <strong>venda e pós venda</strong> no setor de energia solar fotovoltaica desde 2020, <strong>teve passagens por marketplaces, distribuidores, integração solar e certificadora</strong>, trazendo uma visão completa do lado do vendedor e do suporte técnico.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest">
                Especialista Visão Sell-Side (Vendedor)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
