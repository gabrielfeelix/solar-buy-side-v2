import './App.css'
import {
  SolarHeader,
  HeroSectionPotato,
  VideoSection,
  ProductShowcase,
  FinalSections,
  TestimonialsSection,
  AuthoritySection,
  MarketContextSection,
  LeadMagnetSection,
  FAQSection,
  Footer,
} from './components'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <SolarHeader />
      <HeroSectionPotato />
      <VideoSection />
      <ProductShowcase />
      <FinalSections />
      <TestimonialsSection />
      <AuthoritySection />
      <MarketContextSection />
      <LeadMagnetSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
