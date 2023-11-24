<template>
  <v-card>
    <v-layout>
      <DefaultHeader />
      <v-main id="v-main" class="bg-neutral-0 min-h-screen min-w-full">
        <slot />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import DefaultHeader from '../components/common/DefaultHeader.vue'
</script>

<style scoped></style>
