import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import Schedule from './components/Schedule'
import MonitorSection from './components/MonitorSection'
import { Element } from 'react-scroll';
import PricingSection from './components/PricingSection'
import Boxref from './components/Boxref'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'

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
        </div>
      </main>   
      
    </>
  )
}

export default App
