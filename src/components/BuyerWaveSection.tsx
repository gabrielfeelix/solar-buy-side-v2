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
    name: 'Ricardo',
    role: 'Empresário',
    location: 'São Paulo, SP',
    avatar: '/assets/Ricardo 1.png',
    objectPosition: '55% 20%',
    reviewTitle: 'Errar na escolha de um fornecedor pode gerar prejuízo enorme',
    quote:
      'No mundo dos negócios, errar na escolha de um fornecedor pode gerar um prejuízo enorme. O manual foi indispensável para evitar armadilhas, ensinando-me a identificar empresas despreparadas e equipamentos duvidosos. Aprendi a buscar parceiros que garantem suporte técnico e manutenção contínua. Graças ao Solar Buy-Side, fechei negócio com a melhor empresa: meu investimento de R$ 195 mil foi muito bem aplicado.',
    highlight:
      'Mais que um guia, o Manual é o seguro que todo empresário precisa para investir com risco controlado.',
  },
  {
    name: 'Rogério',
    role: 'Particular',
    location: 'Campinas, SP',
    avatar: '/assets/Rogerio.png',
    reviewTitle: 'O manual valeu cada página.',
    quote:
      'Eu nunca tinha tido contato com energia solar e temia tomar a decisão errada, mas o conteúdo claro e estruturado mudou tudo. As 4 fases da jornada de compra foram essenciais e o índice interativo, com mais de 160 tópicos, sanou todas as minhas dúvidas instantaneamente. No fim, escolhi a empresa certa e o sistema ideal pelo preço justo, conduzindo a negociação com total autoridade e segurança.',
    highlight:
      'Sem exagero: o Manual Solar Buy-Side valeu cada página.',
  },
  {
    name: 'Jorge Luiz',
    role: 'Empresário',
    location: 'Rio de Janeiro, RJ',
    avatar: '/assets/Jorge.png',
    objectPosition: '55% 20%',
    reviewTitle: 'O manual foi o divisor de águas',
    quote:
      'Viver no Rio é aquilo: você tem que estar sempre ligado pra não cair em furada. Quando precisei cortar os custos fixos da minha metalúrgica, confesso que travei, porque de energia solar eu não entendia nada. O manual foi o divisor de águas; me deu o mapa da mina pra estudar as propostas e descartar de cara quem estava só no gogó. Investi R$ 188 mil com total segurança e o alívio já chegou no bolso.',
    highlight:
      'O Manual valeu demais! Recomendo mesmo!',
  },
  {
    name: 'Lucineide',
    role: 'Particular',
    location: 'Recife, PE',
    avatar: '/assets/Lucineide 1.png',
    objectPosition: '55% 20%',
    reviewTitle: 'Esse Manual foi realmente um passo a passo arretado',
    quote:
      'Morando sozinha, a variedade de empresas e tecnologias me deixava insegura. O manual foi o guia fundamental: seguindo cada etapa, aprendi a avaliar propostas e descartar o que era bom demais para ser verdade. Com total convicção, instalei meu sistema de R$ 28 mil. O passo a passo foi "arretado"! No final, fui até elogiada pelos vendedores; eles nunca tinham encontrado uma mulher com tanto conhecimento técnico 😂.',
    highlight:
      'O Solar Buy-Side me deu a segurança para decidir sem arrependimentos.',
  },
  {
    name: 'Edivaldo',
    role: 'Produtor Rural',
    location: 'Sinop, MT',
    avatar: '/assets/Edivaldo.png',
    reviewTitle: 'O Manual me deu segurança para investir R$ 248 mil',
    quote:
      'Sou produtor rural em Sinop/MT e decidi instalar energia solar devido ao alto consumo na irrigação e maquinários. Com a expansão da lavoura, a conta de luz pesava muito. O Manual Solar Buy-Side foi essencial nesse processo: me ensinou a comparar propostas tecnicamente e evitar erros caros que eu nem conhecia. O conteúdo me deu a segurança necessária para realizar um investimento de R$ 248 mil.',
    highlight:
      'Realmente é uma ferramenta indispensável para quem busca eficiência no campo e proteção do capital.',
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

      <div className="py-16 px-6 bg-[#FBFBFD]">
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

          <div className="bg-white rounded-[3rem] overflow-hidden border border-[#E5E5E7] shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col md:flex-row md:min-h-[420px]">
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

            <div className="w-full md:w-[62%] p-4 flex flex-col justify-start">
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
