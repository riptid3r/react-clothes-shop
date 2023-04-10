import { Transition } from '@headlessui/react'
import { FC } from 'react'

import { Navigation } from '../navigation/Navigation'

interface IBurger {
  showed: boolean
}

export const Burger: FC<IBurger> = ({ showed }) => {
  return (
    <Transition
      show={showed}
      enter='transition ease-in-out duration-300 transform'
      enterFrom='-translate-x-full'
      enterTo='translate-x-0 '
      leave='transition ease-in-out duration-300 transform'
      leaveFrom='translate-x-0 '
      leaveTo='-translate-x-full'
      className='fixed top-0 left-0 overflow-y-auto flex flex-col w-full h-full bg-white z-10 px-5 pt-20'
    >
      <Navigation />
    </Transition>
  )
}
