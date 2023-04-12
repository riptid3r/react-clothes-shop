import cn from 'clsx'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '@/assets/images/logo.svg'

import { Navigation } from '../navigation/Navigation'
import { ButtonIcon } from '../ui/buttonIcon/ButtonIcon'

import { RouterPath } from '@/router/paths'

interface IHeader {
  cartSize: number
  showBurger: boolean
  onClickCart: () => void
  onClickMenu: () => void
}

export const Header: FC<IHeader> = ({
  cartSize,
  showBurger,
  onClickMenu,
  onClickCart
}) => {
  return (
    <header className='w-screen px-5 md:px-9 h-16 lg:h-20 shadow-md flex justify-center absolute'>
      <div className='relative flex justify-end lg:justify-between items-center w-full max-w-screen-2xl'>
        <div
          className={cn('absolute left-0 block z-20', {
            'lg:hidden ': !showBurger
          })}
          onClick={onClickMenu}
        >
          <ButtonIcon
            icon={
              showBurger
                ? 'codicon:chrome-close'
                : 'solar:hamburger-menu-outline'
            }
            height={30}
          />
        </div>

        <div className='hidden lg:block'>
          <Navigation />
        </div>

        <NavLink
          className='absolute left-10 lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 h-full'
          to={RouterPath.Home}
        >
          <img
            src={Logo}
            alt='Logo'
            className='object-contain object-left w-full h-full'
          />
        </NavLink>

        <div className='relative cursor-pointer' onClick={onClickCart}>
          {cartSize > 0 && (
            <div className='absolute w-4 h-4 bg-primary rounded-full -left-2.5 -top-2 flex items-center justify-center text-white text-xs'>
              {cartSize}
            </div>
          )}
          <ButtonIcon icon='teenyicons:basket-outline' height={24} />
        </div>
      </div>
    </header>
  )
}
