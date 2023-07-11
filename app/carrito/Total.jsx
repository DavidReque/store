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
      <h2 className='font-bold'>Total: ${total.toFixed(2)}</h2>
    </div>
  )
}
