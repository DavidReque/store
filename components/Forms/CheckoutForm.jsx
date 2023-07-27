'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

export function CheckoutForm () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes procesar la información del formulario, por ejemplo, enviarla a un servidor o realizar alguna acción con ella.
    console.log('Formulario enviado:', formData)
  }

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-semibold mb-4'>Información de contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' className='block font-medium'>
            Nombre completo:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Ingresa tu nombre completo'
            className='border border-gray-300 rounded-md p-2 w-full'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block font-medium'>
            Correo electrónico:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Ingresa tu correo electrónico'
            className='border border-gray-300 rounded-md p-2 w-full'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='address' className='block font-medium'>
            Dirección de envío:
          </label>
          <input
            type='text'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            placeholder='Ingresa tu dirección de envío'
            className='border border-gray-300 rounded-md p-2 w-full'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='city' className='block font-medium'>
            Ciudad:
          </label>
          <input
            type='text'
            id='city'
            name='city'
            value={formData.city}
            onChange={handleChange}
            placeholder='Ingresa tu ciudad'
            className='border border-gray-300 rounded-md p-2 w-full'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='zipCode' className='block font-medium'>
            Código postal:
          </label>
          <input
            type='text'
            id='zipCode'
            name='zipCode'
            value={formData.zipCode}
            onChange={handleChange}
            placeholder='Ingresa tu código postal'
            className='border border-gray-300 rounded-md p-2 w-full'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='country' className='block font-medium'>
            País:
          </label>
          <input
            type='text'
            id='country'
            name='country'
            value={formData.country}
            onChange={handleChange}
            placeholder='Ingresa tu país'
            className='border border-gray-300 rounded-md p-2 w-full'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Realizar compra
        </button>
      </form>
    </div>
  )
}

export default dynamic(() => Promise.resolve(CheckoutForm), { ssr: false })
