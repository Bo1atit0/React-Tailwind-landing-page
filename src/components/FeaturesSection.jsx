
import { Element } from 'react-scroll';

const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]

const FeaturesSection = () => {
  return (

    <Element name='services'>
      <section className='py-16 px-8 container mx-auto max-w-5xl'>

        {/* header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-2'>We can help your business</h2>
          <p className='text-gray-600'>When you resell besnik, you build trust and increase</p>
        </div>

        {/* features */}
        <div className='flex flex-col md:flex-row lg:flex-row gap-8 mb-12'>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col items-center text-center '>
              <div className='w-14 h-14 rounded-full flex items-center justify-center text-3xl' style={{backgroundColor: index === 0 ? '#f58989' : index === 1 ? '#a0f2fa' : '#e6b3e8'}}>
                {feature.icon}
              </div>

              <div>
                <h2 className='font-medium'>{feature.title}</h2>
                <p className='text-gray-500 text-sm text-center whitespace-normal'>{feature.description}</p>
              </div>

              
            </div>
          ))}
        </div>

        {/* button */}
        <div className='text-center'>
          <button className='px-8 py-4 rounded-full text-white cursor-pointer 
          font-semibold bg-blue-600 hover:bg-blue-700 hover:shadow-lg
          shadow-blue-300 
          transform
          hover:scale-105 
          active:scale-95 
          duration-300
          ease-in-out
          transition-all 
          '>Become a Partner</button>
        </div>

      </section>
    </Element>
  )
}

export default FeaturesSection