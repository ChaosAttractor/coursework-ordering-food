<template>
  <Teleport to="#app">
    <Transition name="fade">
      <div
        :class="{ dark: settingsStore.darkMode }"
        v-if="orderStore.showModal"
        @click="close"
        class="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-black-30 flex justify-center items-center"
      >
        <Transition name="slide" appear>
          <div
            @click.stop
            class="w-[500px] h-[450px] text-black bg-alt-white dark:text-white dark:bg-gray-primary rounded-[60px]"
          >
            <slot></slot>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useSettingsStore } from "@/store/SettingsStore";
import { useOrderStore } from "@/store/OrderStore";

const settingsStore = useSettingsStore();
const orderStore = useOrderStore();

const close = () => {
  orderStore.showModal = false;
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}

.slide-enter-from,
.slide-leave-to {
  @apply opacity-0 translate-x-full;
}
.slide-enter-active,
.slide-leave-active {
  @apply transition-transform duration-300;
}
</style>
