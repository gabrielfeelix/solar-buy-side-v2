import React, { useState } from 'react'
import { LogOut, Home, Save, Upload, Monitor, Smartphone, ExternalLink, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useContent } from '../../contexts/ContentContext'
import { AdminPreview } from './AdminPreview'

type ViewMode = 'desktop' | 'tablet' | 'mobile'

export const AdminPanel: React.FC = () => {
  const { logout } = useAuth()
  const { content, globalAssets, updateText, updateImage, updateGlobalAsset } = useContent()
  const [selectedSection, setSelectedSection] = useState(content[0]?.id || 'hero')
  const [editedTexts, setEditedTexts] = useState<{ [key: string]: string }>({})
  const [editedImages, setEditedImages] = useState<{ [key: string]: string }>({})
  const [editedGlobalAssets, setEditedGlobalAssets] = useState<{ favicon?: string; logo?: string }>({})
  const [viewportWidth, setViewportWidth] = useState(100) // Percentage
  const [showRealPreview, setShowRealPreview] = useState(false)

  // Estados para controlar os accordions
  const [globalAssetsOpen, setGlobalAssetsOpen] = useState(true)
  const [sectionsOpen, setSectionsOpen] = useState(true)
  const [textsOpen, setTextsOpen] = useState(true)
  const [imagesOpen, setImagesOpen] = useState(true)

  const currentSection = content.find((s) => s.id === selectedSection)

  const handleTextChange = (key: string, value: string) => {
    setEditedTexts((prev) => ({ ...prev, [key]: value }))
  }

  const handleImageUpload = (key: string, file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      setEditedImages((prev) => ({ ...prev, [key]: result }))
    }
    reader.readAsDataURL(file)
  }

  const handleGlobalAssetUpload = (key: 'favicon' | 'logo', file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      setEditedGlobalAssets((prev) => ({ ...prev, [key]: result }))
    }
    reader.readAsDataURL(file)
  }

  const handleSaveAll = () => {
    // Salvar textos
    Object.entries(editedTexts).forEach(([key, value]) => {
      updateText(selectedSection, key, value)
    })

    // Salvar imagens
    Object.entries(editedImages).forEach(([key, value]) => {
      updateImage(selectedSection, key, value)
    })

    // Salvar assets globais
    Object.entries(editedGlobalAssets).forEach(([key, value]) => {
      updateGlobalAsset(key as 'favicon' | 'logo', value)
    })

    setEditedTexts({})
    setEditedImages({})
    setEditedGlobalAssets({})
    alert('Alterações salvas com sucesso!')
  }

  const getTextValue = (key: string) => {
    if (editedTexts[key] !== undefined) return editedTexts[key]
    return currentSection?.texts[key] || ''
  }

  const getImageValue = (key: string) => {
    if (editedImages[key] !== undefined) return editedImages[key]
    return currentSection?.images[key] || ''
  }

  const getGlobalAssetValue = (key: 'favicon' | 'logo') => {
    if (editedGlobalAssets[key] !== undefined) return editedGlobalAssets[key]
    return globalAssets[key] || ''
  }

  const hasUnsavedChanges =
    Object.keys(editedTexts).length > 0 ||
    Object.keys(editedImages).length > 0 ||
    Object.keys(editedGlobalAssets).length > 0

  const getPreviewDimensions = () => {
    // Base em 1920x1080 para desktop real
    const baseWidth = 1920
    const baseHeight = 1080
    const width = Math.round((baseWidth * viewportWidth) / 100)
    const height = Math.round((baseHeight * viewportWidth) / 100)
    return { width, height }
  }

  const getPreviewScale = () => {
    // Retorna a escala CSS para o preview aparecer em tamanho real
    return viewportWidth / 100
  }

  const setViewMode = (mode: ViewMode) => {
    if (mode === 'desktop') setViewportWidth(100)
    else if (mode === 'tablet') setViewportWidth(50)
    else if (mode === 'mobile') setViewportWidth(19.53) // 375px / 1920px = 19.53%
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

  const dimensions = getPreviewDimensions()

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-24">
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
          {/* Coluna Esquerda - Controles */}
          <div className="lg:col-span-1 space-y-4">
            {/* Favicon e Logotipo */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => setGlobalAssetsOpen(!globalAssetsOpen)}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  <h2 className="text-lg font-bold">Favicon e Logotipo</h2>
                </div>
                {globalAssetsOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {globalAssetsOpen && (
                <div className="px-6 pb-6 space-y-4">
                  {/* Favicon */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Favicon
                      <span className="text-xs text-slate-500 ml-2">(Recomendado: 64x64px)</span>
                    </label>
                    {getGlobalAssetValue('favicon') && (
                      <img
                        src={getGlobalAssetValue('favicon')}
                        alt="Favicon"
                        className="w-16 h-16 object-cover rounded-lg mb-2 bg-white p-2"
                      />
                    )}
                    <label className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 px-4 py-2 rounded-xl cursor-pointer transition-all">
                      <Upload className="w-4 h-4" />
                      <span className="text-sm">Alterar Favicon</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) handleGlobalAssetUpload('favicon', file)
                        }}
                      />
                    </label>
                  </div>

                  {/* Logo */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Logotipo
                      <span className="text-xs text-slate-500 ml-2">(Recomendado: 200x60px)</span>
                    </label>
                    {getGlobalAssetValue('logo') && (
                      <img
                        src={getGlobalAssetValue('logo')}
                        alt="Logo"
                        className="w-full h-16 object-contain rounded-lg mb-2 bg-white p-2"
                      />
                    )}
                    <label className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 px-4 py-2 rounded-xl cursor-pointer transition-all">
                      <Upload className="w-4 h-4" />
                      <span className="text-sm">Alterar Logotipo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) handleGlobalAssetUpload('logo', file)
                        }}
                      />
                    </label>
                    <p className="text-xs text-slate-500 mt-2">
                      * Atualiza header e footer automaticamente
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Seções - Com Accordion */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => setSectionsOpen(!sectionsOpen)}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors"
              >
                <h2 className="text-lg font-bold">Seções</h2>
                {sectionsOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {sectionsOpen && (
                <div className="px-6 pb-6">
                  <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                    {content.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          setSelectedSection(section.id)
                          setEditedTexts({})
                          setEditedImages({})
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
              )}
            </div>

            {/* Editar Textos - Com Accordion */}
            {currentSection && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setTextsOpen(!textsOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors"
                >
                  <h2 className="text-lg font-bold">Editar Textos</h2>
                  {textsOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>

                {textsOpen && (
                  <div className="px-6 pb-6">
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
              </div>
            )}

            {/* Editar Imagens - Com Accordion */}
            {currentSection && Object.keys(currentSection.images).length > 0 && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setImagesOpen(!imagesOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors"
                >
                  <h2 className="text-lg font-bold">Editar Imagens</h2>
                  {imagesOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>

                {imagesOpen && (
                  <div className="px-6 pb-6">
                    <div className="space-y-4">
                      {Object.entries(currentSection.images).map(([key]) => (
                        <div key={key}>
                          <label className="block text-sm font-medium text-slate-300 mb-2 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </label>
                          {getImageValue(key) && (
                            <img
                              src={getImageValue(key)}
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
            )}
          </div>

          {/* Coluna Direita - Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              {/* Header do Preview */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-bold">Preview ao Vivo</h2>
                  <span className="text-xs text-slate-400 font-mono">
                    {dimensions.width}px × {dimensions.height}px ({viewportWidth}%)
                  </span>
                </div>
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
                      viewportWidth === 100
                        ? 'bg-[#F97316] text-white'
                        : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                    title="Desktop (1920px)"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('mobile')}
                    className={`p-2 rounded-lg transition-all ${
                      viewportWidth < 25
                        ? 'bg-[#F97316] text-white'
                        : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                    title="Mobile (375px)"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Slider de Largura */}
              <div className="mb-4">
                <input
                  type="range"
                  min="19.53"
                  max="100"
                  step="0.01"
                  value={viewportWidth}
                  onChange={(e) => setViewportWidth(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #F97316 0%, #F97316 ${viewportWidth}%, rgba(255,255,255,0.1) ${viewportWidth}%, rgba(255,255,255,0.1) 100%)`
                  }}
                />
              </div>

              {/* Container do Preview com escala real */}
              <div className="bg-slate-100 rounded-xl overflow-auto shadow-2xl" style={{ maxHeight: '800px' }}>
                <div
                  className="bg-white origin-top-left"
                  style={{
                    width: viewportWidth < 25 ? '375px' : '1920px',
                    transform: viewportWidth < 25 ? 'scale(1)' : `scale(${getPreviewScale()})`,
                    transformOrigin: 'top left'
                  }}
                >
                  {currentSection && (
                    <AdminPreview
                      sectionId={currentSection.id}
                      texts={{ ...currentSection.texts, ...editedTexts }}
                      images={{ ...currentSection.images, ...editedImages }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior Fixa - Salvar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {hasUnsavedChanges && (
              <>
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                <span className="text-sm text-slate-300">
                  Você tem alterações não salvas
                </span>
              </>
            )}
            {!hasUnsavedChanges && (
              <span className="text-sm text-slate-400">
                Nenhuma alteração pendente
              </span>
            )}
          </div>

          <button
            onClick={handleSaveAll}
            disabled={!hasUnsavedChanges}
            className="flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6a0a] disabled:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 text-white px-6 py-3 rounded-xl transition-all font-bold text-sm shadow-lg"
          >
            <Save className="w-5 h-5" />
            Salvar Alterações
          </button>
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

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #F97316;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.4);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #F97316;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.4);
        }
      `}</style>
    </div>
  )
}
