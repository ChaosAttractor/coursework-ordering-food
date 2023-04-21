<template>
  <div>
    <p class="text-[36px] font-montserrat font-bold text-white">Корзина</p>
    <div class="flex justify-between">
      <p class="text-[24px] font-montserrat font-bold text-white mt-[20px]">
        Итог: {{ cartStore.total }} ₽
      </p>
      <p
        class="mr-[30px] h-[40px] flex items-center font-montserrat text-[24px] p-[15px] font-bold bg-alt-white shadow-sidebar rounded-[60px] cursor-pointer hover:scale-[1.05] transition duration-400 ease-in-out"
        @click="orderStore.showModal = true"
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
import { useCartStore } from "../store/CartStore";
import CartList from "../components/CartList.vue";
import Modal from "../components/Modal.vue";
import OrderForm from "../components/OrderForm.vue";
import OrderInfo from "../components/OrderInfo.vue";
import { useOrderStore } from "../store/OrderStore";

const cartStore = useCartStore();
const orderStore = useOrderStore();
</script>
