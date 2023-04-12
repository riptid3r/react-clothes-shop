import { ICollectionItem } from '@/types/interfaces/collections.interface'

import { instance } from '../api/instance'

export const CollectionsService = {
  async getCollections() {
    const response = await instance<ICollectionItem[]>({
      url: `/collections`,
      method: 'GET'
    })

    return response
  }
}
