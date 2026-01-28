import React from 'react'
import { Mail, MapPin } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001529] text-white py-6 px-8 border-t border-white/5 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src="/assets/logo-solar-buy-side.svg" alt="Solar Buy-Side" className="h-10 w-auto" />
          <div className="h-3 w-px bg-white/10 hidden sm:block" />
          <span className="text-xs font-semibold text-white/40 uppercase tracking-[0.18em]">
            CNPJ: 55.463.06/0001-80
          </span>
        </div>

        <div className="flex items-center gap-2 text-white/60">
          <MapPin size={14} className="text-orange-500/80" />
          <span className="text-sm font-light tracking-wide text-center">
            Torre Norte - Av. Bento Munhoz da Rocha Neto, 632 - 19º Andar, Salas 1905 a 1908 - Maringá - PR
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:contato@buyside.com.br"
            className="flex items-center gap-2 text-sm font-semibold hover:text-orange-500 transition-colors"
          >
            <Mail size={14} className="text-orange-500" />
            contato@buyside.com.br
          </a>
          <span className="text-xs text-white/30 hidden lg:block">© 2025</span>
        </div>
      </div>
    </footer>
  )
}
