import React, { useRef, useState } from 'react'

const PricingSection = () => {

  const rangeRef = useRef(0)
  const labelref = useRef(0)


  const [productCount, setProductCount] = useState('1')
  const starterPrice = Math.round(4000 * (productCount / 50))
  const businessPrice = Math.round(7500 * (productCount / 50))

  // Helper function for slider color
 function sliderColor(count) {
  const percentage = (count / 50) * 100;

  // Each step = 10 units = 20%
  const step = 10;
  const stepPercent = 100 / 50 * step; // = 20

  const colors = [
    { max: 10, color: '#ff6666' },  // red
    { max: 20, color: '#295ef0' },  // blue
    { max: 30, color: '#10b981' },  // green
    { max: 40, color: '#facc15' },  // yellow
    { max: 50, color: '#a855f7' },  // purple
  ];

  let gradientParts = [];
  let filledPercent = 0;

  for (let i = 0; i < colors.length; i++) {
    const currentStepMax = colors[i].max;
    const color = colors[i].color;

    if (count >= currentStepMax) {
      // Full section
      filledPercent += stepPercent;
      gradientParts.push(`${color} ${filledPercent}%`);
    } else {
      // Partial fill
      const filledInThisStep = percentage - (stepPercent * i);
      filledPercent += filledInThisStep;
      gradientParts.push(`${color} ${filledPercent}%`);
      break;
    }
  }

  // Add gray from the end of filledPercent to 100%
  gradientParts.push(`#d1d5db ${filledPercent}%`);

  return `linear-gradient(to right, ${gradientParts.join(', ')})`;
}


  return (
    <section className='max-w-5xl mx-auto p-8 flex flex-col gap-10 mt-10'>
      <div>
        <h1 className='text-center text-3xl font-bold'>Pricing</h1>
      </div>

      <div className='flex items-center gap-8'>
        <div className='bg-white shadow-lg p-4 flex-1'>
          <h2 className='text-gray-400 font-semibold mb-4'>Starter</h2>
          <p className='font-bold text-2xl '>${starterPrice}/mo</p>
        </div>

        <div className='bg-white shadow-lg p-4 flex-1'>
          <h2 className='text-gray-400 font-semibold mb-4'>Business</h2>
          <p className='font-bold text-2xl '>${businessPrice}/mo</p>
        </div>
      </div>

      <div className='flex flex-col text-center'>
        <p className='text-gray-400 '>{productCount} {productCount > 1 ? 'products' : 'product'}</p>

        {/* slider container */}
         <div className='relative' >
          {/* <div className='absolute w-8 -top-8 left-78 bg-white shadow-lg shadow-black  py-1'>{productCount}</div> */}
          <span>1</span>
          <input type="range" 
                 value={productCount} 
                 onChange={(e) => setProductCount(e.target.value)}
                 min={1} max={50}
                 className={`w-full lg:w-1/3 md:w-1/3 h-2 rounded-lg appearance-none bg-gray-300 cursor-pointer mx-2`}
                 style={{
                  background: sliderColor(productCount)
                 }}/>      
          <span>50</span>       
          </div>
        
      </div>

      <div className='flex flex-col gap-4 items-center'>
        <p className='text-gray-400 '>Ready to get started?</p>
        <button className='bg-blue-500 text-sm font-semibold text-white py-3 px-6 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-300 ease-in-out'>Get Started</button>
      </div>
    </section>
  )
}

export default PricingSection