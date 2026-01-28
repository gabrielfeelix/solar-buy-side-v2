import React from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export const ManualStrategicSection: React.FC = () => {
  return (
    <section className="relative bg-[#020617] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-blue-500/30">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col min-h-[600px]">
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.15em] uppercase">
                A ferramenta estratégica
              </span>
              <div className="space-y-2">
                <h1 className="text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9] text-white">
                  Manual Solar <br />
                  <span className="text-blue-500">Buy-Side</span>
                </h1>
                <p className="text-xl text-slate-400 font-medium max-w-md border-l-2 border-blue-600 pl-4 mt-4">
                  A ferramenta estratégica que todo vendedor do setor solar precisa ter.
                </p>
              </div>
            </div>

            <div className="mt-16 max-w-2xl">
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                <p>
                  O <strong className="text-white font-semibold">Manual de Compra Solar Buy-Side</strong> é uma leitura essencial para profissionais do setor de vendas (Sell-Side) que desejam se destacar em um mercado ultracompetitivo.
                </p>
                <p>
                  Ao proporcionar uma imersão na jornada de compra sob a ótica do comprador, este manual oferece uma compreensão estratégica dos critérios, motivações e desafios enfrentados pelo{' '}
                  <span className="text-blue-400 font-medium italic">lado comprador (Buy-Side)</span>.
                </p>
                <p>
                  Ao dominar o conceito Buy-Side, vendedores estarão aptos a lapidar sua abordagem comercial, entregar valor real, distanciar-se da briga por preço e elevar sua credibilidade no relacionamento com os clientes.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-12">
              <button className="group relative flex items-center gap-6 bg-white text-[#020617] pl-8 pr-2 py-2 rounded-2xl font-black text-xl transition-all hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-blue-500/20" type="button">
                QUERO ME DESTACAR NO MERCADO
                <div className="bg-blue-600 h-14 w-14 rounded-xl flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={24} strokeWidth={3} />
                </div>
              </button>

              <div className="mt-6 flex items-center gap-3 text-slate-500">
                <ShieldCheck size={16} className="text-blue-500/50" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
                  Acesso imediato via IMMO Platform
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-16 hidden lg:flex justify-end pt-12">
            <div className="relative group">
              <div className="absolute -inset-20 bg-blue-600/20 blur-[120px] rounded-full group-hover:bg-blue-600/30 transition-colors duration-700"></div>

              <div className="relative w-[340px] h-[480px] bg-[#0f172a] rounded-r-lg shadow-[30px_40px_60px_-15px_rgba(0,0,0,0.7)] border-y border-r border-white/10 flex flex-col justify-between p-12 overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-r from-black/40 via-white/5 to-transparent border-l border-white/5"></div>

                <div className="space-y-4">
                  <div className="w-10 h-1 bg-blue-500"></div>
                  <h2 className="text-4xl font-black text-white leading-none tracking-tighter">
                    BUY <br /> SIDE
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">
                    Estratégia IMMO
                  </p>
                  <div className="h-px w-full bg-white/10"></div>
                  <p className="text-[8px] text-slate-500 leading-tight">
                    ESTE MANUAL É PARTE INTEGRANTE DO ECOSSISTEMA DE ALTA PERFORMANCE PARA O SETOR FOTOVOLTAICO.
                  </p>
                </div>

                <div className="absolute -bottom-10 -right-10 text-[140px] font-black text-white/[0.02] select-none pointer-events-none">
                  IM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
