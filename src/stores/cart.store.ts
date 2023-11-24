import type { ICartState, ICartItem } from '@/types/store/cart'
import { defineStore } from 'pinia'

const initialState = (): ICartState => ({
  cartItems: []
})

export const useCartStore = defineStore('cart', {
  state: (): ICartState => structuredClone(initialState()),
  actions: {
    addToCart(cartItem: ICartItem) {
      this.cartItems.push(cartItem)
    },
    removeFromCart(productId: number) {
      const productIndex = this.cartItems.findIndex((item: ICartItem) => item.id === productId)
      this.cartItems.splice(productIndex, 1)
    },
    increaseQuantity(productId: number) {
      this.cartItems.map((cartItem: ICartItem) => {
        if (cartItem.id === productId) {
          cartItem.quantity++
        }
      })
    },
    decreaseQuanity(productId: number) {
      this.cartItems.map((cartItem: ICartItem) => {
        if (cartItem.id === productId) {
          if (cartItem.quantity > 1) {
            cartItem.quantity--
          } else {
            this.removeFromCart(productId)
          }
        }
      })
    }
  },
  getters: {}
})
