import { Icon } from '@iconify/react'
import { FC, useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ProductSwiper } from '@/components/productSwiper/ProductSwiper'
import { Button } from '@/components/ui/button/Button'

import { IProductItem } from '@/types/interfaces/products.interface'

import { ProductsService } from '@/services/products/products.service'

export const Product: FC<IProductItem> = ({
  name,
  brand,
  images,
  description,
  price,
  combination,
  sizes
}) => {
  const [recommendations, setRecommendations] = useState<IProductItem[]>([])
  const [size, setSize] = useState(sizes[0].id)
  const [counter, setCounter] = useState(1)

  const onCount = (type: 'increase' | 'decrease') => {
    if (counter === 1 && type === 'decrease') return
    if (counter === 10 && type === 'increase') return

    setCounter((v) => (type === 'increase' ? v + 1 : v - 1))
  }

  useEffect(() => {
    ProductsService.getRecommendations()
      .then(({ data }) => {
        setRecommendations(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <div className='w-full max-w-screen-lg flex flex-col m-auto py-2 px-5 sm:pt-10 sm:px-10'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start w-full justify-between'>
          <div className='w-96'>
            <Swiper
              navigation={true}
              pagination={true}
              modules={[Navigation, Pagination]}
            >
              {images.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    className='w-full h-full object-cover object-center'
                    src={item.link}
                    alt=''
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='flex flex-col max-w-lg'>
            <span className='text-2xl font-semibold mb-2'>
              {brand} {name}
            </span>
            <span className='self-start px-5 py-2 bg-primary rounded-3xl text-white text-2xl font-semibold'>
              ${price}
            </span>
            <p className='text-xl mt-5'>{description}</p>
            <p className='text-md mt-5 text-gray'>Combination: {combination}</p>
            <span className='text-md font-semibold mt-5'>Choose a size:</span>
            <div className='self-start grid grid-cols-4 gap-1 mt-2'>
              {sizes.map((item) => (
                <Button
                  variant={size === item.id ? 'primary' : 'secondary'}
                  className='p-2 w-10 h-10'
                  key={item.id}
                  onClick={() => setSize(item.id)}
                >
                  <span className='uppercase'>{item.name}</span>
                </Button>
              ))}
            </div>

            <span className='text-md font-semibold mt-8 mb-2'>Quantity:</span>
            <div className='flex w-full'>
              <div className='grid grid-cols-3 w-36 border-2 border-gray rounded-3xl mr-5'>
                <div
                  className='flex items-center justify-center cursor-pointer'
                  onClick={() => onCount('decrease')}
                >
                  <Icon icon='majesticons:minus' />
                </div>
                <div className='flex items-center justify-center bg-gray'>
                  <span className='font-semibold text-md text-white'>
                    {counter}
                  </span>
                </div>
                <div
                  className='flex items-center justify-center cursor-pointer'
                  onClick={() => onCount('increase')}
                >
                  <Icon icon='majesticons:plus' />
                </div>
              </div>

              <Button className='flex flex-grow justify-center items-center px-7 py-3'>
                <div className='flex items-center'>
                  <span className='uppercase text-md mr-2 text-sm sm:text-md'>
                    Add to cart
                  </span>
                  <Icon
                    icon='material-symbols:arrow-right-alt-rounded'
                    height={20}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col px-5 md:px-10 max-w-6xl w-full m-auto pb-10 mt-10'>
        <span className='text-lg font-semibold'>Recommended for purchase</span>
        <ProductSwiper items={recommendations} className='mt-2 md:mt-7' />
      </div>
    </>
  )
}
