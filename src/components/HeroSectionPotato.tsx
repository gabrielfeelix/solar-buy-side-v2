import React from 'react'
import { ChevronDown } from 'lucide-react'

export const HeroSectionPotato: React.FC = () => {
  const scrollToSection = () => {
    const element = document.getElementById('video-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/5 pt-16 bg-[#020617]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] bg-[#F97316]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-[#F97316] animate-pulse"></span>
          <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">Inteligência de Mercado 2026</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1] tracking-tight mb-8">
          O Comprador Mudou.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">
            Eles sabem mais que você.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          A assimetria de informação acabou. Se o seu pitch comercial ainda é baseado em "kit" e "garantia", você já perdeu a venda antes de entrar na sala.
        </p>

        <button
          onClick={scrollToSection}
          type="button"
          className="group flex flex-col items-center gap-3 mx-auto opacity-80 hover:opacity-100 transition-opacity"
        >
          <span className="text-[#F97316] text-sm font-bold uppercase tracking-widest">Entenda a Lógica</span>
          <ChevronDown className="w-6 h-6 text-[#F97316] animate-bounce" />
        </button>
      </div>
    </section>
  )
}
