import cn from 'clsx'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { FreeMode, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IProductItem } from '@/types/interfaces/products.interface'

import { LoadingCard } from '../loadingCard/LoadingCard'

import { RouterPath } from '@/router/paths'

interface IProductSwiper {
  items: IProductItem[]
  className?: string
}

export const ProductSwiper: FC<IProductSwiper> = ({ className, items }) => {
  const navigate = useNavigate()

  const placeholderCards = [...new Array(8)].map((_, index) => (
    <SwiperSlide key={index} virtualIndex={index}>
      <LoadingCard type='secondary' />
    </SwiperSlide>
  ))

  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Scrollbar]}
      scrollbar={{
        hide: false
      }}
      className={cn('mt-8 md:mt-14 w-full pb-3', className)}
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
        }
      }}
    >
      {!items.length
        ? placeholderCards
        : items.map((item) => (
            <SwiperSlide
              key={item.id}
              onClick={() => navigate(`${RouterPath.Product}/${item.id}`)}
            >
              <div className='flex flex-col w-full rounded-md overflow-hidden cursor-pointer mr-8 shrink-0 h-96'>
                <div className='h-72 shrink-0'>
                  <img
                    className='w-full h-full object-cover object-top'
                    src={item.images[0].link}
                    alt=''
                  />
                </div>
                <div className='flex items-center justify-between w-full bg-bg-highlight px-3 py-3 grow'>
                  <div className='flex flex-col'>
                    <span className='text-lg md:text-xl font-medium'>
                      {item.brand}
                    </span>
                    <span className='text-sm md:text-md'>{item.name}</span>
                    <span className='text-lg font-medium text-gray'>
                      ${item.price}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  )
}
