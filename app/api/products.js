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
    relatedProducts: [21, 22, 9],
    highlighted: true,
    onSale: true,
    category: 'accesoriosPc'
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
    relatedProducts: [7, 21, 22],
    highlighted: true,
    onSale: false,
    category: 'accesoriosPc'
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
    description: 'Los auriculares inalámbricos Sony WH-1000XM4 ofrecen una calidad de sonido excepcional y una cancelación de ruido líder en su clase.',
    relatedProducts: [12, 13, 14, 15],
    highlighted: true,
    onSale: false,
    category: 'auriculares'
  },
  {
    id: 12,
    name: 'Auriculares inalámbricos Apple AirPods Pro',
    price: 249.99,
    image: 'https://jet-web.s3.us-west-1.amazonaws.com/images/catalog/public/42707d0a901610ab52a1dd2962b8b44a.webp',
    description: 'Los auriculares inalámbricos Apple AirPods Pro ofrecen un sonido envolvente de alta calidad y cancelación activa de ruido.',
    relatedProducts: [11, 13, 14, 15],
    highlighted: true,
    onSale: false,
    category: 'auriculares'
  },
  {
    id: 13,
    name: 'Auriculares Bluetooth JBL Free X',
    price: 99.99,
    image: 'https://m.media-amazon.com/images/I/61ezYh5NIbL._AC_UF1000,1000_QL80_.jpg',
    description: 'Los auriculares Bluetooth JBL Free X ofrecen un sonido potente y una conexión inalámbrica estable. Son compactos, ligeros y vienen con estuche de carga.',
    relatedProducts: [11, 12, 14, 15],
    highlighted: false,
    onSale: true,
    category: 'auriculares'
  },
  {
    id: 14,
    name: 'Auriculares inalámbricos Samsung Galaxy Buds Pro',
    price: 199.99,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51c8jaXEp+S._AC_UL600_SR600,600_.jpg',
    description: 'Los auriculares inalámbricos Samsung Galaxy Buds Pro ofrecen un sonido inmersivo y funciones avanzadas.',
    relatedProducts: [11, 12, 13, 15],
    highlighted: false,
    onSale: false,
    category: 'auriculares'
  },
  {
    id: 15,
    name: 'Auriculares inalámbricos Beats Solo3',
    price: 299.99,
    image: 'https://cdn.idealo.com/folder/Product/5116/3/5116304/s11_produktbild_gross_11/beats-by-dre-solo3-wireless.jpg',
    description: 'Los auriculares inalámbricos Beats Solo3 ofrecen un sonido nítido y potente. Son plegables, cómodos de llevar y tienen una duración de batería de hasta 40 horas.',
    relatedProducts: [11, 12, 13, 14],
    highlighted: false,
    onSale: true,
    category: 'auriculares'
  },
  {
    id: 16,
    name: 'Kit de limpieza para computadoras',
    price: 19.99,
    image: 'https://computoyaccesoriosvaca.com/wp-content/uploads/2021/11/a8.jpg',
    description: 'El kit de limpieza para computadoras incluye soluciones y herramientas esenciales para mantener tu equipo libre de polvo y suciedad. Incluye líquido limpiador, paños de microfibra y pinceles antiestáticos.',
    relatedProducts: [17, 18, 19, 20],
    highlighted: true,
    onSale: false,
    category: 'mantenimientoPc'
  },
  {
    id: 17,
    name: 'Spray de aire comprimido',
    price: 9.99,
    image: 'https://www.officedepot.com.hn/medias/000016061T4.gif-515ftw?context=bWFzdGVyfHJvb3R8MTY2ODV8aW1hZ2UvZ2lmfGg5ZC9oOGIvOTM1NzIwNjA2MTA4Ni5naWZ8MjEzODU5ODdhMTg2NDQyYjZiNGE5NzUyZDE1MDU2ODMxYWRhNGQxM2EzMDQ1MTE4YmJjN2VjYjg3MDFmMTE3Mw',
    description: 'El spray de aire comprimido es ideal para eliminar el polvo y los residuos de difícil acceso en tu computadora. Su boquilla precisa y potente expulsa ráfagas de aire limpio sin dañar los componentes internos.',
    relatedProducts: [16, 18, 19, 20],
    highlighted: false,
    onSale: true,
    category: 'mantenimientoPc'
  },
  {
    id: 18,
    name: 'Pasta térmica',
    price: 14.99,
    image: 'https://isitechhn.com/cdn/shop/products/SABO-56-0078-PASTA.png?v=1622299522',
    description: 'La pasta térmica de alto rendimiento es ideal para optimizar la transferencia de calor entre el procesador y el disipador de calor. Su fórmula especial garantiza una mejor disipación térmica y una mayor eficiencia en el enfriamiento de tu computadora.',
    relatedProducts: [16, 17, 19, 20],
    highlighted: true,
    onSale: false,
    category: 'mantenimientoPc'
  },
  {
    id: 19,
    name: 'Destornillador magnético para computadoras',
    price: 6.99,
    image: 'https://www.intelcomphonduras.com/wp-content/uploads/2020/11/Juego-de-destornilladores-aislados-con-garant%C3%ADa-de-por-vida-incluida-todo-en-uno-de-13-piezas-de-destornillador-Torx-Phillips-magn%C3%A9tico-CR-V-Eacker-600x600.jpg',
    description: 'El destornillador magnético para computadoras facilita la manipulación de tornillos pequeños durante tareas de mantenimiento. Su punta magnética evita la pérdida de tornillos y facilita su colocación en espacios reducidos.',
    relatedProducts: [16, 17, 18, 20],
    highlighted: false,
    onSale: false,
    category: 'mantenimientoPc'
  },
  {
    id: 20,
    name: 'Cepillo antiestático',
    price: 4.99,
    image: 'https://hifisac.com/web/image/product.template/2038/image_1024?unique=0dc73c4',
    description: 'El cepillo antiestático es esencial para limpiar y eliminar la acumulación de polvo en componentes electrónicos sensibles. Sus cerdas suaves y antiestáticas aseguran una limpieza segura y libre de estática.',
    relatedProducts: [16, 17, 18, 19],
    highlighted: false,
    onSale: true,
    category: 'mantenimientoPc'
  },
  {
    id: 21,
    name: 'Mouse inalámbrico',
    price: 24.99,
    image: 'https://sycomhn.com/wp-content/uploads/2022/10/Inalambrico-Dell-WM126-Negro.jpg',
    description: 'El mouse inalámbrico ofrece comodidad y libertad de movimiento mientras utilizas tu computadora.',
    relatedProducts: [7, 9, 22],
    highlighted: true,
    onSale: false,
    category: 'accesoriosPc'
  },
  {
    id: 22,
    name: 'Mouse alambrico',
    price: 20.99,
    image: 'https://ss628.liverpool.com.mx/xl/1116144944.jpg',
    description: 'El mouse alámbrico ofrece comodidad y seguridad de movimiento mientras utilizas tu computadora.',
    relatedProducts: [7, 9, 21],
    highlighted: true,
    onSale: false,
    category: 'accesoriosPc'
  },
  {
    id: 23,
    name: 'Silla gamer',
    price: 200.00,
    image: 'https://www.officedepot.com.hn/medias/27657.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjY1NjYzfGltYWdlL2pwZWd8aDI2L2gzYy8xMDUwODAwMjY1NjI4Ni8yNzY1Ny5qcGdfMTIwMGZ0d3xiZjE2MWU2MTM5N2FlOTI3MzEzZDEwZmEwZjczNjM5MmQ3ODQ3ZTY4N2IwZDM4ZTY0YjZhZGRlYWZkMTI2YTcy',
    description: 'Silla gamer comoda y de alta calidad.',
    relatedProducts: [24, 25],
    highlighted: true,
    onSale: false,
    category: 'gamer'
  },
  {
    id: 24,
    name: 'Teclado gamer',
    price: 50.99,
    image: 'https://www.officedepot.com.hn/medias/22705.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NTI0MTEzfGltYWdlL2pwZWd8aDUxL2hmNi8xMTAzNTI1MTUwNzIzMC8yMjcwNS5qcGdfMTIwMGZ0d3xjODFhOTQyMjEwZWE3Zjg5NTYwYzhmNjJhMmMzZjZkMGUzMjhmMjYxYWVjZGY4ZGRlMDZhZGE3ODU5Yjk4NDEx',
    description: 'TECLADO (GAMER) SPECTRA (METÁLICO)',
    relatedProducts: [25, 23],
    highlighted: true,
    onSale: false,
    category: 'gamer'
  },
  {
    id: 25,
    name: 'Auriculares gamer',
    price: 4.33,
    image: 'https://http2.mlstatic.com/D_NQ_NP_811322-MLA45616465154_042021-O.webp',
    description: 'Con los Onikuma K1B RGB no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.',
    relatedProducts: [23, 24],
    highlighted: true,
    onSale: false,
    category: 'gamer'
  },
  {
    id: 26,
    name: 'Cargador de coche inalámbrico',
    price: 25.95,
    image: 'https://i.ebayimg.com/thumbs/images/g/5RYAAOSwI7ZjL1A2/s-l225.webp',
    description: 'Cargador de coche inalámbrico 15 vatios cargador de coche inalámbrico con anillo magnético - óvalo',
    relatedProducts: [27, 28],
    highlighted: true,
    onSale: false,
    category: 'accesoriosCel'
  },
  {
    id: 27,
    name: 'Cargador Rápido 25W USB-C',
    price: 5.49,
    image: 'https://i.ebayimg.com/images/g/-ygAAOSwm~ZiUvbo/s-l1600.jpg',
    description: 'Original Samsung Super Cargador Rápido 25W USB-C Cable Galaxy S21 S22 S23 Ultra',
    relatedProducts: [26, 28],
    highlighted: true,
    onSale: false,
    category: 'accesoriosCel'
  },
  {
    id: 28,
    name: 'Cargador rápido de alimentación original Apple',
    price: 24.99,
    image: 'https://i.ebayimg.com/images/g/CQMAAOSwO7VhsSgn/s-l300.jpg',
    description: 'Cargador rápido de alimentación original Apple 20W USB-C iPhone 12 13 14 Pro Max + cable USB-C',
    relatedProducts: [26, 27],
    highlighted: true,
    onSale: false,
    category: 'accesoriosCel'
  },
  {
    id: 29,
    name: 'Tinta impresora Epson',
    price: 30.88,
    image: 'https://epson.com.pe/medias/20Nik-Pum-ink-31-r2-v2.jpg?context=bWFzdGVyfHJvb3R8MTU5NTQ0fGltYWdlL2pwZWd8aDQxL2hhNi85NjUzNDcxMDE5MDM4LmpwZ3xkMmI3MTczYWU5OGZkNzZlYzg5ZjdiYWU3ZmZkMzgxYTkwOTY4NzA1MjE1OTI2NWE1MmMxOTIyY2UzNGVlY2Yx',
    description: 'Pack de tintas originales Epson para impresoras Ecotank',
    relatedProducts: [30],
    highlighted: true,
    onSale: false,
    category: 'mantenimientoImpresora'
  },
  {
    id: 30,
    name: 'Cartuchos impresora Epson',
    price: 30.88,
    image: 'https://m.media-amazon.com/images/I/71OE373mKzL.jpg',
    description: 'Cartucho de tinta remanufacturado de repuesto para impresora Epson 288XL 288 XL (2 negros, 1 cian, 1 magenta, 1 amarillo, paquete de 5)',
    relatedProducts: [29],
    highlighted: true,
    onSale: false,
    category: 'mantenimientoImpresora'
  }
]
