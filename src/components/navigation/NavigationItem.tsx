import cn from 'clsx'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface INavigationItem {
  link: string
  name: string
  value: string
  forFooter?: boolean
  onClick: () => void
}

export const NavigationItem: FC<INavigationItem> = ({
  link,
  name,
  value,
  forFooter = false,
  onClick
}) => {
  return (
    <li>
      <NavLink to={link} onClick={onClick}>
        <span
          className={cn(
            `relative mr-0 md:mr-5 before:block before:absolute before:w-full 
            before:max-w-0 before:opacity-0 before:bottom-0 before:transition-all ease 
            before:h-0.5 before:duration-300 before:bg-primary hover:before:opacity-100 
            hover:before:max-w-full`,
            {
              'before:opacity-100 before:max-w-full':
                value === link && !forFooter,
              'text-md': forFooter,
              'text-xl': !forFooter
            }
          )}
        >
          <span>{name}</span>
        </span>
      </NavLink>
    </li>
  )
}
