export interface IProductState {
  products: IProduct[]
  limit: number
  allProductsFetched: boolean
}

export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: IRating
}

export interface IRating {
  rate: number
  count: number
}
