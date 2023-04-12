import { FC } from 'react'

import { useAppSelector } from '@/redux/hooks'
import { selectProductsData } from '@/redux/slices/products.slice'

import { LoadingCard } from '../loadingCard/LoadingCard'
import { ProductCard } from '../productCard/ProductCard'

interface IProductList {
  title?: string
}

export const ProductList: FC<IProductList> = ({ title }) => {
  const { products } = useAppSelector(selectProductsData)

  const placeholderCards = [...new Array(12)].map((_, index) => (
    <LoadingCard key={index} />
  ))

  return (
    <div className='max-w-screen-2xl m-auto pt-5 px-5 sm:pt-10 sm:px-10 pb-20 flex flex-col items-center'>
      <span className='text-2xl font-medium capitalize mb-5 sm:mb-10'>
        {title}
      </span>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
        {!products.length
          ? placeholderCards
          : products.map((item) => <ProductCard {...item} key={item.id} />)}
      </div>
    </div>
  )
}
