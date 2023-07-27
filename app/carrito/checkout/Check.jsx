'use client'

import { useContext } from 'react'
import CheckoutForm from '@/components/Forms/CheckoutForm'
import InfoProduct from './InfoProduct'
import { CartContext } from '@/app/context/CartContext'

export default function Check () {
  const { cartItems } = useContext(CartContext)

  return (
    <div>
      {cartItems.length >= 1
        ? (
          <div>
            <InfoProduct />
            <CheckoutForm />
          </div>
          )
        : (
          <div className='flex justify-center items-center my-96'>
            <h1 className='text-center text-3xl'>Carrito vacio</h1>
          </div>
          )}
    </div>
  )
}
