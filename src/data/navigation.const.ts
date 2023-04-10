import { RouterPath } from '@/router/paths'

export const NavigationMenu = [
  {
    name: 'Men',
    link: `${RouterPath.Category}/men`
  },
  {
    name: 'Women',
    link: `${RouterPath.Category}/women`
  },
  {
    name: 'Trending',
    link: `${RouterPath.Category}/trending`
  },
  {
    name: 'Collections',
    link: `${RouterPath.Category}/collections`
  }
] as const
