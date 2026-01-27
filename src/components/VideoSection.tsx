import React from 'react';
import { Play, Shield, Brain, Route, AlertTriangle } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section id="video" className="section-container bg-gradient-to-b from-bg-primary to-bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Descubra O Que O Manual
            <span className="block gradient-text mt-2">Ensina Aos Compradores</span>
          </h2>
          <p className="text-lg text-warning-orange italic mt-4">
            (Sim, seus clientes terão acesso a isso.<br />
            A questão é: você vai saber MAIS que eles?)
          </p>
        </div>

        {/* Grid 2-Column */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Video Player - 40% */}
          <div className="md:col-span-2">
            <div className="glass-card p-4 border-2 border-electric-cyan/20 neon-glow-cyan group hover:scale-105 hover:border-electric-cyan/40 transition-all duration-300">
              <div className="relative aspect-video bg-bg-secondary rounded-xl overflow-hidden">
                {/* Thumbnail */}
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop"
                  alt="Francis Poloni"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 to-transparent"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-electric-cyan/20 border-2 border-electric-cyan flex items-center justify-center neon-glow-cyan hover:scale-110 hover:bg-electric-cyan/30 transition-all duration-300 group/play">
                    <Play className="w-8 h-8 text-electric-cyan fill-electric-cyan ml-1 group-hover/play:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-bg-primary/80 backdrop-blur-sm border border-electric-cyan/20 group-hover:border-electric-cyan/40 transition-colors">
                  <span className="text-sm font-medium text-text-primary">3:17</span>
                </div>
              </div>

              {/* Caption */}
              <p className="mt-4 text-sm text-text-secondary text-center group-hover:text-text-primary transition-colors">
                🎬 Por que vendedores estão ficando obsoletos
                <span className="block text-text-muted group-hover:text-text-secondary transition-colors">(e como você pode reverter isso)</span>
              </p>
            </div>
          </div>

          {/* Lista Preview - 60% */}
          <div className="md:col-span-3">
            <div className="glass-card p-8 sm:p-12 h-full">
              <h3 className="text-xl font-bold text-text-primary mb-8">
                O que você verá no vídeo:
              </h3>

              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="w-12 h-12 text-electric-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-3">
                      Os 3 grandes RISCOS ao comprar um sistema Solar
                    </h4>
                    <ul className="space-y-2 text-text-secondary ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-electric-cyan">→</span>
                        <span>Risco técnico: equipamento subdimensionado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-electric-cyan">→</span>
                        <span>Risco financeiro: payback mal calculado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-electric-cyan">→</span>
                        <span>Risco operacional: empresa sem suporte</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Item 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Brain className="w-12 h-12 text-electric-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-3">
                      A importância de se tornar um comprador informado
                    </h4>
                    <ul className="space-y-2 text-text-secondary ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-electric-cyan">→</span>
                        <span>Como identificar promessas exageradas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-electric-cyan">→</span>
                        <span>Critérios de avaliação profissional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-electric-cyan">→</span>
                        <span>Red flags em propostas comerciais</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Item 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Route className="w-12 h-12 text-electric-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-3">
                      A força de uma jornada de compra bem planejada
                    </h4>
                    <ul className="space-y-2 text-text-secondary ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-electric-cyan">→</span>
                        <span>As 4 fases da decisão de compra</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-electric-cyan">→</span>
                        <span>Pontos de contato críticos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-electric-cyan">→</span>
                        <span>Quando o vendedor perde a venda</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Callout Box */}
        <div className="mt-16 glass-card rounded-2xl p-8 sm:p-12 text-center border-2 border-warning-orange/30 hover:border-warning-orange/60 transition-all duration-300 group relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-warning-orange/5 to-danger-red/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-warning-orange/20 border border-warning-orange/50 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-warning-orange" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">ATENÇÃO:</h3>
            </div>
            <p className="text-xl text-text-primary font-semibold mb-2">
              Veja por que muitos vendedores ficarão FORA DO JOGO.
            </p>
            <p className="text-lg text-text-secondary">
              Não permita que isso aconteça com você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
