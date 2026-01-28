import React, { useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  HelpCircle,
  MessageCircle,
} from 'lucide-react'

const faqData = [
  {
    question: 'Como acessar meu produto?',
    answer:
      'Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso à nossa plataforma exclusiva. Lá, todos os materiais e bônus estarão disponíveis para download e visualização.',
  },
  {
    question: 'Como funciona o prazo de garantia e a solicitação de devolução?',
    answer:
      'Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você entender que o Manual Buy-Side não é para você, basta solicitar dentro deste prazo.',
  },
  {
    question: 'Política de devolução: como proceder para o reembolso?',
    answer:
      'O processo é simples e sem burocracia. Você pode solicitar o reembolso diretamente pela plataforma de pagamento ou enviando um e-mail para nossa equipe de suporte. O estorno é processado automaticamente conforme o seu método de pagamento original.',
  },
]

export const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="font-sans bg-[#fbfbfd] text-[#1d1d1f]">
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-black tracking-tighter leading-none">
                Ficou com <span className="text-orange-600">dúvidas?</span>
              </h2>
              <p className="text-xl text-[#6e6e73] font-medium">
                Nossa equipe de especialistas está pronta para ajudar você a entender como o Manual Buy-Side pode transformar sua operação comercial.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1d1d1f] text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg active:scale-95 group" type="button">
                <MessageCircle size={20} />
                <span>Fale com a equipe Buy-Side</span>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4 text-[#86868b]">
                <Clock size={20} className="text-orange-600" />
                <span className="text-sm font-medium italic">
                  Tempo médio de resposta: 15 minutos (em horário comercial).
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="text-orange-600" size={24} />
              <h3 className="text-2xl font-black tracking-tight">Perguntas Frequentes</h3>
            </div>

            {faqData.map((item, index) => (
              <div
                key={item.question}
                className={`group border rounded-2xl transition-all duration-300 ${
                  openFaq === index ? 'bg-white border-orange-200 shadow-sm' : 'bg-transparent border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  type="button"
                >
                  <span
                    className={`text-lg font-bold transition-colors ${
                      openFaq === index ? 'text-orange-600' : 'text-[#1d1d1f]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180 text-orange-600' : ''
                    }`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="p-6 pt-0 text-[#6e6e73] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
