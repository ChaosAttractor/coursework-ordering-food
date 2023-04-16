<template>
  <div class="w-[80%] bg-alt-white rounded-[60px] shadow-card">
    <div class="flex items-center justify-between">
      <div class="w-[30%]">
        <ul
          v-for="item in list"
          :key="item.product_id"
          class="font-montserrat text-[24px] font-bold self-start pl-[30px]"
        >
          <li>{{ item.product_name }} - {{ item.qnt }} шт.</li>
        </ul>
      </div>
      <div class="w-[30%]">
        <p class="font-montserrat text-[24px] font-bold self-start pl-[30px]">
          {{ order.ordered_by }}
        </p>
      </div>
      <div class="w-[30%] flex items-center select-none">
        <p
          class="font-montserrat text-[24px] font-bold self-start pl-[30px]"
        ></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axios from "axios";

const props = defineProps({
  order: {
    order_id: Number,
    list_item: String,
    ordered_by: Number,
    status: Number,
    date: Date,
    price: Number,
    payment_method: Number,
  },
});

const status = ref([]);
const list = computed(() => JSON.parse(props.order.list_item));

onMounted(() => {
  axios
    .get("http://localhost:3000/status", { withCredentials: true })
    .then((res) => (status.value = res.data));
});
</script>
