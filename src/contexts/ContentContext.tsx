import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { initialContent } from './ContentData'

export interface SectionContent {
  id: string
  name: string
  texts: { [key: string]: string }
  images: { [key: string]: string }
}

interface ContentContextType {
  content: SectionContent[]
  updateText: (sectionId: string, key: string, value: string) => void
  updateImage: (sectionId: string, key: string, value: string) => void
  getSection: (sectionId: string) => SectionContent | undefined
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SectionContent[]>(() => {
    const saved = localStorage.getItem('cms-content')
    return saved ? JSON.parse(saved) : initialContent
  })

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

  const getSection = (sectionId: string) => {
    return content.find((section) => section.id === sectionId)
  }

  return (
    <ContentContext.Provider value={{ content, updateText, updateImage, getSection }}>
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
