import React from 'react'
import stats from '../assets/stats.webp';
import { FaArrowRight } from "react-icons/fa6";

const Schedule = () => {
  return (
    <section className='  my-15 px-4'>
      <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between md:gap-24 gap-8 p-8 max-w-5xl mx-auto'>

        {/* left */}
        <div className='w-full md:w-1/2 lg:w-1/2'>
          <img src={stats} alt="Schedule Image" />
        </div>

        {/* right */}
        <div className='md:w-1/2 lg:w-1/2 w-full flex flex-col gap-2'>
          <p className='font-bold text-amber-500'>SCHEDULE</p>

          <h1 className='text-3xl font-bold'>Streamline Your Business <br/>  With Smart Scheduling Solutions</h1>

          <p className='text-neutral-600 text-sm'>
            Take control of your time and boost productivity with our inteligent Scheduling
            system. Automate appointments, manage team availability and deliver exceptional 
            customer experiemces through seamless calender management
          </p>

          <a href="#" className='flex items-center gap-2 hover:gap-4 transition-all duration-500 text-blue-500 mt-4'>
             Explore scheduling features
             <FaArrowRight className='' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Schedule