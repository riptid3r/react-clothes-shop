import { IProductItem } from './products.interface'

export interface ICartItem {
  id: number
  item: IProductItem
  quantity: number
  size: string
}

export interface ICartState {
  cart: ICartItem[]
  isLoading: boolean
}
