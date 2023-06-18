import React from 'react'
import { productList } from '@/app/api/products'
import Link from 'next/dist/client/link'

export default function ProductsList () {
  return (
    <div>
      <div>
        <h2 className='bg-gray-300 rounded-3xl p-2 text-center mt-2 mb-8 mx-16'>
          PRODUCTOS DESTACADOS
        </h2>
      </div>
      <div className='mr-16 mb-16 ml-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {productList.map((product) => (
          <Link href={`/${product.id}`} key={product.id}>
            <div className='bg-white shadow-md rounded-md p-4 transform transition-transform duration-300 hover:-translate-y-2'>
              <img
                src='https://diunsa.vtexassets.com/arquivos/ids/228329-500-auto?v=1772581964&width=500&height=auto&aspect=true'
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
  )
}
