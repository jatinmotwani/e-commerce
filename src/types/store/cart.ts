import type { IProduct } from './product'

export interface ICartState {
  cartItems: ICartItem[]
}

export interface ICartItem extends IProduct {
  quantity: number
}
