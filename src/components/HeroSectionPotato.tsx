import React, { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { useContent } from '../contexts/ContentContext'

export const HeroSectionPotato: React.FC = () => {
  const { getSection } = useContent()
  const section = getSection('hero')
  const [typed, setTyped] = useState('')
  const fullText = section?.texts.title2 || 'Vendedor Ideal.'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      index += 1
      setTyped(fullText.slice(0, index))
      if (index >= fullText.length) {
        clearInterval(timer)
      }
    }, 60)
    return () => clearInterval(timer)
  }, [fullText])

  const scrollToSection = () => {
    const element = document.getElementById('contexto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/5 pt-16">
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

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-[#F97316] animate-pulse"></span>
          <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">{section?.texts.badge || 'Inteligência de Mercado 2026'}</span>
        </div>

        <h1 className="text-4xl md:text-[64px] font-bold text-white leading-[1.05] tracking-tight mb-8">
          {section?.texts.title1 || 'Transforme-se no'}<br />
          <span className="text-[#F97316]">
            {typed}
            <span className="ml-1 inline-block h-7 w-[2px] bg-[#F97316] align-middle animate-pulse"></span>
          </span>
        </h1>

        <p className="text-2xl md:text-4xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4 font-light">
          {section?.texts.subtitle1 || 'Aprenda como o seu cliente pensa e fuja da guerra de preços com o'}
        </p>
        <p className="text-2xl md:text-4xl text-white max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          <span className="font-bold">{section?.texts.subtitle2 || 'Manual Solar Buy-Side.'}</span>
        </p>

        <button onClick={scrollToSection} type="button" className="group flex flex-col items-center gap-3 mx-auto opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-[#F97316] text-sm font-bold uppercase tracking-widest">{section?.texts.ctaButton || 'Entenda a Lógica'}</span>
          <ArrowDown className="w-6 h-6 text-[#F97316] animate-bounce" />
        </button>
      </div>
    </section>
  )
}
