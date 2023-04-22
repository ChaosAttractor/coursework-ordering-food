<template>
  <div>
    <p class="text-[36px] font-montserrat font-bold text-black dark:text-white">
      Корзина
    </p>
    <div class="flex justify-between">
      <p
        class="text-[24px] font-montserrat font-bold text-black dark:text-white mt-[20px]"
      >
        Итог: {{ cartStore.total }} ₽
      </p>
      <p
        class="mr-[30px] btn shadow-sidebar transition duration-400 ease-in-out"
        :class="{ 'active-btn': clicked, shake: error }"
        @click="order"
      >
        Заказать
      </p>
    </div>
    <Modal>
      <OrderForm v-if="orderStore.orderFormPage" />
      <OrderInfo v-if="orderStore.orderInfoPage" />
    </Modal>
    <CartList class="mt-[30px] w-full" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/store/CartStore";
import { useOrderStore } from "@/store/OrderStore";
import CartList from "../components/Cart/CartList.vue";
import Modal from "../components/UI/Modal.vue";
import OrderForm from "../components/UI/Order/OrderForm.vue";
import OrderInfo from "../components/UI/Order/OrderInfo.vue";
import { useEventStore } from "@/store/EventStore";

const cartStore = useCartStore();
const orderStore = useOrderStore();
const eventStore = useEventStore();
const clicked = ref(false);
const error = ref(false);

const order = () => {
  eventStore.onClick(clicked, 100);
  if (cartStore.itemsInCart == 0) {
    eventStore.onClick(error, 300);
    return;
  }
  orderStore.showModal = true;
};
</script>
