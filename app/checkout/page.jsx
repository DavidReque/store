'use client'

import React, { useState } from 'react'
import Form from './form'

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
      <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
    </div>
  )
}
