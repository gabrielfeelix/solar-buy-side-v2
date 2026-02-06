import React, { useState } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  Layers,
  ListChecks,
  Scale,
  X,
  Zap,
} from 'lucide-react'
import { useContent } from '../contexts/ContentContext'
import { trackEbookDownload } from '../utils/analytics'
import { API_URL } from '../utils/api'

export const LeadMagnetSection: React.FC = () => {
  const { getSection } = useContent()
  const section = getSection('lead-magnet')

  const features = [
    {
      title: section?.texts.feature1 || 'Os 3 riscos na compra de sistemas solares',
      desc: '',
      icon: <AlertTriangle className="text-orange-500" size={20} />,
    },
    {
      title: section?.texts.feature2 || 'As 4 fases que seu cliente seguirá antes de comprar',
      desc: '',
      icon: <Layers className="text-orange-500" size={20} />,
    },
    {
      title: section?.texts.feature3 || 'Como sua proposta será avaliada e comparada',
      desc: '',
      icon: <Scale className="text-orange-500" size={20} />,
    },
    {
      title: section?.texts.feature4 || 'O índice detalhado do Manual Solar Buy-Side',
      desc: '',
      icon: <ListChecks className="text-orange-500" size={20} />,
    },
  ]

  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    celular: '',
  })
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="relative w-full bg-white py-12 md:py-20 px-6 overflow-hidden font-sans text-[#1d1d1f]">
      <div className="absolute inset-0 [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.3] pointer-events-none"></div>

      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          <div className="flex-[1.2] space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest">
              <Zap size={14} fill="currentColor" />
              {section?.texts.badge || 'Conteúdo Exclusivo'}
            </div>

            <h2 className="text-5xl md:text-[52px] font-black tracking-tight leading-[0.95] text-[#1d1d1f]">
              Ainda tem dúvidas sobre o impacto do{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                Manual Buy-Side?
              </span>
            </h2>

            <p className="max-w-xl text-xl md:text-2xl text-[#6e6e73] font-medium leading-relaxed">
              {section?.texts.subtitle || 'Garanta agora seu e-book grátis e entenda por que a imersão Solar Buy-Side faz vendedores venderem mais e melhor.'}
            </p>

            {/* Imagem aparece após o subtitle no mobile */}
            <div className="flex justify-center items-center lg:hidden">
              <img
                src={section?.images.ebook || '/assets/e-book-solar.jpeg'}
                alt="E-book Solar Buy-Side"
                className="w-[420px] max-w-full h-auto"
              />
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-6 pt-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:shadow-md group-hover:border-orange-200 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1d1d1f] group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    {feature.desc ? <p className="text-[#86868b] text-sm leading-snug">{feature.desc}</p> : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-[#1d1d1f] rounded-2xl hover:bg-orange-600 active:scale-95 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-orange-500/20"
                onClick={() => setShowModal(true)}
                type="button"
              >
                <span className="mr-3">{section?.texts.ctaButton || 'Baixar E-book Gratuito'}</span>
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <p className="mt-4 text-xs text-[#86868b] flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-500" />
                {section?.texts.ctaSubtext || 'PDF Interativo • 24 páginas • Acesso imediato'}
              </p>
            </div>
          </div>

          {/* Imagem no desktop apenas */}
          <div className="flex-1 justify-center items-center hidden lg:flex">
            <img
              src={section?.images.ebook || '/assets/e-book-solar.jpeg'}
              alt="E-book Solar Buy-Side"
              className="w-[420px] max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <style>{`
        .perspective-[1000px] { perspective: 1000px; }
        .rotate-y-[-20deg] { transform: rotateY(-20deg); }
        .rotate-y-[-10deg] { transform: rotateY(-10deg); }
        .rotate-x-[5deg] { transform: rotateX(5deg); }
      `}</style>

      {/* Modal de Formulário */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative">
            <button
              onClick={() => {
                setShowModal(false)
                setSubmitted(false)
              }}
              className="absolute top-6 right-6 text-[#1d1d1f] hover:text-orange-600 transition-colors"
              type="button"
            >
              <X size={24} />
            </button>

            <div className="p-8 sm:p-10">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">{section?.texts.modalTitle || 'Baixe seu E-book'}</h3>
                  <p className="text-[#86868b] text-sm mb-6">
                    {section?.texts.modalSubtitle || 'Preencha seus dados para receber o E-book Manual Solar Buy-Side'}
                  </p>

                  <form
                    onSubmit={async (e) => {
                      e.preventDefault()
                      try {
                        // Salvar no banco de dados
                        const response = await fetch(`${API_URL}/api/ebook/lead`, {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(formData),
                        })

                        if (!response.ok) {
                          const data = await response.json()
                          throw new Error(data.message || 'Erro ao salvar dados')
                        }

                        // Track analytics event
                        trackEbookDownload()

                        // Enviar para FormSubmit (email notification)
                        const formDataToSend = new FormData()
                        formDataToSend.append('nome', formData.nome)
                        formDataToSend.append('sobrenome', formData.sobrenome)
                        formDataToSend.append('email', formData.email)
                        formDataToSend.append('celular', formData.celular)
                        formDataToSend.append('_subject', '📚 Novo Download E-book - Solar Buy-Side')
                        formDataToSend.append('_template', 'box')
                        formDataToSend.append('_captcha', 'false')
                        formDataToSend.append('_next', window.location.href)

                        await fetch('https://formsubmit.co/contato@buyside.com.br', {
                          method: 'POST',
                          body: formDataToSend
                        })

                        setSubmitted(true)
                      } catch (error) {
                        console.error('Erro ao enviar:', error)
                        alert('Erro ao enviar dados. Tente novamente.')
                      }
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Nome"
                        value={formData.nome}
                        onChange={(e) =>
                          setFormData({ ...formData, nome: e.target.value })
                        }
                        required
                        className="px-4 py-3 border border-[#e5e5e7] rounded-xl focus:outline-none focus:border-orange-600 bg-[#f5f5f7] text-[#1d1d1f]"
                      />
                      <input
                        type="text"
                        placeholder="Sobrenome"
                        value={formData.sobrenome}
                        onChange={(e) =>
                          setFormData({ ...formData, sobrenome: e.target.value })
                        }
                        required
                        className="px-4 py-3 border border-[#e5e5e7] rounded-xl focus:outline-none focus:border-orange-600 bg-[#f5f5f7] text-[#1d1d1f]"
                      />
                    </div>

                    <input
                      type="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 border border-[#e5e5e7] rounded-xl focus:outline-none focus:border-orange-600 bg-[#f5f5f7] text-[#1d1d1f]"
                    />

                    <input
                      type="tel"
                      placeholder="Celular"
                      value={formData.celular}
                      onChange={(e) =>
                        setFormData({ ...formData, celular: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 border border-[#e5e5e7] rounded-xl focus:outline-none focus:border-orange-600 bg-[#f5f5f7] text-[#1d1d1f]"
                    />

                    <button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-xl transition-colors mt-6"
                    >
                      {section?.texts.ctaButton || 'Baixar E-book Gratuito'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center space-y-4">
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 size={48} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f]">
                    {section?.texts.successTitle || 'Perfeito!'}
                  </h3>
                  <p className="text-[#86868b]">
                    {section?.texts.successMessage || 'Confira seu e-mail para baixar o E-book Manual Solar Buy-Side'}
                  </p>
                  <button
                    onClick={() => {
                      setShowModal(false)
                      setSubmitted(false)
                    }}
                    className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-xl transition-colors mt-6"
                    type="button"
                  >
                    Fechar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
