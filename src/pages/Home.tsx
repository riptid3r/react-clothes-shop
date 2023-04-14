import { Icon } from '@iconify/react'
import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ProductSwiper } from '@/components/productSwiper/ProductSwiper'
import { Button } from '@/components/ui/button/Button'

import Person from '@/assets/images/person.png'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  selectProductsData,
  setNewArrivalList
} from '@/redux/slices/products.slice'

import { ProductsService } from '@/services/products/products.service'

import { RouterPath } from '@/router/paths'

export const Home: FC = () => {
  const { newArrival } = useAppSelector(selectProductsData)

  const dispatch = useAppDispatch()

  useEffect(() => {
    ProductsService.getNewArrival()
      .then(({ data }) => {
        dispatch(setNewArrivalList({ list: data }))
      })
      .catch((e) => {
        console.error(e)
      })
  }, [dispatch])

  return (
    <>
      <section className='min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] w-screen flex items-center justify-center p-5 md:p-9'>
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
            <Link to={`${RouterPath.Category}/trending`}>
              <Button className='flex items-center self-start mt-5 md:mt-10 px-7 py-3'>
                <span className='mr-2'>Explore now</span>
                <Icon icon='ph:arrow-right-light' height={20} />
              </Button>
            </Link>
          </div>

          <div
            className={`h-64 sm:h-96 md:h-[25rem] lg:h-[35rem] 2xl:h-[45rem] w-64 sm:w-96 md:w-[25rem] 
              lg:w-[35rem] 2xl:w-[45rem] grow-0 lg:mt-0 mt-10 bg-contain bg-no-repeat bg-center`}
            style={{ backgroundImage: `url(${Person})` }}
          />
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
          <ProductSwiper items={newArrival} />
        </div>
      </section>
    </>
  )
}
