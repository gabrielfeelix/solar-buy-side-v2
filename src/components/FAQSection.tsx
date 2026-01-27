import React from 'react'

const faqs = [
  {
    title: 'O material serve para iniciantes?',
    body: 'Absolutamente. Se você está começando, este manual vai te poupar pelo menos 2 anos de erros básicos.',
  },
  {
    title: 'Já sou experiente. Vou aprender algo?',
    body: 'Sim. A maioria dos integradores experientes ainda perde vendas por não saber articular o valor financeiro (LCOE, TIR Real).',
  },
  {
    title: 'Como funciona o acesso?',
    body: 'O acesso é vitalício. Você recebe login e senha para nossa área de membros, onde pode baixar o PDF atualizado.',
  },
  {
    title: 'Tem garantia?',
    body: 'Sim, garantia incondicional de 7 dias. Devolvemos 100% do seu dinheiro sem perguntas.',
  },
]

export const FAQSection: React.FC = () => {
  return (
    <section className="section-diagonal section-diagonal-light bg-white py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-4xl">
          Dúvidas Frequentes
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-orange-200 text-orange-500">
                  ?
                </span>
                {faq.title}
              </div>
              <p className="mt-3 text-sm text-slate-500">{faq.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
