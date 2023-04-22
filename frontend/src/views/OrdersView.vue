<template>
  <div>
    <p class="text-[36px] font-montserrat font-bold text-black dark:text-white">
      Заказы
    </p>
    <OrderList class="mt-[30px] w-full" />
  </div>
</template>

<script setup>
import OrderList from "../components/Order/OrderList.vue";
</script>
