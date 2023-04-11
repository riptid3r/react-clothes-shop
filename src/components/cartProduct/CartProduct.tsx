import { Icon } from '@iconify/react'
import { FC } from 'react'

import { ButtonIcon } from '../ui/buttonIcon/ButtonIcon'

export const CartProduct: FC = () => {
  return (
    <li className='relative flex py-2'>
      <div className='border border-gray rounded-lg overflow-hidden h-full w-44 sm:w-32'>
        <img
          className='w-full h-full object-cover object-center'
          src='https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dw1480e560/SH9623_CB8_24.jpg?imwidth=915&impolicy=product'
          alt=''
        />
      </div>
      <div className='flex flex-col ml-7 relative'>
        <div className='flex flex-col'>
          <span className='text-lg font-medium'>Lacoste</span>
          <span className='text-md'>Organic Cotton Hooded Sweatshirt</span>
        </div>

        <div className='flex flex-col mt-2'>
          <span className='text-sm text-gray'>Size:</span>
          <div className='self-start grid grid-cols-5 gap-1'>
            <span className='text-md font-medium h-5 w-5 border border-primary rounded-full flex items-center justify-center cursor-pointer'>
              S
            </span>
            <span className='text-md h-5 w-5 rounded-full flex items-center justify-center text-gray cursor-pointer'>
              M
            </span>
            <span className='text-md h-5 w-5 rounded-full flex items-center justify-center text-gray cursor-pointer'>
              L
            </span>
            <span className='text-md h-5 w-5 rounded-full flex items-center justify-center text-gray cursor-pointer'>
              XL
            </span>
          </div>
        </div>

        <div className='flex flex-col mt-2'>
          <span className='text-sm text-gray'>Quantity:</span>
          <div className='flex items-center'>
            <ButtonIcon icon='majesticons:minus' />
            <span className='text-md mx-2'>1</span>
            <ButtonIcon icon='majesticons:plus' />
          </div>
        </div>

        <span className='absolute right-0 bottom-0 text-lg font-medium text-xl'>
          $18.99
        </span>
      </div>

      <div className='flex items-center justify-center rounded-full bg-white border border-gray absolute -left-2 top-0 p-1 cursor-pointer'>
        <Icon icon='ic:sharp-close' />
      </div>
    </li>
  )
}
