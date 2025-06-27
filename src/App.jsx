import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'

function App() {

  return (
    <>
      <main className='relative min-h-screen overflow-x-hidden'>
        <div className='absolute -top-28 -left-28 h-[500px] w-[500px] -z-10 blur-[80px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full'></div>
        <div className='overflow-x-hidden'>
          <Navbar />
          <Hero />
          <CompanyLogo />
          <PurposeSection />
        </div>
      </main>   
      
    </>
  )
}

export default App
