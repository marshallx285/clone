import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Feature from '../components/Feature/Feature'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'

function LandingPage() {
  return (
     <div className="flex flex-col min-h-screen">
        <Navbar/>
       <main className="flex-grow">
         <Hero/>
         <Feature/>
         <CTA/>
       </main>
       <Footer/>
     </div>
  )
}

export default LandingPage