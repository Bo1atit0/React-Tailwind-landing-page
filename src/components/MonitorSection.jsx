import React from 'react'
import MonitorCard from '../assets/monitor-card.webp'
import { FaArrowRight } from "react-icons/fa6";

const MonitorSection = () => {
  return (
    <section className='  px-4'>
      <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between max-w-5xl gap-4 mx-auto'>

        <div className='flex flex-col gap-4 w-full md:w-1/2 lg:w-1/2 px-12'>
          <p className='font-bold text-green-600'>MONITOR</p>

          <h2 className='font-bold text-3xl'>Introducing best mobile <br/> carousels</h2>

          <p className=' text-neutral-800'>
            Before the ship is really back. Round, round, all arund the world.
            Round, all around the world. Round, all round the world. Round, all around the world.
          </p>

          <a href="#" className='mt-4 text-blue-600 flex items-center gap-2 hover:gap-4 transition-all duration-500'>
            Learn more about monitoring
            <FaArrowRight />
          </a>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2'>
          <img src={MonitorCard} alt="Monitor card image" />
        </div>
      </div>
    </section>
  )
}

export default MonitorSection