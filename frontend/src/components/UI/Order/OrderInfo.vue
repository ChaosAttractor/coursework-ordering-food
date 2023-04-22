<template>
  <div class="flex justify-center items-center flex-col">
    <p class="font-montserrat font-bold text-[36px] color-white my-[20px]">
      Заказ № {{ orderStore.orderId }}
    </p>
    <div class="flex justify-center">
      <div
        class="flex flex-col items-center justify-between w-[400px] h-[400px]"
      >
        <div
          class="font-montserrat font-bold text-[24px] flex flex-col justify-between"
        >
          <p>Ожидайте готовности заказа</p>
          <div class="my-[20px]">
            <p>Чтобы получить заказ:</p>
            <p>Покажите № заказа на кассе для получения своего заказа</p>
          </div>
          <p>Статус: принят</p>
        </div>
        <div class="w-full flex justify-center items-center mb-[30px]">
          <button
            @click="close"
            class="w-[200px] bg-white dark:bg-alt-white h-[40px] flex justify-center rounded-[60px] text-[24px] px-[10px] my-[40px] font-bold font-montserrat text-black hover:scale-[1.05] transition duration-400 ease-in-out"
            :class="{ 'active-btn': click }"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useOrderStore } from "@/store/OrderStore";
import { useEventStore } from "@/store/EventStore";

const orderStore = useOrderStore();
const eventStore = useEventStore();

const click = ref(false);

const close = () => {
  eventStore.onClick(click, 100);
  orderStore.showModal = false;
  orderStore.orderFormPage = true;
  orderStore.orderInfoPage = false;
};
</script>
