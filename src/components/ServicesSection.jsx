import React from 'react'
import Card from './Card'

const ServicesSection = () => {
  return (
    <section className='py-6 px-8 mt-6'>
      <div className='flex flex-col md:flex-row max-w-5xl mx-auto gap-10'>
        <div>
          <h1>Future of support with new shape</h1>
          <p>Discuss your goals, determine success metrics, identify problems</p>

          <ul>
            <li>UX design content strategy</li>
            <li>Developmet of the product</li>
          </ul>

          <button>Get Started</button>
        </div>

        <div>
          <Card />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection