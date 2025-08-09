import React from 'react'

import services from './Services'
import Button from './Button'

const ServicesSection = () => {
  return (
    <section className='py-20 max-w-6xl mx-auto px-8 mt-6 '>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
        <div className='md:w-1/3  w-full '>
          <h1 className='font-bold text-3xl md:w-5/5 mb-6'>Future of support with new shape</h1>
          <p className=' text-gray-500  mb-4 w-full md:w-4/5'>Discuss your goals, determine success metrics, identify problems</p>

          <div className='flex flex-col mb-4 space-y-2'>
            {/* first list item */}
            <div className='flex gap-2'>
              {/* bullet point */}
              <div className='h-5 w-5 bg-indigo-100 rounded-full flex items-center justify-center'><div className='h-2.5 w-2.5 bg-indigo-600 rounded-full'></div></div>
              {/* list item */}
              <span className='text-gray-500 '>UX design content strategy</span>
            </div>

            {/* second list */}
             <div className='flex gap-2'>
              {/* bullet point */}
              <div className='h-5 w-5 bg-indigo-100 rounded-full flex items-center justify-center'><div className='h-2.5 w-2.5 bg-indigo-600 rounded-full'></div></div>
              {/* list item */}
              <span className='text-gray-500'>Developmet of the product</span>
            </div>

          </div>
          <div>
            < Button >Get Started</Button>
            {/* <button className=''>Get Started</button> */}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {services.map((service, index) => (
            <div className="bg-white shadow-lg rounded-lg shadow-neutral-300  md:max-w-60 py-4 px-3 
                              cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out active:scale-95 hover:shadow-xl">
              <div className='mb-4'>{service.icon}</div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-2"  >{service.description}</p>
              <a href="{service.link}" className="text-indigo-600 hover:text-indigo-700 transition-colors">Learn More</a>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default ServicesSection