import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ProductList } from '@/components/productList/ProductList'

import { useAppDispatch } from '@/redux/hooks'
import { setProductList } from '@/redux/slices/products.slice'

import { ProductsService } from '@/services/products/products.service'

import { RouterPath } from '@/router/paths'

export const SingleCollection: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    dispatch(setProductList({ list: [] }))

    window.scrollTo({ top: 0 })

    if (!id) {
      navigate(RouterPath.Home)
      return
    }

    ProductsService.getListByCollection(id)
      .then(({ data }) => {
        dispatch(setProductList({ list: data }))
      })
      .catch((e) => {
        console.error(e)
        navigate(RouterPath.Home)
      })
  }, [id, navigate, dispatch])

  return <ProductList title={id} />
}
