import { IProductItem } from '@/types/interfaces/products.interface'

import { instance } from '../api/instance'

export const ProductsService = {
  async getList(category: string) {
    if (category === 'trending') {
      return this.getTrending()
    }

    const response = await instance<IProductItem[]>({
      url: `/products?category=${category}`,
      method: 'GET'
    })

    return response
  },

  async getListByCollection(collectionName: string) {
    const response = await instance<IProductItem[]>({
      url: `/products?brand=${collectionName}`,
      method: 'GET'
    })

    return response
  },

  async getProduct(productId: string) {
    const response = await instance<IProductItem>({
      url: `/products/${productId}`,
      method: 'GET'
    })

    return response
  },

  async getTrending() {
    const response = await instance<IProductItem[]>({
      url: '/products?trending=true',
      method: 'GET'
    })

    return response
  },

  async getNewArrival() {
    const response = await instance<IProductItem[]>({
      url: '/products?new_arrival=true',
      method: 'GET'
    })

    return response
  },

  async getRecommendations() {
    const response = await instance<IProductItem[]>({
      url: '/recommendations',
      method: 'GET'
    })

    return response
  }
}
