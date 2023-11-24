<template>
  <div v-if="totalItemCount" class="my-10 mx-20 flex justify-between">
    <div class="w-[70%] p-5 space-y-5 shrink-0">
      <div>
        <v-btn-toggle v-model="listView" color="black" mandatory>
          <v-btn icon="mdi-format-list-checkbox" :value="true"></v-btn>
          <v-btn icon="mdi-card-multiple-outline" :value="false"></v-btn>
        </v-btn-toggle>
      </div>
      <div :class="listView ? 'space-y-4' : 'grid grid-cols-2 gap-4'">
        <div v-for="cartItem in cartStore.cartItems" :key="`cartitem_${cartItem.id}`">
          <CartItem :cart-item="cartItem" />
        </div>
      </div>
    </div>
    <div class="w-[20%] shrink-0 p-5 border border-neutral-300 rounded-md h-fit">
      <div class="flex">
        Subtotal ({{ totalItemCount }} Items):
        <div class="font-bold flex">
          <v-icon size="14" icon="mdi-currency-usd" class="mt-0.5" />{{ subtotal }}
        </div>
      </div>
      <button
        :disabled="true"
        class="py-2 w-full bg-yellow-300 rounded-lg mx-auto mt-4 !cursor-not-allowed"
      >
        Proceed to buy
      </button>
    </div>
  </div>
  <div v-else class="w-full h-screen flex flex-col justify-center items-center gap-y-6">
    <div>Your cart is empty <v-icon icon="mdi-emoticon-sad-outline" /></div>
    <button class="px-10 py-2 border border-neutral-300 rounded-lg" @click="$router.push('/')">
      Lets shop
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart.store'
import CartItem from '@/components/cart/CartItem.vue'
import { computed, type Ref, ref } from 'vue'
import type { ICartItem } from '@/types/store/cart'

const cartStore = useCartStore()

// Constants
const listView: Ref<boolean> = ref(true)

// Computed
const totalItemCount = computed(() => {
  let totalQuantity = 0
  cartStore.cartItems.forEach((item: ICartItem) => {
    totalQuantity += item.quantity
  })
  return totalQuantity
})
const subtotal = computed(() => {
  let totalAmount = 0
  cartStore.cartItems.forEach((item: ICartItem) => {
    totalAmount += item.price * item.quantity
  })
  return totalAmount.toFixed(2)
})
</script>
