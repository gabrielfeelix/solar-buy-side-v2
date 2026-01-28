import React from 'react'
import {
  ArrowRight,
  Search,
  Zap,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Layout,
} from 'lucide-react'

export const ContextSection: React.FC = () => {
  return (
    <section id="contexto" className="bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 antialiased">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[#F97316] text-[10px] font-bold uppercase tracking-widest mb-6">
            <Layout className="w-3 h-3" /> Vision 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
            Panorama <span className="text-[#cbd5e1]">2026</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-tight italic">
            Pode parecer exagero, mas em breve cada vez mais compradores de sistema fotovoltaico estarão informados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: <Search className="w-5 h-5" />,
              title: 'Saberão analisar',
              desc: 'Compararão propostas com precisão técnica superior à média do mercado.',
            },
            {
              icon: <Zap className="w-5 h-5" />,
              title: 'Analisarão fundo',
              desc: 'Fornecedores e tecnologias passarão por um crivo muito mais rigoroso.',
            },
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: 'Avaliarão risco',
              desc: 'A confiabilidade da sua empresa será o fator decisivo antes de qualquer preço.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col gap-4">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-[#F97316] shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mb-12 overflow-hidden rounded-3xl bg-slate-950 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#F97316]">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-orange-500/10 rounded-lg text-[#F97316]">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
              Quem não entender essa nova jornada <span className="text-[#F97316]">vai perder vendas.</span>
            </h3>
          </div>
          <div className="h-px md:h-8 w-full md:w-px bg-white/10"></div>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-widest text-center md:text-left">
            O mercado amadureceu. <br className="hidden md:block" /> Você está pronto?
          </p>
        </div>

        <div className="bg-slate-50 rounded-[40px] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 block">
                A Solução Definitive
              </span>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-6">
                Ainda há tempo para <span className="text-[#F97316]">reverter essa situação.</span>
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed max-w-xl">
                O <strong>Manual de Compra Solar Buy-Side</strong> mapeia os novos gatilhos de decisão do cliente moderno, garantindo que você esteja do lado certo da venda.
              </p>

              <div className="flex flex-wrap gap-y-3 gap-x-6">
                {['Visão do Cliente', 'Gatilhos de Compra', 'Confiabilidade'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316]" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col items-center lg:items-end">
              <button
                className="group relative bg-slate-900 hover:bg-[#F97316] text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-3 shadow-lg shadow-slate-200 hover:shadow-[#F97316]/20"
                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                type="button"
              >
                Garantir meu acesso agora
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
              <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Download Imediato • PDF Interativo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
