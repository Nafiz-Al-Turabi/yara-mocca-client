import React from 'react'
import NavbarArabic from '../components/NavbarArabic'
import Bannerarabic from '../components/Bannerarabic'
import Whowearearabic from '../components/Whowearearabic'
import Ourvisionandmissionarabic from '../components/Ourvisionandmissionarabic'
import DivisionsPageArabic from '../components/DivisionsPageArabic'
import WhoWeServePageArabic from '../components/WhoWeServePagearabic'
import HowWeWorkPageArabic from '../components/HowWeworkArabic'
import OurPresenceArabic from '../components/OurPresenceArabic'
import TrustComplianceArabic from '../components/TrustComplianceArabic'
import ContactUsArabic from '../components/ContactUsArabic'
import FooterArabic from '../components/FooterArabic'

export default function page() {
  return (
    <div >
        <NavbarArabic/>
        <Bannerarabic></Bannerarabic>
        <Whowearearabic/>
        <Ourvisionandmissionarabic/>
        <DivisionsPageArabic/>
        <WhoWeServePageArabic></WhoWeServePageArabic>
        <HowWeWorkPageArabic/>
        <OurPresenceArabic/>
        <TrustComplianceArabic/>
        <ContactUsArabic/>
        <FooterArabic/>
    </div>
  )
}
