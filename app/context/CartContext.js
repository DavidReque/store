'use client'

import React, { createContext, useState, useEffect } from 'react'

// Crear el contexto del carrito
export const CartContext = createContext()

// Crear el proveedor de contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // Cargar datos del carrito desde el localStorage al iniciar la aplicación
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems')
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems))
    }
  }, [])

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product]
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId)
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('cartItems')
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
