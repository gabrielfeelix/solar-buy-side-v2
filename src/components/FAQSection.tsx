import React from 'react'
import { ButtonSuccess } from './ManualAtoms'

const faqs = [
  {
    question: 'Como acessar meu produto?',
    answer: 'Após a confirmação do pagamento, você recebe o acesso imediato por e-mail com login e senha.'
  },
  {
    question: 'Como funciona o prazo de garantia e a solicitação de devolução?',
    answer: 'Você tem 7 dias de garantia. Basta solicitar pelo suporte e fazemos o reembolso integral.'
  },
  {
    question: 'Política de devolução: como proceder para o reembolso?',
    answer: 'Entre em contato com nossa equipe informando o e-mail de compra. O reembolso é processado sem burocracia.'
  },
]

export const FAQSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#020617] text-white border-t border-slate-800">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Ficou com dúvidas?</h2>
        <p className="text-slate-300 mb-6">Fale com a equipe Buy-Side.</p>
        <ButtonSuccess className="px-8">Entrar em contato</ButtonSuccess>
      </div>

      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">FAQ</h3>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="border border-slate-700 rounded-lg bg-slate-900/50">
              <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-white">
                {faq.question}
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
