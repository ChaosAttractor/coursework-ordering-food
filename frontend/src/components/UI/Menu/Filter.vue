<template>
  <div class="flex gap-[68px] items-center">
    <p class="font-montserrat font-bold text-[24px] text-black dark:text-white">
      Фильтры
    </p>
    <div
      class="flex w-[340px] h-[38px] justify-between items-center rounded-[60px] bg-white dark:bg-alt-white shadow-sidebar"
    >
      <p class="font-montserrat pl-[10px] font-bold text-[20px] text-black">
        По цене
      </p>
      <vue-slider
        v-model="filterStore.rangeValue"
        :enable-cross="false"
        :tooltip="'active'"
        :tooltip-placement="'top'"
        :min="min"
        :max="max"
        style="width: 190px; height: 8px; padding-right: 20px"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFilterStore } from "@/store/FilterStore";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

const min = ref(0);
const max = ref(500);
const filterStore = useFilterStore();
</script>

<style>
.vue-slider-rail {
  @apply bg-scrollbar-track dark:bg-gray-primary;
}

.vue-slider-process {
  @apply bg-purple-400 dark:bg-slider-rail;
}

.vue-slider-dot-handle {
  @apply bg-purple-400 dark:bg-slider-dot;
}

.vue-slider-dot-tooltip-inner {
  @apply bg-purple-400 border-purple-400 dark:bg-slider-dot dark:border-slider-dot;
}
</style>
