import React from 'react'
import { productList } from '@/app/api/products'

export default function Celular ({ params }) {
  const celularId = parseInt(params.id)
  const celular = productList.find(product => product.id === celularId)

  if (!celular) {
    return <div>No se encontró el celular</div>
  }

  return (
    <div className='gap-3'>
      <h1 className='flex justify-center items-center text-2xl font-semibold'>Detalles del celular</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
        <img className='w-6/12 h-6/12 object-cover hover:opacity-75 m-7' src={celular.image} alt={celular.name} />
        <h3 className='text-lg font-bold mb-2'>{celular.name}</h3>
        <p className='text-gray-600 mb-2'>{celular.description}</p>
        <p className='text-blue-500 font-semibold'>{celular.price}</p>
      </div>
    </div>
  )
}
