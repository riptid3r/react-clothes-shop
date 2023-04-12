export interface ICollectionItem {
  id: string
  image: string
  name: string
}

export interface ICollectionsState {
  collections: ICollectionItem[]
}
