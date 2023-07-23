'use client'

import React, { createContext, useState, useEffect } from 'react'

// Crear el contexto del carrito
export const CartContext = createContext()

// Crear el proveedor de contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [quantities, setQuantities] = useState({})

  // Cargar datos del carrito desde el localStorage al iniciar la aplicación
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems')
    const storedQuantities = localStorage.getItem('quantities')
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems))
    }
    if (storedQuantities) {
      setQuantities(JSON.parse(storedQuantities))
    }
  }, [])

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product]
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId)
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  const clearCart = () => {
    setCartItems([])
    setQuantities({})
    localStorage.removeItem('cartItems')
    localStorage.removeItem('quantities')
  }

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity
    }))
    localStorage.setItem('quantities', JSON.stringify({ ...quantities, [productId]: quantity }))
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, quantities, handleQuantityChange }}
    >
      {children}
    </CartContext.Provider>
  )
}
