import { FreeMode, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export const ProductSwiper = () => {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Scrollbar]}
      scrollbar={{
        hide: false
      }}
      className='mt-8 md:mt-14 w-full pb-3'
      breakpoints={{
        320: {
          slidesPerView: 1.5
        },
        480: {
          slidesPerView: 2.3,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2.7,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4.3,
          spaceBetween: 40
        },
        1536: {
          slidesPerView: 5.3,
          spaceBetween: 40
        }
      }}
    >
      {new Array(10).fill(null).map((e, i) => (
        <SwiperSlide key={i}>
          <div className='flex flex-col w-full rounded-md overflow-hidden cursor-pointer mr-8 shrink-0'>
            <div>
              <img
                className='w-full h-full object-cover object-center'
                src='https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dw1480e560/SH9623_CB8_24.jpg?imwidth=915&impolicy=product'
                alt=''
              />
            </div>
            <div className='flex items-center justify-between w-full bg-bg-highlight px-3 py-3'>
              <div className='flex flex-col'>
                <span className='text-xl font-medium'>Lacoste</span>
                <span>Organic Cotton Hooded Sweatshirt</span>
                <span className='text-lg font-medium text-gray'>$18.99</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
