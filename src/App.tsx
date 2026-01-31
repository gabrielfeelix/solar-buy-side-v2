import './App.css'
import { useEffect } from 'react'
import {
  SolarHeader,
  HeroSectionPotato,
  ContextSection,
  VideoSection,
  AudienceSection,
  ManualStrategicSection,
  TestimonialsSection,
  StoryBridgeSection,
  SellerCodeSection,
  PricingSection,
  BuyerWaveSection,
  AuthoritySection,
  LeadMagnetSection,
  FAQSection,
  ContactSection,
  Footer,
  LegalPage,
} from './components'
import { antipiracySections, privacySections, termsSections } from './legal/legalContent'

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  const legalPages = {
    '/politica-de-privacidade': {
      title: 'Política de Privacidade',
      sections: privacySections,
    },
    '/termos-de-uso': {
      title: 'Termos de Uso',
      sections: termsSections,
    },
    '/medidas-antipiratarias': {
      title: 'Medidas Antipiratarias',
      sections: antipiracySections,
    },
  } as const
  const legalPage = legalPages[pathname as keyof typeof legalPages]

  useEffect(() => {
    if (legalPage) {
      return
    }
    const targets = document.querySelectorAll('section > *')
    targets.forEach((target) => target.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [legalPage])

  if (legalPage) {
    return (
      <div className="font-sans">
        <LegalPage title={legalPage.title} sections={legalPage.sections} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-[#020617] text-slate-400 font-sans overflow-x-hidden selection:bg-[#F97316] selection:text-white">
      <SolarHeader />
      <HeroSectionPotato />
      <ContextSection />
      <VideoSection />
      <AudienceSection />
      <ManualStrategicSection />
      <TestimonialsSection />
      <StoryBridgeSection />
      <SellerCodeSection />
      <PricingSection id="oferta" />
      <BuyerWaveSection />
      <AuthoritySection />
      <PricingSection id="oferta-final" />
      <LeadMagnetSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
