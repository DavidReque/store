'use client'
import React, { useState } from 'react'
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
    <div className={`relative ${isOpen ? 'animate-fadeIn' : ''}`}>
      <button
        className='fixed top-5 left-5 z-10'
        onClick={toggleMenu}
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
      </button>

      {isOpen && (
        <div
          className='bg-slate-300 fixed top-0 left-0 h-full w-full bg-opacity-50 z-20 flex'
          onClick={closeMenu}
        >
          <div className='bg-white w-60 rounded-md'>
            <button
              className='absolute top-2 right-2 p-2 rounded-md'
              onClick={closeMenu}
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
            </button>

            <Menu />
          </div>
        </div>
      )}
    </div>
  )
}
