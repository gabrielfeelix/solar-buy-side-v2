import React from 'react'
import { Building2, CheckCircle2, Rocket, Users } from 'lucide-react'

const profiles = [
  {
    title: 'Empresas de Integração Solar',
    description: 'Para vender valor, fugir da guerra dos preços e fechar mais projetos.',
    bullets: ['Vender valor', 'Fechar mais projetos'],
    icon: <Building2 className="w-6 h-6 text-blue-500" />,
    tag: 'ESTRUTURADOS',
  },
  {
    title: 'Empreendedores Iniciantes',
    description: 'Para construir um negócio sólido desde o primeiro passo na integração solar.',
    bullets: ['Base sólida', 'Autoridade desde o dia 1'],
    icon: <Rocket className="w-6 h-6 text-orange-500" />,
    tag: 'STARTUPS',
  },
  {
    title: 'Representantes Comerciais',
    description: 'Para aumentar sua taxa de conversão reduzindo sua taxa de desconto.',
    bullets: ['Menos desconto', 'Mais conversão'],
    icon: <Users className="w-6 h-6 text-emerald-500" />,
    tag: 'VENDAS',
  },
]

export const AudienceSection: React.FC = () => {
  return (
    <section id="audiencia" className="bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 antialiased">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
            Quem <span className="text-orange-500">REALMENTE</span> precisa <br />
            desse conhecimento?
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
            Veja para quem o Manual Solar Buy-Side é essencial:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {profiles.map((profile) => (
            <div
              key={profile.title}
              className="group relative bg-white p-10 rounded-[32px] border border-[#d2d2d7]/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <div className="mb-8 flex justify-between items-start">
                  <div className="p-4 rounded-2xl bg-[#f5f5f7] group-hover:bg-white group-hover:shadow-inner transition-colors">
                    {profile.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                    {profile.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                  {profile.title}
                </h3>

                <p className="text-[#86868b] font-medium mb-8 leading-relaxed">
                  {profile.description}
                </p>

                <div className="mt-auto space-y-3">
                  {profile.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />
                      <span className="text-sm font-semibold text-[#1d1d1f]">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-8 flex flex-col gap-6 border-l-4 border-[#F97316]">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-500/10 rounded-lg text-[#F97316]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-white leading-tight">
              Não importa em qual ponto da cadeia você está, o Manual Solar Buy-Side não é apenas um guia, mas uma{' '}
              <span className="text-[#F97316]">imersão completa na perspectiva do comprador.</span>
            </h3>
          </div>
          <div className="h-px w-full bg-white/10"></div>
        </div>
      </div>
    </section>
  )
}
