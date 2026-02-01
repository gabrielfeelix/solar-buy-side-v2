import React from 'react'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Layers,
  Lock as LockIcon,
  Map as MapIcon,
  Package,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { useContent } from '../contexts/ContentContext'

type PricingSectionProps = {
  id?: string
}

type Countdown = {
  min: number
  sec: number
}

export const PricingSection: React.FC<PricingSectionProps> = ({ id }) => {
  const { getSection } = useContent()
  const section = getSection('pricing')

  const features = [
    {
      icon: <BookOpen className="text-orange-500" size={28} />,
      title: section?.texts.feature1Title || 'Manual Solar Buy-Side',
      desc: section?.texts.feature1Desc || 'Acesso imediato à bíblia da estratégia solar.',
      tag: section?.texts.feature1Tag || 'VITALÍCIO',
    },
    {
      icon: <Layers className="text-orange-500" size={28} />,
      title: section?.texts.feature2Title || '130 Páginas + 160 Tópicos',
      desc: section?.texts.feature2Desc || 'Conteúdo denso e interativo. Sem enrolação.',
      tag: section?.texts.feature2Tag || 'TÉCNICO',
    },
    {
      icon: <MapIcon className="text-orange-500" size={28} />,
      title: section?.texts.feature3Title || 'Método em 4 Fases',
      desc: section?.texts.feature3Desc || 'A jornada de compra completa decifrada.',
      tag: section?.texts.feature3Tag || 'ESTRATÉGIA',
    },
    {
      icon: <FileText className="text-orange-500" size={28} />,
      title: section?.texts.feature4Title || 'Anexos Técnicos',
      desc: section?.texts.feature4Desc || 'Documentação exclusiva para pronta aplicação.',
      tag: section?.texts.feature4Tag || 'EXCLUSIVO',
    },
  ]
  const timeLeft: Countdown = { min: 11, sec: 42 }
  const stockLimit = 1000
  const stockCurrent = 847

  return (
    <section id={id} className="relative overflow-hidden bg-[#010413] text-white font-sans selection:bg-orange-500/30">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[150px]"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-[10px] font-black tracking-[0.2em] uppercase">
            <Sparkles size={14} className="animate-pulse" />
            {section?.texts.badge || 'Pré-venda profissional por tempo limitado'}
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]">
            {section?.texts.title || 'NÃO PERCA TEMPO NEM'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500">
              {section?.texts.titleHighlight || 'POSIÇÃO NO MERCADO.'}
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            {section?.texts.subtitle || 'O mercado solar não perdoa quem fica para trás. Garanta o método que os grandes players usam para dominar o Buy-Side.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                {section?.texts.featuresTitle || 'VEJA TUDO QUE VOCÊ RECEBE:'}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 bg-white/[0.03] border border-white/10 rounded-[24px] hover:bg-white/[0.06] transition-all group"
                  >
                    <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-slate-200/90 tracking-widest">{item.tag}</span>
                      <h4 className="font-bold text-lg leading-tight">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 rounded-[32px] space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2 text-orange-500 font-black text-sm uppercase tracking-tighter">
                  <Package size={18} />
                  {section?.texts.stockTitle || 'Apenas 1.000 unidades na Pré-venda'}
                </div>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                  {stockCurrent} / {stockLimit} Vendidos
                </span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden p-[2px]">
                <div
                  className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                  style={{ width: `${(stockCurrent / stockLimit) * 100}%` }}
                ></div>
              </div>
              <p className="text-center text-[11px] text-slate-500 font-medium">
                {section?.texts.stockWarning || '*O preço subirá para R$ 1.497,00 assim que o lote de pré-venda esgotar.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-600/20 blur-[60px] rounded-full opacity-50"></div>

              <div className="relative bg-white text-slate-950 rounded-[40px] p-10 shadow-2xl overflow-hidden">
                <div className="flex items-start justify-between mb-10">
                  <div>
                    <span className="inline-flex items-center text-[10px] font-black tracking-[0.3em] uppercase text-orange-600">
                      {section?.texts.planBadge || 'Plano de Acesso'}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-2">{section?.texts.planTitle || 'Oferta Especial'}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-slate-500" />
                  </div>
                </div>
                <div className="mb-10">
                  <div className="space-y-1">
                    <p className="text-slate-400 text-sm font-bold line-through">{section?.texts.priceFrom || 'De R$ 997,00 por apenas:'}</p>
                    <div className="flex flex-col">
                      <div className="flex items-start">
                        <span className="text-xl font-bold mt-2 mr-1">12x de</span>
                        <div className="flex items-start">
                          <span className="text-2xl font-black mt-2">R$</span>
                          <span className="text-8xl font-black tracking-tighter leading-none">{section?.texts.priceValue || '61'}</span>
                          <span className="text-2xl font-black mt-2">{section?.texts.priceCents || ',38'}</span>
                        </div>
                      </div>
                      <p className="text-slate-500 text-sm font-medium mt-2">
                        {section?.texts.priceUpfront || 'Ou R$ 597,00 à vista no PIX'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    className="relative w-full group overflow-hidden bg-orange-600 hover:bg-orange-500 text-white font-black py-6 rounded-2xl shadow-xl shadow-orange-600/30 transition-all duration-300 active:scale-[0.98] flex items-center justify-center"
                    onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                    type="button"
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <span className="text-lg uppercase tracking-tight">{section?.texts.ctaButton || 'GARANTIR MINHA UNIDADE'}</span>
                      <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>

                  <div className="flex flex-col gap-3 pt-4">
                    <div className="flex items-center gap-3 text-slate-500 font-bold text-[11px] uppercase tracking-tight">
                      <CheckCircle2 size={16} className="text-green-600 shrink-0" />
                      {section?.texts.benefit1 || 'Liberação imediata no seu e-mail'}
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 font-bold text-[11px] uppercase tracking-tight">
                      <ShieldCheck size={16} className="text-blue-600 shrink-0" />
                      {section?.texts.benefit2 || 'Checkout 100% criptografado'}
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 font-bold text-[11px] uppercase tracking-tight">
                      <LockIcon size={16} className="text-blue-600 shrink-0" />
                      {section?.texts.benefit3 || 'Acesso Imediato'}
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100 space-y-6">
                  <div className="flex items-center justify-center gap-6">
                    <img
                      src="/assets/Garantia.png"
                      alt="7 dias de garantia"
                      className="w-full max-w-[96px] h-auto"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <img src="/assets/Visa.png" alt="Visa" className="h-8 w-auto object-contain" />
                    <img src="/assets/Mastercard.png" alt="Mastercard" className="h-8 w-auto object-contain" />
                    <img src="/assets/Pix.png" alt="PIX" className="h-8 w-auto object-contain" />
                    <img src="/assets/Boleto.png" alt="Boleto" className="h-8 w-auto object-contain" />
                  </div>

                  <div className="pt-4">
                    <img
                      src="/assets/Compra segura.png"
                      alt="Compra Segura"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="flex justify-between items-center text-slate-400 pt-4">
                    <span className="text-[10px] font-black uppercase tracking-widest">{section?.texts.timerLabel || 'Sua oferta expira em:'}</span>
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
      </div>
    </section>
  )
}
