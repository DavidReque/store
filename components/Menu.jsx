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
  const [activeMenuItem, setActiveMenuItem] = useState(null)

  const handleMouseEnter = (itemId) => {
    setActiveMenuItem(itemId)
  }

  const handleMouseLeave = () => {
    setActiveMenuItem(null)
  }

  return (
    <ul className='flex flex-col space-y-2'>
      {data.map((item, index) => (
        <li
          key={item.id}
          className={`relative group ${index !== 0 ? 'mt-2' : ''}`}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={item.url} className='font-bold text-lg hover:text-blue-500'>
            {item.name.toLocaleUpperCase()}
          </Link>
          {item.subCategories && activeMenuItem === item.id && (
            <div className='absolute left-full top-0 mt-[-2px] bg-white p-2 rounded-md shadow-md'>
              {item.subCategories.map((subItem) => (
                <div key={subItem.id}>
                  <Link
                    href={subItem.url}
                    className='block py-1 px-2 hover:bg-blue-500 hover:text-white rounded-md'
                  >
                    {subItem.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
