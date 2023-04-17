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
          v-for="item in status"
          :key="item.status_id"
          class="font-montserrat text-[24px] font-bold self-start pl-[30px]"
          @click="nextStatus"
        >
          {{ item.status_name }}
        </p>
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
  statusList: {
    status_id: Number,
    status_name: String,
  },
});

const list = computed(() => JSON.parse(props.order.list_item));
const status = computed(() => {
  return props.statusList.filter((el) => {
    if (el.status_id == props.order.status) {
      return el;
    }
  });
});

const nextStatus = async () => {
  if (props.order.status < 4) {
    props.order.status++;
    await axios.patch(
      `http://localhost:3000/order-list/${props.order.order_id}`,
      { status: props.order.status },
      {
        withCredentials: true,
        "Access-Control-Allow-Origin": "http://localhost:3000/order-list",
      }
    );
  }
};
</script>
