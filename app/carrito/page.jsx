'use client'

import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Carrito () {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext)

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartItems.map((item) => (
          <div key={item.id}>
            <li>{item.name}</li>
            <button onClick={() => removeFromCart(item.id)}>Quitar producto</button>
            <button onClick={clearCart}>Limpiar carrito</button>
          </div>
        ))}
      </ul>
    </div>
  )
}
