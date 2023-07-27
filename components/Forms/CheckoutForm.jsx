'use client'

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import dynamic from 'next/dynamic'
import 'react-toastify/dist/ReactToastify.css'

export function CheckoutForm () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    toast.success('Felicidades por tu compra', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Duración de la notificación en milisegundos
      hideProgressBar: false, // Ocultar la barra de progreso
      closeOnClick: true, // Cerrar la notificación al hacer clic
      pauseOnHover: true, // Pausar la notificación al pasar el mouse
      draggable: false, // No permitir arrastrar la notificación
      progress: undefined // Personalizar el componente de progreso

    })
  }

  return (
    <div className='container mx-auto mt-8 px-4 md:flex'>
      <ToastContainer />
      <div className='bg-white p-6 rounded-lg shadow-lg md:w-1/2'>
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
            <label htmlFor='phone' className='block font-medium'>
              Teléfono:
            </label>
            <input
              type='number'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Ingresa tu número telefónico'
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
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Realizar compra
          </button>
        </form>
      </div>
      <div className='md:w-1/2 px-4'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold mb-4'>Condiciones de compra</h2>
          <div>
            <h3>Condiciones de Compra</h3>
            <ul>
              <li>
                <strong>Precios:</strong> Todos los precios incluyen impuestos.
              </li>
              <li>
                <strong>Formas de Pago:</strong> Aceptamos tarjetas de crédito, débito y transferencias.
              </li>
              <li>
                <strong>Envíos:</strong> Realizamos envíos nacionales e internacionales.
              </li>
              <li>
                <strong>Devoluciones:</strong> Tienes 15 días para devolver tu compra.
              </li>
              <li>
                <strong>Privacidad:</strong> Protegemos tus datos personales.
              </li>
              <li>
                <strong>Atención al Cliente:</strong> Siempre estamos disponibles para ayudarte.
              </li>
              <li>
                <strong>Garantía:</strong> Productos de calidad para tu satisfacción.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(CheckoutForm), { ssr: false })