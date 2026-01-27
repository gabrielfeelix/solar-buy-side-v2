import React from 'react'
import { Play, AlertTriangle } from 'lucide-react'

const lessons = [
  {
    title: 'Os 3 grandes RISCOS',
    description: 'Risco técnico (equipamento), financeiro (payback) e operacional (suporte).',
  },
  {
    title: 'Comprador Informado',
    description: 'Como identificar promessas exageradas e red flags em propostas.',
  },
  {
    title: 'Jornada Planejada',
    description: 'As 4 fases da decisão de compra e onde o vendedor perde a venda.',
  },
]

export const VideoSection: React.FC = () => {
  return (
    <section id="video-section" className="py-24 px-6 bg-white text-[#0F172A] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[#F97316] text-xs font-bold uppercase tracking-widest mb-4">
            <AlertTriangle className="w-3 h-3 inline mr-1" /> Realidade de Mercado
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
            Descubra O Que O Manual Ensina Aos Compradores
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-video bg-slate-900 border-4 border-slate-900 rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all">
                <div className="w-20 h-20 bg-[#F97316] rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(249,115,22,0.5)] group-hover:scale-110 transition-transform">
                  <Play className="text-white w-8 h-8 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white text-xs font-mono">
                <div className="h-1 bg-slate-600 flex-1 rounded-full">
                  <div className="w-1/3 h-full bg-[#F97316] rounded-full"></div>
                </div>
                <span>02:14 / 08:45</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-2">
            {lessons.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-slate-100 bg-slate-50 hover:bg-white hover:border-orange-200 hover:shadow-lg transition-all group"
              >
                <h4 className="text-[#0F172A] font-bold text-lg mb-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm pl-8">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
