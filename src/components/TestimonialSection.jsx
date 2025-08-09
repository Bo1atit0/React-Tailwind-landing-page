import React from 'react'
import testimonials from './Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const TestimonialSection = () => {
  return (
    <section className='mx-w-5xl mx-auto mt-12 px-8 md:px-4'>
      {/* header */}
      <div className='text-center mb-14'>
        <h2 className='font-bold text-2xl md:text-3xl '>What Our happy clients say</h2>
        <p className='text-neutral-600 text-sm mb-6'>Things that make it the best place to start trading</p>
      </div>

      {/* testimonials */}
      <div >
        {/* slider */}
        <div className='relative flex justify-center items-center  container mx-auto'>
          <Swiper
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            // loop={true}
            // navigation={true}

            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3},
            }}
            // loop = {true}
            navigation = {
              {
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }
            }
            modules={[Navigation]}
            className="testimonialSwiper  "
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className=' h-full md:py-4 px-8 md:px-4'>
                <div className='flex flex-col text-center items-center shadow-lg shadow-neutral-500 rounded-lg py-4 md:h-60  '>
                  <div className='flex items-center justify-center h-15 w-15'>
                    <img src={testimonial.image} alt="" className='rounded-full '/>
                  </div>
                  <div>
                    {[...Array(5)].map((_, startIndex) => (
                      <span key={startIndex} className='text-yellow-400'>★</span>
                    ))}
                  </div>
                  <h3 className='font-bold text-xl'>{testimonial.name}</h3>
                  <p className='text-xs text-neutral-600 h-full w-2/3'>{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
            
          </Swiper>
        </div>

          {/*Navigation Buttons */}
         <div className=' my-12 flex items-center justify-center gap-8'>
          <button className='swiper-button-prev-custom h-8 w-8 hover:scale-110 flex items-center justify-center hover:bg-blue-600  rounded-full hover:text-white border border-gray-200 transition-all duration-300  cursor-pointer hover:border-white'>
              <BsChevronLeft size={12} />
          </button>

          <button className='swiper-button-next-custom h-8 w-8 hover:scale-110 flex items-center justify-center hover:bg-blue-600  rounded-full hover:text-white border border-gray-200 transition-all duration-300  cursor-pointer hover:border-white'>
              <BsChevronRight size={12} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection