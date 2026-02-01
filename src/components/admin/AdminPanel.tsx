import React, { useState } from 'react'
import { LogOut, Home, Save, Upload, Monitor, Smartphone, ExternalLink } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useContent } from '../../contexts/ContentContext'
import { AdminPreview } from './AdminPreview'

type ViewMode = 'desktop' | 'mobile'

export const AdminPanel: React.FC = () => {
  const { logout } = useAuth()
  const { content, updateText, updateImage } = useContent()
  const [selectedSection, setSelectedSection] = useState(content[0]?.id || 'hero')
  const [editedTexts, setEditedTexts] = useState<{ [key: string]: string }>({})
  const [viewMode, setViewMode] = useState<ViewMode>('desktop')
  const [showRealPreview, setShowRealPreview] = useState(false)

  const currentSection = content.find((s) => s.id === selectedSection)

  const handleTextChange = (key: string, value: string) => {
    setEditedTexts((prev) => ({ ...prev, [key]: value }))
  }

  const handleSaveTexts = () => {
    Object.entries(editedTexts).forEach(([key, value]) => {
      updateText(selectedSection, key, value)
    })
    setEditedTexts({})
    alert('Textos salvos com sucesso!')
  }

  const handleImageUpload = (key: string, file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      updateImage(selectedSection, key, result)
      alert('Imagem atualizada com sucesso!')
    }
    reader.readAsDataURL(file)
  }

  const getTextValue = (key: string) => {
    if (editedTexts[key] !== undefined) return editedTexts[key]
    return currentSection?.texts[key] || ''
  }

  const getPreviewWidth = () => {
    return viewMode === 'mobile' ? '375px' : '100%'
  }

  const getSectionHash = () => {
    const sectionMap: { [key: string]: string } = {
      'hero': 'hero',
      'context': 'contexto',
      'video': 'video-section',
      'audience': 'audiencia',
      'pricing': 'oferta',
      'testimonials': 'depoimentos',
      'story-bridge': 'story-bridge',
      'seller-code': 'seller-code',
      'manual-strategic': 'manual-strategic',
      'buyer-wave': 'buyer-wave',
      'authority': 'authority',
      'lead-magnet': 'lead-magnet',
      'faq': 'faq',
    }
    return sectionMap[selectedSection] || selectedSection
  }

  const openRealPreview = () => {
    setShowRealPreview(true)
  }

  const closeRealPreview = () => {
    setShowRealPreview(false)
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="flex items-center gap-2 text-slate-400 hover:text-[#F97316] transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="text-sm font-medium">Ver Site</span>
            </a>
            <div className="h-6 w-px bg-white/10"></div>
            <h1 className="text-xl font-bold">Painel de Administração</h1>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 px-4 py-2 rounded-xl transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Sair</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-4">Seções</h2>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {content.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setSelectedSection(section.id)
                      setEditedTexts({})
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      selectedSection === section.id
                        ? 'bg-[#F97316] text-white font-bold'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    Seção {content.indexOf(section) + 1}: {section.name}
                  </button>
                ))}
              </div>
            </div>

            {currentSection && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">Editar Textos</h2>
                  <button
                    onClick={handleSaveTexts}
                    disabled={Object.keys(editedTexts).length === 0}
                    className="flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6a0a] disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-xl transition-all text-sm font-medium"
                  >
                    <Save className="w-4 h-4" />
                    Salvar
                  </button>
                </div>

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {Object.entries(currentSection.texts).map(([key]) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-slate-300 mb-2 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      <textarea
                        value={getTextValue(key)}
                        onChange={(e) => handleTextChange(key, e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent resize-none"
                        rows={3}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSection && Object.keys(currentSection.images).length > 0 && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h2 className="text-lg font-bold mb-4">Editar Imagens</h2>
                <div className="space-y-4">
                  {Object.entries(currentSection.images).map(([key, value]) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-slate-300 mb-2 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      {value && (
                        <img
                          src={value}
                          alt={key}
                          className="w-full h-24 object-cover rounded-lg mb-2"
                        />
                      )}
                      <label className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 px-4 py-2 rounded-xl cursor-pointer transition-all">
                        <Upload className="w-4 h-4" />
                        <span className="text-sm">Alterar Imagem</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) handleImageUpload(key, file)
                          }}
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Preview ao Vivo</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={openRealPreview}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all font-medium text-sm"
                    title="Ver Preview Real"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Preview Real
                  </button>
                  <div className="w-px h-6 bg-white/10"></div>
                  <button
                    onClick={() => setViewMode('desktop')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'desktop'
                        ? 'bg-[#F97316] text-white'
                        : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                    title="Desktop"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('mobile')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'mobile'
                        ? 'bg-[#F97316] text-white'
                        : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                    title="Mobile"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div
                  className="mx-auto transition-all duration-300"
                  style={{ width: getPreviewWidth(), maxWidth: '100%' }}
                >
                  <div className="max-h-[800px] overflow-y-auto">
                    {currentSection && (
                      <AdminPreview
                        sectionId={currentSection.id}
                        texts={{ ...currentSection.texts, ...editedTexts }}
                        images={currentSection.images}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Preview Real */}
      {showRealPreview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* Header do Modal */}
            <div className="flex items-center justify-between bg-slate-900 text-white px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-[#F97316]" />
                <h3 className="text-lg font-bold">Preview Real - {currentSection?.name}</h3>
              </div>
              <button
                onClick={closeRealPreview}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 rounded-lg transition-all font-medium"
              >
                Fechar
              </button>
            </div>

            {/* Iframe com o site real */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`/#${getSectionHash()}`}
                className="w-full h-full border-0"
                title="Preview Real"
                onLoad={(e) => {
                  // Scroll para a seção após carregar
                  const iframe = e.target as HTMLIFrameElement
                  try {
                    const hash = getSectionHash()
                    iframe.contentWindow?.postMessage({ type: 'scrollToSection', hash }, '*')
                  } catch (err) {
                    console.log('Cannot access iframe:', err)
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
