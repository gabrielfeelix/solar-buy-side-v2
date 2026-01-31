import React from 'react'
import { Mail, MapPin, Building2 } from 'lucide-react'

export const ContactSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1224] via-[#0a1730] to-[#020617] py-20 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            DADOS E CONTATOS
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto">
            Prefiro os destacar de uma forma mais clara, que mostra existência e transparência +/- dessa forma:
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="space-y-6">
            {/* Título da Empresa */}
            <div className="border-b border-white/10 pb-6">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-6 h-6 text-[#F97316]" />
                <h3 className="text-2xl font-bold text-white">Buy-Side Soluções</h3>
              </div>
              <p className="text-slate-400 text-sm">CNPJ: 55.463.06/0001-80</p>
            </div>

            {/* Endereço */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F97316] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Torre Norte - Av. Bento Munhoz da Rocha Neto, 632</p>
                  <p className="text-slate-300">19º Andar, Salas 1905 a 1908 - Zona 7,</p>
                  <p className="text-slate-300">Maringá - PR, 87030-010</p>
                </div>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-center gap-3 pt-4">
              <Mail className="w-5 h-5 text-[#F97316] flex-shrink-0" />
              <div>
                <p className="text-slate-400 text-sm mb-1">E-mail:</p>
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
