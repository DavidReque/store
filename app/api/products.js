import img1 from '../../public/products/laptop.jpg'
import img2 from '../../public/products/laptop2.jpg'
import img3 from '../../public/products/laptop3.jpg'
import img4 from '../../public/products/celular.jpg'
import img5 from '../../public/products/celular2.jpg'
import img6 from '../../public/products/celular3.png'
import img7 from '../../public/products/impresora.png'
import img8 from '../../public/products/impresora2.jpg'
import img9 from '../../public/products/impresora3.jpg'

export const productList = [
  {
    id: 1,
    name: 'Producto 1',
    price: 19.99,
    image: img1,
    description: 'Descripción del producto 1',
    relatedProducts: [2, 3, 4] // IDs de productos relacionados: Producto 2, Producto 3, Producto 4
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 29.99,
    image: img2,
    description: 'Descripción del producto 2',
    relatedProducts: [1, 3, 5] // IDs de productos relacionados: Producto 1, Producto 3, Producto 5
  },
  {
    id: 3,
    name: 'Producto 3',
    price: 29.99,
    image: img3,
    description: 'Descripción del producto 3',
    relatedProducts: [1, 2, 5] // IDs de productos relacionados: Producto 1, Producto 2, Producto 5
  },
  {
    id: 4,
    name: 'Producto 4',
    price: 29.99,
    image: img4,
    description: 'Descripción del producto 4',
    relatedProducts: [1, 5, 6] // IDs de productos relacionados: Producto 1, Producto 5, Producto 6
  },
  {
    id: 5,
    name: 'Producto 5',
    price: 29.99,
    image: img5,
    description: 'Descripción del producto 5',
    relatedProducts: [2, 3, 4] // IDs de productos relacionados: Producto 2, Producto 3, Producto 4
  },
  {
    id: 6,
    name: 'Producto 6',
    price: 29.99,
    image: img6,
    description: 'Iphone 13 en buen estado',
    relatedProducts: [4] // IDs de productos relacionados: Producto 4
  },
  {
    id: 7,
    name: 'Producto 7',
    price: 29.99,
    image: img7,
    description: 'Descripción del producto 7',
    relatedProducts: [] // Sin productos relacionados
  },
  {
    id: 8,
    name: 'Producto 8',
    price: 29.99,
    image: img8,
    description: 'Descripción del producto 8',
    relatedProducts: [] // Sin productos relacionados
  },
  {
    id: 9,
    name: 'Producto 9',
    price: 14.99,
    image: img9,
    description: 'Descripción del producto 9',
    relatedProducts: [] // Sin productos relacionados
  }
]
