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
        class="mr-[30px] font-montserrat text-[24px] p-[5px] font-bold bg-none rounded-[60px] w-[60px] flex justify-center items-center cursor-pointer"
        @click="cartStore.removeFromCart(item)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          class="w-[34px] h-[34px] self-center"
        >
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
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
