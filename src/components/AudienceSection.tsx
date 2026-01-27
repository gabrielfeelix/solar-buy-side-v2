import React, { useState } from 'react'
import { BarChart3, Cpu, UserRound, Check } from 'lucide-react'

const tabs = [
  {
    key: 'integradores',
    label: 'Para Integradores',
    kicker: 'O TÉCNICO ESTRATEGISTA',
    quote:
      '"Aprenda a vender VALOR, fuja da briga por preço, feche mais projetos e preserve sua margem."',
    chips: ['+30% Conversão', 'Autoridade Técnica'],
    Icon: Cpu,
    accent: 'text-sky-400',
    iconBg: 'bg-sky-500/10',
  },
  {
    key: 'empreendedores',
    label: 'Para Empreendedores',
    kicker: 'O DONO DO NEGÓCIO',
    quote:
      '"Evite erros de iniciante, posicione-se com autoridade desde o dia 1 e aprenda em semanas o que veteranos levaram anos."',
    chips: ['Escala de Vendas', 'Retenção'],
    Icon: BarChart3,
    accent: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
  },
  {
    key: 'representantes',
    label: 'Para Representantes',
    kicker: 'O LOBO SOLITÁRIO',
    quote:
      '"Aumente sua taxa de conversão sem queimar comissão. Use argumentos técnicos para blindar sua oferta."',
    chips: ['Comissão Preservada', 'Mais Fechamentos'],
    Icon: UserRound,
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
  },
]

export const AudienceSection: React.FC = () => {
  const [activeKey, setActiveKey] = useState(tabs[0].key)
  const activeTab = tabs.find((tab) => tab.key === activeKey) ?? tabs[0]
  const ActiveIcon = activeTab.Icon

  return (
    <section className="bg-navy-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Quem REALMENTE Precisa Desse Conhecimento?
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          Veja para quem o Manual Buy-Side é essencial:
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveKey(tab.key)}
              className={`rounded-md px-4 py-2 text-xs font-semibold transition ${
                tab.key === activeKey
                  ? 'border border-white/30 bg-white/10 text-white'
                  : 'border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f1b32] to-[#121a30] p-8 text-left shadow-deep">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${activeTab.accent}`}>
                <ActiveIcon className="h-4 w-4" />
                {activeTab.kicker}
              </div>
              <p className="mt-4 text-lg font-semibold text-white sm:text-2xl">
                {activeTab.quote}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {activeTab.chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-200"
                  >
                    <Check className="h-3.5 w-3.5 text-orange-400" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className={`flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 ${activeTab.iconBg}`}>
              <ActiveIcon className={`h-10 w-10 ${activeTab.accent}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
