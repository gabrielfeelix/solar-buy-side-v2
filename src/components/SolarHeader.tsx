import React from 'react'
import { Menu, Sun } from 'lucide-react'

export const SolarHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#F97316] rounded-sm flex items-center justify-center shadow-lg">
            <Sun className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="text-white font-bold tracking-tight text-lg">
            MANUAL<span className="font-light text-slate-400">SOLAR</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#beneficios" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Benefícios
          </a>
          <a href="#conteudo" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Conteúdo
          </a>
          <a href="#autor" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Mentor
          </a>
          <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-sm text-sm font-bold transition-all border border-white/20" type="button">
            Área do Aluno
          </button>
        </div>
        <button className="md:hidden text-white" type="button">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
