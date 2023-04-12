import cn from 'clsx'
import { FC } from 'react'

interface ILoadingCard {
  type?: 'main' | 'secondary'
}

export const LoadingCard: FC<ILoadingCard> = ({ type = 'main' }) => {
  return (
    <div
      className={cn(
        'flex flex-col w-full rounded-md overflow-hidden mr-8 shrink-0 animate-pulse',
        {
          'max-w-full w-80 h-72 md:h-96': type === 'main',
          'w-full h-64': type === 'secondary'
        }
      )}
    >
      <div className='grow flex items-center justify-center bg-slate-200'>
        <svg
          className='w-12 h-12 text-gray-200'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          fill='#fff'
          viewBox='0 0 640 512'
        >
          <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
        </svg>
      </div>
      <div className='flex items-center justify-between w-full bg-bg-highlight px-3 py-3'>
        <div className='flex flex-col w-full'>
          <div className='h-2.5 bg-slate-200 rounded-full dark:bg-gray-700 mb-2 w-2/5'></div>
          <div className='h-2 bg-slate-200 rounded-full dark:bg-gray-700 mb-2'></div>
          <span className='h-2 bg-slate-200 rounded-full dark:bg-gray-700 w-1/5'></span>
        </div>
      </div>
    </div>
  )
}
