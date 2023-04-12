import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Loader } from '@/components/loader/Loader'
import { Product } from '@/components/product/Product'

import { IProductItem } from '@/types/interfaces/products.interface'

import { ProductsService } from '@/services/products/products.service'

import { RouterPath } from '@/router/paths'

export const SingleProduct: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState<IProductItem | null>(null)

  useEffect(() => {
    if (!id) {
      navigate(RouterPath.Home)
      return
    }

    setData(null)

    ProductsService.getProduct(id)
      .then(({ data }) => {
        setData(data)
      })
      .catch((error) => {
        console.log(error)
        navigate(RouterPath.Home)
      })
  }, [id, navigate])

  return <>{!data ? <Loader /> : <Product {...data} />}</>
}
