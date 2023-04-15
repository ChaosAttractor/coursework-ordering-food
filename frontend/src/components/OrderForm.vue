<template>
  <div class="flex justify-center items-center flex-col">
    <p class="font-montserrat font-bold text-[36px] color-white mt-[20px]">
      Оформление заказа
    </p>
    <div class="flex justify-center">
      <div class="flex flex-col items-center w-[400px]">
        <label
          for="time"
          class="pl-[30px] text-white text-[28px] self-start font-montserrat-alt"
        >
          К какому времени
        </label>
        <select name="time" class="text-black w-full">
          <option v-for="time in timeArr" :key="time.id">
            {{ time.title }}
          </option>
        </select>
        <label
          for="payment"
          class="pl-[30px] text-white text-[28px] self-start font-montserrat-alt"
        >
          Способ оплаты
        </label>
        <select name="payment" class="text-black w-full">
          <option v-for="method in paymentArr" :key="method.id">
            {{ method.title }}
          </option>
        </select>
        <div class="flex justify-between items-center">
          <p class="font-montserrat text-[24px]">
            Итог: {{ cartStore.total }} ₽
          </p>
          <button
            @click="login"
            class="w-[200px] bg-none bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px] my-[40px] font-bold font-montserrat"
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../store/CartStore";

const cartStore = useCartStore();
const timeArr = ref([{ id: 1, title: "Как можно скорее" }]);
const paymentArr = ref([{ id: 1, title: "На месте, при получении" }]);
</script>
