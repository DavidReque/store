'use client'

import Link from 'next/dist/client/link'
import { motion } from 'framer-motion'
import { productList } from '@/app/api/products'
import { useState } from 'react'

export default function Search ({ toggleInput, showInput }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [suggestedProducts, setSuggestedProducts] = useState([])

  const handleSearchTermChange = (e) => {
    const term = e.target.value
    setSearchTerm(term)

    const filtered = productList.filter(
      (pro) =>
        pro.name.toLowerCase().includes(term.toLowerCase()) &&
        !filteredProducts.some((filteredProduct) => filteredProduct.id === pro.id)
    )
    setFilteredProducts(filtered)

    const suggestions = filtered.filter(
      (pro) =>
        !suggestedProducts.some((suggestedProduct) => suggestedProduct.id === pro.id)
    )
    setSuggestedProducts(suggestions)
  }

  return (
    <div>
      <div className='lg:hidden'>
        {!showInput
          ? (
            <motion.button
              className='fixed top-5 right-16 z-10 hover:text-blue-500 transition-colors duration-200 ease-in-out'
              onClick={toggleInput}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
              <span className='sr-only'>Buscar</span>
            </motion.button>
            )
          : (
            <div className='relative'>
              <input
                className='placeholder-italic placeholder-slate-400 block bg-white w-[350px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='Buscar producto...'
                type='text'
                name='search'
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
              {suggestedProducts.length > 0 && (
                <div className='absolute bg-white mt-1 p-4 shadow-md rounded-md w-[400px]'>
                  {suggestedProducts.map((product) => (
                    <div key={product.id}>
                      <Link href={`/${product.id}`}>
                        <div className=' bg-white shadow-md rounded-md p-4 transform transition-transform duration-300 hover:-translate-y-2'>
                          <h3 className='text-lg font-bold mb-2'>{product.name}</h3>
                          <p className='text-gray-600 mb-2'>{product.description}</p>
                          <p className='text-blue-500 font-semibold'>{product.price}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              <button
                className='absolute top-0 right-0 flex items-center justify-center p-2'
                onClick={toggleInput}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            )}
      </div>
      <div className='ml-3 hidden lg:block'>
        <input
          className='placeholder-italic placeholder-slate-400 block bg-white w-[400px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          placeholder='Buscar producto...'
          type='text'
          name='search'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        {suggestedProducts.length > 0 && (
          <div className='absolute bg-white mt-1 p-4 shadow-md rounded-md w-[400px]'>
            {suggestedProducts.map((product) => (
              <div key={product.id}>
                <Link href={`/${product.id}`}>
                  <div className='bg-white shadow-md rounded-md p-4 transform transition-transform duration-300 hover:-translate-y-2'>
                    <h3 className='text-lg font-bold mb-2'>{product.name}</h3>
                    <p className='text-gray-600 mb-2'>{product.description}</p>
                    <p className='text-blue-500 font-semibold'>{product.price}</p>
                  </div>
                </Link>
                <button
                  className='absolute top-0 right-0 flex items-center justify-center p-2'
                  onClick={toggleInput}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
