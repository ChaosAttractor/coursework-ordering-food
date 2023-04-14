<template>
  <div class="w-full h-[700px] ml-[15px] pl-[30px] overflow-y-auto">
    <div class="flex gap-[30px] flex-wrap justify-center">
      <CartItem
        v-for="item in cartStore.cartItems"
        :key="item.product_id"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import CartItem from "./CartItem.vue";
import { useCartStore } from "../store/CartStore";

const cartStore = useCartStore();
</script>
