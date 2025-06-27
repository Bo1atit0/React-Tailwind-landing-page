import React from 'react'

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
    <section className=' bg-gray-100 py-16 w-full px-4 sm:px-6 md:px-8'>
      
      <div className='flex flex-col gap-6 md:flex-row lg:flex-row mx-auto max-w-6xl container'>

        {/* header */}
        <div className='flex-1'>
          <h3 className='font-bold text-purple-600 text-xs '>ACHIEVE MORE</h3>
          <h2 className='font-extrabold text-xl text-gray-900 '>Purpose of a <br/> convoy is to keep <br/> your team</h2>
        </div>

        {/* BulletPoint */}
        <div className='flex-3 flex flex-col gap-4 md:flex-row lg:flex-row'>
          {features.map((feature, index) => (
            <div className='flex gap-2  items-start'>
              <div className='rounded-lg '>{feature.icon}</div>
              <div className='flex flex-col gap-2'>
                <h4 className='font-bold'>{feature.title}</h4>
                <p className='text-sm text-gray-600'>{feature.description}</p>
              </div>
            </div>
            ))}
        </div>
      </div>
      
    </section>
  )
}

export default PurposeSection