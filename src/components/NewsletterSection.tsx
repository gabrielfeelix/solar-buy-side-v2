import React, { useState } from 'react'
import { Mail, CheckCircle2 } from 'lucide-react'
import { useContent } from '../contexts/ContentContext'

export const NewsletterSection: React.FC = () => {
  const { getSection } = useContent()
  const section = getSection('newsletter')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Aqui você pode integrar com um serviço de newsletter
      console.log('Email cadastrado:', email)
      setSubmitted(true)
      setEmail('')

      // Reset após 5 segundos
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }
  }

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Efeito de fundo */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEzIDAgNi00LjAyNSA2LThzLTIuNjg3LTgtNi04LTYgNC4wMjUtNiA4IDIuNjg3IDggNiA4em0tMTggMGMzLjMxMyAwIDYtNC4wMjUgNi04cy0yLjY4Ny04LTYtOC02IDQuMDI1LTYgOCAyLjY4NyA4IDYgOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {section?.texts.title || 'Fique por dentro das novidades'}
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                {section?.texts.subtitle || 'Cadastre seu e-mail para receber informações exclusivas, atualizações e conteúdos sobre o mercado solar.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={section?.texts.placeholder || 'seu@email.com'}
                  required
                  disabled={submitted}
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className={`px-8 py-4 rounded-xl font-bold transition-all shadow-lg ${
                    submitted
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-white text-blue-600 hover:bg-blue-50 active:scale-95'
                  }`}
                >
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      {section?.texts.successButton || 'Cadastrado!'}
                    </span>
                  ) : (
                    section?.texts.ctaButton || 'Cadastrar'
                  )}
                </button>
              </div>
              {submitted && (
                <p className="text-center text-white/90 text-sm mt-4 font-medium">
                  {section?.texts.successMessage || 'E-mail cadastrado com sucesso! Fique atento às novidades.'}
                </p>
              )}
            </form>

            <p className="text-center text-blue-200 text-xs mt-6">
              {section?.texts.privacyNote || '🔒 Seus dados estão seguros conosco. Não compartilhamos com terceiros.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
