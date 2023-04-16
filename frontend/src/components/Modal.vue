<template>
  <Teleport to="body">
    <div
      v-if="orderStore.showModal"
      @click="close"
      class="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-black-30 flex justify-center items-center"
    >
      <div
        @click.stop
        class="w-[500px] h-[450px] text-white bg-gray-primary rounded-[60px]"
      >
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useOrderStore } from "../store/OrderStore";

const orderStore = useOrderStore();

const close = () => {
  orderStore.showModal = false;
};
</script>
