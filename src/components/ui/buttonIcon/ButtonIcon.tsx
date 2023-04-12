import { Icon, IconProps } from '@iconify/react'
import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

export const ButtonIcon: FC<PropsWithChildren<IconProps>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn('cursor-pointer', className)}>
      <Icon {...props} />
    </div>
  )
}
