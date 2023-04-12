import { ICartItem } from '@/types/interfaces/cart.interface'

import { instance } from '../api/instance'

export const CartService = {
  async getCart() {
    const response = await instance<ICartItem[]>({
      url: '/cart',
      method: 'GET'
    })

    return response
  },

  async addInCart(item: Omit<ICartItem, 'id'>) {
    const response = await instance<ICartItem>({
      url: '/cart',
      method: 'POST',
      data: item
    })

    return response
  },

  async removeFromCart(id: number) {
    const response = await instance<ICartItem>({
      url: `/cart/${id}`,
      method: 'DELETE'
    })

    return response
  },

  async setItemSize(item: ICartItem) {
    const response = await instance<ICartItem>({
      url: `/cart/${item.id}`,
      method: 'PUT',
      data: item
    })

    return response
  },

  async setItemQuantity(item: ICartItem) {
    const response = await instance<ICartItem>({
      url: `/cart/${item.id}`,
      method: 'PUT',
      data: item
    })

    return response
  }
}
