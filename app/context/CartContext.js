'use client'

import React, { createContext, useState } from 'react'

// Crear el contexto del carrito
export const CartContext = createContext()

// Crear el proveedor de contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
