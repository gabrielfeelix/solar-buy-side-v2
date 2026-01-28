import './App.css'
import {
  SolarHeader,
  HeroSectionPotato,
  ContextSection,
  VideoSection,
  AudienceSection,
  ManualStrategicSection,
  ImpactSection,
  TestimonialsSection,
  StoryBridgeSection,
  DeliverablesSection,
  PricingSection,
  BuyerWaveSection,
  ReviewsSection,
  AuthoritySection,
  LeadMagnetSection,
  FAQSection,
  Footer,
} from './components'

function App() {
  return (
    <div className="bg-[#020617] text-slate-400 font-sans overflow-x-hidden selection:bg-[#F97316] selection:text-white">
      <SolarHeader />
      <HeroSectionPotato />
      <ContextSection />
      <VideoSection />
      <AudienceSection />
      <ManualStrategicSection />
      <ImpactSection />
      <TestimonialsSection />
      <StoryBridgeSection />
      <DeliverablesSection />
      <PricingSection id="oferta" />
      <BuyerWaveSection />
      <ReviewsSection />
      <AuthoritySection />
      <PricingSection id="oferta-final" />
      <LeadMagnetSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
