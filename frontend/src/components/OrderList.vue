<template>
  <div class="w-full h-[700px] ml-[15px] pl-[30px] overflow-y-auto">
    <div class="flex gap-[30px] flex-wrap justify-center">
      <OrderItem v-for="order in orders" :key="order.order_id" :order="order" />
    </div>
  </div>
</template>

<script setup>
import OrderItem from "./OrderItem.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";

const orders = ref([]);

onMounted(() => {
  axios
    .get("http://localhost:3000/order-list", { withCredentials: true })
    .then((res) => (orders.value = res.data));
});
</script>
