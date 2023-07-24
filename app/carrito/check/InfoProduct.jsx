'use client'

import { CartContext } from '@/app/context/CartContext'
import { useContext } from 'react'

export default function InfoProduct () {
  const { cartItems, quantities } = useContext(CartContext)
  const shippingCost = 130

  function getTotalPrice () {
    let totalPrice = 0
    cartItems.forEach((item) => {
      const quantity = quantities[item.id] || 1
      totalPrice += item.price * quantity
    })
    return totalPrice
  }

  const subTotal = getTotalPrice()
  const total = subTotal + shippingCost

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Resumen de compra</h2>
      <div className='border border-gray-300 rounded-lg p-4'>
        <div className='mb-4'>
          <h3 className='text-xl font-semibold mb-2'>Productos en el carrito:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className='mb-2'>
                <span className='font-semibold'>{item.name}</span> x {quantities[item.id] || 1} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
        <div className='mb-4'>
          <h3 className='text-xl font-semibold'>Subtotal:</h3>
          <p>${subTotal.toFixed(2)}</p>
        </div>
        <div className='mb-4'>
          <h3 className='text-xl font-semibold'>Costo de envío:</h3>
          <p>${shippingCost.toFixed(2)}</p>
        </div>
        <div className='mb-4'>
          <h3 className='text-2xl font-semibold'>Total a pagar:</h3>
          <p className='text-2xl font-bold'>${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
