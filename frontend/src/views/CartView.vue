<template>
  <div>
    <p class="text-[36px] font-montserrat font-bold text-white">Корзина</p>
    <p class="text-[36px] font-montserrat font-bold text-white">
      {{ cartStore.cartItems }}
    </p>
    <p class="text-[36px] font-montserrat font-bold text-white">
      {{ cartStore.total }} | {{ cartStore.itemsInCart }}
    </p>
  </div>
</template>

<script setup>
import { useCartStore } from "../store/CartStore";

const cartStore = useCartStore();
</script>
