export const data = [
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
