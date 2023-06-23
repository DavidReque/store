'use client'

import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

export default function Carrito () {
  const { cart, dispatch } = useContext(CartContext)

  const handleRemoveProduct = (productId) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: productId })
  }

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cart.cartItems.map((item) => (
          <div key={item.id}>
            <li>{item.name}</li>
            <button onClick={() => handleRemoveProduct(item.id)}>Quitar</button>
          </div>
        ))}
      </ul>
    </div>
  )
}
