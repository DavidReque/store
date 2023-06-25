'use client'

import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Carrito () {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext)

  return (
    <div className='p-4'>
      {cartItems.length <= 0
        ? (
          <h1 className='text-center text-xl'>Tu carrito está vacío</h1>
          )
        : (
          <div>
            <ul className='space-y-4'>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className='flex items-center justify-between bg-white p-4 rounded-lg shadow-md'
                >
                  <li className='text-lg'>{item.name}</li>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className='flex items-center justify-center text-blue-500 hover:text-blue-700'
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
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </ul>
            <button
              onClick={clearCart}
              className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Limpiar carrito
            </button>
          </div>
          )}
    </div>
  )
}
