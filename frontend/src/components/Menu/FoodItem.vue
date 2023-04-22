<template>
  <div
    class="w-[288px] h-[350px] bg-alt-white rounded-[60px] flex flex-col justify-center shadow-card"
  >
    <div>
      <img :src="resultImg" />
    </div>
    <div class="flex items-center justify-between">
      <div
        class="font-montserrat text-[24px] font-bold self-start pl-[30px] mt-[20px]"
      >
        <p>{{ item.product_name }}</p>
        <p>{{ item.price }} ₽</p>
      </div>

      <button
        class="mr-[30px] w-[60px] font-montserrat text-[24px] p-[5px] font-bold bg-alt-white self-end flex items-center justify-center cursor-pointer hover:fill-positive transition duration-400 ease-in-out"
        :class="{ active: isActive }"
        @click="add(item)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="w-[32px] h-[32px] mr-[5px] cursor-pointer self-center"
        >
          <path
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/CartStore";
import { computed, ref } from "vue";

const cartStore = useCartStore();
const props = defineProps({
  item: {
    product_id: Number,
    product_name: String,
    image: String,
    type: Number,
    product_weight: Number,
    price: Number,
  },
});

const isActive = ref(false);

const add = (item) => {
  cartStore.addToCart(item);
  isActive.value = true;
  setTimeout(() => {
    isActive.value = false;
  }, 150);
};
const resultImg = computed(
  () => "http://localhost:3000/photos/" + props.item.image
);
</script>

<style scoped>
.active {
  @apply scale-125;
}
</style>
