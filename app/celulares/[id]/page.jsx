'use client'

import { productList } from '@/app/api/products'
import { CartContext } from '@/app/context/CartContext'
import { useContext, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RelatedProducts from './ReloadProducts'

export default function CelularesProduct ({ params }) {
  const { addToCart } = useContext(CartContext)

  const productId = parseInt(params.id)
  const productos = productList.find((product) => product.id === productId)

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
      document.title = 'Online store'
    }
  }, [productos])

  return (
    <div className='container mx-auto mt-10'>
      <ToastContainer />
      <h1 className='text-2xl font-semibold mb-6 text-center'>Detalles del producto</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
        <img
          className='w-80 h-auto object-contain hover:opacity-75'
          src={productos.image}
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
      <h2 className='bg-blue-300 rounded-3xl p-2 text-center mt-2 mb-8 mx-16'>
        PRODUCTOS RELACIONADOS
      </h2>
      <RelatedProducts productId={productId} />
    </div>
  )
}
