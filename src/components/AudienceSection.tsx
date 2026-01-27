import React, { useState } from 'react'
import { BarChart3, Cpu, Users, Check } from 'lucide-react'

const tabs = [
  {
    key: 'integradores',
    label: 'Para Integradores',
    role: 'O Técnico Estrategista',
    content: 'Aprenda a vender VALOR, fuja da briga por preço, feche mais projetos e preserve sua margem.',
    stats: ['+30% Conversão', 'Autoridade Técnica'],
    Icon: Cpu,
    color: 'text-blue-400',
    bg: 'bg-blue-400',
  },
  {
    key: 'empreendedores',
    label: 'Para Empreendedores',
    role: 'O Dono do Negócio',
    content:
      'Evite erros de iniciante, posicione-se com autoridade desde o dia 1 e aprenda em semanas o que veteranos levaram anos.',
    stats: ['Escala de Vendas', 'Retenção'],
    Icon: BarChart3,
    color: 'text-purple-400',
    bg: 'bg-purple-400',
  },
  {
    key: 'representantes',
    label: 'Para Representantes',
    role: 'O Lobo Solitário',
    content: 'Aumente sua taxa de conversão sem queimar comissão. Use argumentos técnicos para blindar sua oferta.',
    stats: ['Comissão Preservada', 'Mais Fechamentos'],
    Icon: Users,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400',
  },
]

export const AudienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('integradores')
  const activeData = tabs.find((tab) => tab.key === activeTab) ?? tabs[0]

  return (
    <section className="py-24 px-6 bg-[#0B1120] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-[1.1] text-white">
            Quem REALMENTE Precisa Desse Conhecimento?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed mx-auto font-light text-slate-400">
            Veja para quem o Manual Buy-Side é essencial:
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-900/50 p-1 rounded-lg border border-slate-800">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
                  activeTab === tab.key ? 'bg-slate-700 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div
            className={`absolute top-0 right-0 w-[500px] h-[500px] opacity-10 blur-[100px] rounded-full transition-colors duration-500 ${
              activeTab === 'integradores'
                ? 'bg-blue-500'
                : activeTab === 'empreendedores'
                  ? 'bg-purple-500'
                  : 'bg-emerald-500'
            }`}
          ></div>
          <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <div className={`inline-flex items-center gap-2 mb-6 ${activeData.color}`}>
                <activeData.Icon className="w-6 h-6" />
                <span className="font-mono text-sm font-bold uppercase tracking-widest">{activeData.role}</span>
              </div>
              <h3 className="text-2xl md:text-3xl text-white leading-relaxed mb-8">"{activeData.content}"</h3>
              <div className="flex flex-wrap gap-4">
                {activeData.stats.map((stat, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-black/40 border border-white/10 rounded text-sm text-slate-300 flex items-center gap-2"
                  >
                    <Check className="w-3 h-3 text-[#F97316]" /> {stat}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div
                className={`w-32 h-32 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center ${activeData.color} shadow-2xl`}
              >
                <activeData.Icon className="w-16 h-16 opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
