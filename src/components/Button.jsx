import React from 'react'
import { motion, scale } from 'framer-motion'

const Button = ({ children }) => {
  return (
    <>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8}}
        className='bg-blue-500 text-sm font-semibold text-white py-3 px-6 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-300 ease-in-out'>{children}</motion.button>
    </>
  )
}

export default Button