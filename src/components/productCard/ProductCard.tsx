import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

import { IProductItem } from '@/types/interfaces/products.interface'

import { RouterPath } from '@/router/paths'

export const ProductCard: FC<IProductItem> = ({
  id,
  images,
  name,
  price,
  brand
}) => {
  return (
    <Link to={`${RouterPath.Product}/${id}`}>
      <div className='flex flex-col w-full rounded-md overflow-hidden cursor-pointer mr-8 shrink-0 h-full'>
        <LazyLoadImage
          className='w-full h-52 sm:h-72 md:h-96 object-cover object-center'
          src={images[0].link}
          alt=''
          draggable='false'
          effect='blur'
        />
        <div className='flex items-center justify-between w-full bg-bg-highlight p-3 grow'>
          <div className='flex flex-col'>
            <span className='text-xl font-medium'>{brand}</span>
            <span>{name}</span>
            <span className='text-lg font-medium text-gray'>${price}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
