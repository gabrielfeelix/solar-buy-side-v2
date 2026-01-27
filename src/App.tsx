import './App.css'
import {
  SolarHeader,
  HeroSectionPotato,
  VideoSection,
  AudienceSection,
  SystemSection,
  TestimonialsSection,
  ImpactSection,
  ReviewsSection,
  ComparisonSection,
  DeliverablesSection,
  ModulesSection,
  MarketContextSection,
  AuthoritySection,
  LeadMagnetSection,
  FAQSection,
  PricingSection,
  Footer,
} from './components'

function App() {
  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <SolarHeader />
      <HeroSectionPotato />
      <VideoSection />
      <AudienceSection />
      <SystemSection />
      <TestimonialsSection />
      <ImpactSection />
      <ReviewsSection />
      <ComparisonSection />
      <DeliverablesSection />
      <ModulesSection />
      <MarketContextSection />
      <AuthoritySection />
      <LeadMagnetSection />
      <FAQSection />
      <PricingSection />
      <Footer />
    </div>
  )
}

export default App
