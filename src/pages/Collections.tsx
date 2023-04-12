import { FC, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  selectCollectionsData,
  setCollections
} from '@/redux/slices/collections.slice'

import { CollectionsService } from '@/services/collections/collections.service'

import { RouterPath } from '@/router/paths'

export const Collections: FC = () => {
  const { collections } = useAppSelector(selectCollectionsData)

  const dispatch = useAppDispatch()

  useEffect(() => {
    CollectionsService.getCollections()
      .then(({ data }) => {
        dispatch(setCollections({ list: data }))
      })
      .catch((err) => {
        console.error(err)
      })
  }, [dispatch])

  return (
    <div className='max-w-4xl w-full m-auto py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 w-max m-auto'>
        {collections.map((item) => (
          <Link
            to={`${RouterPath.Collections}/${item.name}`}
            key={item.id}
            className='w-max'
          >
            <div className='w-64 h-64 shadow-md rounded-sm cursor-pointer flex items-center justify-center'>
              <LazyLoadImage
                src={item.image}
                className='w-full h-full object-contain object-center'
                effect='blur'
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
