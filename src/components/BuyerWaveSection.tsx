import React, { useState } from 'react'
import {
  ArrowRight,
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
  Target,
} from 'lucide-react'

const testimonials = [
  {
    name: 'Rogério',
    role: 'Comprador',
    location: 'Campinas, SP',
    avatar: '/assets/person1.jpg',
    reviewTitle: 'O manual valeu cada página.',
    quote:
      'Nunca tinha tido contato com energia solar e tinha receio de tomar decisão errada. Mas, ao começar a ler o manual, tudo mudou. O conteúdo é claro, estruturado e me conquistou logo no início. As 4 fases da jornada de compra foram essenciais. Sempre que surgia uma dúvida, o índice interativo com mais de 160 tópicos me levava direto à resposta.',
    highlight:
      'No fim, escolhi a empresa certa, o sistema ideal ao preço certo e conduzi tudo com segurança. Sem exagero: o manual valeu cada página.',
  },
  {
    name: 'Juliana Rocha',
    role: 'Arquiteta',
    location: 'Florianópolis, SC',
    avatar: '/assets/person2.jpg',
    reviewTitle: 'Autoridade total no projeto.',
    quote:
      "Como arquiteta, precisava de algo que traduzisse o 'tecniquês' para uma linguagem que eu pudesse explicar aos meus clientes. O manual faz exatamente isso. Ele organiza o caos de informações que recebemos dos fornecedores e nos dá critérios reais de avaliação técnica e comercial.",
    highlight:
      'Hoje não assino um projeto sem conferir os checklists de validação do manual. É o padrão ouro do setor solar.',
  },
]

export const BuyerWaveSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const next = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-[#F5F5F7] text-[#1D1D1F] font-sans antialiased">
      <div className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold mb-3 block uppercase text-xs tracking-[0.2em]">
            Guia do Comprador
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">O que está em jogo?</h2>
          <p className="text-xl text-[#86868B] max-w-2xl mx-auto leading-relaxed">
            Seus compradores estão evoluindo.
            <br className="hidden md:block" />
            Veja o que eles estarão aprendendo em breve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#E5E5E7] p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <Award className="text-blue-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-8 tracking-tight text-[#1D1D1F]">
              O que o comprador <br />
              vai dominar?
            </h3>
            <ul className="space-y-6 flex-grow">
              {[
                'Conceitos essenciais para uma compra técnica e segura',
                'Reconhecimento de marcas e distribuidores de alta confiança',
                'Critérios para selecionar empresas sérias e competentes',
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
              Principais focos <br />
              e Habilidades
            </h3>
            <ul className="space-y-6 flex-grow">
              {[
                'Analisar propostas com critérios técnicos e financeiros',
                'Avaliar reputação e suporte de pós-venda com precisão',
                'Tomar decisão com segurança e embasamento técnico',
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
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">A voz de quem aprendeu.</h2>
              <p className="text-lg text-[#86868B]">Relatos reais de compradores preparados.</p>
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

          <div className="bg-white rounded-[3rem] overflow-hidden border border-[#E5E5E7] shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col md:flex-row min-h-[580px]">
            <div className="w-full md:w-[38%] relative">
              <img
                src={testimonials[activeTestimonial].avatar}
                className="absolute inset-0 w-full h-full object-cover"
                alt={testimonials[activeTestimonial].name}
              />
              <div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/20 border border-white/30 p-6 rounded-2xl text-white shadow-2xl">
                <p className="text-2xl font-bold tracking-tight">{testimonials[activeTestimonial].name}</p>
                <div className="flex items-center gap-2 mt-1.5 opacity-90 text-[10px] font-bold uppercase tracking-[0.15em]">
                  <span>{testimonials[activeTestimonial].role}</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  <span>{testimonials[activeTestimonial].location}</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[62%] p-10 md:p-16 flex flex-col justify-center">
              <div className="space-y-8">
                <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#1D1D1F]">
                  {testimonials[activeTestimonial].reviewTitle}
                </h4>

                <p className="text-lg md:text-xl text-[#424245] leading-relaxed font-light">
                  {testimonials[activeTestimonial].quote}
                </p>

                <div className="pt-6 border-t border-[#F5F5F7]">
                  <p className="text-xl md:text-2xl font-bold tracking-tight text-[#1D1D1F] leading-snug">
                    "{testimonials[activeTestimonial].highlight}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <button
              className="group relative inline-flex items-center gap-8 bg-orange-600 hover:bg-orange-500 text-white pl-12 pr-4 py-5 rounded-full transition-all duration-300 shadow-2xl shadow-orange-600/30 active:scale-95"
              type="button"
            >
              <div className="text-left">
                <span className="block text-[10px] font-black opacity-80 uppercase tracking-[0.25em] mb-0.5">
                  Começar agora
                </span>
                <span className="block text-xl font-bold tracking-tight">Acessar Guia Estratégico</span>
              </div>
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
