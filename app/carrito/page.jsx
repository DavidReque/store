'use client'

import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import Total from './total'

export default function Carrito () {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext)
  const [quantities, setQuantities] = useState({})

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity
    }))
  }

  useEffect(() => {
    document.title = 'Carrito'
    return () => {
      document.title = 'Online Store'
    }
  }, [])

  return (
    <div className='p-4 min-h-screen max-h-screen'>
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
                  className='flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md'
                >
                  <div className='flex items-center mb-2 sm:mb-0'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-12 h-12 object-cover mr-4'
                    />
                    <div>
                      <h3 className='text-lg font-bold'>{item.name}</h3>
                      <p className='text-gray-500'>Precio: ${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, (quantities[item.id] || 1) - 1)}
                      className='border rounded-md px-2 py-1'
                    >
                      -
                    </button>
                    <input
                      type='number'
                      value={quantities[item.id] || 1}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))}
                      className='border rounded-md p-1 mx-2 w-24 text-center'
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, (quantities[item.id] || 1) + 1)}
                      className='border rounded-md px-2 py-1'
                    >
                      +
                    </button>
                  </div>

                  <span className='text-blue-600'>
                    ${(item.price * (quantities[item.id] || 1)).toFixed(2)}
                  </span>

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
                      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
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
      {cartItems.length <= 0
        ? ('')
        : (
          <div>
            <Total cartItems={cartItems} quantities={quantities} />
          </div>
          )}
    </div>
  )
}
