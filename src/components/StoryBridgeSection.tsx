import React from 'react'
import { BookOpen, FileCheck, LayoutGrid, Layers } from 'lucide-react'

const features = [
  {
    title: 'Conteúdo Técnico',
    desc: 'Mais de 130 páginas com conteúdo técnico e estratégico.',
    icon: <BookOpen className="text-orange-600" size={24} />,
  },
  {
    title: 'Consulta Rápida',
    desc: '160 tópicos organizados para consulta rápida.',
    icon: <LayoutGrid className="text-orange-600" size={24} />,
  },
  {
    title: 'Jornada de Compra',
    desc: 'Uma metodologia em 4 fases que orienta toda a jornada de compra.',
    icon: <Layers className="text-orange-600" size={24} />,
  },
  {
    title: 'Suporte Decisório',
    desc: 'Anexos técnicos que auxiliam na tomada de decisão.',
    icon: <FileCheck className="text-orange-600" size={24} />,
  },
]

export const StoryBridgeSection: React.FC = () => {
  return (
    <section className="bg-white text-slate-900 font-sans selection:bg-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <header className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-8 leading-tight">
            A história de Rodrigo é{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-900">
              apenas um exemplo do poder deste manual.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
            Ele é uma ponte entre o comprador bem informado e o vendedor preparado, impulsionando negociações justas e satisfatórias.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 bg-slate-100 rounded-[32px] blur-2xl"></div>

              <div className="relative bg-slate-900 aspect-[3/4.2] rounded-[16px] shadow-2xl overflow-hidden border-[1px] border-slate-800">
                <div className="absolute inset-0 bg-[url('/assets/manual.jpg.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30"></div>

                <div className="absolute inset-0 p-12 flex flex-col justify-between"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-4 p-2">
                  <div className="p-3 bg-slate-50 rounded-xl w-fit">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{feature.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
