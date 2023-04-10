import cn from 'clsx'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectAppData, setBurgerVisibility } from '@/redux/slices/app.slice'

import { NavigationItem } from './NavigationItem'
import { NavigationMenu } from '@/data/navigation.const'

interface INavigation {
  forFooter?: boolean
}

export const Navigation: FC<INavigation> = ({ forFooter = false }) => {
  const { showBurger } = useAppSelector(selectAppData)

  const dispatch = useAppDispatch()
  const location = useLocation()

  const onCloseBurger = () => {
    if (!showBurger) return

    dispatch(setBurgerVisibility({ value: false }))
  }

  return (
    <ul
      className={cn({
        'grid gap-3': showBurger && !forFooter,
        'lg:flex hidden': !showBurger && !forFooter,
        'flex flex-col md:flex-row': forFooter
      })}
    >
      {NavigationMenu.map((item) => (
        <NavigationItem
          key={item.link}
          {...item}
          value={location.pathname}
          forFooter={forFooter}
          onClick={onCloseBurger}
        />
      ))}
    </ul>
  )
}
