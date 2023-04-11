import cn from 'clsx'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '@/assets/images/logo.svg'

import { Navigation } from '../navigation/Navigation'
import { ButtonIcon } from '../ui/buttonIcon/ButtonIcon'

import { RouterPath } from '@/router/paths'

interface IHeader {
  showBurger: boolean
  onClickCart: () => void
  onClickMenu: () => void
}

export const Header: FC<IHeader> = ({
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

        <ButtonIcon
          icon='teenyicons:basket-outline'
          height={24}
          onClick={onClickCart}
        />
      </div>
    </header>
  )
}
