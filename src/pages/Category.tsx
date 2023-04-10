import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { ProductCard } from '@/components/productCard/ProductCard'

export const Category: FC = () => {
  const { id } = useParams()

  return (
    <div className='max-w-screen-2xl m-auto pt-5 px-5 sm:pt-10 sm:px-10 pb-20 flex flex-col items-center'>
      <span className='text-2xl font-medium capitalize mb-5 sm:mb-10'>
        {id}
      </span>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {new Array(20).fill(null).map((e, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  )
}
