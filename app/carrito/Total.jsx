import React, { useEffect, useState } from 'react'

export default function Total ({ cartItems, quantities }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let calculoTotal = 0
    cartItems.forEach(item => {
      const quantity = quantities[item.id] || 1
      calculoTotal += item.price * quantity
    })
    setTotal(calculoTotal)
  }, [cartItems, quantities])

  return (
    <div className='text-center mt-4'>
      <h2 className='font-bold text-lg sm:text-xl md:text-2xl mb-2'>Total a pagar</h2>
      <div className='bg-gray-100 rounded-md p-4 inline-block'>
        <span className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  )
}
