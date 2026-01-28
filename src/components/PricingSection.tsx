import React, { useEffect, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Layers,
  Lock,
  Map,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'

type PricingSectionProps = {
  id?: string
}

type Countdown = {
  min: number
  sec: number
}

const features = [
  {
    icon: <BookOpen className="text-orange-500" size={28} />,
    title: 'Manual Solar Buy-Side',
    desc: 'Acesso imediato à bíblia da estratégia solar.',
    tag: 'VITALÍCIO',
  },
  {
    icon: <Layers className="text-orange-500" size={28} />,
    title: '130 Páginas + 160 Tópicos',
    desc: 'Conteúdo denso e interativo. Sem enrolação.',
    tag: 'TÉCNICO',
  },
  {
    icon: <Map className="text-orange-500" size={28} />,
    title: 'Método em 4 Fases',
    desc: 'A jornada de compra completa decifrada.',
    tag: 'ESTRATÉGIA',
  },
  {
    icon: <FileText className="text-orange-500" size={28} />,
    title: 'Anexos Técnicos',
    desc: 'Documentação exclusiva para pronta aplicação.',
    tag: 'EXCLUSIVO',
  },
]

export const PricingSection: React.FC<PricingSectionProps> = ({ id }) => {
  const [timeLeft, setTimeLeft] = useState<Countdown>({ min: 0, sec: 0 })
  const stockLimit = 1000
  const stockCurrent = 912

  useEffect(() => {
    setTimeLeft({ min: 14, sec: 59 })
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.sec > 0) return { ...prev, sec: prev.sec - 1 }
        if (prev.min > 0) return { min: prev.min - 1, sec: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id={id}
      className="relative bg-[#010413] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[180px]"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[40%] bg-orange-600/5 rounded-full blur-[150px]"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-[10px] font-black tracking-[0.2em] uppercase">
            <Sparkles size={14} className="animate-pulse" />
            Vagas Limitadas: Pré-Venda Profissional
          </div>

          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic">
            Não perca tempo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400">
              nem posição no mercado.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-medium">
            O domínio do Buy-Side é o que separa os amadores dos especialistas que realmente fecham grandes contratos.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[32px]">
              <div className="bg-[#020617] rounded-[30px] p-8 md:p-10">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-orange-500 uppercase tracking-tighter">
                  <Zap size={24} className="fill-current" />
                  Veja tudo que você recebe:
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((item) => (
                    <div key={item.title} className="flex gap-4 group">
                      <div className="shrink-0 p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:border-orange-500/50 transition-colors">
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-lg leading-tight">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-5 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex items-center gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <RefreshCw size={20} className="text-blue-400 animate-spin-slow" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white uppercase tracking-tight">Acesso Imediato + Atualizações 2026</p>
                    <p className="text-xs text-slate-500 italic">
                      Conteúdo dinâmico que evolui com as novas regras do mercado.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 py-6 bg-orange-600/10 border border-orange-500/20 rounded-3xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-orange-500">
                  Apenas 1.000 unidades garantem este preço
                </span>
                <span className="text-xs font-bold text-white bg-orange-600 px-2 py-0.5 rounded-md">
                  {stockCurrent}/1.000
                </span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.5)] transition-all duration-1000"
                  style={{ width: `${(stockCurrent / stockLimit) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-600/20 blur-[60px] rounded-full opacity-50"></div>

              <div className="relative bg-white text-slate-950 rounded-[40px] p-10 shadow-2xl overflow-hidden">
                <div className="absolute top-8 -right-12 bg-orange-600 text-white py-1 px-14 rotate-45 font-black text-[10px] uppercase tracking-widest shadow-lg">
                  Último Lote
                </div>

                <div className="mb-10">
                  <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600 mb-4">
                    Plano Vitalício
                  </span>
                  <div className="space-y-1">
                    <p className="text-slate-400 text-sm font-bold line-through">De R$ 1.497,00 por apenas:</p>
                    <div className="flex flex-col">
                      <div className="flex items-start">
                        <span className="text-xl font-bold mt-2 mr-1">12x de</span>
                        <div className="flex items-start">
                          <span className="text-2xl font-black mt-2">R$</span>
                          <span className="text-8xl font-black tracking-tighter leading-none">47</span>
                          <span className="text-2xl font-black mt-2">,25</span>
                        </div>
                      </div>
                      <p className="text-slate-500 text-sm font-medium mt-2">
                        Ou <span className="text-slate-900 font-bold">R$ 567,00 à vista</span> no PIX
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="relative w-full group overflow-hidden bg-orange-600 hover:bg-orange-500 text-white font-black py-6 rounded-2xl shadow-xl shadow-orange-600/30 transition-all duration-300 active:scale-[0.98] flex items-center justify-center" type="button">
                    <div className="relative z-10 flex items-center gap-3">
                      <span className="text-lg uppercase tracking-tight">GARANTIR MINHA UNIDADE</span>
                      <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>

                  <div className="flex flex-col gap-3 pt-4">
                    <div className="flex items-center gap-3 text-slate-500 font-bold text-[11px] uppercase tracking-tight">
                      <CheckCircle2 size={16} className="text-green-600 shrink-0" />
                      Liberação imediata no seu e-mail
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 font-bold text-[11px] uppercase tracking-tight">
                      <ShieldCheck size={16} className="text-blue-600 shrink-0" />
                      Checkout 100% criptografado
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 font-bold text-[11px] uppercase tracking-tight">
                      <Lock size={16} className="text-blue-600 shrink-0" />
                      Acesso Imediato
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 font-bold text-[11px] uppercase tracking-tight">
                      <RefreshCw size={16} className="text-blue-600 shrink-0" />
                      Atualizações 2026
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100">
                  <div className="flex justify-between items-center text-slate-400">
                    <span className="text-[10px] font-black uppercase tracking-widest">Sua oferta expira em:</span>
                    <div className="flex gap-1 text-slate-900 font-black tabular-nums">
                      <span>{timeLeft.min < 10 ? `0${timeLeft.min}` : timeLeft.min}</span>
                      <span className="animate-pulse">:</span>
                      <span>{timeLeft.sec < 10 ? `0${timeLeft.sec}` : timeLeft.sec}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-white font-black text-xl tracking-tighter italic">
              GRUPO<span className="text-orange-600">MAIS</span>
            </span>
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
              Intelligence & Solar Strategy
            </p>
          </div>
          <div className="flex gap-8 text-[9px] font-black text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Segurança</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `,
        }}
      />
    </section>
  )
}
