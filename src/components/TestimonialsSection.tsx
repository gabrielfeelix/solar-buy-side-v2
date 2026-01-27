import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Subtle grid pattern - very faint like Potato */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `
          linear-gradient(rgba(125, 229, 212, 0.4) 1px, transparent 1px),
          linear-gradient(90deg, rgba(125, 229, 212, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            Compradores Reais Que Já Usaram
            <span className="block mt-2 text-accent-mint">Este Manual Para Escolher Melhor</span>
          </h2>
          <p className="text-lg text-text-dark-secondary italic mt-6 max-w-3xl mx-auto">
            Quantos dos seus clientes em potencial já leram isso?<br />
            Quantos dos seus concorrentes perderam vendas porque não conseguiram responder no nível desses compradores?
          </p>
        </div>

        {/* Bento Grid - Testimonials */}
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          {/* Card 1 - ROGÉRIO (DESTAQUE - Large) */}
          <div className="md:col-span-7 md:row-span-2 glass-card-dark p-8 sm:p-12 rounded-2xl border border-accent-mint/20 hover:border-accent-mint/40 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-mint/0 to-accent-mint/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <blockquote className="text-2xl text-accent-mint italic mb-6 font-semibold">
                "O manual valeu cada página."
              </blockquote>

              <div className="w-full h-px bg-gradient-to-r from-accent-mint/40 via-accent-mint/20 to-transparent my-6"></div>

              <p className="text-base text-text-dark-secondary mb-4 leading-relaxed">
                Nunca tinha tido contato com energia solar e tinha receio de tomar decisão errada. Mas, ao começar a ler o manual, tudo mudou.
              </p>

              <p className="text-base text-text-light mb-4 leading-relaxed">
                O <span className="font-bold text-accent-mint">CONTEÚDO É CLARO, ESTRUTURADO</span> e me conquistou logo no início.
              </p>

              <p className="text-base text-text-dark-secondary mb-4 leading-relaxed">
                As 4 fases da jornada de compra foram essenciais. Sempre que surgia uma dúvida, o índice interativo com mais de 160 tópicos me levava direto à resposta.
              </p>

              <p className="text-base text-text-dark-secondary mb-4 leading-relaxed">
                No fim, escolhi a empresa certa, o sistema ideal ao preço certo e concluí tudo com segurança.
              </p>

              <p className="text-base text-text-light font-semibold leading-relaxed">
                <span className="text-accent-orange font-bold">SEM EXAGERO:</span> o manual valeu cada página.
              </p>

              <div className="w-full h-px bg-gradient-to-r from-accent-mint/40 via-accent-mint/20 to-transparent my-6"></div>

              <div>
                <p className="text-lg font-bold text-text-light">— Rogério</p>
                <p className="text-sm text-text-dark-secondary">Campinas - SP | Comprador Residencial</p>
              </div>

              <div className="absolute top-6 right-6 px-4 py-2 rounded-full glass-card-dark rounded-2xl border border-accent-mint/50 text-accent-mint text-xs font-bold">
                ⭐ Comprador Verificado
              </div>
            </div>
          </div>

          {/* Card 2 - CARLOS */}
          <div className="md:col-span-5 glass-card-dark rounded-2xl p-6 sm:p-8 border border-accent-mint/20 hover:border-accent-mint/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-mint/5 to-accent-mint/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-accent-mint/20 border border-accent-mint/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👁️</span>
              </div>

              <blockquote className="text-xl font-bold text-text-light mb-4">
                "O manual Solar Buy-Side abriu meus olhos para os riscos!"
              </blockquote>

              <div className="w-full h-px bg-gradient-to-r from-accent-mint/30 to-transparent my-4"></div>

              <p className="text-base text-text-dark-secondary mb-6">
                Agora sei exatamente o que perguntar e o que exigir do fornecedor.
              </p>

              <div>
                <p className="text-base font-bold text-text-light">— Carlos</p>
                <p className="text-sm text-text-dark-secondary">Belo Horizonte - MG</p>
              </div>
            </div>
          </div>

          {/* Card 3 - RICARDO */}
          <div className="md:col-span-5 glass-card-dark rounded-2xl p-6 sm:p-8 border border-accent-mint/20 hover:border-accent-mint/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-mint/0 to-accent-mint/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-accent-mint/20 border border-accent-mint/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛡️</span>
              </div>

              <blockquote className="text-xl font-bold text-text-light mb-4">
                "Errar na escolha de um fornecedor pode gerar <span className="text-danger-red">PREJUÍZO ENORME!</span>"
              </blockquote>

              <div className="w-full h-px bg-gradient-to-r from-accent-mint/30 to-transparent my-4"></div>

              <p className="text-base text-text-dark-secondary mb-6">
                O manual me salvou de cair em armadilhas.
              </p>

              <div>
                <p className="text-base font-bold text-text-light">— Ricardo</p>
                <p className="text-sm text-text-dark-secondary">São Paulo - SP</p>
              </div>
            </div>
          </div>

          {/* Card 4 - MARIANA */}
          <div className="md:col-span-7 glass-card-dark rounded-2xl p-6 sm:p-8 border border-accent-mint/20 hover:border-accent-mint/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-mint/0 to-accent-mint/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 flex items-center gap-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent-mint/20 border border-accent-mint/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">💰</span>
              </div>

              <div className="flex-1">
                <blockquote className="text-xl font-bold text-text-light mb-3">
                  "Comparei 7 propostas usando os critérios do manual."
                </blockquote>

                <p className="text-base text-text-dark-secondary mb-3">
                  Escolhi com confiança e economizei <span className="text-accent-mint font-bold">15%</span>.
                </p>

                <div>
                  <p className="text-base font-bold text-text-light">— Mariana</p>
                  <p className="text-sm text-text-dark-secondary">Florianópolis - SC</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Interactive */}
        <div className="text-center mb-12">
          <p className="text-lg text-text-dark-secondary">
            📸 Cada sorriso conta uma experiência.
          </p>
          <p className="text-base text-text-dark-secondary/70 mt-2">
            Veja como o manual fez a diferença na decisão desses compradores.
          </p>
        </div>

        {/* Texto de Impacto */}
        <div className="glass-card-dark rounded-2xl p-8 sm:p-12 border-l-4 border-accent-orange relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/5 to-accent-orange/10 opacity-50 group-hover:opacity-70 transition-opacity"></div>

          <div className="relative z-10">
            <p className="text-xl font-bold text-text-light mb-4">
              ⚠️ REALIDADE DESCONFORTÁVEL:
            </p>

            <div className="space-y-4 text-base text-text-dark-secondary">
              <p>Esses compradores estavam negociando com alguém.</p>
              <p>Eles tinham múltiplas propostas na mesa.</p>
              <p>E eles escolheram usar <span className="text-text-light font-bold">ESTE MANUAL</span> para decidir.</p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

            <p className="text-lg text-text-light mb-4">Pergunta honesta:</p>

            <div className="space-y-3 text-base text-text-dark-secondary italic">
              <p>Você acha que os vendedores que perderam essas vendas sabiam que o cliente estava usando um manual técnico para avaliá-los?</p>
              <p>Você acha que eles estavam preparados para responder no nível de profundidade que esses compradores exigiam?</p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

            <p className="text-lg text-text-light mb-2">Agora você sabe.</p>
            <p className="text-xl font-bold text-accent-mint">
              A questão é: o que você vai fazer com essa informação?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
