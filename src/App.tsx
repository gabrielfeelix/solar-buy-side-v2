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
  PricingSection,
  BuyerWaveSection,
  AuthoritySection,
  LeadMagnetSection,
  FAQSection,
  Footer,
} from './components'

function App() {
  useEffect(() => {
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
  }, [])

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
      <PricingSection id="oferta" />
      <BuyerWaveSection />
      <AuthoritySection />
      <PricingSection id="oferta-final" />
      <LeadMagnetSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
