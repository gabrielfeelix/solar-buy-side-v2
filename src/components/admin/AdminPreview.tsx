import React from 'react'
import { HeroSectionPotato } from '../HeroSectionPotato'
import { ContextSection } from '../ContextSection'
import { VideoSection } from '../VideoSection'
import { AudienceSection } from '../AudienceSection'
import { PricingSection } from '../PricingSection'
import { TestimonialsSection } from '../TestimonialsSection'
import { StoryBridgeSection } from '../StoryBridgeSection'
import { SellerCodeSection } from '../SellerCodeSection'
import { ManualStrategicSection } from '../ManualStrategicSection'
import { BuyerWaveSection } from '../BuyerWaveSection'
import { AuthoritySection } from '../AuthoritySection'
import { LeadMagnetSection } from '../LeadMagnetSection'
import { FAQSection } from '../FAQSection'

interface AdminPreviewProps {
  sectionId: string
  texts: { [key: string]: string }
  images: { [key: string]: string }
}

export const AdminPreview: React.FC<AdminPreviewProps> = ({ sectionId }) => {
  // Renderiza o componente REAL da seção selecionada
  if (sectionId === 'hero') {
    return <HeroSectionPotato />
  }

  if (sectionId === 'context') {
    return <ContextSection />
  }

  if (sectionId === 'video') {
    return <VideoSection />
  }

  if (sectionId === 'audience') {
    return <AudienceSection />
  }

  if (sectionId === 'pricing') {
    return <PricingSection />
  }

  if (sectionId === 'testimonials') {
    return <TestimonialsSection />
  }

  if (sectionId === 'story-bridge') {
    return <StoryBridgeSection />
  }

  if (sectionId === 'seller-code') {
    return <SellerCodeSection />
  }

  if (sectionId === 'manual-strategic') {
    return <ManualStrategicSection />
  }

  if (sectionId === 'buyer-wave') {
    return <BuyerWaveSection />
  }

  if (sectionId === 'authority') {
    return <AuthoritySection />
  }

  if (sectionId === 'lead-magnet') {
    return <LeadMagnetSection />
  }

  if (sectionId === 'faq') {
    return <FAQSection />
  }

  if (sectionId === 'newsletter') {
    return (
      <div className="p-12 text-center bg-slate-50 rounded-lg">
        <p className="text-slate-600 text-sm mb-2">Seção: Newsletter</p>
        <p className="text-slate-500 text-xs">
          Esta seção aparece no rodapé do site. Edite os textos à esquerda e salve as alterações.
        </p>
      </div>
    )
  }

  if (sectionId === 'privacy-policy') {
    return (
      <div className="p-12 text-center bg-slate-50 rounded-lg">
        <p className="text-slate-600 text-sm mb-2">Política de Privacidade</p>
        <p className="text-slate-500 text-xs">
          Esta seção aparece em /politica-de-privacidade. Edite o conteúdo à esquerda e salve as alterações.
        </p>
      </div>
    )
  }

  if (sectionId === 'terms-of-use') {
    return (
      <div className="p-12 text-center bg-slate-50 rounded-lg">
        <p className="text-slate-600 text-sm mb-2">Termos de Uso</p>
        <p className="text-slate-500 text-xs">
          Esta seção aparece em /termos-de-uso. Edite o conteúdo à esquerda e salve as alterações.
        </p>
      </div>
    )
  }

  if (sectionId === 'antipiracy') {
    return (
      <div className="p-12 text-center bg-slate-50 rounded-lg">
        <p className="text-slate-600 text-sm mb-2">Medidas Antipiratarias</p>
        <p className="text-slate-500 text-xs">
          Esta seção aparece em /medidas-antipiratarias. Edite o conteúdo à esquerda e salve as alterações.
        </p>
      </div>
    )
  }

  return (
    <div className="p-12 text-center">
      <p className="text-slate-600">Preview não disponível para esta seção</p>
    </div>
  )
}
