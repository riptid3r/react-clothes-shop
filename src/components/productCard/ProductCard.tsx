import { FC } from 'react'

export const ProductCard: FC = () => {
  return (
    <div className='flex flex-col w-full rounded-md overflow-hidden cursor-pointer mr-8 shrink-0'>
      <div>
        <img
          className='w-full h-full object-cover object-center'
          src='https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dw1480e560/SH9623_CB8_24.jpg?imwidth=915&impolicy=product'
          alt=''
        />
      </div>
      <div className='flex items-center justify-between w-full bg-bg-highlight px-3 py-3'>
        <div className='flex flex-col'>
          <span className='text-xl font-medium'>Lacoste</span>
          <span>Organic Cotton Hooded Sweatshirt</span>
          <span className='text-lg font-medium text-gray'>$18.99</span>
        </div>
      </div>
    </div>
  )
}
