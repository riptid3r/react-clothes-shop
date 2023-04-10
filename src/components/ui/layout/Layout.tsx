import cn from 'clsx'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Burger } from '@/components/burger/Burger'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectAppData, setBurgerVisibility } from '@/redux/slices/app.slice'

export const Layout: FC = () => {
  const { showBurger } = useAppSelector(selectAppData)
  const dispatch = useAppDispatch()

  const onClickMenu = () => {
    dispatch(
      setBurgerVisibility({
        value: !showBurger
      })
    )
  }

  return (
    <div className={cn('flex flex-col h-screen', { fixed: showBurger })}>
      <Burger showed={showBurger} />
      <Header onClickMenu={onClickMenu} showBurger={showBurger} />
      <main className='flex-grow pt-16 md:pt-20'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
