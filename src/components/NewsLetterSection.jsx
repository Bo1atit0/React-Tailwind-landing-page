import { FaArrowRightLong } from "react-icons/fa6";
import { Element } from "react-scroll";

const NewsLetterSection = () => {
  return (
    <Element name="newsletter">
    <section className=' max-w-5xl container mx-auto px-6 md:px-6 lg:px-8 py-6 md:py-12' >
      <div className='relative bg-blue-600 rounded-2xl py-16 overflow-hidden'>
        {/* bg-gradient */}
        <div className='absolute bg-blue-700 w-1/2 h-full top-0 right-0 rounded-r-2xl clip-path-slant'></div>
        
        {/* content */}
        <div className='flex flex-col md:flex-row justify-between px-8'>
          {/* left */}
          <div className='text-gray-200 z-10 mb-4 md:mb-0 lg:mb-0 text-center md:text-left'>
             <h2 className='text-2xl font-semibold'>Subscribe Newsletter</h2>
            <p>Best cooks and best delivery guys in the world</p>
          </div>

          {/* right */}
          <form action="" className="z-15 flex py-2 md:flex-row flex-col gap-2 md:gap-0"> 
            <input type="text" placeholder="Email Address" 
            className="bg-white py-2 px-2 md:px-6 rounded-lg md:rounded-r-none lg:rounded-r-none md:rounded-l-lg lg:rouded-l-lg "/>
            <button className="flex items-center justify-center gap-1 bg-green-500 px-4 py-2 rounded-lg  md:rounded-r-lg md:rounded-l-none lg:rounded-r-lg lg:rounded-l-none text-white cursor-pointer">
              <span>Discover</span>
              <FaArrowRightLong className="size-3"/>
            </button> 
          </form>
        </div>
      </div>

      <style>
        {
          `.clip-path-slant{
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }`
        }
      </style>
    </section>
    </Element>
  )
}

export default NewsLetterSection