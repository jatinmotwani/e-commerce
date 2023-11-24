import { defineStore } from 'pinia'
import type { IProductState } from '@/types/store/product'
import { useHttp } from '@/composables/http.composable'

const initialState = (): IProductState => ({
  products: [],
  limit: 0,
  allProductsFetched: false
})

export const useProductStore = defineStore('product', {
  state: (): IProductState => structuredClone(initialState()),
  actions: {
    async getProducts() {
      try {
        if (!this.limit) {
          this.limit = 5
        } else {
          this.limit += 5
        }
        const result = await useHttp().get(`/products?limit=${this.limit}`)
        const response = result.data
        if (this.products.length === response.length) {
          this.allProductsFetched = true
          return
        }
        if (this.limit <= 5) {
          this.products = response
        } else {
          for (let index = this.limit - 5; index < response.length; index++) {
            this.products.push(response[index])
          }
        }
      } catch (error) {
        return error
      }
    }
  },
  getters: {}
})
