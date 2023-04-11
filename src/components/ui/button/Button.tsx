import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant = 'primary',
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        'rounded-3xl font-semibold transition-all',
        {
          'text-white bg-primary': variant === 'primary',
          'text-white bg-gray opacity-70 hover:bg-primary hover:border-transparent hover:text-white':
            variant === 'secondary'
        },
        className
      )}
    >
      {children}
    </button>
  )
}
