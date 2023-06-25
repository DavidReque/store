'use client'

import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Carrito () {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext)

  return (
    <div>
      {cartItems.length <= 0 && (
        <h1>Tu carrito esta vacio</h1>
      )}
      <ul>
        {cartItems.map((item) => (
          <div key={item.id}>
            <li>{item.name}</li>
            <button onClick={() => removeFromCart(item.id)}>Quitar producto</button>
          </div>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <button onClick={clearCart}>Limpiar carrito</button>
      )}
    </div>
  )
}
