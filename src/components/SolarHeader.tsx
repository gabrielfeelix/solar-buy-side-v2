import React from 'react'

const navItems = ['Benefícios', 'Conteúdo', 'Mentor']

export const SolarHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1224]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-orange-500">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <g>
                <circle cx="12" cy="2.5" r="1.2" />
                <circle cx="12" cy="21.5" r="1.2" />
                <circle cx="2.5" cy="12" r="1.2" />
                <circle cx="21.5" cy="12" r="1.2" />
                <circle cx="4.5" cy="4.5" r="1.1" />
                <circle cx="19.5" cy="4.5" r="1.1" />
                <circle cx="4.5" cy="19.5" r="1.1" />
                <circle cx="19.5" cy="19.5" r="1.1" />
              </g>
            </svg>
          </div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            MANUAL<span className="text-slate-400">SOLAR</span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <button
          className="rounded-md border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:border-white/50"
          type="button"
        >
          Área do Aluno
        </button>
      </div>
    </header>
  )
}
