import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001529] text-white py-6 px-8 border-t border-white/5 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src="/assets/LOGOSOLARBUYSIDE3.svg" alt="Solar Buy-Side" className="h-10 w-auto" />
        </div>

        <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm font-semibold text-white/70">
          <a href="/politica-de-privacidade" className="hover:text-orange-500 transition-colors">
            Política de Privacidade
          </a>
          <a href="/termos-de-uso" className="hover:text-orange-500 transition-colors">
            Termos de Uso
          </a>
          <a href="/medidas-antipiratarias" className="hover:text-orange-500 transition-colors">
            Medidas Antipiratarias
          </a>
        </nav>
      </div>
    </footer>
  )
}
