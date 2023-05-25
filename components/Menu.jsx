'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Tooltip } from '@chakra-ui/react'

const data = [
  { id: 1, name: 'Inicio', url: '/' },
  { id: 2, name: 'Computadoras', url: '/computadoras' },
  { id: 3, name: 'Celulares', url: '/celulares' },
  { id: 4, name: 'Impresoras', url: '/impresoras' }
]

const subMenu = [
  { id: 1, name: 'Mantenimiento', url: './computadoras/mantenimiento' },
  { id: 2, name: 'Gamer', url: '/computadoras/gamer' },
  { id: 3, name: 'accesorios', url: '/accesorios/computadoras' }
]

export default function Menu () {
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  const showSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  return (
    <ul>
      {data.map((products) => (
        <div className='flex hover:bg-slate-100 h-[45px]' key={products.id}>
          <Tooltip label={products.name} aria-label='A tooltip'>
            <Link className='ml-3 mt-3 w-full' href={products.url}>
              {products.name.toLocaleUpperCase()}
            </Link>
          </Tooltip>
        </div>
      ))}
      {showSubMenu && (
        <ul>
          {subMenu.map((moreProducts) => (
            <li key={moreProducts.id}>
              <Link href={moreProducts.url}>
                {moreProducts.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </ul>
  )
}
