import React from 'react'
import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'
import woocommerce from '../assets/woocommerce.png'

const CompanyLogo = () => {

  const logos = [slack, amazon, meundies, sitepoint, woocommerce];
  return (
    <section className='overflow-hidden  container w-full py-20  sm:px-6 px-4 mx-auto flex sm:flex-row sm:items-center flex-col items-start gap-8'>
      <div className=' border-l-4 border-blue-500 px-4 font-semibold shrink-0 sm:text-base text-xl text-gray-500 text-left z-10'>
        Proud partner at <br /> Hubspot & Segment
      </div>

      <div className=' overflow-hidden'>
        {/* animation div */}
      <div className=' flex animate-marquee space-x-8'>
          {logos.map((logo, index) => (
          <img src={logo} alt=" Company Logo" className=' h-8 w-28 mx-8 object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 cursor-pointer transition-all' />
        ))}
        
           {logos.map((logo, index) => (
          <img src={logo} alt=" Company Logo" className=' h-8 w-28 mx-8 object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 cursor-pointer transition-all' />
        ))}        
      </div>
      </div>
    </section>
  )
}

export default CompanyLogo;