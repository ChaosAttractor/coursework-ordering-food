<template>
  <div class="w-full h-[700px] ml-[15px] py-[30px] pl-[30px] overflow-y-auto">
    <TransitionGroup
      name="list"
      tag="div"
      class="flex gap-[30px] flex-wrap justify-center"
    >
      <CartItem
        v-if="cartStore.itemsInCart > 0"
        v-for="item in cartStore.cartItems"
        :key="item.product_id"
        :item="item"
      />
      <div
        v-else
        class="h-[500px] flex flex-col justify-center items-center font-montserrat font-bold text-[24px] text-black dark:text-white"
      >
        <p>Корзина пустая</p>
        <p>Вернитесь в меню и заполните ее</p>
        <button
          class="mt-[10px] btn border-[2px] border-alt-white shadow-xl transition duration-400 ease-in-out"
          @click="redirect"
        >
          В Меню
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import CartItem from "./CartItem.vue";
import { useCartStore } from "@/store/CartStore";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const router = useRouter();

const redirect = () => {
  router.push("/dashboard/");
};
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.list-leave-active {
  position: absolute;
}
</style>
