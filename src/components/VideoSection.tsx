import React, { useEffect, useState } from 'react'
import { AlertCircle, Map, Monitor, Play, Search, ShieldAlert } from 'lucide-react'

export const VideoSection: React.FC = () => {
  const [showPlayer, setShowPlayer] = useState(false)
  const WistiaPlayer = 'wistia-player' as React.ElementType

  useEffect(() => {
    if (!showPlayer) return
    const existingPlayer = document.querySelector("script[src='https://fast.wistia.com/player.js']")
    const existingEmbed = document.querySelector("script[src='https://fast.wistia.com/embed/u0jf5yyoda.js']")
    if (!existingPlayer) {
      const script = document.createElement('script')
      script.src = 'https://fast.wistia.com/player.js'
      script.async = true
      document.body.appendChild(script)
    }
    if (!existingEmbed) {
      const script = document.createElement('script')
      script.src = 'https://fast.wistia.com/embed/u0jf5yyoda.js'
      script.async = true
      script.type = 'module'
      document.body.appendChild(script)
    }
  }, [showPlayer])

  return (
    <section
      id="video-section"
      className="relative overflow-hidden bg-[#0B1120] text-white font-sans selection:bg-orange-100 selection:text-orange-900 antialiased"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-900/20 rounded-full blur-[120px]"></div>
      </div>
      <div className="relative max-w-5xl mx-auto px-6 py-32">
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
            Realidade de <br />
            <span className="text-[#F97316] italic">Mercado</span>
          </h2>
          <p className="text-xl text-white font-medium tracking-tight max-w-xl">
            Descubra o que o Manual ensina aos compradores e entenda as novas regras do jogo.
          </p>
        </div>

        <div className="space-y-6 mb-32">
          {[
            {
              id: '01',
              icon: <ShieldAlert className="w-6 h-6" />,
              title: 'Os 3 grandes RISCOS',
              desc: 'Risco técnico (equipamento), financeiro (payback) e operacional (suporte).',
              tag: 'Proteção',
            },
            {
              id: '02',
              icon: <Search className="w-6 h-6" />,
              title: 'Comprador Informado',
              desc: 'Como identificar promessas exageradas e red flags em propostas comerciais.',
              tag: 'Análise',
            },
            {
              id: '03',
              icon: <Map className="w-6 h-6" />,
              title: 'Jornada Planejada',
              desc: 'As 4 fases da decisão de compra e o momento exato onde o vendedor perde a venda.',
              tag: 'Estratégia',
            },
          ].map((card) => (
            <div
              key={card.id}
              className="group flex flex-col md:flex-row gap-8 p-10 md:p-14 rounded-[48px] bg-[#0F1C36] border border-white/10 transition-all duration-500 hover:bg-[#122242] hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white/10 shadow-sm flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  {card.icon}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{card.id}</span>
                  <div className="h-px w-6 bg-white/15"></div>
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{card.tag}</span>
                </div>
                <h4 className="text-3xl font-black text-white mb-4 tracking-tight">{card.title}</h4>
                <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 mb-8 text-red-500">
            <AlertCircle className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">Atenção Crítica</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-[1.1]">
            Veja o porquê de muitos vendedores ficarem fora do jogo. <br />
            <span className="text-slate-400 text-lg md:text-2xl font-medium">
              Não permita que isso aconteça com você.
            </span>
          </h3>
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-orange-500/10 rounded-[52px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div
            className="relative aspect-video rounded-[48px] bg-slate-900 overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group cursor-pointer"
            onClick={() => setShowPlayer(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setShowPlayer(true)
              }
            }}
          >
            {!showPlayer && (
              <>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50 transition-transform duration-700 group-hover:scale-105"></div>

                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/30 transition-colors"></div>

                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <Play className="w-6 h-6 text-slate-900 fill-slate-900 group-hover:text-white group-hover:fill-white ml-1 transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-1">
                        Conteúdo Exclusivo
                      </p>
                      <p className="text-2xl font-black text-white tracking-tight">A Nova Realidade Solar</p>
                    </div>
                  </div>
                  <div className="px-5 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                    12:45
                  </div>
                </div>
              </>
            )}

            {showPlayer && (
              <div className="absolute inset-0">
                <style>{`
                  wistia-player[media-id='u0jf5yyoda']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/u0jf5yyoda/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                  }
                `}</style>
                <WistiaPlayer media-id="u0jf5yyoda" aspect="1.7777777777777777" autoPlay="true"></WistiaPlayer>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
