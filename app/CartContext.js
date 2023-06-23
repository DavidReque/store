'use client'

import React, { createContext, useReducer } from 'react'

// Definir el estado inicial del carrito
const initialState = {
  cartItems: []
}

// Definir el reducer para el carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    default:
      return state
  }
}

// Crear el contexto del carrito
export const CartContext = createContext()

// Crear el proveedor de contexto
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
