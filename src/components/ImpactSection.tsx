import React from 'react'

const dominateItems = [
  {
    title: 'Dores reais do cliente',
    description: 'Compreenda o que realmente pesa na decisão, não apenas o que ele diz na reunião.',
  },
  {
    title: 'Postura consultiva',
    description: 'Pare de empurrar produto. Vire parceiro e ganhe confiança instantânea.',
  },
  {
    title: 'Valor técnico e econômico',
    description: 'Explique payback, LCOE e TIR com clareza e faça o cliente enxergar valor.',
  },
]

const skillsItems = [
  {
    title: 'Apresentações persuasivas',
    description: 'Use dados do próprio cliente para construir propostas que convencem.',
  },
  {
    title: 'Cenário financeiro sólido',
    description: 'Estruture a decisão com números para reduzir insegurança e indecisão.',
  },
  {
    title: 'Menos desconto, mais margem',
    description: 'Argumente com precisão e preserve sua comissão sem perder vendas.',
  },
]

export const ImpactSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 px-6 bg-[#0B1120] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Mas o que essa imersão representa na prática
            <span className="block text-slate-300">para o seu dia a dia como vendedor?</span>
          </h2>
          <p className="text-lg text-slate-400 mt-4">
            Veja os resultados concretos que você pode alcançar ao aplicar o Manual Solar Buy-Side no seu processo de venda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">O que o vendedor vai dominar</h3>
            <div className="space-y-5">
              {dominateItems.map((item) => (
                <div key={item.title} className="border border-slate-800/80 rounded-xl p-4 bg-slate-900/40">
                  <p className="text-white font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Principais focos e habilidades</h3>
            <div className="space-y-5">
              {skillsItems.map((item) => (
                <div key={item.title} className="border border-slate-800/80 rounded-xl p-4 bg-slate-900/40">
                  <p className="text-white font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
