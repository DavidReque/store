import { createContext, useReducer } from 'react'

const initialState = []

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload]
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
