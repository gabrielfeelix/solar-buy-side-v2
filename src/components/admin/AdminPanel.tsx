import React, { useState } from 'react'
import { LogOut, Home, Save } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useContent } from '../../contexts/ContentContext'
import { AdminPreview } from './AdminPreview'

export const AdminPanel: React.FC = () => {
  const { logout } = useAuth()
  const { content, updateText } = useContent()
  const [selectedSection, setSelectedSection] = useState(content[0]?.id || 'hero')
  const [editedTexts, setEditedTexts] = useState<{ [key: string]: string }>({})

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

  const getTextValue = (key: string) => {
    if (editedTexts[key] !== undefined) return editedTexts[key]
    return currentSection?.texts[key] || ''
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
              <div className="space-y-2">
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

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
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

          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-4">Preview ao Vivo</h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-h-[800px] overflow-y-auto">
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
  )
}
