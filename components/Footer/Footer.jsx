import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-blue-500 py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4'>
            <h4 className='text-xl font-bold text-white mb-4'>Empresa</h4>
            <ul>
              <li className='mb-2'>
                <Link className='text-white hover:text-black transition-colors duration-300 ease-in-out' href='/acerca'>Acerca de</Link>
              </li>
              <li className='mb-2'>
                <Link className='text-white hover:text-black transition-colors duration-300 ease-in-out' href='/contacto'>Contacto</Link>
              </li>
            </ul>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4'>
            <h4 className='text-xl font-bold text-white mb-4'>Atención al Cliente</h4>
            <ul>
              <li className='mb-2'>
                <Link className='text-white hover:text-black transition-colors duration-300 ease-in-out' href='/categorias/celulares'>Preguntas y Respuestas</Link>
              </li>
            </ul>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4'>
            <h4 className='text-xl font-bold text-white mb-4'>Redes Sociales</h4>
            <ul>
              <li className='mb-2'>
                <a className='text-white hover:text-black transition-colors duration-300 ease-in-out' href='https://www.facebook.com/tu-tienda' target='_blank' rel='noopener noreferrer'>Facebook</a>
              </li>
              <li className='mb-2'>
                <a className='text-white hover:text-black transition-colors duration-300 ease-in-out' href='https://www.instagram.com/tu-tienda' target='_blank' rel='noopener noreferrer'>Instagram</a>
              </li>
            </ul>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4'>
            <h4 className='text-xl font-bold text-white mb-4'>Contacto</h4>
            <p className='text-white mb-2'>Dirección: Calle Principal #123</p>
            <p className='text-white mb-2'>Teléfono: +123456789</p>
            <p className='text-white mb-2'>Email: info@tutienda.com</p>
          </div>
        </div>
        <div className='text-center mt-8'>
          <p className='text-slate-300'>© {new Date().getFullYear()} Tu Tienda Tecnológica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
