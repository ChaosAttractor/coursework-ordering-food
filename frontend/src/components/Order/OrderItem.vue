<template>
  <div class="w-[80%] bg-white dark:bg-alt-white rounded-[60px] shadow-card">
    <div class="flex items-center justify-around">
      <div class="w-[33%] flex flex-row">
        <p class="font-montserrat text-[24px] font-bold pl-[60px] self-center">
          №{{ order.order_id }}
        </p>
        <div>
          <ul
            v-for="item in list"
            :key="item.product_id"
            class="font-montserrat text-[24px] font-bold self-start pl-[60px]"
          >
            <li>{{ item.product_name }} - {{ item.qnt }} шт.</li>
          </ul>
        </div>
      </div>
      <div
        class="w-[30%] font-montserrat text-[24px] text-center font-bold py-[10px]"
      >
        <p>
          {{ formatedDate }}
        </p>
        <p>{{ formatedTime }}</p>
      </div>
      <div class="w-[30%] flex justify-center">
        <p
          v-for="item in logins"
          :key="item.id"
          class="font-montserrat text-[24px] font-bold self-start pl-[30px]"
        >
          {{ item.username }}
        </p>
      </div>
      <div class="w-[30%] flex items-center justify-center select-none">
        <p
          v-for="item in status"
          :key="item.status_id"
          class="font-montserrat text-[24px] font-bold self-start pl-[30px] cursor-pointer hover:text-positive transition duration-400 ease-in-out"
          :class="{ active: isActive }"
          @click="nextStatus"
        >
          {{ item.status_name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import axios from "axios";

const isActive = ref(false);

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
  loginsList: {
    id: Number,
    login: String,
  },
});

const formatedDate = computed(() =>
  new Date(props.order.date).toLocaleDateString("ru-RU")
);
const formatedTime = computed(() =>
  new Date(props.order.date).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  })
);
const list = computed(() => JSON.parse(props.order.list_item));
const status = computed(() => {
  return props.statusList.filter((el) => {
    if (el.status_id == props.order.status) {
      return el;
    }
  });
});
const logins = computed(() => {
  return props.loginsList.filter((el) => {
    if (el.id == props.order.ordered_by) {
      return el;
    }
  });
});

const nextStatus = async () => {
  if (props.order.status < 4) {
    props.order.status++;
    isActive.value = true;
    setTimeout(() => {
      isActive.value = false;
    }, 150);
    await axios.patch(
      `http://localhost:3000/order-list/${props.order.order_id}`,
      { status: props.order.status },
      {
        withCredentials: true,
        "Access-Control-Allow-Origin": `http://localhost:3000/`,
      }
    );
  }
};
</script>

<style>
.active {
  @apply scale-90;
}
</style>
