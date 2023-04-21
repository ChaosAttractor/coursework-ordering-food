<template>
  <div class="w-full h-[700px] ml-[15px] pl-[30px] overflow-y-auto">
    <TransitionGroup
      name="list"
      tag="div"
      class="flex gap-[30px] flex-wrap justify-center"
    >
      <CartItem
        v-for="item in cartStore.cartItems"
        :key="item.product_id"
        :item="item"
      />
    </TransitionGroup>
  </div>
</template>

<script setup>
import CartItem from "./CartItem.vue";
import { useCartStore } from "../store/CartStore";

const cartStore = useCartStore();
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.list-leave-active {
  position: absolute;
}
</style>
