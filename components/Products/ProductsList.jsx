import React, { useState } from 'react'
import { productList } from '@/app/api/products'
import Link from 'next/dist/client/link'

export default function ProductsList () {
  const [selectedPriceRange, setSelectedPriceRange] = useState('')

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value)
  }

  const filterProductsByPriceRange = (product) => {
    if (selectedPriceRange === '') {
      return true
    }

    if (selectedPriceRange === 'low') {
      return product.price < 1000
    }

    if (selectedPriceRange === 'medium') {
      return product.price >= 1000 && product.price <= 2000
    }

    if (selectedPriceRange === 'high') {
      return product.price > 2000
    }

    return true
  }

  const filteredProducts = productList.filter(filterProductsByPriceRange)

  return (
    <div>
      <div>
        <h2 className='bg-gray-300 rounded-3xl p-2 text-center mt-2 mb-8 mx-16'>
          PRODUCTOS DESTACADOS
        </h2>
      </div>
      <div>
        <div className='flex justify-center mb-4'>
          <select
            value={selectedPriceRange}
            onChange={handlePriceRangeChange}
            className='p-2 border border-gray-300 rounded-md'
          >
            <option value=''>Todos los precios</option>
            <option value='low'>Menor a $1000</option>
            <option value='medium'>$1000 - $2000</option>
            <option value='high'>Mayor a $2000</option>
          </select>
        </div>
        <div className='mr-16 mb-16 ml-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredProducts.map((product) => (
            <Link href={`/${product.id}`} key={product.id}>
              <div className='bg-white shadow-md rounded-md p-4 transform transition-transform duration-300 hover:-translate-y-2'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-52 object-contain mb-4'
                />
                <h3 className='text-lg font-bold mb-2'>{product.name}</h3>
                <p className='text-gray-600 mb-2'>{product.description}</p>
                <p className='text-blue-500 font-semibold'>{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
