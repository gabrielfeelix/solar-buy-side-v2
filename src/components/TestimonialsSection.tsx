import React from 'react'
import { AlertTriangle, Quote } from 'lucide-react'

const rodrigoImage = '/assets/person4.jpg'

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-slate-50 hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={rodrigoImage}
                alt="Rodrigo M."
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-800/10 to-slate-900/80"></div>
              <div className="absolute inset-0 flex items-end">
                <div className="w-full h-2/3 bg-gradient-to-t from-[#F97316]/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-8 left-8">
                <Quote className="w-12 h-12 text-[#F97316] mb-4 fill-current" />
                <p className="text-white font-bold text-lg">Rodrigo M.</p>
                <p className="text-slate-400 text-sm">Integrador Solar, SP</p>
              </div>
            </div>
            <div className="absolute -right-8 top-12 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
              <p className="text-slate-500 text-xs font-bold uppercase mb-1">Crescimento</p>
              <p className="text-3xl font-bold text-[#F97316]">+5 Sistemas</p>
              <p className="text-slate-400 text-xs mt-1">Fechados em 30 dias</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-serif text-[#0F172A] leading-tight mb-8">
              "Eu não fechei apenas uma venda.<br />
              <span className="text-[#F97316] italic">Eu mudei meu modelo de negócio.</span>"
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                "Antes eu perdia tempo explicando datasheet e brigando por centavos. O Manual Buy-Side me ensinou a sentar na mesa do cliente como um consultor, não como um vendedor."
              </p>
              <p>
                "Quando mostrei o cálculo de inflação energética que aprendi no módulo 3, o cliente parou de cotar com os outros na hora. A percepção de valor foi imediata."
              </p>
            </div>

            <div className="mt-10 bg-slate-50 border-l-4 border-[#F97316] p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#F97316] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm uppercase mb-1">Reality Check</h4>
                  <p className="text-slate-600 text-sm italic">
                    "Você acha que os concorrentes que perderam essa venda sabiam que o Rodrigo estava usando técnicas de valuation financeiro? Eles nunca tiveram chance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
