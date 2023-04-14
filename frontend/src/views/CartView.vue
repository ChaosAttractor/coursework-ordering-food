<template>
  <div>
    <p class="text-[36px] font-montserrat font-bold text-white">Корзина</p>
    <div class="flex justify-between">
      <p class="text-[24px] font-montserrat font-bold text-white mt-[20px]">
        Итог: {{ cartStore.total }} ₽
        {{ cartStore.cartItems }}
      </p>
      <p
        class="mr-[30px] font-montserrat text-[24px] p-[15px] font-bold bg-alt-white shadow-sidebar rounded-[60px] cursor-pointer"
      >
        Заказать
      </p>
    </div>

    <CartList class="mt-[30px] w-full" />
  </div>
</template>

<script setup>
import { useCartStore } from "../store/CartStore";
import CartList from "../components/CartList.vue";

const cartStore = useCartStore();
</script>
