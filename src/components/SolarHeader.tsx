import React, { useEffect, useState } from 'react'
import { ArrowRight, Menu } from 'lucide-react'

export const SolarHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div
        className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-[#020617]/85 backdrop-blur-md border border-white/10 rounded-full py-3 shadow-2xl shadow-black/20'
            : 'bg-transparent border-transparent'
        }`}
      >
        <a href="#hero" className="flex items-center gap-3">
          <img src="/assets/LOGOSOLARBUYSIDE3.svg" alt="Solar Buy-Side" className="h-10 sm:h-12 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-white text-lg sm:text-xl font-bold tracking-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Solar
            </span>
            <span className="text-[#F97316] text-lg sm:text-xl font-bold tracking-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Buy-Side
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#contexto" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Panorama
          </a>
          <a href="#video-section" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Vídeo
          </a>
          <a href="#audiencia" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Para Quem
          </a>
          <a href="#autor" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Mentor
          </a>
          <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            FAQ
          </a>
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-sm text-sm font-bold transition-all border border-white/20"
          >
            Garantir Acesso
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <button className="md:hidden text-white" type="button">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
