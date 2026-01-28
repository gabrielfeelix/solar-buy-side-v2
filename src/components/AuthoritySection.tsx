import React from 'react'
import { Briefcase, Search } from 'lucide-react'

const francisImage = '/assets/francis-poloni.png'

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

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] bg-slate-800 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 group">
            <img src={francisImage} alt="Francis Poloni" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50"></div>
            <div className="absolute bottom-8 left-8 text-white z-10">
              <p className="text-[#F97316] font-bold tracking-widest text-xs uppercase mb-2">O Mentor</p>
              <h3 className="text-3xl font-bold">Francis Poloni</h3>
              <p className="text-slate-400 text-sm mt-1">Consultor Buy-Side & Sell-Side</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[#F97316] text-white p-6 rounded-xl shadow-2xl hidden md:block">
            <p className="font-bold text-2xl">7+ Anos</p>
            <p className="text-xs uppercase tracking-wider">De Experiência Dual</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F97316] text-[10px] font-bold uppercase tracking-widest">
            Experiência Dual
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Esse conteúdo só é possível porque foi criado por quem viveu os dois lados <br />
            <span className="text-[#F97316]">da mesa: o do comprador e o do vendedor.</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Atua desde 2018 no setor de integração fotovoltaica e consultoria em investimento onde assessorou tanto no lado do comprador (Buy-Side) quanto no lado do vendedor (Sell-Side), ajudando na tomada de decisões inteligentes e seguras.
          </p>
          <div className="grid gap-4">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex gap-4 items-start hover:border-blue-500/30 transition-colors">
              <div className="p-2 bg-blue-900/20 text-blue-500 rounded">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Visão Buy-Side (Comprador)</h4>
                <p className="text-slate-500 text-xs mt-1">Due diligence, análise de contratos e validação técnica.</p>
              </div>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex gap-4 items-start hover:border-orange-500/30 transition-colors">
              <div className="p-2 bg-orange-900/20 text-orange-500 rounded">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Visão Sell-Side (Vendedor)</h4>
                <p className="text-slate-500 text-xs mt-1">Estruturação de times comerciais e funis de alta conversão.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
