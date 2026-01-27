import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 text-center text-slate-400">
      <div className="mx-auto max-w-4xl px-4">
        <h3 className="text-lg font-semibold text-white">Ainda lendo?</h3>
        <p className="mt-2 text-xs text-slate-500">Você sabe que precisa. Vai esperar o concorrente?</p>
        <button
          type="button"
          className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500"
        >
          Garantir Vantagem ?
        </button>
        <div className="mt-10 text-[11px] text-slate-600">
          © 2025 Buy-Side Soluções. CNPJ: 55.463.06/0001-80
        </div>
      </div>
    </footer>
  )
}
