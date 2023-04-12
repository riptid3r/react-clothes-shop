import ReactDOM from 'react-dom/client'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import '@/assets/styles/index.css'

import { store } from '@/redux/store'

import { router } from './router/config'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
