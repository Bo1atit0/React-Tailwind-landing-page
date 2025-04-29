import React from 'react'

const Hero = () => {
  return (
    <section className='pt-44 mx-auto pb-6 px-4 sm:px-6 lg:px-8 container flex flex-col md:flex-row justify-between items-center'>
      {/* left column */}
      <div className=' w-full md:w-1/2 space-y-8'>

        {/* star icon */}
        <div className='cursor-pointer group bg-gray-100 w-fit rounded-full px-4 py-2 flex items-center gap-2 hover:bg-gray-200 transition-colors'>
          <span className='text-blue-700 group-hover:scale-120 group-hover:text-amber-400 transition-transform'>★</span>
          <span className=' text-sm mt-0.5 font-medium'>Jump start your growth</span>
        </div>

        <h1 className='text-4xl font-bold leading-tight'>We boost the growth for 
          <span className='text-blue-600 inline-block after:bg-blue-100/60 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5'> Startup to Fortune 500 </span> companies <span className='hover:cursor-pointer hover:animate-pulse'>⏰</span>
        </h1>

        <p className='text-gray-600 text-lg md:text-xl max-w-xl'> Get the most accurate leads, sales people training and conversions, tools and more — all within the same one billing.</p>

        {/* email form */}
        <div className='flex gap-3 max-w-md'>
          <input 
            type="email" 
            placeholder='Email Address' 
            className='border border-gray-200 py-2 px-4 rounded-xl flex-1 focus:ring-2 focus:border-blue-600 focus:ring-blue-100 focus:outline-none transition-all'
          />

          <button className='bg-blue-500 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100 hover:cursor-pointer py-2 px-5 text-white rounded-lg font-medium text-sm '>→</button>
        </div>
      </div>


      {/* right column */}
      <div className='border-4'>right</div>
    </section>
  )
}

export default Hero