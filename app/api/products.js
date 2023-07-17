export const productList = [
  {
    id: 1,
    name: 'Laptop Dell XPS 15',
    price: 1499.99,
    image: 'https://diunsa.vtexassets.com/arquivos/ids/227119-500-auto?v=1774980708&width=500&height=auto&aspect=true',
    description: 'Laptop de alto rendimiento con pantalla OLED de 15 pulgadas y procesador Intel Core i7.',
    relatedProducts: [3, 6, 10],
    highlighted: true,
    onSale: false,
    category: 'laptops'
  },
  {
    id: 2,
    name: 'Teléfono Samsung Galaxy S21',
    price: 999.99,
    image: 'https://diunsa.vtexassets.com/arquivos/ids/230880-500-auto?v=1774948224&width=500&height=auto&aspect=true',
    description: 'Teléfono inteligente con cámara de alta resolución, pantalla AMOLED de 6.2 pulgadas y procesador Exynos 2100.',
    relatedProducts: [4],
    highlighted: false,
    onSale: true,
    category: 'celulares'
  },
  {
    id: 3,
    name: 'PC Dell Inspiron 5000',
    price: 799.99,
    image: 'https://diunsa.vtexassets.com/arquivos/ids/227144-500-auto?v=1774998598&width=500&height=auto&aspect=true',
    description: 'Computadora de escritorio con procesador Intel Core i5, 8 GB de RAM y almacenamiento SSD de 256 GB.',
    relatedProducts: [1, 6, 10],
    highlighted: true,
    onSale: false,
    category: 'laptops'
  },
  {
    id: 4,
    name: 'Celular Xiaomi Mi 11',
    price: 699.99,
    image: 'https://diunsa.vtexassets.com/arquivos/ids/229761-500-auto?v=1775005647&width=500&height=auto&aspect=true',
    description: 'Teléfono con pantalla AMOLED de 6.81 pulgadas, procesador Snapdragon 888 y cámara de 108 MP.',
    relatedProducts: [2],
    highlighted: true,
    onSale: true,
    category: 'celulares'
  },
  {
    id: 5,
    name: 'Impresora HP LaserJet Pro',
    price: 249.99,
    image: 'https://diunsa.vtexassets.com/arquivos/ids/197418-500-auto?v=1774980947&width=500&height=auto&aspect=true',
    description: 'Impresora láser con conectividad WiFi, impresión a doble cara y velocidad de impresión de hasta 30 ppm.',
    relatedProducts: [],
    highlighted: false,
    onSale: false,
    category: 'impresoras'
  },
  {
    id: 6,
    name: 'PC Gamer ASUS ROG Strix',
    price: 1999.99,
    image: 'https://diunsa.vtexassets.com/arquivos/ids/231391-500-auto?v=1774990530&width=500&height=auto&aspect=true',
    description: 'Computadora gaming con procesador Intel Core i9, tarjeta gráfica NVIDIA GeForce RTX 3080 y 16 GB de RAM.',
    relatedProducts: [1, 3, 10],
    highlighted: true,
    onSale: false,
    category: 'laptops'
  },
  {
    id: 7,
    name: 'Monitor LG Ultrawide',
    price: 399.99,
    image: 'https://jet-web.s3.us-west-1.amazonaws.com/images/catalog/public/24MP59G-P-large01.webp',
    description: 'Monitor de 34 pulgadas con resolución QHD, formato de pantalla 21:9 y tecnología IPS.',
    relatedProducts: [],
    highlighted: true,
    onSale: true,
    category: 'monitores'
  },
  {
    id: 8,
    name: 'Altavoces Bluetooth JBL',
    price: 99.99,
    image: 'https://diunsa.vtexassets.com/arquivos/ids/230352-500-auto?v=1774894000&width=500&height=auto&aspect=true',
    description: 'Altavoces portátiles con conectividad Bluetooth, sonido estéreo y batería de larga duración.',
    relatedProducts: [],
    highlighted: true,
    onSale: false,
    category: 'altavoces'
  },
  {
    id: 9,
    name: 'Teclado mecánico Corsair',
    price: 129.99,
    image: 'https://rymportatiles.com.pe/wp-content/uploads/2023/03/DeepCool-KB500-RGB-01.png',
    description: 'Teclado gaming mecánico con retroiluminación RGB, interruptores Cherry MX y reposamuñecas extraíble.',
    relatedProducts: [],
    highlighted: true,
    onSale: false,
    category: 'teclados'
  },
  {
    id: 10,
    name: 'MacBook Pro',
    price: 2499.99,
    image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13-space-m1-2020_GEO_JP?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621769000',
    description: 'La MacBook Pro es una potente computadora portátil con un rendimiento excepcional. Cuenta con una pantalla Retina brillante, un procesador rápido y una gran capacidad de almacenamiento.',
    relatedProducts: [1, 3, 6],
    highlighted: true,
    onSale: false,
    category: 'laptops'
  },
  {
    id: 11,
    name: 'Auriculares inalámbricos Sony WH-1000XM4',
    price: 349.99,
    image: 'https://www.sony.com.hn/image/6ff70f66ce935f02861635b3e936a70c?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
    description: 'Los auriculares inalámbricos Sony WH-1000XM4 ofrecen una calidad de sonido excepcional y una cancelación de ruido líder en su clase. Son cómodos de llevar durante largos períodos de tiempo y cuentan con funciones avanzadas como el control táctil y la asistente de voz integrada.',
    relatedProducts: [13, 16, 19],
    highlighted: true,
    onSale: false,
    category: 'auriculares'
  },
  {
    id: 12,
    name: 'Auriculares inalámbricos Apple AirPods Pro',
    price: 249.99,
    image: 'https://jet-web.s3.us-west-1.amazonaws.com/images/catalog/public/42707d0a901610ab52a1dd2962b8b44a.webp',
    description: 'Los auriculares inalámbricos Apple AirPods Pro ofrecen un sonido envolvente de alta calidad y cancelación activa de ruido. Son fáciles de configurar y se ajustan cómodamente en los oídos. Además, cuentan con resistencia al agua y funciones inteligentes como la activación de Siri con comandos de voz.',
    relatedProducts: [14, 17, 20],
    highlighted: true,
    onSale: false,
    category: 'auriculares'
  },
  {
    id: 13,
    name: 'Auriculares Bluetooth JBL Free X',
    price: 99.99,
    image: 'https://m.media-amazon.com/images/I/61ezYh5NIbL._AC_UF1000,1000_QL80_.jpg',
    description: 'Los auriculares Bluetooth JBL Free X ofrecen un sonido potente y una conexión inalámbrica estable. Son compactos, ligeros y vienen con estuche de carga. Ideales para escuchar música y hacer llamadas sin cables.',
    relatedProducts: [12, 14, 16],
    highlighted: false,
    onSale: true,
    category: 'auriculares'
  },
  {
    id: 14,
    name: 'Auriculares inalámbricos Samsung Galaxy Buds Pro',
    price: 199.99,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51c8jaXEp+S._AC_UL600_SR600,600_.jpg',
    description: 'Los auriculares inalámbricos Samsung Galaxy Buds Pro ofrecen un sonido inmersivo y funciones avanzadas. Cuentan con cancelación de ruido inteligente, resistencia al agua y duración de batería prolongada. Además, se pueden emparejar fácilmente con dispositivos Samsung Galaxy.',
    relatedProducts: [11, 13, 15],
    highlighted: false,
    onSale: false,
    category: 'auriculares'
  },
  {
    id: 15,
    name: 'Auriculares inalámbricos Beats Solo3',
    price: 299.99,
    image: 'https://cdn.idealo.com/folder/Product/5116/3/5116304/s11_produktbild_gross_11/beats-by-dre-solo3-wireless.jpg',
    description: 'Los auriculares inalámbricos Beats Solo3 ofrecen un sonido nítido y potente. Son plegables, cómodos de llevar y tienen una duración de batería de hasta 40 horas. Perfectos para disfrutar de la música con estilo.',
    relatedProducts: [12, 14, 16],
    highlighted: false,
    onSale: true,
    category: 'auriculares'
  }
]
