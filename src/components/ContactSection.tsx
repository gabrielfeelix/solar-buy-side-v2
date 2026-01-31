import React from 'react'
import { Mail, MapPin, Building2 } from 'lucide-react'

export const ContactSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-3">
            DADOS E <span className="text-[#F97316]">CONTATOS</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
            Transparência e clareza para você entrar em contato com total confiança.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="space-y-6">
            {/* Título da Empresa */}
            <div className="border-b border-orange-200 pb-6">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-6 h-6 text-[#F97316]" />
                <h3 className="text-2xl font-bold text-[#1D1D1F]">
                  <span className="text-[#F97316]">Buy-Side</span> Soluções
                </h3>
              </div>
              <p className="text-slate-600 text-sm">
                CNPJ: <span className="font-semibold text-[#F97316]">55.463.06/0001-80</span>
              </p>
            </div>

            {/* Endereço */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F97316] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#1D1D1F] font-semibold">Torre Norte - Av. Bento Munhoz da Rocha Neto, 632</p>
                  <p className="text-slate-600">19º Andar, Salas 1905 a 1908 - Zona 7,</p>
                  <p className="text-slate-600">Maringá - PR, 87030-010</p>
                </div>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-center gap-3 pt-4">
              <Mail className="w-5 h-5 text-[#F97316] flex-shrink-0" />
              <div>
                <p className="text-slate-600 text-sm mb-1">E-mail:</p>
                <a
                  href="mailto:contato@buyside.com.br"
                  className="text-[#F97316] hover:text-[#FF8C3A] text-lg font-semibold transition-colors underline decoration-[#F97316]/30 hover:decoration-[#FF8C3A]"
                >
                  contato@buyside.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
