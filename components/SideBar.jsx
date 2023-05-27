import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Menu from './Menu'

export default function SidebarMenu () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <motion.button
        className='fixed top-5 left-5 z-10'
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className='h-6 w-6 text-black'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </motion.button>

      {isOpen && (
        <motion.div
          className='bg-slate-300 fixed top-0 left-0 h-full z-20 flex'
          onClick={closeMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className='bg-white w-52 rounded-md'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className='absolute top-2 right-2 p-2 rounded-md'
              onClick={closeMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className='h-6 w-6 text-black'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </motion.button>

            <Menu />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}