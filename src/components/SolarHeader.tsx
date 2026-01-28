import React from 'react'
import { ArrowRight, Menu } from 'lucide-react'

export const SolarHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/assets/logo-solar-buy-side.svg" alt="Solar Buy-Side" className="h-10 sm:h-11 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#solucao" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            O Manual
          </a>
          <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Planos
          </a>
          <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            FAQ
          </a>
          <a
            href="#pricing"
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
