<template>
  <div class="w-full h-[750px] ml-[15px] py-[30px] pl-[30px] overflow-y-auto">
    <div
      class="flex gap-[30px] flex-wrap justify-center"
      v-if="ordersLength > 0"
    >
      <HistoryItem
        v-for="order in orders"
        :key="order.order_id"
        :order="order"
        :statusList="statusList"
        :loginsList="loginsList"
        class="mb-[30px]"
      />
    </div>
    <div v-else class="h-[750px] flex justify-center items-center">
      <TypeWritter :typeArray="typeArray" />
    </div>
  </div>
</template>

<script setup>
import HistoryItem from "./HistoryItem.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import TypeWritter from "../UI/TypeWritter.vue";

const orders = ref([]);
const statusList = ref([]);
const loginsList = ref([]);
const typeArray = ref(["Ваша история пустая"]);

const ordersLength = computed(() => {
  return orders.value.length;
});

onMounted(() => {
  axios
    .get("http://localhost:3000/order-list/user", { withCredentials: true })
    .then((res) => (orders.value = res.data));
  axios
    .get("http://localhost:3000/status", { withCredentials: true })
    .then((res) => (statusList.value = res.data));
});
</script>
