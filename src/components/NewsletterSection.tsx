import React, { useState } from 'react'
import { Mail, CheckCircle2 } from 'lucide-react'
import { useContent } from '../contexts/ContentContext'
import { trackNewsletterSubscribe } from '../utils/analytics'
import { API_URL } from '../utils/api'

export const NewsletterSection: React.FC = () => {
  const { getSection } = useContent()
  const section = getSection('newsletter')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      try {
        // Salvar no banco de dados
        const response = await fetch(`${API_URL}/api/newsletter/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })

        if (!response.ok) {
          const data = await response.json()
          if (response.status === 409) {
            alert('Este email já está cadastrado!')
            return
          }
          throw new Error(data.message || 'Erro ao cadastrar')
        }

        // Track analytics event
        trackNewsletterSubscribe()

        // Enviar para FormSubmit (email notification)
        const formData = new FormData()
        formData.append('email', email)
        formData.append('_subject', '🔔 Novo Cadastro Newsletter - Solar Buy-Side')
        formData.append('_template', 'box')
        formData.append('_captcha', 'false')
        formData.append('_next', window.location.href)

        await fetch('https://formsubmit.co/contato@buyside.com.br', {
          method: 'POST',
          body: formData
        })

        setSubmitted(true)
        setEmail('')

        // Reset após 5 segundos
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } catch (error) {
        console.error('Erro ao enviar:', error)
        alert('Erro ao cadastrar. Tente novamente.')
      }
    }
  }

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#020617] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10">
          {/* Efeito de fundo */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEzIDAgNi00LjAyNSA2LThzLTIuNjg3LTgtNi04LTYgNC4wMjUtNiA4IDIuNjg3IDggNiA4em0tMTggMGMzLjMxMyAwIDYtNC4wMjUgNi04cy0yLjY4Ny04LTYtOC02IDQuMDI1LTYgOCAyLjY4NyA4IDYgOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F97316]/10 rounded-2xl mb-4 border border-[#F97316]/20">
                <Mail className="w-8 h-8 text-[#F97316]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {section?.texts.title || (
                  <>
                    Fique por dentro das <span className="text-[#F97316]">novidades</span>
                  </>
                )}
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                {section?.texts.subtitle || 'Cadastre seu e-mail para receber lançamentos exclusivos, atualizações e conteúdos sobre o mercado solar.'}
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
                  className="flex-1 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316]/50 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className={`px-8 py-4 rounded-xl font-bold transition-all shadow-lg ${
                    submitted
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-[#F97316] text-white hover:bg-[#FF8C3A] active:scale-95 shadow-[#F97316]/20'
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

            <p className="text-center text-slate-500 text-xs mt-6">
              {section?.texts.privacyNote || '🔒 Seus dados estão seguros conosco. Não compartilhamos com terceiros.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
