import React, { useState } from 'react'
import {
  CheckCircle2,
  Download,
  Lock,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'

const features = [
  {
    title: 'Riscos Ocultos',
    desc: 'O que ninguém te conta sobre a segurança de sistemas solares.',
    icon: <Lock className="text-orange-500" size={20} />,
  },
  {
    title: 'Psicologia de Compra',
    desc: "As 4 fases mentais do seu cliente antes do 'sim'.",
    icon: <Target className="text-orange-500" size={20} />,
  },
  {
    title: 'Análise Buy-Side',
    desc: 'Como as grandes propostas são realmente comparadas.',
    icon: <TrendingUp className="text-orange-500" size={20} />,
  },
]

export const LeadMagnetSection: React.FC = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <section className="relative w-full bg-white py-24 md:py-40 px-6 overflow-hidden font-sans text-[#1d1d1f]">
      <div className="absolute inset-0 [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.3] pointer-events-none"></div>

      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          <div className="flex-[1.2] space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest">
              <Zap size={14} fill="currentColor" />
              Conteúdo Exclusivo
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] text-[#1d1d1f]">
              Ainda tem dúvidas sobre o impacto do <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                Manual Buy-Side?
              </span>
            </h2>

            <p className="max-w-xl text-xl md:text-2xl text-[#6e6e73] font-medium leading-relaxed">
              Garanta agora seu e-book grátis e entenda por que a imersão Solar Buy-Side faz vendedores venderem mais e melhor.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-6 pt-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:shadow-md group-hover:border-orange-200 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1d1d1f] group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#86868b] text-sm leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-[#1d1d1f] rounded-2xl hover:bg-orange-600 active:scale-95 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-orange-500/20" type="button">
                <span className="mr-3">Baixar Preview Gratuito</span>
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <p className="mt-4 text-xs text-[#86868b] flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-500" />
                PDF Interativo • 42 páginas • Acesso imediato
              </p>
            </div>
          </div>

          <div
            className="flex-1 z-10 perspective-[1000px] w-full max-w-[400px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className={`relative transform transition-all duration-700 ${
                hovered ? 'hover:rotate-y-[-10deg]' : ''
              } rotate-y-[-20deg] rotate-x-[5deg]`}
            >
              <div className="absolute -bottom-10 left-10 right-0 h-10 bg-black/60 blur-[40px] rounded-full"></div>

              <div className="aspect-[3/4.2] w-full bg-gradient-to-br from-[#2D2D2F] to-[#111111] rounded-r-xl border-y border-r border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
                <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/50 to-transparent shadow-inner z-20"></div>

                <div className="p-10 h-full flex flex-col justify-between relative">
                  <div>
                    <div className="w-12 h-1 bg-orange-600 mb-10 rounded-full"></div>
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
                      Solar<br />
                      Buy-Side<br />
                      <span className="text-orange-600 not-italic">Preview</span>
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                        <Zap size={20} className="text-orange-500 fill-orange-500" />
                      </div>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
                        Estratégia de <br />
                        Alta Conversão
                      </p>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>

                    <p className="text-[9px] font-medium text-white/30 uppercase tracking-[0.1em]">
                      © 2025 Manual Solar • All Rights Reserved
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-[1000px] { perspective: 1000px; }
        .rotate-y-[-20deg] { transform: rotateY(-20deg); }
        .rotate-y-[-10deg] { transform: rotateY(-10deg); }
        .rotate-x-[5deg] { transform: rotateX(5deg); }
      `}</style>
    </section>
  )
}
