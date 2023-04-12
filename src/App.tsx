import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { useAppDispatch } from './redux/hooks'
import { setCart } from './redux/slices/cart.slice'
import { router } from './router/config'
import { CartService } from './services/cart/cart.service'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    CartService.getCart()
      .then(({ data }) => {
        dispatch(setCart({ list: data }))
      })
      .catch((err) => {
        console.error(err)
      })
  }, [dispatch])

  return <RouterProvider router={router} />
}
