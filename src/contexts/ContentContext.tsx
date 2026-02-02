import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { initialContent } from './ContentData'

const API_URL = import.meta.env.VITE_API_URL || ''

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
  getSection: (sectionId: string) => SectionContent | undefined
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SectionContent[]>(() => {
    const saved = localStorage.getItem('cms-content')
    return saved ? JSON.parse(saved) : initialContent
  })

  const [globalAssets, setGlobalAssets] = useState<GlobalAssets>(() => {
    const saved = localStorage.getItem('cms-global-assets')
    return saved ? JSON.parse(saved) : { favicon: '/favicon.png', logo: '/assets/logo.svg' }
  })

  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>(() => {
    const saved = localStorage.getItem('cms-global-settings')
    return saved ? JSON.parse(saved) : { whatsappNumber: '', purchaseLink: '' }
  })

  // Load content from backend on mount
  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load sections
        const sectionsRes = await fetch(`${API_URL}/api/content/sections`)
        if (sectionsRes.ok) {
          const sectionsData = await sectionsRes.json()
          if (sectionsData.success && sectionsData.data.length > 0) {
            setContent(sectionsData.data)
            localStorage.setItem('cms-content', JSON.stringify(sectionsData.data))
          }
        }

        // Load global assets
        const assetsRes = await fetch(`${API_URL}/api/content/assets`)
        if (assetsRes.ok) {
          const assetsData = await assetsRes.json()
          if (assetsData.success && Object.keys(assetsData.data).length > 0) {
            setGlobalAssets(assetsData.data)
            localStorage.setItem('cms-global-assets', JSON.stringify(assetsData.data))
          }
        }

        // Load global settings
        const settingsRes = await fetch(`${API_URL}/api/content/settings`)
        if (settingsRes.ok) {
          const settingsData = await settingsRes.json()
          if (settingsData.success && Object.keys(settingsData.data).length > 0) {
            setGlobalSettings(settingsData.data)
            localStorage.setItem('cms-global-settings', JSON.stringify(settingsData.data))
          }
        }
      } catch (error) {
        console.debug('Using cached content:', error)
        // Keep using localStorage/initialContent on error
      }
    }

    loadContent()
  }, [])

  const updateText = async (sectionId: string, key: string, value: string) => {
    setContent((prev) => {
      const updated = prev.map((section) =>
        section.id === sectionId
          ? { ...section, texts: { ...section.texts, [key]: value } }
          : section
      )
      localStorage.setItem('cms-content', JSON.stringify(updated))

      // Save to backend
      const section = updated.find(s => s.id === sectionId)
      if (section) {
        const token = localStorage.getItem('admin-token')
        fetch(`${API_URL}/api/content/sections/${sectionId}`, {
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
        }).catch(err => console.debug('Failed to save to backend:', err))
      }

      return updated
    })
  }

  const updateImage = async (sectionId: string, key: string, value: string) => {
    setContent((prev) => {
      const updated = prev.map((section) =>
        section.id === sectionId
          ? { ...section, images: { ...section.images, [key]: value } }
          : section
      )
      localStorage.setItem('cms-content', JSON.stringify(updated))

      // Save to backend
      const section = updated.find(s => s.id === sectionId)
      if (section) {
        const token = localStorage.getItem('admin-token')
        fetch(`${API_URL}/api/content/sections/${sectionId}`, {
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
        }).catch(err => console.debug('Failed to save to backend:', err))
      }

      return updated
    })
  }

  const updateGlobalAsset = async (key: keyof GlobalAssets, value: string) => {
    setGlobalAssets((prev) => {
      const updated = { ...prev, [key]: value }
      localStorage.setItem('cms-global-assets', JSON.stringify(updated))

      // Save to backend
      const token = localStorage.getItem('admin-token')
      fetch(`${API_URL}/api/content/assets`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ key, value })
      }).catch(err => console.debug('Failed to save to backend:', err))

      return updated
    })
  }

  const updateGlobalSetting = async (key: keyof GlobalSettings, value: string) => {
    setGlobalSettings((prev) => {
      const updated = { ...prev, [key]: value }
      localStorage.setItem('cms-global-settings', JSON.stringify(updated))

      // Save to backend
      const token = localStorage.getItem('admin-token')
      fetch(`${API_URL}/api/content/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ key, value })
      }).catch(err => console.debug('Failed to save to backend:', err))

      return updated
    })
  }

  const getSection = (sectionId: string) => {
    return content.find((section) => section.id === sectionId)
  }

  return (
    <ContentContext.Provider value={{ content, globalAssets, globalSettings, updateText, updateImage, updateGlobalAsset, updateGlobalSetting, getSection }}>
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
