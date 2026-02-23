import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { initialContent } from './ContentData'
import { API_URL } from '../utils/api'

export interface SectionContent {
  id: string
  name: string
  texts: { [key: string]: string }
  images: { [key: string]: string }
}

export interface GlobalAssets {
  favicon: string
  logo: string
}

export interface GlobalSettings {
  whatsappNumber: string
  purchaseLink: string
}

interface ContentContextType {
  content: SectionContent[]
  globalAssets: GlobalAssets
  globalSettings: GlobalSettings
  updateText: (sectionId: string, key: string, value: string) => void
  updateImage: (sectionId: string, key: string, value: string) => void
  updateGlobalAsset: (key: keyof GlobalAssets, value: string) => void
  updateGlobalSetting: (key: keyof GlobalSettings, value: string) => void
  saveSection: (
    sectionId: string,
    overrides?: {
      texts?: { [key: string]: string }
      images?: { [key: string]: string }
    }
  ) => Promise<boolean>
  saveGlobalAsset: (key: keyof GlobalAssets, value?: string) => Promise<boolean>
  saveGlobalSetting: (key: keyof GlobalSettings, value?: string) => Promise<boolean>
  getSection: (sectionId: string) => SectionContent | undefined
}

const DEFAULT_GLOBAL_ASSETS: GlobalAssets = {
  favicon: '/favicon.png',
  logo: '/assets/LOGOSOLARBUYSIDE3.png',
}

const DEFAULT_GLOBAL_SETTINGS: GlobalSettings = {
  whatsappNumber: '',
  purchaseLink: '',
}

const DEFAULT_BUYER_TESTIMONIALS = [
  {
    name: 'Ricardo',
    role: 'Empresario',
    location: 'Sao Paulo, SP',
    avatar: '/assets/Ricardo 1.png',
    objectPosition: '50% 50%',
    reviewTitle: 'Errar na escolha de um fornecedor pode gerar prejuizo enorme.',
    quote:
      'No mundo dos negocios, errar na escolha de um fornecedor pode gerar um prejuizo enorme. O manual foi indispensavel para evitar armadilhas, ensinando-me a identificar empresas despreparadas e equipamentos duvidosos. Aprendi a buscar parceiros que garantem suporte tecnico e manutencao continua. Gracas ao Solar Buy-Side, fechei negocio com a melhor empresa: meu investimento de R$ 195 mil foi muito bem aplicado.',
    highlight:
      'Mais que um guia, o Manual e o seguro que todo empresario precisa para investir com risco controlado.',
  },
  {
    name: 'Guilherme',
    role: 'Particular',
    location: 'Santana de Parnaiba, SP',
    avatar: '/assets/empresariomanualk.png',
    objectPosition: '50% 50%',
    reviewTitle: 'Decisao segura em investimento complexo.',
    quote:
      'Resido na regiao de Sao Paulo, em uma residencia de grande porte, com elevado consumo eletrico e exposta a apagoes frequentes, que podem durar horas ou dias. Para reduzir a fatura e garantir conforto energetico, optei pela instalacao de um sistema solar hibrido com baterias. Para embasar um investimento de alta complexidade tecnica e valor, utilizei com sucesso o Manual de Compra Solar Buy-Side, que orientou todo o processo de avaliacao e decisao.',
    highlight:
      'Para quem busca seguranca e ganho de tempo, recomendo com total confianca.',
  },
  {
    name: 'Jorge Luiz',
    role: 'Empresario',
    location: 'Rio de Janeiro, RJ',
    avatar: '/assets/jorge of_cleanup.png',
    objectPosition: '50% 100%',
    reviewTitle: 'O manual foi o divisor de aguas.',
    quote:
      'Viver no Rio e aquilo: voce tem que estar sempre ligado pra nao cair em furada. Quando precisei cortar os custos fixos da minha metalurgica, confesso que travei, porque de energia solar eu nao entendia nada. O manual foi o divisor de aguas; me deu o mapa da mina pra estudar as propostas e descartar de cara quem estava so no gogo. Investi R$ 188 mil com total seguranca e o alivio ja chegou no bolso.',
    highlight:
      'O Manual valeu demais! Recomendo mesmo!',
  },
  {
    name: 'Rogerio',
    role: 'Particular',
    location: 'Campinas, SP',
    avatar: '/assets/Rogerio_cleanup.png',
    objectPosition: '50% 100%',
    reviewTitle: 'O manual valeu cada pagina.',
    quote:
      'Eu nunca tinha tido contato com energia solar e temia tomar a decisao errada, mas o conteudo claro e estruturado mudou tudo. As 4 fases da jornada de compra foram essenciais e o indice interativo, com mais de 160 topicos, sanou todas as minhas duvidas instantaneamente. No fim, escolhi a empresa certa e o sistema ideal pelo preco justo, conduzindo a negociacao com total autoridade e seguranca.',
    highlight:
      'Sem exagero: o Manual Solar Buy-Side valeu cada pagina.',
  },
  {
    name: 'Lucineide',
    role: 'Particular',
    location: 'Recife, PE',
    avatar: '/assets/Lucineide 1.png',
    objectPosition: '50% 100%',
    reviewTitle: 'Esse Manual foi realmente um passo a passo arretado!',
    quote:
      'Morando sozinha, a variedade de empresas e tecnologias me deixava insegura. O manual foi o guia fundamental: seguindo cada etapa, aprendi a avaliar propostas e descartar o que era bom demais para ser verdade. Com total conviccao, instalei meu sistema de R$ 28 mil. O passo a passo foi arretado! No final, fui ate elogiada pelos vendedores; eles nunca tinham encontrado uma mulher com tanto conhecimento tecnico.',
    highlight:
      'O Solar Buy-Side me deu a seguranca para decidir sem arrependimentos.',
  },
  {
    name: 'Edivaldo',
    role: 'Produtor Rural',
    location: 'Sinop, MT',
    avatar: '/assets/Edivaldo.png',
    objectPosition: '50% 100%',
    reviewTitle: 'O Manual me deu seguranca para investir R$ 248 mil.',
    quote:
      'Sou produtor rural em Sinop/MT e decidi instalar energia solar devido ao alto consumo na irrigacao e maquinarios. Com a expansao da lavoura, a conta de luz pesava muito. O Manual Solar Buy-Side foi essencial nesse processo: me ensinou a comparar propostas tecnicamente e evitar erros caros que eu nem conhecia. O conteudo me deu a seguranca necessaria para realizar um investimento de R$ 248 mil.',
    highlight:
      'Realmente e uma ferramenta indispensavel para quem busca eficiencia no campo e protecao do capital.',
  },
]

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

const normalizeStringMap = (value: unknown): { [key: string]: string } => {
  if (!isRecord(value)) return {}

  const normalized: { [key: string]: string } = {}
  for (const [key, raw] of Object.entries(value)) {
    if (typeof raw === 'string') {
      normalized[key] = raw
      continue
    }

    if (raw !== null && raw !== undefined) {
      normalized[key] = String(raw)
    }
  }
  return normalized
}

const normalizeSection = (value: unknown): SectionContent | null => {
  if (!isRecord(value) || typeof value.id !== 'string' || value.id.trim() === '') {
    return null
  }

  return {
    id: value.id,
    name: typeof value.name === 'string' && value.name.trim() !== '' ? value.name : value.id,
    texts: normalizeStringMap(value.texts),
    images: normalizeStringMap(value.images),
  }
}

const applySectionAliases = (section: SectionContent): SectionContent => {
  const texts = { ...section.texts }
  const images = { ...section.images }

  if (section.id === 'hero') {
    if (!texts.titlePrefix && texts.title1) texts.titlePrefix = texts.title1
    if (!texts.titleHighlight && texts.title2) texts.titleHighlight = texts.title2
    if (!texts.subtitle && (texts.subtitle1 || texts.subtitle2)) {
      texts.subtitle = `${texts.subtitle1 || ''} ${texts.subtitle2 || ''}`.trim()
    }
    if (!texts.titlePrefix) texts.titlePrefix = 'Saia da Disputa de Preco e Passe a'
    if (!texts.titleHighlight) texts.titleHighlight = 'Vender Decisoes'
    if (!texts.titleSuffix) texts.titleSuffix = 'em Sistema Solar'
    if (!texts.subtitle) texts.subtitle = 'O metodo Buy-Side ensina voce a pensar como o cliente e conduzir decisoes de compra, nao disputas de preco.'
    if (!texts.manualTitle) texts.manualTitle = 'Manual Solar Buy-Side'
    if (!texts.manualSubtitle) texts.manualSubtitle = 'Construido a partir da observacao real de como compradores decidem, na pratica.'
    if (!texts.bonusBadge) texts.bonusBadge = 'Bonus Exclusivo'
    if (!texts.bonusTitle) texts.bonusTitle = 'O Codigo do Vendedor Consultivo'
    if (!texts.bonusSubtitle) texts.bonusSubtitle = 'Para quem quer conduzir decisoes, nao concessoes.'
    if (!texts.ctaButton) texts.ctaButton = 'Quero vender decisoes agora'
    if (!texts.ctaSubtext) texts.ctaSubtext = 'Acesso imediato ao Manual Solar Buy-Side.'
    if (!texts.scrollHint) texts.scrollHint = 'Entenda a logica'
    if (!images.heroImage) images.heroImage = '/assets/GED9CF_1_cleanup.PNG'
  }

  if (section.id === 'context') {
    if (!texts.titleHighlight && texts.title && /2026/.test(texts.title)) {
      texts.title = texts.title.replace(/\s*2026\s*$/, '').trim() || 'Panorama'
      texts.titleHighlight = '2026'
    }
  }

  if (section.id === 'testimonials') {
    if (!texts.title && texts.quote) texts.title = texts.quote
    if (!texts.intro && texts.label) texts.intro = texts.label
    if (!texts.quote1 && texts.text1) texts.quote1 = texts.text1
    if (!texts.quote2 && texts.text2) texts.quote2 = texts.text2
    if (!texts.ctaTitle && texts.calloutTitle) texts.ctaTitle = texts.calloutTitle
    if (!texts.ctaText && texts.calloutText) texts.ctaText = texts.calloutText
    if (!texts.authorName && texts.name) texts.authorName = texts.name
    if (!texts.authorRole && texts.role) texts.authorRole = texts.role
    if (!texts.statValue && texts.metric) texts.statValue = texts.metric
    if (!texts.statSubtext && texts.metricLabel) texts.statSubtext = texts.metricLabel
    if (!images.testimonialImage && images.avatar) images.testimonialImage = images.avatar
  }

  if (section.id === 'seller-code') {
    if (!texts.badge && texts.bonusBadge) texts.badge = texts.bonusBadge
    if (!texts.listTitle && texts.listHeader) texts.listTitle = texts.listHeader
    if (!texts.bonusSubtitle && texts.ebookSubtitle) texts.bonusSubtitle = texts.ebookSubtitle
    if (!images.bookImage && images.book) images.bookImage = images.book
  }

  if (section.id === 'pricing') {
    if (!texts.featuresTitle && texts.sectionTitle) texts.featuresTitle = texts.sectionTitle
    if (!texts.priceFrom && texts.priceOriginal) texts.priceFrom = texts.priceOriginal
    if (!texts.priceUpfront && texts.priceCash) texts.priceUpfront = texts.priceCash

    if ((!texts.priceValue || !texts.priceCents) && texts.priceInstallments) {
      const match = texts.priceInstallments.match(/(\d+)\s*de\s*R\$\s*(\d+)(?:,(\d+))?/i)
      if (match) {
        if (!texts.priceValue) texts.priceValue = match[2]
        if (!texts.priceCents) texts.priceCents = `,${match[3] || '00'}`
      }
    }

    if (!texts.finalCtaButton) texts.finalCtaButton = 'DESBLOQUEAR CONTEUDO COMPLETO'
  }

  if (section.id === 'manual-strategic') {
    if (!images.manualImage && images.manual) images.manualImage = images.manual
  }

  if (section.id === 'story-bridge') {
    if (!images.manualImage && images.manual) images.manualImage = images.manual
  }

  if (section.id === 'buyer-wave') {
    if (!texts.ctaButton) texts.ctaButton = 'ACESSAR GUIA ESTRATEGICO AGORA'

    DEFAULT_BUYER_TESTIMONIALS.forEach((defaultItem, index) => {
      const i = index + 1
      const nameKey = `testimonial${i}Name`
      const roleKey = `testimonial${i}Role`
      const locationKey = `testimonial${i}Location`
      const avatarKey = `testimonial${i}Avatar`
      const objectPositionKey = `testimonial${i}ObjectPosition`
      const reviewTitleKey = `testimonial${i}ReviewTitle`
      const quoteKey = `testimonial${i}Quote`
      const highlightKey = `testimonial${i}Highlight`

      if (!texts[nameKey]) texts[nameKey] = defaultItem.name
      if (!texts[roleKey]) texts[roleKey] = defaultItem.role
      if (!texts[locationKey]) texts[locationKey] = defaultItem.location
      if (!texts[objectPositionKey]) texts[objectPositionKey] = defaultItem.objectPosition
      if (!texts[reviewTitleKey]) texts[reviewTitleKey] = defaultItem.reviewTitle
      if (!texts[quoteKey]) texts[quoteKey] = defaultItem.quote
      if (!texts[highlightKey]) texts[highlightKey] = defaultItem.highlight
      if (!images[avatarKey]) images[avatarKey] = defaultItem.avatar
    })
  }

  return {
    ...section,
    texts,
    images,
  }
}

const applyAliases = (sections: SectionContent[]): SectionContent[] => {
  return sections.map(applySectionAliases)
}

const mergeSections = (baseSections: SectionContent[], incomingRaw: unknown): SectionContent[] => {
  if (!Array.isArray(incomingRaw)) {
    return baseSections
  }

  const incomingMap = new Map<string, SectionContent>()
  for (const item of incomingRaw) {
    const normalized = normalizeSection(item)
    if (normalized) {
      incomingMap.set(normalized.id, normalized)
    }
  }

  const merged = baseSections.map((baseSection) => {
    const incoming = incomingMap.get(baseSection.id)
    if (!incoming) return baseSection

    incomingMap.delete(baseSection.id)

    return {
      ...baseSection,
      name: incoming.name || baseSection.name,
      texts: { ...baseSection.texts, ...incoming.texts },
      images: { ...baseSection.images, ...incoming.images },
    }
  })

  // Keep unknown sections from backend (if any), appended at the end
  for (const extraSection of incomingMap.values()) {
    merged.push(extraSection)
  }

  return applyAliases(merged)
}

const getStoredSections = (): SectionContent[] => {
  const saved = localStorage.getItem('cms-content')
  if (!saved) return initialContent

  try {
    const parsed = JSON.parse(saved)
    return mergeSections(initialContent, parsed)
  } catch {
    return applyAliases(initialContent)
  }
}

const getStoredGlobalAssets = (): GlobalAssets => {
  const saved = localStorage.getItem('cms-global-assets')
  if (!saved) return DEFAULT_GLOBAL_ASSETS

  try {
    const parsed = JSON.parse(saved)
    if (!isRecord(parsed)) return DEFAULT_GLOBAL_ASSETS
    return {
      favicon: typeof parsed.favicon === 'string' ? parsed.favicon : DEFAULT_GLOBAL_ASSETS.favicon,
      logo: typeof parsed.logo === 'string' ? parsed.logo : DEFAULT_GLOBAL_ASSETS.logo,
    }
  } catch {
    return DEFAULT_GLOBAL_ASSETS
  }
}

const getStoredGlobalSettings = (): GlobalSettings => {
  const saved = localStorage.getItem('cms-global-settings')
  if (!saved) return DEFAULT_GLOBAL_SETTINGS

  try {
    const parsed = JSON.parse(saved)
    if (!isRecord(parsed)) return DEFAULT_GLOBAL_SETTINGS
    return {
      whatsappNumber: typeof parsed.whatsappNumber === 'string' ? parsed.whatsappNumber : DEFAULT_GLOBAL_SETTINGS.whatsappNumber,
      purchaseLink: typeof parsed.purchaseLink === 'string' ? parsed.purchaseLink : DEFAULT_GLOBAL_SETTINGS.purchaseLink,
    }
  } catch {
    return DEFAULT_GLOBAL_SETTINGS
  }
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SectionContent[]>(() => getStoredSections())

  const [globalAssets, setGlobalAssets] = useState<GlobalAssets>(() => getStoredGlobalAssets())

  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>(() => getStoredGlobalSettings())

  // Load content from backend on mount
  useEffect(() => {
    const loadContent = async () => {
      try {
        const [sectionsRes, assetsRes, settingsRes] = await Promise.all([
          fetch(`${API_URL}/api/content/sections`),
          fetch(`${API_URL}/api/content/assets`),
          fetch(`${API_URL}/api/content/settings`),
        ])

        if (sectionsRes.ok) {
          const sectionsData = await sectionsRes.json()
          if (sectionsData.success) {
            const mergedSections = mergeSections(initialContent, sectionsData.data)
            setContent(mergedSections)
            localStorage.setItem('cms-content', JSON.stringify(mergedSections))
          }
        } else {
          console.warn(`Failed to load sections: ${sectionsRes.status}`)
        }

        if (assetsRes.ok) {
          const assetsData = await assetsRes.json()
          if (assetsData.success && isRecord(assetsData.data)) {
            const nextAssets: GlobalAssets = {
              favicon: typeof assetsData.data.favicon === 'string' ? assetsData.data.favicon : DEFAULT_GLOBAL_ASSETS.favicon,
              logo: typeof assetsData.data.logo === 'string' ? assetsData.data.logo : DEFAULT_GLOBAL_ASSETS.logo,
            }
            setGlobalAssets(nextAssets)
            localStorage.setItem('cms-global-assets', JSON.stringify(nextAssets))
          }
        } else {
          console.warn(`Failed to load global assets: ${assetsRes.status}`)
        }

        if (settingsRes.ok) {
          const settingsData = await settingsRes.json()
          if (settingsData.success && isRecord(settingsData.data)) {
            const nextSettings: GlobalSettings = {
              whatsappNumber:
                typeof settingsData.data.whatsappNumber === 'string'
                  ? settingsData.data.whatsappNumber
                  : DEFAULT_GLOBAL_SETTINGS.whatsappNumber,
              purchaseLink:
                typeof settingsData.data.purchaseLink === 'string'
                  ? settingsData.data.purchaseLink
                  : DEFAULT_GLOBAL_SETTINGS.purchaseLink,
            }
            setGlobalSettings(nextSettings)
            localStorage.setItem('cms-global-settings', JSON.stringify(nextSettings))
          }
        } else {
          console.warn(`Failed to load global settings: ${settingsRes.status}`)
        }
      } catch (error) {
        console.debug('Using cached content:', error)
        // Keep using localStorage/initialContent on error
      }
    }

    loadContent()
  }, [])

  const persistSection = async (section: SectionContent): Promise<boolean> => {
    const token = localStorage.getItem('admin-token')
    if (!token) {
      console.warn('Cannot persist section without admin token.')
      return false
    }

    try {
      const response = await fetch(`${API_URL}/api/content/sections/${section.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          section_name: section.name,
          texts: section.texts,
          images: section.images
        })
      })

      if (!response.ok) {
        const body = await response.text()
        console.error(`Failed to persist section ${section.id}: ${response.status} ${body}`)
        return false
      }

      return true
    } catch (error) {
      console.error(`Failed to persist section ${section.id}:`, error)
      return false
    }
  }

  const updateText = (sectionId: string, key: string, value: string) => {
    setContent((prev) => {
      const updated = prev.map((section) =>
        section.id === sectionId
          ? { ...section, texts: { ...section.texts, [key]: value } }
          : section
      )
      localStorage.setItem('cms-content', JSON.stringify(updated))
      return updated
    })
  }

  const updateImage = (sectionId: string, key: string, value: string) => {
    setContent((prev) => {
      const updated = prev.map((section) =>
        section.id === sectionId
          ? { ...section, images: { ...section.images, [key]: value } }
          : section
      )
      localStorage.setItem('cms-content', JSON.stringify(updated))
      return updated
    })
  }

  const updateGlobalAsset = (key: keyof GlobalAssets, value: string) => {
    setGlobalAssets((prev) => {
      const updated = { ...prev, [key]: value }
      localStorage.setItem('cms-global-assets', JSON.stringify(updated))
      return updated
    })
  }

  const updateGlobalSetting = (key: keyof GlobalSettings, value: string) => {
    setGlobalSettings((prev) => {
      const updated = { ...prev, [key]: value }
      localStorage.setItem('cms-global-settings', JSON.stringify(updated))
      return updated
    })
  }

  const saveSection = async (
    sectionId: string,
    overrides?: {
      texts?: { [key: string]: string }
      images?: { [key: string]: string }
    }
  ): Promise<boolean> => {
    const baseSection = content.find((section) => section.id === sectionId)
    if (!baseSection) {
      return false
    }

    const sectionToSave: SectionContent = {
      ...baseSection,
      texts: { ...baseSection.texts, ...(overrides?.texts || {}) },
      images: { ...baseSection.images, ...(overrides?.images || {}) },
    }

    setContent((prev) => {
      const updated = prev.map((section) =>
        section.id === sectionId ? sectionToSave : section
      )
      localStorage.setItem('cms-content', JSON.stringify(updated))
      return updated
    })

    return persistSection(sectionToSave)
  }

  const saveGlobalAsset = async (key: keyof GlobalAssets, value?: string): Promise<boolean> => {
    const nextValue = value !== undefined ? value : globalAssets[key]
    const token = localStorage.getItem('admin-token')
    if (!token) {
      console.warn('Cannot persist global asset without admin token.')
      return false
    }

    setGlobalAssets((prev) => {
      const updated = { ...prev, [key]: nextValue }
      localStorage.setItem('cms-global-assets', JSON.stringify(updated))
      return updated
    })

    try {
      const response = await fetch(`${API_URL}/api/content/assets`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ key, value: nextValue })
      })

      if (!response.ok) {
        const body = await response.text()
        console.error(`Failed to persist global asset ${key}: ${response.status} ${body}`)
        return false
      }

      return true
    } catch (error) {
      console.error(`Failed to persist global asset ${key}:`, error)
      return false
    }
  }

  const saveGlobalSetting = async (key: keyof GlobalSettings, value?: string): Promise<boolean> => {
    const nextValue = value !== undefined ? value : globalSettings[key]
    const token = localStorage.getItem('admin-token')
    if (!token) {
      console.warn('Cannot persist global setting without admin token.')
      return false
    }

    setGlobalSettings((prev) => {
      const updated = { ...prev, [key]: nextValue }
      localStorage.setItem('cms-global-settings', JSON.stringify(updated))
      return updated
    })

    try {
      const response = await fetch(`${API_URL}/api/content/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ key, value: nextValue })
      })

      if (!response.ok) {
        const body = await response.text()
        console.error(`Failed to persist global setting ${key}: ${response.status} ${body}`)
        return false
      }

      return true
    } catch (error) {
      console.error(`Failed to persist global setting ${key}:`, error)
      return false
    }
  }

  const getSection = (sectionId: string) => {
    return content.find((section) => section.id === sectionId)
  }

  return (
    <ContentContext.Provider value={{ content, globalAssets, globalSettings, updateText, updateImage, updateGlobalAsset, updateGlobalSetting, saveSection, saveGlobalAsset, saveGlobalSetting, getSection }}>
      {children}
    </ContentContext.Provider>
  )
}

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within ContentProvider')
  }
  return context
}
