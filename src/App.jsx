import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import Schedule from './components/Schedule'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/PricingSection'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'
import NewsLetterSection from './components/NewsLetterSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <main className='relative min-h-screen overflow-x-hidden select-none'>
        <div className='absolute -top-28 -left-28 h-[500px] w-[500px] -z-10 blur-[80px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full'></div>
        <div className='overflow-x-hidden'>

          <Navbar />
          <Hero />
          <CompanyLogo />
          <PurposeSection />
          <FeaturesSection />
          <Schedule/>
          <MonitorSection/>
          <PricingSection />
          <ServicesSection/>
          <TestimonialSection/>
          <NewsLetterSection />
          <Footer/>
        </div>
      </main>   
      
    </>
  )
}

export default App
