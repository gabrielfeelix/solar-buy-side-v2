import React from 'react';
import { TrendingUp, DollarSign, Users, CheckCircle, ChevronRight } from 'lucide-react';

export const MarketContextSection: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-bg-primary to-bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Contexto de Mercado */}
        <div className="glass-card-dark p-8 sm:p-12 border-2 border-danger-red/30 mb-16 relative overflow-hidden group hover:border-danger-red/60 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-danger-red/5 to-warning-orange/5 opacity-50 group-hover:opacity-70 transition-opacity"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-electric-cyan uppercase mb-6 text-center">
              📊 CONTEXTO DE MERCADO 2025
            </h3>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent mb-8"></div>

            <p className="text-lg text-text-light text-center mb-4">
              Com o aumento de preços dos equipamentos importados e o financiamento mais caro, a regra do jogo mudou.
            </p>

            <p className="text-xl text-text-light text-center mb-8">
              Mas enquanto seus concorrentes <span className="text-danger-red font-bold">RECLAMAM</span>,<br />
              você pode se <span className="text-accent-mint font-bold">DESTACAR</span>.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent my-8"></div>

            {/* Grid 3-column de micro-stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card-dark p-6 text-center border border-danger-red/30 hover:scale-105 transition-transform">
                <TrendingUp className="w-12 h-12 text-danger-red mx-auto mb-3" />
                <p className="text-4xl font-bold gradient-text-danger mb-2">+35%</p>
                <p className="text-sm text-text-dark-secondary">Custo equipamentos</p>
                <p className="text-xs text-text-muted">(2024-2025)</p>
              </div>

              <div className="glass-card-dark p-6 text-center border border-warning-orange/30 hover:scale-105 transition-transform">
                <DollarSign className="w-12 h-12 text-warning-orange mx-auto mb-3" />
                <p className="text-4xl font-bold text-warning-orange mb-2">+22%</p>
                <p className="text-sm text-text-dark-secondary">Taxa juros</p>
                <p className="text-xs text-text-muted">financiamento</p>
              </div>

              <div className="glass-card-dark p-6 text-center border border-electric-cyan/30 hover:scale-105 transition-transform">
                <Users className="w-12 h-12 text-electric-cyan mx-auto mb-3" />
                <p className="text-4xl font-bold gradient-text mb-2">+58%</p>
                <p className="text-sm text-text-dark-secondary">Integradores</p>
                <p className="text-xs text-text-muted">no mercado</p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent my-8"></div>

            <div className="bg-bg-primary/50 rounded-xl p-6 mb-6">
              <p className="text-xl text-text-light font-bold mb-4 text-center">TRADUÇÃO:</p>

              <div className="space-y-3 text-base text-text-dark-secondary">
                <p className="flex items-start gap-2">
                  <span className="text-electric-cyan">→</span>
                  <span>Mercado mais difícil = Comprador mais exigente</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-electric-cyan">→</span>
                  <span>Mais concorrência = Menos espaço para amadores</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-electric-cyan">→</span>
                  <span>Menos margem = Vender VALOR é a única saída</span>
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent my-8"></div>

            <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded-xl p-6">
              <p className="text-lg text-text-light leading-relaxed">
                💡 Este manual oferece a vantagem que você precisa para conquistar a preferência do cliente e fechar negócios, <span className="font-bold text-yellow-400">MESMO EM TEMPOS DIFÍCEIS</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Headline Transição */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
            Por Isso, Não Perca Tempo Nem Posição No Mercado.
          </h2>
          <p className="text-2xl text-text-light">
            Veja Tudo Que Você Recebe:
          </p>
        </div>

        {/* Bento Grid - 4 Benefícios */}
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          {/* Card 1 - Acesso Imediato (Large) */}
          <div className="md:col-span-7 glass-card-dark p-8 border border-accent-mint/30 hover:border-accent-mint hover:shadow-accent-mint transition-all duration-300 group">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-accent-mint/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🔓</span>
              </div>

              <h3 className="text-2xl font-bold text-text-light mb-4">
                ACESSO IMEDIATO
              </h3>
              <p className="text-xl gradient-text mb-6">Manual Solar Buy-Side</p>

              <ul className="space-y-3 text-left max-w-md mx-auto mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-mint flex-shrink-0" />
                  <span className="text-text-dark-secondary">Download instantâneo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-mint flex-shrink-0" />
                  <span className="text-text-dark-secondary">PDF otimizado para todos dispositivos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-mint flex-shrink-0" />
                  <span className="text-text-dark-secondary">Índice clicável</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-mint flex-shrink-0" />
                  <span className="text-text-dark-secondary">Busca interna</span>
                </li>
              </ul>

              <div className="inline-block px-6 py-3 rounded-full bg-accent-mint/20 border border-accent-mint text-accent-mint font-bold">
                Disponível 24/7
              </div>
            </div>
          </div>

          {/* Card 2 - Conteúdo */}
          <div className="md:col-span-5 glass-card-dark p-8 border border-electric-cyan/30 hover:scale-105 transition-all duration-300 text-center">
            <span className="text-6xl mb-4 block">📘</span>
            <h3 className="text-3xl font-bold gradient-text mb-2">130 PÁGINAS</h3>
            <p className="text-lg text-text-dark-secondary mb-4">TÉCNICAS</p>

            <div className="text-4xl font-bold text-text-light my-4">+</div>

            <h3 className="text-3xl font-bold gradient-text mb-2">160 TÓPICOS</h3>
            <p className="text-lg text-text-dark-secondary">INTERATIVOS</p>
          </div>

          {/* Card 3 - Metodologia */}
          <div className="md:col-span-5 glass-card-dark p-8 border border-electric-cyan/30 hover:scale-105 transition-all duration-300 text-center">
            <span className="text-6xl mb-4 block">🎯</span>
            <h3 className="text-2xl font-bold text-text-light mb-2">MÉTODO COMPLETO</h3>
            <p className="text-4xl font-bold gradient-text mb-4">4 FASES</p>
            <p className="text-base text-text-dark-secondary">
              Jornada de compra do início ao fim
            </p>
          </div>

          {/* Card 4 - Anexos (Wide) */}
          <div className="md:col-span-7 glass-card-dark p-8 border border-accent-mint/30 hover:border-accent-mint transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📎</span>
              <h3 className="text-2xl font-bold text-text-light">ANEXOS TÉCNICOS EXCLUSIVOS</h3>
            </div>

            <ul className="space-y-3 text-base text-text-dark-secondary">
              <li className="flex items-center gap-2">
                <span className="text-electric-cyan">•</span>
                <span>Checklist de avaliação de fornecedores</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-electric-cyan">•</span>
                <span>Template de comparação de propostas</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-electric-cyan">•</span>
                <span>Calculadora de ROI (Excel)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-electric-cyan">•</span>
                <span>Scripts de perguntas técnicas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Badge de Escassez */}
        <div className="glass-card-dark p-8 sm:p-10 border-2 border-danger-red/50 text-center mb-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-danger-red/10 to-warning-orange/10 animate-pulse"></div>

          <div className="relative z-10">
            <p className="text-2xl font-bold text-danger-red mb-4">
              ⚠️ ATENÇÃO: PRÉ-VENDA LIMITADA
            </p>

            <p className="text-lg text-text-light mb-6">
              Apenas 1.000 unidades nesta condição
            </p>

            {/* Progress bar visual */}
            <div className="max-w-md mx-auto mb-6">
              <div className="w-full h-4 bg-bg-primary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-accent-mint via-warning-orange to-danger-red rounded-full" style={{ width: '67%' }}></div>
              </div>
              <p className="text-sm text-text-dark-secondary mt-2">67% vendidos</p>
            </div>

            <p className="text-base text-text-dark-secondary">
              Após esgotar: preço aumenta ou acesso passa a ser disponibilizado para compradores também<br />
              <span className="text-warning-orange font-semibold">(perdendo sua vantagem)</span>
            </p>
          </div>
        </div>

        {/* Card de Preço */}
        <div className="max-w-2xl mx-auto glass-card-dark p-8 sm:p-12 border-2 border-electric-cyan/30 relative hover:border-electric-cyan/60 transition-all duration-300">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 glass-card-dark border border-danger-red/50 rounded-full font-bold text-danger-red shadow-lg">
            <span className="flex items-center gap-2">
              🔥 ÚLTIMA CHANCE
            </span>
          </div>

          <div className="pt-8">
            <div className="text-center mb-8">
              <p className="text-2xl text-text-dark-secondary mb-2">12 X</p>
              <p className="text-6xl font-bold gradient-text mb-4">R$ 47,25</p>
              <p className="text-xl text-text-dark-secondary mb-2">ou</p>
              <p className="text-5xl font-bold text-text-light">R$ 567,00</p>
              <p className="text-base text-text-muted mt-2">à vista</p>
            </div>

            <button className="btn-primary w-full text-lg py-6 mb-8 hover:scale-105 transition-transform">
              QUERO SAIR NA FRENTE E VENDER MAIS
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
