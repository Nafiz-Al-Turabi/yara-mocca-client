import React from 'react'
import Navbar from './Navbar'
import HeroBanner from './banner'
import WhoWeAre from './Whoweare'
import VisionAndMission from './VisionAndMission'
import WhoWeServePage from './WhoWeSearvePage'
import HowWeWorkPage from './HowWeWork'
import OurPresence from './OurPresence'
import TrustCompliance from './TrustCompliance'
import ContactUs from './ContactUs'
import Footer from './Footer'
import DivisionsPage from './DivisionsPage'

export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <HeroBanner/>
        <WhoWeAre/>
        <VisionAndMission/>
        <DivisionsPage/>
        <WhoWeServePage/>
        <HowWeWorkPage/>
        <OurPresence/>
        <TrustCompliance/>
        <ContactUs/>
        <Footer/>
      
    </div>
  )
}
