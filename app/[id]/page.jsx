'use client'

import React, { useContext, useEffect, useState } from 'react'
import { productList } from '@/app/api/products'
import Carousel from './products'
import { CartContext } from '../context/CartContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Products ({ params }) {
  const productId = parseInt(params.id)
  const productos = productList.find((product) => product.id === productId)

  const [originalTitle, setOriginalTitle] = useState(document.title)

  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(productos)
    toast.success('Producto agregado al carrito', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Duración de la notificación en milisegundos
      hideProgressBar: false, // Ocultar la barra de progreso
      closeOnClick: true, // Cerrar la notificación al hacer clic
      pauseOnHover: true, // Pausar la notificación al pasar el mouse
      draggable: false, // No permitir arrastrar la notificación
      progress: undefined // Personalizar el componente de progreso

    })
  }

  useEffect(() => {
    if (productos) {
      document.title = productos.name
    }
    return () => {
      document.title = originalTitle
    }
  }, [productos, originalTitle])

  if (!productos) {
    return (
      <div className='min-h-screen max-h-screen flex justify-center items-center'>
        <h1 className='items-center text-center text-5xl'>No se encontró el producto 😞</h1>
      </div>
    )
  }

  return (
    <div className='container mx-auto mt-10'>
      <ToastContainer />
      <h1 className='text-2xl font-semibold mb-6 text-center'>Detalles del celular</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
        <img
          className='w-80 h-auto object-contain hover:opacity-75'
          src='https://diunsa.vtexassets.com/arquivos/ids/228329-500-auto?v=1772581964&width=500&height=auto&aspect=true'
          alt={productos.name}
        />
        <div className='text-center'>
          <h3 className='text-xl font-bold mb-2'>{productos.name}</h3>
          <p className='text-gray-600 mb-2 text-justify mx-10'>{productos.description}</p>
          <p className='text-blue-500 font-semibold'>{productos.price}</p>
          <button
            className='bg-blue-500 p-4 rounded-xl m-5 hover:opacity-80'
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      <div>
        <h2 className='bg-blue-300 rounded-3xl p-2 text-center mt-2 mb-8 mx-16'>
          PRODUCTOS RELACIONADOS
        </h2>
      </div>
      <Carousel productId={productId} />
    </div>
  )
}
