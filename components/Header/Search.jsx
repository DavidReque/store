export default function Search ({ toggleInput, showInput }) {
  return (
    <div>
      <div className='lg:hidden'>
        {!showInput
          ? (
            <button
              className='flex items-center justify-center p-2'
              onClick={toggleInput}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
              <span className='sr-only'>Buscar</span>
            </button>
            )
          : (
            <div className='relative'>
              <input
                className='placeholder-italic placeholder-slate-400 block bg-white w-[350px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='Buscar producto...'
                type='text'
                name='search'
              />
              <button
                className='absolute top-0 right-0 flex items-center justify-center p-2'
                onClick={toggleInput}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            )}
      </div>
      <div className='ml-3 hidden lg:block'>
        <input
          className='placeholder-italic placeholder-slate-400 block bg-white w-[400px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          placeholder='Buscar producto...'
          type='text'
          name='search'
        />
        {
          showInput && (
            <button
              className='absolute top-0 right-0 flex items-center justify-center p-2'
              onClick={toggleInput}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          )
        }
      </div>
    </div>
  )
}
