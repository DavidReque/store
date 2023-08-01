import { CartContext } from '@/app/context/CartContext'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddToCartButton ({ product }) {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(product)
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
  return (
    <div>
      <button
        onClick={handleAddToCart}
        className='flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 mr-2'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
        </svg>
        Agregar al carrito
      </button>
    </div>
  )
}
