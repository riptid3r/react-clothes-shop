import cn from 'clsx'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Burger } from '@/components/burger/Burger'
import { Cart } from '@/components/cart/Cart'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  selectAppData,
  setBurgerVisibility,
  setCartVisibility
} from '@/redux/slices/app.slice'
import { selectCartData } from '@/redux/slices/cart.slice'

export const Layout: FC = () => {
  const { showBurger, showCart } = useAppSelector(selectAppData)
  const { cart } = useAppSelector(selectCartData)

  const dispatch = useAppDispatch()

  const onClickMenu = () => {
    dispatch(
      setBurgerVisibility({
        value: !showBurger
      })
    )
  }

  const onClickCart = () => {
    dispatch(
      setCartVisibility({
        value: true
      })
    )
  }

  return (
    <div
      className={cn('flex flex-col w-screen h-screen', {
        fixed: showBurger || showCart
      })}
    >
      <Cart />
      <Burger showed={showBurger} />
      <Header
        cartSize={cart.length}
        showBurger={showBurger}
        onClickMenu={onClickMenu}
        onClickCart={onClickCart}
      />
      <main className='flex-grow pt-16 md:pt-20'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
