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
            class="pl-[15px] text-black dark:text-white text-[28px] self-start font-montserrat-alt"
          >
            К какому времени
            <TransitionGroup name="error" tag="span">
              <p
                class="inline text-[15px] font-bold text-red-600"
                v-for="error in vuelidate.timeSelect.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
            </TransitionGroup>
          </label>
          <select
            name="time"
            v-model="vuelidate.timeSelect.$model"
            class="text-black w-[400px] bg-white dark:bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px] mb-[20px] font-montserrat-alt"
          >
            <option v-for="time in timeArr" :key="time.id">
              {{ time.title }}
            </option>
          </select>
          <label
            for="payment"
            class="pl-[15px] text-black dark:text-white text-[28px] self-start font-montserrat-alt"
          >
            Способ оплаты
            <TransitionGroup name="error" tag="span">
              <p
                class="inline text-[15px] font-bold text-red-600"
                v-for="error in vuelidate.paymentSelect.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
            </TransitionGroup>
          </label>
          <select
            name="payment"
            v-model="vuelidate.paymentSelect.$model"
            class="text-black w-[400px] bg-white dark:bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px] font-montserrat-alt"
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
            class="w-[250px] bg-white btn px-[10px] my-[40px] transition duration-400 ease-in-out"
            :class="{ 'active-btn': clicked, shake: shake }"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useCartStore } from "@/store/CartStore";
import { useOrderStore } from "@/store/OrderStore";
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { useEventStore } from "@/store/EventStore";

const cartStore = useCartStore();
const orderStore = useOrderStore();
const eventStore = useEventStore();

const timeArr = ref([{ id: 1, title: "Как можно скорее" }]);
const paymentArr = ref([{ id: 1, title: "На месте, при получении" }]);
const timeSelect = ref({});
const paymentSelect = ref({});
const clicked = ref(false);
const shake = ref(false);

const rules = computed(() => ({
  timeSelect: {
    required: helpers.withMessage("*", required),
  },
  paymentSelect: {
    required: helpers.withMessage("*", required),
  },
}));
const vuelidate = useVuelidate(rules, { timeSelect, paymentSelect });

const createOrder = () => {
  eventStore.onClick(clicked, 100);
  vuelidate.value.$touch();
  let errors = vuelidate.value.$errors.length;
  if (errors) {
    eventStore.onClick(shake, 300);
    return;
  }
  axios
    .post(
      "http://localhost:3000/order-list",
      {
        list_item: JSON.stringify(cartStore.cartItems),
        status: 1,
        date: new Date().toJSON(),
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
};
</script>

<style scoped>
.error-move,
.error-enter-active,
.error-leave-active {
  transition: all 0.3s ease;
}
.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.error-leave-active {
  position: absolute;
}
</style>
