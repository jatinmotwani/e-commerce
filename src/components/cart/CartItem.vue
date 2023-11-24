<template>
  <div class="p-5 border border-neutral-500 rounded-md">
    <div class="flex gap-3">
      <div class="p-3 border border-neutral-300 w-fit rounded-md shrink-0">
        <img
          class="object-contain w-32 h-32"
          width="128"
          height="128"
          :alt="cartItem.title"
          :src="cartItem.image"
        />
      </div>
      <div class="text-neutral-900">
        <div class="line-clamp-2 h-[3.75rem] font-medium text-lg">
          {{ cartItem.title }}
        </div>
        <div class="font-bold text-base flex">
          <v-icon size="14" icon="mdi-currency-usd" class="mt-0.5" />
          {{ cartItem.price }}
        </div>
      </div>
    </div>
    <div
      class="flex justify-between border-t border-dotted border-neutral-300 mt-4 py-4 items-center"
    >
      <button
        class="border border-neutral-300 rounded-lg p-4"
        @click="cartStore.removeFromCart(cartItem.id)"
      >
        <v-icon size="28" color="red" icon="mdi-delete" />
      </button>
      <div class="flex gap-x-3">
        <button
          class="border border-neutral-500 rounded-md"
          @click="cartStore.decreaseQuanity(cartItem.id)"
        >
          <v-icon icon="mdi-minus" />
        </button>
        {{ cartItem.quantity ?? '' }}
        <button
          class="border border-neutral-500 rounded-md"
          :disabled="cartItem.quantity >= 15"
          :class="{ '!cursor-not-allowed': cartItem.quantity >= 15 }"
          @click="cartStore.increaseQuantity(cartItem!.id)"
        >
          <v-icon :class="{ 'text-neutral-300': cartItem.quantity > 15 }" icon="mdi-plus" />
          <v-tooltip v-if="cartItem.quantity >= 15" activator="parent" location="top">
            Cannot select more than 15
          </v-tooltip>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart.store'
import type { ICartItem } from '@/types/store/cart'

// Props
interface IProps {
  cartItem: ICartItem
}
withDefaults(defineProps<IProps>(), {})

// Constants
const cartStore = useCartStore()
</script>
