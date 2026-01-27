import React from 'react';
import { CheckCircle } from 'lucide-react';

export const AuthoritySection: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-bg-secondary to-bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        {/* Badge + Headline */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-accent-orange to-danger-red text-white font-bold mb-6">
            🎯 AUTORIDADE DUAL
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-light max-w-4xl mx-auto leading-tight">
            Este Conteúdo Só É Possível Porque Foi Criado Por Quem Viveu
            <span className="block mt-4">
              <span className="gradient-text font-bold">OS DOIS LADOS DA MESA</span>
            </span>
          </h2>
        </div>

        {/* Grid 2-Column */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Coluna 1 - Foto Profissional */}
          <div className="md:col-span-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-mint to-accent-mint rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-accent-mint neon-glow-cyan">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop"
                  alt="Francis Poloni"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full glass-card-dark border border-accent-mint/50 text-accent-mint text-xs font-bold">
                  Buy-Side Expert
                </div>
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full glass-card-dark border border-accent-orange/50 text-accent-orange text-xs font-bold">
                  Sell-Side Expert
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Bio + Credenciais */}
          <div className="md:col-span-3 glass-card-dark p-8 sm:p-12">
            <h3 className="text-3xl font-bold text-text-light mb-2">Francis Poloni</h3>
            <p className="text-xl gradient-text mb-8">Consultor Buy-Side e Sell-Side</p>

            <div className="w-full h-px bg-gradient-to-r from-accent-mint/40 to-transparent mb-8"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent-mint/20 flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="text-2xl font-bold text-text-light">A PERSPECTIVA COMPLETA</h4>
            </div>

            <p className="text-base text-text-dark-secondary mb-8 leading-relaxed">
              Atua desde 2018 no setor de integração fotovoltaica e consultoria em investimento, onde assessorou tanto no:
            </p>

            {/* Buy-Side Box */}
            <div className="bg-accent-mint/5 border-l-4 border-accent-mint rounded-xl p-6 mb-6 hover:bg-accent-mint/10 transition-colors">
              <h5 className="text-lg font-bold text-accent-mint mb-4">
                🔵 LADO DO COMPRADOR (Buy-Side)
              </h5>
              <ul className="space-y-2 text-sm text-text-dark-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-mint flex-shrink-0" />
                  <span>Análise de propostas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-mint flex-shrink-0" />
                  <span>Due diligence de fornecedores</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-mint flex-shrink-0" />
                  <span>Negociação de contratos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-mint flex-shrink-0" />
                  <span>Gestão de investimento</span>
                </li>
              </ul>
            </div>

            {/* Sell-Side Box */}
            <div className="bg-accent-orange/5 border-l-4 border-accent-orange rounded-xl p-6 mb-8 hover:bg-accent-orange/10 transition-colors">
              <h5 className="text-lg font-bold text-accent-orange mb-4">
                🟠 LADO DO VENDEDOR (Sell-Side)
              </h5>
              <ul className="space-y-2 text-sm text-text-dark-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-orange flex-shrink-0" />
                  <span>Estruturação de propostas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-orange flex-shrink-0" />
                  <span>Apresentação técnico-comercial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-orange flex-shrink-0" />
                  <span>Negociação e fechamento</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-orange flex-shrink-0" />
                  <span>Pós-venda e retenção</span>
                </li>
              </ul>
            </div>

            {/* Box Destaque */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <p className="text-sm text-text-muted mb-3">💡 POR QUE ISSO IMPORTA?</p>

              <p className="text-base text-text-light mb-4 font-semibold">Francis conhece:</p>

              <ul className="space-y-3 text-base text-text-dark-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-mint">✓</span>
                  <span><span className="text-text-light font-semibold">TODAS</span> as objeções que compradores têm (porque ele JÁ FOI comprador)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-mint">✓</span>
                  <span><span className="text-text-light font-semibold">TODOS</span> os erros que vendedores cometem (porque ele os viu perder negócios quando estava do outro lado)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-mint">✓</span>
                  <span><span className="text-text-light font-semibold">TODOS</span> os critérios de decisão (porque ele usou esses critérios para avaliar fornecedores)</span>
                </li>
              </ul>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent my-6"></div>

              <p className="text-lg text-text-light italic">
                Este manual não é teoria.<br />
                É inteligência de campo dos <span className="font-bold gradient-text">dois lados da transação</span>.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary text-lg px-10 py-5">
            DESBLOQUEIE O GUIA E TRANSFORME SEUS RESULTADOS
            <span className="ml-2">🔓</span>
          </button>
        </div>
      </div>
    </section>
  );
};
