<template>
  <div class="w-full h-[800px] ml-[15px] pl-[30px] overflow-y-auto">
    <div class="flex gap-[30px] flex-wrap justify-center">
      <OrderItem
        v-for="order in ordersSorted"
        :key="order.order_id"
        :order="order"
        :statusList="statusList"
        :loginsList="loginsList"
        class="mb-[30px]"
      />
    </div>
  </div>
</template>

<script setup>
import OrderItem from "./OrderItem.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";

const orders = ref([]);
const statusList = ref([]);
const loginsList = ref([]);

const ordersSorted = computed(() => {
  return orders.value.sort((a, b) => b.order_id - a.order_id);
});

onMounted(() => {
  axios
    .get("http://localhost:3000/order-list", { withCredentials: true })
    .then((res) => (orders.value = res.data));
  axios
    .get("http://localhost:3000/status", { withCredentials: true })
    .then((res) => (statusList.value = res.data));
  axios
    .get("http://localhost:3000/user/logins", { withCredentials: true })
    .then((res) => (loginsList.value = res.data));
});
</script>
