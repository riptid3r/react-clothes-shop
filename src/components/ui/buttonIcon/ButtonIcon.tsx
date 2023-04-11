import { Icon, IconProps } from '@iconify/react'
import { FC, PropsWithChildren } from 'react'

export const ButtonIcon: FC<PropsWithChildren<IconProps>> = (props) => {
  return <Icon className='cursor-pointer' {...props} />
}
