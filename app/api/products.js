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
    name: 'Laptop Dell XPS 15',
    price: 1499.99,
    image: img1,
    description: 'Laptop de alto rendimiento con pantalla OLED de 15 pulgadas y procesador Intel Core i7.',
    relatedProducts: [2, 3, 4] // IDs de productos relacionados: Producto 2, Producto 3, Producto 4
  },
  {
    id: 2,
    name: 'Teléfono Samsung Galaxy S21',
    price: 999.99,
    image: img2,
    description: 'Teléfono inteligente con cámara de alta resolución, pantalla AMOLED de 6.2 pulgadas y procesador Exynos 2100.',
    relatedProducts: [1, 3, 5] // IDs de productos relacionados: Producto 1, Producto 3, Producto 5
  },
  {
    id: 3,
    name: 'PC Dell Inspiron 5000',
    price: 799.99,
    image: img3,
    description: 'Computadora de escritorio con procesador Intel Core i5, 8 GB de RAM y almacenamiento SSD de 256 GB.',
    relatedProducts: [1, 2, 5] // IDs de productos relacionados: Producto 1, Producto 2, Producto 5
  },
  {
    id: 4,
    name: 'Celular Xiaomi Mi 11',
    price: 699.99,
    image: img4,
    description: 'Teléfono con pantalla AMOLED de 6.81 pulgadas, procesador Snapdragon 888 y cámara de 108 MP.',
    relatedProducts: [1, 5, 6] // IDs de productos relacionados: Producto 1, Producto 5, Producto 6
  },
  {
    id: 5,
    name: 'Impresora HP LaserJet Pro',
    price: 249.99,
    image: img5,
    description: 'Impresora láser con conectividad WiFi, impresión a doble cara y velocidad de impresión de hasta 30 ppm.',
    relatedProducts: [2, 3, 4] // IDs de productos relacionados: Producto 2, Producto 3, Producto 4
  },
  {
    id: 6,
    name: 'PC Gamer ASUS ROG Strix',
    price: 1999.99,
    image: img6,
    description: 'Computadora gaming con procesador Intel Core i9, tarjeta gráfica NVIDIA GeForce RTX 3080 y 16 GB de RAM.',
    relatedProducts: [4] // IDs de productos relacionados: Producto 4
  },
  {
    id: 7,
    name: 'Monitor LG Ultrawide',
    price: 399.99,
    image: img7,
    description: 'Monitor de 34 pulgadas con resolución QHD, formato de pantalla 21:9 y tecnología IPS.',
    relatedProducts: [] // Sin productos relacionados
  },
  {
    id: 8,
    name: 'Altavoces Bluetooth JBL',
    price: 99.99,
    image: img8,
    description: 'Altavoces portátiles con conectividad Bluetooth, sonido estéreo y batería de larga duración.',
    relatedProducts: [] // Sin productos relacionados
  },
  {
    id: 9,
    name: 'Teclado mecánico Corsair',
    price: 129.99,
    image: img9,
    description: 'Teclado gaming mecánico con retroiluminación RGB, interruptores Cherry MX y reposamuñecas extraíble.',
    relatedProducts: [] // Sin productos relacionados
  }
]
