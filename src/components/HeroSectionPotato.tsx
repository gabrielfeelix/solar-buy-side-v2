import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export const HeroSectionPotato: React.FC = () => {
  const scrollToSection = () => {
    const element = document.getElementById('contexto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToOffer = () => {
    const element = document.getElementById('oferta')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/5 bg-[#020617]" style={{ paddingTop: 'clamp(5rem, 8vw, 15vh)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] bg-[#F97316]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 space-y-12">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Transforme-se em um{' '}
            <span className="text-[#F97316]">Vendedor Consultivo Premium</span>{' '}
            de Sistema Solar
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
          O método Buy-Side ensina você a pensar como o cliente e vender decisão, não preço.
        </p>

        {/* Main Product Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#F97316] to-orange-600 rounded-3xl p-1 shadow-2xl shadow-orange-500/20">
            <div className="bg-[#0a1730] rounded-[calc(1.5rem-4px)] p-8 md:p-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[#F97316] mb-3 tracking-tight">
                Manual Solar Buy-Side
              </h2>
              <p className="text-lg md:text-xl text-white border-b border-white/10 pb-4 mb-4">
                Método baseado em inteligência de mercado
              </p>
            </div>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="max-w-xl mx-auto bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-[#F97316]" />
            <span className="text-sm font-bold text-[#F97316] uppercase tracking-widest">
              Bônus Exclusivo
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            O Código do Vendedor Consultivo
          </h3>
          <p className="text-base md:text-lg text-slate-300 italic">
            "para quem não aceita mais perder vendas por preço"
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <button
            onClick={scrollToOffer}
            type="button"
            className="group inline-flex items-center gap-4 bg-[#F97316] hover:bg-orange-500 text-white px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-2xl shadow-orange-600/30 active:scale-95 text-lg md:text-xl font-bold"
          >
            <span>Quero me tornar um vendedor premium</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8">
          <button
            onClick={scrollToSection}
            type="button"
            className="group flex flex-col items-center gap-3 mx-auto opacity-60 hover:opacity-100 transition-opacity"
          >
            <span className="text-[#F97316] text-sm font-bold uppercase tracking-widest">
              Entenda a lógica
            </span>
            <svg
              className="w-6 h-6 text-[#F97316] animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
