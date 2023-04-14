<template>
  <div class="w-[80%] bg-alt-white rounded-[60px] shadow-card">
    <div class="flex items-center justify-between">
      <div class="w-[30%]">
        <p
          class="font-montserrat text-[24px] font-bold self-start pl-[30px] py-[15px]"
        >
          {{ item.product_name }}
        </p>
      </div>
      <div class="w-[30%]">
        <p class="font-montserrat text-[24px] font-bold self-start pl-[30px]">
          {{ item.price }} ₽
        </p>
      </div>
      <div class="w-[30%] flex items-center select-none">
        <p
          class="font-montserrat text-[24px] font-bold self-start pl-[30px] cursor-pointer"
          @click="cartStore.deincQnt(item)"
        >
          -
        </p>
        <p class="font-montserrat text-[24px] font-bold self-start pl-[30px]">
          {{ item.qnt }} шт.
        </p>
        <p
          class="font-montserrat text-[24px] font-bold self-start pl-[30px] cursor-pointer"
          @click="cartStore.incQnt(item)"
        >
          +
        </p>
      </div>

      <button
        class="mr-[30px] font-montserrat text-[24px] p-[5px] font-bold bg-alt-white shadow-sidebar rounded-[60px]"
        @click="cartStore.removeFromCart(item)"
      >
        Удалить
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../store/CartStore";
import { computed } from "vue";

const cartStore = useCartStore();
const props = defineProps({
  item: {
    product_id: Number,
    product_name: String,
    image: String,
    type: Number,
    product_weight: Number,
    price: Number,
    qnt: Number,
  },
});
</script>
