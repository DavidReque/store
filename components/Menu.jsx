import { useState } from 'react'
import Link from 'next/link'

const data = [
  { id: 1, name: 'Inicio', url: '/' },
  {
    id: 2,
    name: 'Computadoras',
    url: '/computadoras',
    subCategories: [
      { id: 1, name: 'Mantenimiento', url: './computadoras/mantenimiento' },
      { id: 2, name: 'Gamer', url: '/computadoras/gamer' },
      { id: 3, name: 'Accesorios', url: '/computadoras/accesorios' }
    ]
  },
  {
    id: 3,
    name: 'Celulares',
    url: '/celulares',
    subCategories: [
      { id: 1, name: 'Fundas', url: './celulares/fundas' },
      { id: 2, name: 'Auriculares', url: '/celulares/auriculares' },
      { id: 3, name: 'Accesorios', url: '/celulares/accesorios' }
    ]
  },
  {
    id: 4,
    name: 'Impresoras',
    url: '/impresoras',
    subCategories: [
      { id: 1, name: 'Mantenimiento', url: './impresoras/mantenimiento' },
      { id: 3, name: 'Accesorios', url: '/impresoras/accesorios' }
    ]
  }
]

export default function Menu () {
  const [activeProduct, setActiveProduct] = useState(null)

  const handleMouseEnter = (product) => {
    setActiveProduct(product)
  }

  const handleMouseLeave = () => {
    setActiveProduct(null)
  }

  return (
    <ul>
      {data.map((product) => (
        <li
          key={product.id}
          className='flex hover:bg-slate-100 h-[45px]'
          onMouseEnter={() => handleMouseEnter(product)}
          onMouseLeave={handleMouseLeave}
        >
          <Link className='ml-3 mt-3 w-full' href={product.url}>
            {product.name.toLocaleUpperCase()}
          </Link>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              {activeProduct && activeProduct.id === product.id
                ? (
                  <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
                  )
                : (
                  <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                  )}
            </svg>
          </button>
        </li>
      ))}
      {activeProduct && activeProduct.subCategories && (
        <ul>
          {activeProduct.subCategories.map((category) => (
            <li key={category.id}>
              <Link href={category.url}>{category.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </ul>
  )
}
