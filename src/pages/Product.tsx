import { Icon } from '@iconify/react'
import { FC, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ProductSwiper } from '@/components/productSwiper/ProductSwiper'
import { Button } from '@/components/ui/button/Button'

const sizes = ['s', 'm', 'l', 'xl']

export const Product: FC = () => {
  const [size, setSize] = useState(sizes[0])
  const [counter, setCounter] = useState(1)

  const onCount = (type: 'increase' | 'decrease') => {
    if (counter === 1 && type === 'decrease') return
    if (counter === 10 && type === 'increase') return

    setCounter((v) => (type === 'increase' ? v + 1 : v - 1))
  }

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
              <SwiperSlide>
                <img
                  className='w-full h-full object-cover object-center'
                  src='https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dw1480e560/SH9623_CB8_24.jpg?imwidth=915&impolicy=product'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='w-full h-full object-cover object-center'
                  src='https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dw1480e560/SH9623_CB8_24.jpg?imwidth=915&impolicy=product'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='w-full h-full object-cover object-center'
                  src='https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dw1480e560/SH9623_CB8_24.jpg?imwidth=915&impolicy=product'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='w-full h-full object-cover object-center'
                  src='https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dw1480e560/SH9623_CB8_24.jpg?imwidth=915&impolicy=product'
                  alt=''
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className='flex flex-col'>
            <span className='text-2xl font-semibold mb-2'>
              Lacoste Organic Cotton Hooded Sweatshirt
            </span>
            <span className='self-start px-5 py-2 bg-primary rounded-3xl text-white text-2xl font-semibold'>
              $55.33
            </span>
            <p className='text-xl mt-5'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className='text-md mt-5 text-gray'>
              Combination: 60% cotton, 40% polyester. Density 320 gm/m².
            </p>
            <span className='text-md font-semibold mt-5'>Choose a size:</span>
            <div className='self-start grid grid-cols-4 gap-1 mt-2'>
              {sizes.map((e) => (
                <Button
                  variant={size === e ? 'primary' : 'secondary'}
                  className='p-2 w-10 h-10'
                  key={e}
                  onClick={() => setSize(e)}
                >
                  <span className='uppercase'>{e}</span>
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

              <Button className='flex flex-grow justify-center items-center'>
                <div className='flex items-center'>
                  <span className='uppercase text-md mr-2 text-sm sm:text-md px-7 py-3'>
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
        <ProductSwiper className='mt-2 md:mt-7' />
      </div>
    </>
  )
}
