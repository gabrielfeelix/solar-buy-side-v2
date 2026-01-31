import React from 'react'

const francisImage = '/assets/Francis Poloni LP PRO.jpg.jpeg'
const ovidioImage = '/assets/Ovídio2.png'

export const AuthoritySection: React.FC = () => {
  return (
    <section
      id="autor"
      className="relative overflow-hidden bg-gradient-to-b from-[#0b1224] via-[#0a1730] to-[#020617] py-24 px-6 text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-left mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F97316] text-[10px] font-bold uppercase tracking-widest mb-6">
            Experiência Dual
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl">
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
                <div className="aspect-[3/4] bg-slate-800 rounded-2xl overflow-hidden relative transition-all duration-700 group">
                  <img src={francisImage} alt="Francis Poloni" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50"></div>
                  {/* Badge de Experiência */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#F97316] to-[#FF8C3A] px-6 py-3 rounded-2xl shadow-xl">
                    <p className="text-white text-2xl font-bold">7+ Anos</p>
                    <p className="text-white/90 text-xs font-semibold uppercase tracking-wider">de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 space-y-4">
              <div>
                <p className="text-[#F97316] font-bold tracking-widest text-xs uppercase mb-2">Especialista</p>
                <h3 className="text-3xl font-bold">Francis Poloni</h3>
              </div>
              <p className="text-slate-400 text-base leading-relaxed">
                Atua desde <strong>2018</strong> no setor de integração fotovoltaica e consultoria onde assessorou tanto no <strong>lado do comprador (Buy-Side)</strong> <strong>quanto no lado do vendedor (Sell-Side)</strong>, ajudando na tomada de decisões inteligentes e seguras.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
                Especialista Visão Buy-Side (Comprador)
              </div>
            </div>
          </div>

          {/* Ovídio Collesi */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="relative max-w-[280px] mx-auto">
                <div className="aspect-[3/4] bg-slate-800 rounded-2xl overflow-hidden relative transition-all duration-700 group">
                  <img src={ovidioImage} alt="Ovídio Collesi" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50"></div>
                  {/* Badge de Experiência */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#F97316] to-[#FF8C3A] px-6 py-3 rounded-2xl shadow-xl">
                    <p className="text-white text-2xl font-bold">5+ Anos</p>
                    <p className="text-white/90 text-xs font-semibold uppercase tracking-wider">de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 space-y-4">
              <div>
                <p className="text-[#F97316] font-bold tracking-widest text-xs uppercase mb-2">Especialista</p>
                <h3 className="text-3xl font-bold">Ovídio Collesi</h3>
              </div>
              <p className="text-slate-400 text-base leading-relaxed">
                Com vasta experiência em <strong>venda e pós venda</strong> no setor de energia solar fotovoltaica desde 2020, <strong>teve passagens por marketplaces, distribuidores, integração solar e certificadora</strong>, trazendo uma visão completa do lado do vendedor e do suporte técnico.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900/30 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest">
                Especialista Visão Sell-Side (Vendedor)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
