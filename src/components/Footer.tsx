import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      {/* Último CTA */}
      <div className="py-20 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl text-text-secondary mb-4">
            🚀 Ainda está lendo?
          </p>
          <p className="text-xl text-text-primary mb-6">
            Isso significa que você sabe que precisa disso.
          </p>
          <p className="text-lg text-text-secondary mb-8">
            A pergunta é: você vai agir agora ou esperar seus concorrentes agirem primeiro?
          </p>

          <button className="btn-primary text-lg px-10 py-5">
            SIM, QUERO GARANTIR MINHA VANTAGEM AGORA
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Informações Legais */}
      <div className="py-12 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-text-secondary mb-2">
            Buy-Side Soluções | CNPJ: 55.463.06/0001-80
          </p>
          <p className="text-text-muted text-sm">
            Torre Norte – Av. Bento Munhoz da Rocha Neto, 632<br />
            19º Andar, Salas 1905 a 1908 – Zona 7<br />
            Maringá – PR, 87030-010
          </p>
          <p className="text-text-muted text-sm mt-4">
            E-mail: contato@buyside.com.br
          </p>
        </div>
      </div>

      {/* Links de Políticas */}
      <div className="py-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="text-text-muted hover:text-electric-cyan transition-colors">
              Política de Privacidade
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-text-muted hover:text-electric-cyan transition-colors">
              Termos de Uso
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-text-muted hover:text-electric-cyan transition-colors">
              Proteção Antipirataria
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-text-muted text-xs text-center leading-relaxed">
            © 2025 Buy-Side Soluções. Todos os direitos reservados.
          </p>
          <p className="text-text-muted text-xs text-center mt-4 max-w-3xl mx-auto">
            Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca registrada da FACEBOOK, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
