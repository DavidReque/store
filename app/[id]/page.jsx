import React from 'react'
import { productList } from '@/app/api/products'

export default function Celular ({ params }) {
  const celularId = parseInt(params.id)
  const celular = productList.find((product) => product.id === celularId)

  if (!celular) {
    return <div>No se encontró el celular</div>
  }

  return (
    <div className='container mx-auto mt-10'>
      <h1 className='text-2xl font-semibold mb-6'>Detalles del celular</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
        <img
          className='w-80 h-auto object-contain hover:opacity-75'
          src='https://diunsa.vtexassets.com/arquivos/ids/228329-500-auto?v=1772581964&width=500&height=auto&aspect=true'
          alt={celular.name}
        />
        <div className='text-center'>
          <h3 className='text-xl font-bold mb-2'>{celular.name}</h3>
          <p className='text-gray-600 mb-2 text-justify'>{celular.description}</p>
          <p className='text-blue-500 font-semibold'>{celular.price}</p>
          <button className='bg-blue-500 p-4 rounded-xl m-5'>
            Agregar al carrito
          </button>
        </div>
      </div>
      <div>
        <h2 className='bg-blue-300 rounded-3xl p-2'>PRODUCTOS RELACIONADOS</h2>
      </div>
    </div>
  )
}
