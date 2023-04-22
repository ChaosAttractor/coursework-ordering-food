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
        class="mr-[30px] h-[40px] flex items-center font-montserrat text-[24px] p-[15px] font-bold bg-alt-white shadow-sidebar rounded-[60px] select-none cursor-pointer hover:scale-[1.05] transition duration-400 ease-in-out"
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
import { useCartStore } from "../store/CartStore";
import { useOrderStore } from "../store/OrderStore";
import CartList from "../components/Cart/CartList.vue";
import Modal from "../components/UI/Modal.vue";
import OrderForm from "../components/UI/Order/OrderForm.vue";
import OrderInfo from "../components/UI/Order/OrderInfo.vue";

const cartStore = useCartStore();
const orderStore = useOrderStore();
const clicked = ref(false);

const click = (event, timing) => {
  event.value = true;
  setTimeout(() => {
    event.value = false;
  }, timing);
};

const order = () => {
  if (cartStore.itemsInCart == 0) return;
  click(clicked, 100);
  orderStore.showModal = true;
};
</script>
