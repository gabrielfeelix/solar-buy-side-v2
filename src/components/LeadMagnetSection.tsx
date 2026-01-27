import React from 'react';
import { CheckCircle } from 'lucide-react';

export const LeadMagnetSection: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ainda Tem Dúvidas Sobre O Impacto Do Manual Buy-Side?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temos uma prévia <span className="font-bold text-accent-mint">GRATUITA</span> para você.<br />
            Garanta agora seu e-book grátis e entenda por que a Imersão Solar Buy-Side faz vendedores venderem mais e melhor.
          </p>
        </div>

        {/* Grid 2-Column */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna 1 - Lista Conteúdo */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-accent-mint shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              O QUE VOCÊ RECEBE GRÁTIS:
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent-mint" />
                  Os 3 RISCOS na compra de sistemas solares
                </h4>
                <ul className="ml-8 space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-accent-mint">→</span>
                    <span>Risco técnico detalhado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-mint">→</span>
                    <span>Risco financeiro explicado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-mint">→</span>
                    <span>Risco operacional mapeado</span>
                  </li>
                </ul>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent-mint" />
                  As 4 FASES que seu cliente seguirá
                </h4>
                <ul className="ml-8 space-y-2 text-gray-600">
                  <li>→ Conscientização</li>
                  <li>→ Consideração</li>
                  <li>→ Decisão</li>
                  <li>→ Pós-compra</li>
                </ul>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent-mint" />
                  O ÍNDICE DETALHADO do manual completo
                </h4>
                <p className="ml-8 text-gray-600">
                  Veja todos os 160 tópicos e entenda a profundidade do conteúdo
                </p>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <p className="text-sm text-gray-600 mb-2">💡 IMPORTANTE:</p>
              <p className="text-base text-gray-900">
                Este e-book grátis te mostra <span className="font-bold">EXATAMENTE</span> o que seus clientes estão aprendendo sobre como avaliar fornecedores.
              </p>
            </div>

            <a
              href="https://wa.me/5544999999999"
              className="mt-8 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg px-8 py-5 rounded-xl hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              📱 BAIXAR EBOOK GRÁTIS AGORA
            </a>

            <p className="text-sm text-gray-500 mt-4 text-center">
              🔒 Sem spam. Receba o PDF direto no WhatsApp em 30 segundos
            </p>
          </div>

          {/* Coluna 2 - Mockup E-book */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-mint to-accent-mint rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              <div className="bg-gradient-to-br from-accent-mint/20 to-accent-mint/20 p-12 h-full flex flex-col justify-center items-center">
                <div className="w-full h-full bg-white rounded-2xl p-8 flex flex-col">
                  <div className="mb-4">
                    <div className="h-4 bg-gradient-to-r from-accent-mint to-accent-mint rounded w-3/4 mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-6xl mb-4">📘</p>
                      <div className="inline-block px-6 py-3 bg-accent-mint text-white rounded-full font-bold">
                        E-BOOK GRÁTIS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
