import React from 'react'
import { productList } from '@/app/api/products'

export default function ProductsList ({ router }) {
  console.log(router)
  return (
    <div className='mr-7 ml-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {productList.map((product) => (
        <div
          key={product.id} className='bg-white shadow-md rounded-md p-4' onClick={() => {
            router.push(`/celulares/${product.id}`)
          }}
        >
          <img
            src='https://diunsa.vtexassets.com/arquivos/ids/228329-500-auto?v=1772581964&width=500&height=auto&aspect=true'
            alt={product.name}
            className='w-full h-52 object-contain mb-4'
          />
          <h3 className='text-lg font-bold mb-2'>{product.name}</h3>
          <p className='text-gray-600 mb-2'>{product.description}</p>
          <p className='text-blue-500 font-semibold'>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
