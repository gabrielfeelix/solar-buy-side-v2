import React, { useState } from 'react'
import {
  ArrowRight,
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
  Target,
} from 'lucide-react'
import { useContent } from '../contexts/ContentContext'

const testimonials = [
  {
    name: 'Rogério',
    role: 'Particular',
    location: 'Campinas, SP',
    avatar: '/assets/Rogerio.png',
    reviewTitle: 'O manual valeu cada página.',
    quote:
      'Nunca tinha tido contato com energia solar e tinha receio de tomar decisão errada. Mas, ao começar a ler o manual, tudo mudou. O conteúdo é claro, estruturado e me conquistou logo no início. As 4 fases da jornada de compra foram essenciais. Sempre que surgia uma dúvida, o índice interativo com mais de 160 tópicos me levava direto à resposta.',
    highlight:
      'No fim, escolhi a empresa certa, o sistema ideal ao preço certo e conduzi tudo com segurança. Sem exagero: o manual valeu cada página.',
  },
  {
    name: 'Ricardo',
    role: 'Empresário',
    location: 'São Paulo, SP',
    avatar: '/assets/Ricardo 1.png',
    objectPosition: '55% 20%',
    reviewTitle: 'Errar na escolha de um fornecedor pode gerar prejuízo enorme',
    quote:
      'No mundo dos negócios em São Paulo, errar na escolha de um fornecedor pode gerar um prejuízo enorme. O manual foi uma ferramenta indispensável para evitar armadilhas na compra do sistema solar. Aprendi a identificar empresas despreparadas e equipamentos de qualidade duvidosa. O mais importante foi que o manual me ensinou a procurar empresas que não apenas vendiam o sistema, mas também ofereciam garantia de suporte técnico contínuo e manutenção.',
    highlight:
      'Fechei negócio com a melhor empresa e tenho certeza que meu investimento de R$ 145 mil foi muito bem aplicado. Evitei um monte de dor de cabeça e escolhi com confiança.',
  },
  {
    name: 'Lucineide',
    role: 'Particular',
    location: 'Recife, PE',
    avatar: '/assets/Lucineide 1.png',
    objectPosition: '55% 20%',
    reviewTitle: 'Esse Manual foi realmente um passo a passo arretado',
    quote:
      'Morando sozinha, confesso que a enorme variedade de empresas e tecnologias de energia solar me deixava bastante perdida e insegura sobre qual seria a escolha ideal para não me arrepender depois. Mas o manual foi um guia fundamental nessa jornada! Seguindo cada fase e etapa, consegui avaliar detalhadamente cada proposta, descartando aquelas que pareciam boas demais para ser verdade. Com segurança e convicção, instalei um sistema de R$ 28 mil.',
    highlight:
      'Esse manual foi realmente um passo a passo "arretado" para entender tudo direitinho e fazer a escolha certa para minha casa. E o melhor de tudo? No final das negociações, fui até elogiada por vendedores, que nunca tinham encontrado uma mulher com tanto conhecimento no assunto! 😂',
  },
  {
    name: 'Carlos',
    role: 'Particular',
    location: 'Belo Horizonte, MG',
    avatar: '/assets/Carlos.png',
    reviewTitle: 'O Manual Buy-Side abriu meus olhos para os riscos',
    quote:
      'Morando em Belo Horizonte, o sol é uma bênção, mas eu tinha medo de cair em cilada ao tentar aproveitar essa energia. As empresas prometiam mundos e fundos, mas eu sentia que tinha algo escondido. O manual abriu meus olhos para os riscos de contratos mal feitos e equipamentos de baixa qualidade. Com as dicas práticas, conversei de igual para igual com os vendedores e ainda economizei R$ 1.800 na negociação!',
    highlight:
      'Valeu cada página pra fechar com uma empresa séria e garantir um sistema que atende minhas necessidades de verdade.',
  },
  {
    name: 'Edivaldo',
    role: 'Produtor Rural',
    location: 'Sinop, MT',
    avatar: '/assets/Edivaldo.png',
    reviewTitle: 'O Manual me deu segurança para investir R$ 248.000,00',
    quote:
      'Sou produtor rural aqui em Sinop, no Mato Grosso, e decidi instalar um sistema solar no meu galpão por causa do alto consumo de energia nas atividades da fazenda, principalmente na irrigação e no uso de máquinas. Com o clima seco e a expansão da lavoura, a conta de luz estava pesando cada vez mais. O Manual de Compra Profissional de Sistema Solar Fotovoltaico Buy-Side foi essencial nesse processo.',
    highlight:
      'Ele me ajudou a entender como comparar propostas e evitar erros comuns, o que me deu segurança para investir R$ 248.000,00 com confiança.',
  },
]

export const BuyerWaveSection: React.FC = () => {
  const { getSection } = useContent()
  const section = getSection('buyer-wave')
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const next = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-[#F5F5F7] text-[#1D1D1F] font-sans antialiased">
      <div className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold mb-3 block uppercase text-xs tracking-[0.2em]">
            {section?.texts.badge || 'Guia do Comprador'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {section?.texts.title && section.texts.title.trim() !== '' ? (
              section.texts.title
            ) : (
              <>
                Descubra o que o manual ensina aos <span className="text-[#F97316]">compradores</span> e entenda as <span className="text-[#F97316]">novas regras</span> do jogo
              </>
            )}
          </h2>
          <p className="text-xl text-[#86868B] max-w-2xl mx-auto leading-relaxed">
            {section?.texts.subtitle || 'Compradores estão evoluindo. Veja o que eles estarão aprendendo em breve.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#E5E5E7] p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <Award className="text-blue-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-8 tracking-tight text-[#1D1D1F]">
              {section?.texts.card1Title || 'O que o comprador vai dominar?'}
            </h3>
            <ul className="space-y-6 flex-grow">
              {[
                section?.texts.card1Item1 || 'Conceitos essenciais para uma compra técnica e segura',
                section?.texts.card1Item2 || 'Reconhecimento de marcas e distribuidores de alta confiança',
                section?.texts.card1Item3 || 'Critérios para selecionar empresas sérias e competentes',
              ].map((item) => (
                <li key={item} className="flex flex-col text-[#424245]">
                  <div className="flex gap-4 items-start">
                    <Check size={18} className="text-blue-600 shrink-0 mt-1" />
                    <span className="text-lg leading-tight font-medium">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#E5E5E7] p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-orange-500" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-8 tracking-tight text-[#1D1D1F]">
              {section?.texts.card2Title || 'Principais focos e Habilidades'}
            </h3>
            <ul className="space-y-6 flex-grow">
              {[
                section?.texts.card2Item1 || 'Analisar propostas com critérios técnicos e financeiros',
                section?.texts.card2Item2 || 'Avaliar reputação e suporte de pós-venda com precisão',
                section?.texts.card2Item3 || 'Tomar decisão com segurança e embasamento técnico',
              ].map((item) => (
                <li key={item} className="flex flex-col text-[#424245]">
                  <div className="flex gap-4 items-start">
                    <Check size={18} className="text-orange-500 shrink-0 mt-1" />
                    <span className="text-lg leading-tight font-medium">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-24 px-6 bg-[#FBFBFD]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">{section?.texts.testimonialsTitle || 'A voz de quem aprendeu'}</h2>
              <p className="text-lg text-[#86868B]">{section?.texts.testimonialsSubtitle || 'Relatos de compradores informados e preparados'}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-[#D2D2D7] flex items-center justify-center hover:bg-white transition-all active:scale-90 shadow-sm"
                type="button"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-[#D2D2D7] flex items-center justify-center hover:bg-white transition-all active:scale-90 shadow-sm"
                type="button"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] overflow-hidden border border-[#E5E5E7] shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col md:flex-row md:min-h-[450px]">
            <div className="w-full md:w-[38%] relative h-[360px] md:h-auto">
              <img
                src={testimonials[activeTestimonial].avatar}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: testimonials[activeTestimonial].objectPosition ?? 'center' }}
                alt={testimonials[activeTestimonial].name}
              />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 backdrop-blur-xl bg-white/20 border border-white/30 p-4 md:p-6 rounded-2xl text-white shadow-2xl">
                <p className="text-xl md:text-2xl font-bold tracking-tight">{testimonials[activeTestimonial].name}</p>
                <div className="flex items-center gap-2 mt-1.5 opacity-90 text-[10px] font-bold uppercase tracking-[0.15em]">
                  <span>{testimonials[activeTestimonial].role}</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  <span>{testimonials[activeTestimonial].location}</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[62%] p-8 flex flex-col justify-start">
              <div className="space-y-6 md:space-y-8">
                <h4 className="text-xl md:text-3xl font-extrabold tracking-tight text-[#1D1D1F] leading-tight">
                  {testimonials[activeTestimonial].reviewTitle}
                </h4>

                <p className="text-base md:text-xl text-[#424245] leading-relaxed font-light text-justify">
                  {testimonials[activeTestimonial].quote}
                </p>

                <div className="pt-4 md:pt-6 border-t border-[#F5F5F7]">
                  <p className="text-lg md:text-2xl font-bold tracking-tight text-[#1D1D1F] leading-snug text-justify">
                    "{testimonials[activeTestimonial].highlight}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <button
              className="group relative inline-flex items-center gap-6 bg-orange-600 hover:bg-orange-500 text-white px-8 py-5 rounded-full transition-all duration-300 shadow-2xl shadow-orange-600/30 active:scale-95"
              onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
              type="button"
            >
              <span className="text-xl font-bold tracking-tight uppercase">ACESSAR GUIA ESTRATÉGICO AGORA</span>
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={28} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
