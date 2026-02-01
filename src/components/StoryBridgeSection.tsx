import React from 'react'
import { BookOpen, FileCheck, LayoutGrid, Layers } from 'lucide-react'
import { useContent } from '../contexts/ContentContext'

export const StoryBridgeSection: React.FC = () => {
  const { getSection } = useContent()
  const section = getSection('story-bridge')

  const features = [
    {
      title: section?.texts.feature1Title || 'Conteúdo Técnico',
      desc: section?.texts.feature1Desc || 'Mais de 130 páginas com conteúdo técnico e estratégico.',
      icon: <BookOpen className="text-orange-600" size={24} />,
    },
    {
      title: section?.texts.feature2Title || 'Consulta Rápida',
      desc: section?.texts.feature2Desc || '160 tópicos organizados para consulta rápida.',
      icon: <LayoutGrid className="text-orange-600" size={24} />,
    },
    {
      title: section?.texts.feature3Title || 'Jornada de Compra',
      desc: section?.texts.feature3Desc || 'Uma metodologia em 4 fases que orienta toda a jornada de compra.',
      icon: <Layers className="text-orange-600" size={24} />,
    },
    {
      title: section?.texts.feature4Title || 'Suporte Decisório',
      desc: section?.texts.feature4Desc || 'Anexos técnicos que auxiliam na tomada de decisão.',
      icon: <FileCheck className="text-orange-600" size={24} />,
    },
  ]
  return (
    <section className="bg-white text-slate-900 font-sans selection:bg-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <header className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-8 leading-tight">
            {section?.texts.title || 'A história de Rodrigo é apenas um exemplo do poder deste manual.'}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
            {section?.texts.subtitle || 'Ele é uma ponte entre o comprador bem informado e o vendedor preparado, impulsionando negociações justas e satisfatórias.'}
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-28 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src={section?.images.manualImage || '/assets/manualdecompra1.png'}
              alt="Manual de Compra Solar Buy-Side"
              className="w-full max-w-[320px] lg:max-w-[375px] h-auto"
            />
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
