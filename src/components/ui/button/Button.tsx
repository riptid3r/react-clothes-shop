import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cn from 'clsx'

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
        'rounded-3xl font-semibold px-7 py-3',
        {
          'text-white bg-primary': variant === 'primary',
          'text-secondary bg-transparent border border-black-500 hover:bg-primary hover:border-transparent hover:text-white':
            variant === 'secondary'
        },
        className
      )}
    >
      {children}
    </button>
  )
}
