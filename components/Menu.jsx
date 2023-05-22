'use client'
import React from 'react'
import Link from 'next/link'
import { Tooltip } from '@chakra-ui/react'

const data = [
  { id: 1, name: 'Inicio', url: '/' },
  { id: 2, name: 'Computadoras', url: '/computadoras' },
  { id: 3, name: 'Celulares', url: '/celulares' },
  { id: 4, name: 'Impresoras', url: '/impresoras' }
]

export default function Menu () {
  return (
    <ul>
      {data.map((products) => (
        <div key={products.id}>
          <Tooltip label={products.name} aria-label='A tooltip'>
            <Link href={products.url}>
              <li>{products.name}</li>
            </Link>
          </Tooltip>
        </div>
      ))}
    </ul>
  )
}
