import { Icon } from '@iconify/react'
import cn from 'clsx'
import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  removeFromCart,
  selectCartData,
  setItemQuantity,
  setItemSize,
  setLoading
} from '@/redux/slices/cart.slice'

import { ICartItem } from '@/types/interfaces/cart.interface'

import { CartService } from '@/services/cart/cart.service'

import { ButtonIcon } from '../ui/buttonIcon/ButtonIcon'

export const CartProduct: FC<ICartItem> = ({ item, id, quantity, size }) => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(selectCartData)

  const onRemoveFromCart = async () => {
    if (isLoading) return

    dispatch(setLoading({ isLoading: true }))

    try {
      const response = await CartService.removeFromCart(id)

      if (response.status === 200) {
        dispatch(removeFromCart({ itemId: id }))
      }
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoading({ isLoading: false }))
    }
  }

  const onSetSize = async (sizeId: string) => {
    if (isLoading) return

    dispatch(setLoading({ isLoading: true }))

    try {
      const response = await CartService.setItemSize({
        id,
        item,
        quantity,
        size: sizeId
      })

      if (response.status === 200) {
        dispatch(setItemSize({ itemId: id, size: response.data.size }))
      }
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoading({ isLoading: false }))
    }
  }

  const onSetQuantity = async (type: 'increase' | 'decrease') => {
    if (isLoading) return

    if (type === 'decrease' && quantity <= 1) {
      await onRemoveFromCart()
      return
    }

    dispatch(setLoading({ isLoading: true }))

    try {
      const response = await CartService.setItemQuantity({
        id,
        item,
        size,
        quantity: type === 'decrease' ? quantity - 1 : quantity + 1
      })

      if (response.status === 200) {
        dispatch(setItemQuantity({ itemId: id, value: response.data.quantity }))
      }
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoading({ isLoading: false }))
    }
  }

  return (
    <li className={cn('relative flex py-2', { disabled: isLoading })}>
      <div className='border border-gray rounded-lg overflow-hidden h-full w-32 shrink-0'>
        <LazyLoadImage
          className='w-full h-full object-cover object-center'
          src={item.images[0].link}
          height='100%'
          effect='blur'
        />
      </div>

      <div className='flex flex-col ml-7 relative grow'>
        <div className='flex flex-col'>
          <span className='text-lg font-medium'>{item.brand}</span>
          <span className='text-md'>{item.name}</span>
        </div>

        <div className='flex flex-col mt-2'>
          <span className='text-sm text-gray'>Size:</span>
          <div className='self-start grid grid-cols-5 gap-1'>
            {item.sizes.map((item) => (
              <span
                className={cn(
                  'text-md h-5 w-5 rounded-full flex items-center justify-center cursor-pointer',
                  {
                    'text-gray': size !== item.id,
                    'font-medium border border-primary': size === item.id
                  }
                )}
                key={item.id}
                onClick={() => onSetSize(item.id)}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className='flex flex-col mt-2'>
          <span className='text-sm text-gray'>Quantity:</span>
          <div className='flex items-center'>
            <ButtonIcon
              icon='majesticons:minus'
              onClick={() => onSetQuantity('decrease')}
            />
            <span className='text-md mx-2'>{quantity}</span>
            <ButtonIcon
              icon='majesticons:plus'
              onClick={() => onSetQuantity('increase')}
            />
          </div>
        </div>

        <span className='absolute right-0 bottom-0 font-medium text-xl'>
          ${(item.price * quantity).toFixed(2)}
        </span>
      </div>

      <div
        className='flex items-center justify-center rounded-full bg-white border border-gray absolute -left-2 top-0 p-1 cursor-pointer'
        onClick={onRemoveFromCart}
      >
        <Icon icon='ic:sharp-close' />
      </div>
    </li>
  )
}
