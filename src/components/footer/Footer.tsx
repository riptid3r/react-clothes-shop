import { FC } from 'react'

import { Navigation } from '@/components/navigation/Navigation'

export const Footer: FC = () => {
  return (
    <footer className='py-4 px-5 sm:px-10 bg-secondary text-white flex flex-col'>
      <Navigation forFooter={true} />
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mt-5'>
        <div className='flex flex-col'>
          <span className='text-gray'>© 2023, Ecstasy.</span>
          <span className='text-gray'>
            This project is not commercial, for personal use.
          </span>
        </div>
        <span className='text-gray'>made by riptid3</span>
      </div>
    </footer>
  )
}
