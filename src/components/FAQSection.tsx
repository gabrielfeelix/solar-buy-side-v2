import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como acessar meu produto?",
      answer: `Após a confirmação do pagamento, você receberá um e-mail com o link de acesso ao Manual Solar Buy-Side em formato PDF.

O acesso é imediato para pagamentos via Pix e cartão de crédito. Para boleto, após a compensação (1-2 dias úteis).

Você poderá baixar o arquivo e acessá-lo em qualquer dispositivo (computador, tablet, celular).

💡 Dica: Salve o PDF em seu Google Drive ou Dropbox para acesso de qualquer lugar.`
    },
    {
      question: 'Como funciona o "Prazo de Garantia" e a solicitação de devolução do pagamento?',
      answer: `Você tem 7 dias corridos a partir da data de compra para avaliar o Manual Solar Buy-Side.

Se, por qualquer motivo, você não estiver satisfeito com o conteúdo, basta enviar um e-mail para contato@buyside.com.br solicitando o reembolso.

Devolveremos 100% do valor pago, sem perguntas e sem burocracia.

⚠️ Importante: O prazo de 7 dias conta a partir da confirmação de pagamento, não da data de acesso ao material.`
    },
    {
      question: "Política de Devolução: Como proceder para o reembolso?",
      answer: `Para solicitar o reembolso:

1. Envie e-mail para: contato@buyside.com.br
2. Assunto: "Solicitação de Reembolso"
3. Informe: Nome completo e CPF usado na compra

Processaremos seu reembolso em até 5 dias úteis.

Para pagamentos via cartão de crédito, o estorno aparecerá na sua próxima fatura.

Para Pix e boleto, o valor será devolvido via transferência bancária (informe seus dados na solicitação).

🛡️ Seu direito de arrependimento está garantido conforme Código de Defesa do Consumidor.`
    }
  ];

  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4">
        {/* Headline + CTA Topo */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
            Ficou com dúvidas?
          </h2>
          <p className="text-lg text-text-dark-secondary mb-8">
            Fale com a equipe Buy-Side.
          </p>
          <a
            href="https://wa.me/5544999999999"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all"
          >
            📱 ENTRAR EM CONTATO
          </a>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card-dark border border-accent-mint/15 hover:border-accent-mint/30 transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-accent-mint/5 transition-colors"
              >
                <span className="text-lg font-semibold text-text-light pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-accent-mint flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0">
                  <div className="text-base text-text-dark-secondary leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
