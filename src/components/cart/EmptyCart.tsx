import { Icon } from '@iconify/react'
import { FC } from 'react'

export const EmptyCart: FC = () => {
  return (
    <div className='flex flex-col items-center grow justify-center text-xl'>
      <Icon icon='ph:mask-sad-thin' className='text-6xl mb-5' />
      <span className='text-gray'>Your cart is empty</span>
    </div>
  )
}
