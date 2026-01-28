import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-black text-center text-slate-500 text-sm border-t border-slate-900">
      <div className="max-w-5xl mx-auto space-y-2">
        <p>Buy-Side Soluções | CNPJ: 55.463.06/0001-80</p>
        <p>Torre Norte - Av. Bento Munhoz da Rocha Neto, 632 - 19º Andar, Salas 1905 a 1908 - Zona 7, Maringá - PR, 87030-010</p>
        <p>E-mail: contato@buyside.com.br</p>
        <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs text-slate-600">
          <span>Política de Privacidade</span>
          <span>Termos de Uso</span>
          <span>Proteção Antipirataria</span>
        </div>
      </div>
    </footer>
  )
}
