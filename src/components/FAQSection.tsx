import React, { useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  HelpCircle,
} from 'lucide-react'

const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 2a9.96 9.96 0 0 0-8.53 15.16L2 22l4.97-1.41A9.96 9.96 0 1 0 12 2Zm0 18.2c-1.55 0-3.07-.41-4.41-1.18l-.32-.19-2.95.84.83-2.88-.21-.33A8.17 8.17 0 1 1 12 20.2Zm4.78-6.08c-.26-.13-1.53-.75-1.77-.84-.24-.09-.42-.13-.6.13-.18.26-.69.84-.85 1.02-.16.18-.31.2-.57.07-.26-.13-1.1-.4-2.1-1.28-.78-.7-1.31-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.47.13-.16.18-.26.26-.44.09-.18.04-.33-.02-.47-.07-.13-.6-1.44-.82-1.97-.22-.54-.45-.46-.6-.47h-.51c-.18 0-.47.07-.71.33-.24.26-.94.92-.94 2.25s.96 2.61 1.1 2.79c.13.18 1.88 2.88 4.55 4.03.64.27 1.13.43 1.52.55.64.2 1.23.17 1.69.1.52-.08 1.53-.63 1.75-1.23.22-.6.22-1.12.16-1.23-.07-.11-.24-.18-.5-.31Z" />
  </svg>
)

const faqData = [
  {
    question: 'Como acessar meu produto?',
    answer:
      'Você receberá o acesso ao Manual Solar Buy-Side por e-mail, por meio da plataforma online GREENN. Esta plataforma atua como intermediadora digital entre clientes e produtores, disponibilizando conteúdos, soluções e ferramentas tecnológicas.\n\nVocê receberá o Manual Solar Buy-Side e o bônus grátis Guia do Vendedor por e-mail em PDF, e ele virá personalizado com seu nome e CPF ou CNPJ.\n\nVocê poderá acessar o manual por meio de computador, celular, tablet ou outro dispositivo digital. No entanto, devido à formatação do manual, recomendamos enfaticamente o uso de um computador ou tablet para uma experiência de leitura e aproveitamento mais otimizada do material.',
  },
  {
    question: 'Como funciona o prazo de garantia e a solicitação de devolução?',
    answer:
      'O reembolso de uma compra de um produto digital é um direito garantido pelo Código de Defesa do Consumidor (Lei nº 8.078, Artigo 49) e pode ser solicitado em até 7 dias a partir da data de assinatura ou do recebimento do produto.',
  },
  {
    question: 'Política de devolução: como proceder para o reembolso?',
    answer:
      'Para formalizar o pedido de reembolso do valor despendido, o Comprador deverá remeter sua solicitação ao endereço eletrônico contato@buyside.com.br. A comunicação deverá conter, obrigatoriamente, o número de referência da transação e a exposição detalhada da(s) razão(ões) que fundamenta(m) o pleito de cancelamento.\n\nAs condições para efetivação do reembolso pautam-se nas Regras Gerais estabelecidas pela plataforma GREENN. Para informações adicionais e consulta integral às diretrizes aplicáveis, o Comprador poderá acessar o seguinte link: `https://greenn.com.br/termos-de-compra-greenn/`.\n\nSolicitação de Cancelamento e Reembolsos na GREENN\nPrazo: O Comprador pode solicitar o reembolso dos valores pagos, os prazos mínimos estabelecidos pela legislação para garantia são entre 07 a 30 dias, mas dependem exclusivamente do prazo estabelecido pelo Produtor, que é o responsável direto por esta informação e pelas solicitações e as autorizações dos reembolsos. O prazo terá início a partir da efetivação da compra, pedidos de reembolso fora do prazo deverão ser feitos diretamente ao Produtor, e se por ele autorizados, salvo quando o reembolso deva ser processado para garantir os interesses do GREENN e para o cumprimento da lei.\n\nO GREENN pode recusar o reembolso integral dos valores pagos, ainda que dentro do prazo de garantia, na hipótese do Comprador ter usufruído de todo o Produto adquirido, como por exemplo, assistido a todas as aulas de um curso, participado de um evento, ou ter feito o download de todos os arquivos disponíveis, deixando o GREENN e o Produtor em clara desvantagem.\n\nForma de processamento: O reembolso será processado através do mesmo meio de pagamento escolhido pelo Comprador no momento da compra, por questões legais e processuais. O reembolso é realizado por meio de transferência bancária deve ocorrer em até 30 (trinta) dias, contados da data de solicitação. Nos casos de reembolso por meio de cartão de crédito, o GREENN fará a solicitação de estorno, mas a conclusão deste processo dependerá exclusivamente das operadoras de cartão, sem qualquer gerência do GREENN e poderá levar um prazo de 30 a 60 dias, após o pedido de estorno.\n\nSe o reembolso não ocorrer dentro dos prazos acima, o Comprador deverá entrar em contato com o GREENN. Se o reembolso for por intermédio de cartão de crédito, findado o prazo de 90 (noventa) dias, o Comprador se compromete a enviar as cópias de suas faturas para que o Greenn possa endereçar este assunto perante a operadora e finalizar o processo de investigação e conclusão do processo de estorno do pagamento. O comprador concorda que o não envio das faturas impede o Greenn de dar seguimento ao processo de investigação e conclusão do processo de estorno do pagamento.\n\nCanal de Reclamações: O Comprador pode solicitar cancelamento de sua compra de maneira independente, através do link `www.reclamacao.greenn.com.br`, bastando informar corretamente os dados solicitados e seguindo os procedimentos e orientações anteriormente colocados quanto a legalidade e prazos.',
  },
]

export const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id="faq" className="font-sans bg-[#fbfbfd] text-[#1d1d1f]">
      <div className="max-w-7xl mx-auto py-24 px-6">
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
              <button
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20 active:scale-95 group"
                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                type="button"
              >
                <WhatsAppIcon size={20} />
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
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[520px]' : 'max-h-0'}`}>
                  <p className="p-6 pt-0 text-[#6e6e73] leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
