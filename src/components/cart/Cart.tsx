import { Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import cn from 'clsx'
import { FC, useMemo } from 'react'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectAppData, setCartVisibility } from '@/redux/slices/app.slice'
import { selectCartData } from '@/redux/slices/cart.slice'

import { CartProduct } from '../cartProduct/CartProduct'
import { Button } from '../ui/button/Button'

import { EmptyCart } from './EmptyCart'

export const Cart: FC = () => {
  const dispatch = useAppDispatch()

  const { cart } = useAppSelector(selectCartData)
  const { showCart } = useAppSelector(selectAppData)

  const totalDue = useMemo(() => {
    return cart.reduce((acc, cur) => (acc += cur.quantity * cur.item.price), 0)
  }, [cart])

  const onClose = () => {
    dispatch(setCartVisibility({ value: false }))
  }

  return (
    <>
      <div
        className={cn(
          'fixed left-0 top-0 bg-black-500 w-screen h-screen z-40 overflow-y-auto',
          { invisible: !showCart }
        )}
        onClick={onClose}
      />
      <Transition
        show={showCart}
        enter='transition ease-out duration-300 transform'
        enterFrom='translate-x-full'
        enterTo='translate-x-0 '
        leave='transition ease-out duration-300 transform'
        leaveFrom='translate-x-0 '
        leaveTo='translate-x-full'
        className='flex flex-col h-screen bg-white absolute top-0 right-0 pb-5 z-50 overflow-y-auto w-full sm:w-96'
      >
        <div
          className='flex items-center border-b border-gray px-5 h-16 lg:h-20 cursor-pointer shrink-0'
          onClick={onClose}
        >
          <Icon icon='octicon:chevron-left-24' height={24} />
          <span className='uppercase text-sm ml-2'>Continue shopping</span>
        </div>

        {cart.length ? (
          <>
            <div className='flex flex-col py-5 px-5 border-b-2 border-secondary'>
              <span className='text-3xl font-semibold'>My purchases</span>
              <ul className='grid gap-2 sm:gap-5 px-5 mt-5'>
                {cart.map((item) => (
                  <CartProduct key={item.id} {...item} />
                ))}
              </ul>
            </div>
            <div className='flex flex-col px-5 py-5'>
              <div className='flex items-center justify-between'>
                <span className='text-md text-gray uppercase'>Total due:</span>
                <span className='text-2xl font-semibold'>
                  ${totalDue.toFixed(2)}
                </span>
              </div>

              <Button className='mt-5 px-7 py-3'>
                <span className='uppercase text-md'>Checkout</span>
              </Button>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </Transition>
    </>
  )
}
