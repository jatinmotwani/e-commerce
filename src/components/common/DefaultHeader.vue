<template>
  <v-app-bar id="v-app-bar" height="50">
    <v-app-bar-title>
      <div class="flex gap-x-1">
        <v-icon class="text-neutral-900" icon="mdi-alpha-e-circle" />
        <div class="text-neutral-900 text-xl font-bold">Ecommerce</div>
      </div>
    </v-app-bar-title>
    <v-spacer />
    <button type="button" class="relative" @click="$router.push('/cart')">
      <v-icon icon="mdi-cart-outline mr-3 cursor-pointer" />
      <div class="absolute -top-2.5 right-5 text-xs text-yellow-500 font-bold">
        {{ totalItemCount > 0 ? totalItemCount : '' }}
      </div>
    </button>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart.store'
import type { ICartItem } from '@/types/store/cart'
import { computed } from 'vue'

const cartStore = useCartStore()
const totalItemCount = computed(() => {
  let totalQuantity = 0
  cartStore.cartItems.forEach((item: ICartItem) => {
    totalQuantity += item.quantity
  })
  return totalQuantity
})
</script>
