import React from 'react'
import { Briefcase, Search } from 'lucide-react'

const francisImage = '/assets/francis-poloni.png'

export const AuthoritySection: React.FC = () => {
  return (
    <section id="autor" className="py-24 px-6 bg-[#0B1120] relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
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
          <h2 className="text-3xl font-bold text-white">
            Criado Por Quem Viveu <br />
            <span className="text-[#F97316]">Os Dois Lados da Mesa.</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Francis não apenas ensina vendas; ele viveu a compra. Assessorando indústrias e fundos, ele decodificou exatamente o que faz um comprador fechar negócio.
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
