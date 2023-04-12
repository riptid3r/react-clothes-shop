import { createBrowserRouter } from 'react-router-dom'

import { Category } from '@/pages/Category'
import { Collections } from '@/pages/Collections'
import { Home } from '@/pages/Home'
import { SingleCollection } from '@/pages/SingleCollection'
import { SingleProduct } from '@/pages/SingleProduct'

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
        element: <SingleProduct />
      },
      {
        path: RouterPath.Collections,
        element: <Collections />
      },
      {
        path: `${RouterPath.Collections}/:id`,
        element: <SingleCollection />
      }
    ]
  }
])
