import React from 'react'
import Hero from '../Components/Hero'
import StatsBar from '../Components/StatusBar'
import WhatWeBuilding from '../Components/WhatWeAreBuilding'
import HowItWorks from '../Components/HowItWorks'
import IndustriesSection from '../Components/Industries'
import WhyUs from '../Components/WhyUs'
import ResourcesTeaser from '../Components/Resources'
import CTABanner from '../Components/CTA'

const Home = () => {
  return (
    <div>
      <Hero/>
      <StatsBar/>
      <WhatWeBuilding/>
      <HowItWorks/>
      <IndustriesSection/>
      <WhyUs/>
      <ResourcesTeaser/>
      <CTABanner/>
    </div>
  )
}

export default Home