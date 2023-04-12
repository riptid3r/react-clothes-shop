export interface IProductItem {
  id: string
  brand: string
  name: string
  description: string
  combination: string
  price: number
  category: string
  sizes: {
    id: string
    name: string
  }[]
  images: {
    id: string
    link: string
  }[]
}

export interface IProductsState {
  products: IProductItem[]
  newArrival: IProductItem[]
}
