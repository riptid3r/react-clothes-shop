import { Icon } from '@iconify/react'
import { FC } from 'react'

import { ProductSwiper } from '@/components/productSwiper/ProductSwiper'
import { Button } from '@/components/ui/button/Button'

import Person from '@/assets/images/person.png'

export const Home: FC = () => {
  return (
    <>
      <section className='min-h-screen w-screen flex items-center justify-center px-5 md:px-9'>
        <div className='flex flex-col lg:flex-row items-center justify-center h-full w-full max-w-screen-2xl lg:h-auto'>
          <div className='flex flex-col max-w-prose mr-0 lg:mr-10'>
            <h1 className='text-5xl font-light md:leading-tight sm:text-6xl md:text-7xl'>
              <span
                className={`before:block before:absolute before:rounded-full before:-inset-1
               before:bg-orange before:w-9 before:h-9 before:bottom-1/2 before:top-1/2 before:-translate-y-3 
               relative inline-block`}
              >
                <span className='relative'>Feel</span>
              </span>{' '}
              <span className='font-semibold'>luxurious</span> with{' '}
              <span className='font-semibold text-primary'>premium</span>{' '}
              <span className='font-semibold'>quality</span> outfits
            </h1>
            <p className='text-gray text-md md:text-xl mt-5 md:mt-10 font-medium'>
              We love labels, choosing only the best pieces from their
              collections to give you all the things you want to wear.
            </p>
            <Button className='flex items-center self-start mt-5 md:mt-10'>
              <span className='mr-2'>Explore now</span>
              <Icon icon='ph:arrow-right-light' height={20} />
            </Button>
          </div>

          <div className='h-auto w-auto max-w-md lg:max-w-3xl lg:mt-0 mt-10'>
            <img
              className='h-full w-full'
              style={{ objectFit: 'contain' }}
              src={Person}
              alt=''
              draggable='false'
            />
          </div>
        </div>
      </section>
      <section className='bg-bg-highlight w-screen px-14 py-10 mt:py-14'>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-2xl m-auto'>
          <div className='relative before:absolute before:h-full before:w-1 before:rounded-lg before:bg-primary before:left-0 pl-7'>
            <span className='text-2xl md:text-4xl font-semibold'>
              We've proven ourself
              <br />
              to our customers
            </span>
          </div>

          <div className='flex flex-col mt-8 lg:mt-0'>
            <h1 className='text-3xl md:text-4xl font-medium'>36+</h1>
            <span className='text-xl md:text-2xl text-gray uppercase'>
              international brands
            </span>
          </div>

          <div className='flex flex-col mt-8 lg:mt-0'>
            <h1 className='text-3xl md:text-4xl font-medium'>3k+</h1>
            <span className='text-xl md:text-2xl text-gray uppercase'>
              top quality products
            </span>
          </div>
        </div>
      </section>
      <section className='w-screen px-5 py-8 md:py-14'>
        <div className='flex flex-col max-w-screen-2xl m-auto'>
          <h1 className='uppercase text-3xl font-semibold'>New arrival</h1>
          <ProductSwiper />
        </div>
      </section>
    </>
  )
}
