import React from 'react'
import HeroSection from './HeroSection'
import SolutionSection from './SolutionSection'
import FeaturesSection from './FeaturesSection'
import FAQSection from './FAQSection'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className="bg-neutral-n0 content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full">
      <HeroSection />
      <SolutionSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default LandingPage
