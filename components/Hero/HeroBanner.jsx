import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function HeroBanner () {
  return (
    <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto h-full mb-8 mt-1'>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className='absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
          >
            <button>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
              </svg>
            </button>
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className='absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
          >
            <button>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
              </svg>

            </button>
          </div>
        )}
      >
        <div>
          <img className='aspect-[16/10] md:aspect-auto object-cover' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwireoutelectronics.com%2Fwp-content%2Fuploads%2F2022%2F12%2FR.png&f=1&nofb=1&ipt=1ea520bc92063199bc95348949ea5776110782e67833a1676f2796ff47557057&ipo=images' />
        </div>
        <div>
          <img className='aspect-[16/10] md:aspect-auto object-cover' src='https://cdn.ligadegamers.com/imagenes/componentes-necesarios-armar-pc-gamer-og.jpg' />
        </div>
        {/* <div>
          <img className='aspect-[16/10] md:aspect-auto object-cover' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F9to5mac.com%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F01%2FiPhone-14-pill.jpg%3Fquality%3D82%26strip%3Dall%26w%3D1600&f=1&nofb=1&ipt=0b3dff8d1ecfc2658ff86028a588885603dacf792185bffbadb144ff61e808a3&ipo=images' />
        </div> */}
      </Carousel>
    </div>
  )
}
