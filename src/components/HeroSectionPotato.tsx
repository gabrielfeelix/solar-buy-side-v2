import React from 'react';
import { ChevronDown } from 'lucide-react';

export const HeroSectionPotato: React.FC = () => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById('video');
    videoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-bg-primary overflow-hidden">
      {/* Subtle grid pattern - very faint like Potato */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `
          linear-gradient(rgba(125, 229, 212, 0.4) 1px, transparent 1px),
          linear-gradient(90deg, rgba(125, 229, 212, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            {/* Small badge like Potato */}
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-accent-mint">
                A Primeira Plataforma de Marketing com IA
              </span>
            </div>

            {/* Headline - Large, clean typography */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-text-light">O Manual Que</span>
              <br />
              <span className="text-accent-mint">Transforma</span>
              <br />
              <span className="text-text-light">Vendedores</span>
            </h1>

            {/* Subheadline - clean, readable */}
            <p className="text-lg md:text-xl text-text-dark-secondary max-w-xl mb-10 leading-relaxed">
              Com o marketing certo, aumente sua renda de negócios rapidamente e a longo prazo, garantimos nosso serviço.
            </p>

            {/* CTA Buttons - Potato style */}
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary px-8 py-4 text-base font-semibold">
                Começar Gratuitamente
              </button>
              <button className="px-8 py-4 text-base font-semibold text-text-light border border-white/20 rounded-lg hover:bg-white/5 transition-colors">
                Agendar Demo
              </button>
            </div>

            {/* Trust badge - subtle */}
            <div className="mt-12 flex items-center gap-3">
              <div className="flex items-center -space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent-mint/20 border-2 border-bg-primary"></div>
                <div className="w-8 h-8 rounded-full bg-accent-blue/20 border-2 border-bg-primary"></div>
                <div className="w-8 h-8 rounded-full bg-accent-orange/20 border-2 border-bg-primary"></div>
              </div>
              <p className="text-sm text-text-dark-secondary">
                Confiado por <span className="text-text-light font-semibold">Combinator Company</span>
              </p>
            </div>
          </div>

          {/* Right Column - Stats Card like Potato */}
          <div className="relative">
            <div className="glass-card-dark p-8 rounded-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-text-light font-semibold">Atividade de Transações</h3>
                <div className="flex items-center gap-2">
                  <button className="text-xs text-text-dark-secondary hover:text-text-light transition-colors">
                    1S
                  </button>
                  <button className="text-xs text-accent-mint font-medium px-2 py-1 bg-accent-mint/10 rounded">
                    1A
                  </button>
                  <button className="text-xs text-text-dark-secondary hover:text-text-light transition-colors">
                    TUDO
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="mb-6">
                <p className="text-4xl font-bold text-text-light mb-2">R$ 90.865,00</p>
                <p className="text-sm text-text-dark-secondary">
                  vs. mês anterior: <span className="text-accent-mint">+12%</span>
                </p>
              </div>

              {/* Chart mockup */}
              <div className="h-40 relative">
                <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#7DE5D4" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#7DE5D4" stopOpacity="0"/>
                    </linearGradient>
                  </defs>

                  {/* Area */}
                  <path
                    d="M 0 80 L 30 70 L 60 75 L 90 60 L 120 65 L 150 50 L 180 55 L 210 45 L 240 50 L 270 40 L 300 45 L 300 100 L 0 100 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Line */}
                  <path
                    d="M 0 80 L 30 70 L 60 75 L 90 60 L 120 65 L 150 50 L 180 55 L 210 45 L 240 50 L 270 40 L 300 45"
                    stroke="#7DE5D4"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Dot highlight */}
                  <circle cx="150" cy="50" r="4" fill="#7DE5D4"/>
                </svg>

                {/* Date labels */}
                <div className="flex justify-between mt-2 text-xs text-text-dark-secondary">
                  <span>Jan 10</span>
                  <span>Fev 10</span>
                </div>
              </div>

              {/* Bottom badge */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-mint/10 flex items-center justify-center">
                    <span className="text-accent-mint text-sm">📦</span>
                  </div>
                  <div>
                    <p className="text-text-light font-medium text-sm">Pedido Recebido</p>
                    <p className="text-text-dark-secondary text-xs">há 2 horas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute -bottom-6 -left-6 glass-card-dark p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center">
                  <span className="text-accent-orange text-xs">🎯</span>
                </div>
                <div>
                  <p className="text-text-light font-medium text-sm">+30% conversão</p>
                  <p className="text-text-dark-secondary text-xs">vs. mês anterior</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - subtle */}
        <div className="flex flex-col items-center gap-2 mt-20 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onClick={scrollToVideo}>
          <p className="text-sm text-text-dark-secondary">
            Role para descobrir
          </p>
          <ChevronDown size={20} className="text-text-dark-secondary animate-bounce" />
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-bg-light"></div>
    </section>
  );
};
