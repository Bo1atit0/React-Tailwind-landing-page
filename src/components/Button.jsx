import React from 'react'

const Button = ({ children }) => {
  return (
    <>
        <button className='bg-blue-500 text-sm font-semibold text-white py-3 px-6 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-300 ease-in-out'>{children}</button>
    </>
  )
}

export default Button