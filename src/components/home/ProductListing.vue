<template>
  <div class="my-10 mx-20 grid grid-cols-3 gap-4">
    <div v-for="product in productStore.products" :key="`product_${product.id}`">
      <ProductCard :product="product" />
    </div>
  </div>
  <div v-if="isLoading" class="w-screen flex justify-center mb-5">
    <v-progress-circular size="24" indeterminate color="grey" />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product.store'
import { onMounted, ref, type Ref } from 'vue'
import { debounce } from 'lodash'
import ProductCard from '@/components/home/ProductCard.vue'

// Constants
const productStore = useProductStore()
const isLoading: Ref<boolean> = ref(false)

// Lifecycle events
onMounted(async () => {
  await fetchProductList()
  window.addEventListener('scroll', handleScroll)
})

// Methods
const handleScroll = async () => {
  let bottomOfThePage =
    document.documentElement.scrollTop + window.innerHeight ===
    document.documentElement.offsetHeight
  if (bottomOfThePage && !productStore.allProductsFetched) {
    await fetchProductList()
  }
}
const fetchProductList = debounce(async () => {
  isLoading.value = true
  await productStore.getProducts()
  isLoading.value = false
}, 1000)
</script>
