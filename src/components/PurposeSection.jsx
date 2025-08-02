import React from 'react'
import { Element } from 'react-scroll';

const PurposeSection = () => {

  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];

  return (
    <Element name='about'>
      <section className=' bg-gray-100 py-16 w-full px-8 md:px-20 '>

        <div className=' container mx-auto max-w-5xl flex flex-col md:flex-row lg:flex-row gap-4 md:gap-8 lg:gap-8'>
          <div className=' '>
            {/* header */}
            <p className='font-medium text-purple-600 text-sm mb-1'>ACHIEVE MORE</p>
            <h2 className='font-bold text-2xl md:text-3xl text-gray-900'>Purpose of a <br /> convoy is to keep <br /> your team</h2>
          </div>


          {/* BulletPoint */}
          <div className=' flex flex-col gap-4 md:flex-row lg:flex-row flex-2'>
            {features.map((feature, index) => (
              <div key={index} className='flex gap-1 md:gap-2 lg:gap-2 items-start flex-2'>
                <div className=' h-12 w-12 flex items-end'>{feature.icon}</div>
                <div className='flex flex-col gap-1'>
                  <h4 className='font-bold text-xl text-gray-900'>{feature.title}</h4>
                  <p className=' text-gray-600 text-sm'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </Element>
  )
}

export default PurposeSection