'use client'

import React, { useState } from 'react'

export default function Formulario () {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    idORtn: '',
    depto: '',
    city: '',
    postalCode: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes enviar los datos del formulario al servidor o realizar alguna acción adicional
    console.log(formData)
  }

  return (
    <div>
      <section className='max-w-xl mx-auto p-4'>
        <h2 className='text-2xl font-bold mb-6'>Realizar pago</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block mb-1 font-semibold' htmlFor='fullName'>
              Nombre completo *
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div>
            <label className='block mb-1 font-semibold' htmlFor='email'>
              Email *
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div>
            <label className='block mb-1 font-semibold' htmlFor='address'>
              Telefono *
            </label>
            <input
              type='number'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div>
            <label className='block mb-1 font-semibold' htmlFor='address'>
              Identidad o RTN *
            </label>
            <input
              type='number'
              id='idORtn'
              name='idORtn'
              value={formData.idORtn}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div>
            <label className='block mb-1 font-semibold' htmlFor='address'>
              Dirección de la calle *
            </label>
            <input
              type='text'
              id='address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div>
            <label className='block mb-1 font-semibold' htmlFor='address'>
              Departamento *
            </label>
            <input
              type='text'
              id='depto'
              name='depto'
              value={formData.depto}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div>
            <label className='block mb-1 font-semibold' htmlFor='city'>
              Ciudad *
            </label>
            <input
              type='text'
              id='city'
              name='city'
              value={formData.city}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div>
            <label className='block mb-1 font-semibold' htmlFor='city'>
              Codigo postal
            </label>
            <input
              type='number'
              id='postalCode'
              name='postalCode'
              value={formData.postalCode}
              onChange={handleChange}
              className='w-full p-2 border rounded'
            />
          </div>
        </form>
      </section>
    </div>
  )
}
