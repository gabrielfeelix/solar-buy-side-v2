import React from 'react'
import {
  ArrowRight,
  BarChart3,
  Layout,
  MinusCircle,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import { ButtonPrimary } from './ManualAtoms'

type CardProps = {
  Icon: React.ComponentType<{ size?: number }>
  title: string
  desc: React.ReactNode
}

const Card: React.FC<CardProps> = ({ Icon, title, desc }) => {
  return (
    <div className="group relative flex gap-6 p-6 rounded-2xl border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300">
      <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/[0.03] rounded-2xl transition-colors"></div>

      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
        <Icon size={24} />
      </div>

      <div className="space-y-2 relative">
        <h4 className="text-lg font-bold text-white group-hover:text-[#F97316] transition-colors">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export const ManualStrategicSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1224] via-[#0a1730] to-[#020617] text-slate-100 font-sans antialiased selection:bg-orange-100 selection:text-orange-900">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-orange-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col min-h-[600px]">
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-widest">
                A ferramenta estratégica
              </span>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                  Manual Solar <br />
                  <span className="text-[#F97316]">Buy-Side</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-md border-l-2 border-orange-500 pl-4">
                  A ferramenta estratégica que todo vendedor do setor solar precisa ter.
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-2xl">
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-medium" style={{ textAlign: 'justify' }}>
                <p>
                  O <strong className="text-white font-semibold">Manual de Compra Solar Buy-Side</strong> é uma leitura essencial para profissionais do setor de vendas (Sell-Side) que desejam se destacar em um mercado ultracompetitivo.
                </p>
                <p>
                  Ao proporcionar uma imersão na jornada de compra sob a ótica do comprador, este manual oferece uma compreensão estratégica dos critérios, motivações e desafios enfrentados pelo{' '}
                  <span className="text-[#F97316] font-semibold italic">lado comprador (Buy-Side)</span>.
                </p>
                <p>
                  Ao dominar o conceito Buy-Side, vendedores estarão aptos a lapidar sua abordagem comercial, entregar valor real, distanciar-se da briga por preço e elevar sua credibilidade no relacionamento com os clientes.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-12">
              <ButtonPrimary
                className="text-base md:text-lg px-10 py-4"
                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                QUERO ME DESTACAR NO MERCADO
                <ArrowRight size={20} />
              </ButtonPrimary>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-16 flex justify-end pt-12">
            <div className="relative group">
              <div className="absolute -inset-20 bg-orange-500/20 blur-[120px] rounded-full group-hover:bg-orange-500/30 transition-colors duration-700"></div>

              <div className="relative w-[340px] h-[480px] bg-[#0f172a] rounded-r-lg shadow-[30px_40px_60px_-15px_rgba(0,0,0,0.7)] border-y border-r border-white/10 flex flex-col justify-between p-12 overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-[url('/assets/manual.jpg.png')] bg-cover bg-center opacity-95"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30"></div>
                <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-r from-black/40 via-white/5 to-transparent border-l border-white/5"></div>

                <div className="space-y-4"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

        <div className="mt-16 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-8">
            Descubra o que o manual ensina aos compradores e entenda as novas regras do jogo
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium">
            Veja os resultados concretos que você pode alcançar ao aplicar o Manual Solar Buy-Side no seu processo de venda.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <header className="flex items-center gap-4">
              <div className="h-8 w-1 bg-[#F97316] rounded-full"></div>
              <h3 className="text-sm font-black tracking-[0.3em] text-[#F97316] uppercase">O que o vendedor vai dominar</h3>
            </header>

            <div className="space-y-8">
              <Card
                Icon={Target}
                title="Dores reais do cliente"
                desc="Suas objeções e motivações"
              />
              <Card
                Icon={Users}
                title="Postura consultiva"
                desc="Pare de competir por preço. Ajude o cliente a decidir bem e construa uma relação de parceria e confiança."
              />
              <Card
                Icon={TrendingUp}
                title="Valor técnico e econômico"
                desc="Demonstra, de forma fundamentada, como o valor técnico da solução se converte em benefício econômico."
              />
            </div>
          </div>

          <div className="space-y-12">
            <header className="flex items-center gap-4">
              <div className="h-8 w-1 bg-[#F97316] rounded-full"></div>
              <h3 className="text-sm font-black tracking-[0.3em] text-[#F97316] uppercase">Principais focos e habilidades</h3>
            </header>

            <div className="space-y-8">
              <Card
                Icon={Layout}
                title="Apresentações persuasivas"
                desc="Estruture propostas objetivas e transparentes que facilitam a decisão do cliente."
              />
              <Card
                Icon={BarChart3}
                title="Cenário financeiro sólido"
                desc={<><strong>Domine a venda.</strong> Conquiste autoridade e crie conexões reais para fechar mais negócios.</>}
              />
              <Card
                Icon={MinusCircle}
                title="Menos desconto, mais margem"
                desc="Argumente com precisão e preserve sua comissão sem perder vendas."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
