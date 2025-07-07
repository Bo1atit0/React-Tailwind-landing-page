import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

const navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const [activeLinks, setActiveLinks] = useState('#home')
  const navLinks = [
    { href: "#home", label: 'Home'},
    { href: "#about", label: 'About us'},
    { href: "#services", label: 'Our Services'},
    { href: "#testimonials", label: 'Testimonial'},
  ]

  return (
    <>

    <nav className='fixed top-0 left-0 bg-white/90 border-b right-0 border-gray-200 backdrop-blur-sm z-50  shadow-md'>
      <div className='flex items-center justify-between w-full mx-auto container h-16 px-4 md:h-20 sm:px-6 lg:px-8'>

        {/* Logo */}
        <div className='flex '>
          <div className='h-4 w-4 bg-blue-600 rounded-full cursor-pointer opacity-75 hover:opacity-100 transition-opacity'></div>
          <div className='h-4 w-4 bg-red-600 rounded-full cursor-pointer opacity-100 hover:opacity-75 -ml-2 transition-opacity'></div>
        </div>

        {/* Desktop Nav items */}
        <div className='hidden md:flex items-center gap-10'>
          {
            navLinks.map((links, index) => (
              <a 
              onClick={ () => { setActiveLinks(links.href)}}
              key={index} 
              href={links.href}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 
              after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all 
              ${activeLinks === links.href ? 'text-blue-500 after:w-full' : 'text-gray-600 hover:text-gray-900' }`}>
                {links.label}</a>
            ))
          }
        </div>

        {/* Button */}
        <div>
          <button className='hidden md:block text-sm font-medium  bg-blue-500 py-2.5 px-6 rounded-lg text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100'> Get in touch </button>
        </div>

        {/* Mobile menu */}
        <button className='md:hidden cursor-pointer hover:text-blue-500' onClick={() => {setIsOpen(!isOpen)}}>
          {isOpen ? <MdClose className='size-6'/> :  <CiMenuBurger className='size-6'/>}
        </button>
      </div>

      {/* mobile menu items */}
      {
        isOpen && (
          <div className='md:hidden bg-white border-t border-gray-300 py-4 space-y-4'>

            <div className='px-4 container space-y-4 mx-auto'>
              {
              navLinks.map((links, index) => (
                  <div>
                    <a
                      key={index}
                      onClick={() => { 
                      setActiveLinks(links.href)
                      setIsOpen(false)
                      }}
                      href={links.href}
                      className={` text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:bg-blue-500 after:h-0.5 after:transition-all
                        ${activeLinks === links.href ? 'text-blue-500 after:w-full' : 'text-gray-400'}`}>
                          {links.label}
                    </a>
                  </div>
                ))
              }

              {/* Button */}
              <div>
                <button className='md:hidden text-sm font-medium 
              bg-blue-500 py-2.5 px-6 rounded-lg text-white cursor-pointer
                hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100 
                w-full'> 
              Get in touch </button>
            </div>
            </div>

            

          </div>
        )
      }
    </nav>

    
    </>
  )
}

export default navbar