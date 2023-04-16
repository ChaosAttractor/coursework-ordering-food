<template>
  <div class="flex justify-center items-center flex-col">
    <p class="font-montserrat font-bold text-[36px] color-white my-[20px]">
      Оформление заказа
    </p>
    <div class="flex justify-center">
      <div
        class="flex flex-col items-center justify-between w-[400px] h-[400px]"
      >
        <div>
          <label
            for="time"
            class="pl-[15px] text-white text-[28px] self-start font-montserrat-alt"
          >
            К какому времени
          </label>
          <select
            name="time"
            v-model="timeSelect"
            class="text-black w-[400px] bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px] mb-[20px] font-montserrat-alt"
          >
            <option v-for="time in timeArr" :key="time.id">
              {{ time.title }}
            </option>
          </select>
          <label
            for="payment"
            class="pl-[15px] text-white text-[28px] self-start font-montserrat-alt"
          >
            Способ оплаты
          </label>
          <select
            name="payment"
            v-model="paymentSelect"
            class="text-black w-[400px] bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px] font-montserrat-alt"
          >
            <option v-for="method in paymentArr" :key="method.id">
              {{ method.title }}
            </option>
          </select>
        </div>
        <div class="w-full flex justify-between items-center mb-[30px]">
          <p class="font-montserrat text-[24px]">
            Итог: {{ cartStore.total }} ₽
          </p>
          <button
            @click="createOrder"
            class="w-[250px] bg-none bg-alt-white h-[40px] flex items-center rounded-[60px] text-[24px] px-[10px] my-[40px] font-bold font-montserrat text-black"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../store/CartStore";
import { useOrderStore } from "../store/OrderStore";
import axios from "axios";

const cartStore = useCartStore();
const orderStore = useOrderStore();

const timeArr = ref([{ id: 1, title: "Как можно скорее" }]);
const paymentArr = ref([{ id: 1, title: "На месте, при получении" }]);
const timeSelect = ref({});
const paymentSelect = ref({});

const createOrder = () =>
  axios
    .post(
      "http://localhost:3000/order-list",
      {
        list_item: JSON.stringify(cartStore.cartItems),
        status: 1,
        date: new Date().toISOString(),
        price: cartStore.total,
        payment_method: 1,
      },
      {
        withCredentials: true,
        "Access-Control-Allow-Origin": "http://localhost:3000/order-list",
      }
    )
    .then((res) => {
      cartStore.cartItems = [];
      orderStore.orderId = res.data.order_id;
      orderStore.orderFormPage = false;
      orderStore.orderInfoPage = true;
    })
    .catch((error) => {
      console.log(error);
    });
</script>
