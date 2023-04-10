import { createBrowserRouter } from 'react-router-dom'

import { Category } from '@/pages/Category'
import { Home } from '@/pages/Home'
import { Product } from '@/pages/Product'

import { Layout } from '@/components/ui/layout/Layout'

import { RouterPath } from './paths'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: RouterPath.Home,
        element: <Home />
      },
      {
        path: `${RouterPath.Category}/:id`,
        element: <Category />
      },
      {
        path: `${RouterPath.Product}/:id`,
        element: <Product />
      }
    ]
  }
])
