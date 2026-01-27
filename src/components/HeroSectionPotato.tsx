import React from 'react'
import { ChevronDown } from 'lucide-react'

export const HeroSectionPotato: React.FC = () => {
  return (
    <section className="bg-grid-dark pb-28 pt-24 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <span className="pill pill-dark">
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          Inteligência de Mercado 2026
        </span>

        <h1 className="mt-8 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          O Comprador Mudou.
          <span className="mt-2 block text-slate-200">
            Eles sabem mais que <span className="text-slate-400">você.</span>
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm text-slate-300 sm:text-base">
          A assimetria de informação acabou. Se o seu pitch comercial ainda é baseado em “kit” e
          “garantia”, você já perdeu a venda antes de entrar na sala.
        </p>

        <button
          type="button"
          className="mt-10 flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-400"
        >
          Entenda a lógica
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
