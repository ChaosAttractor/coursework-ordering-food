<template>
  <div class="flex gap-[68px] items-center">
    <p class="font-montserrat font-bold text-[24px] text-white">Фильтры</p>
    <div
      class="flex w-[340px] h-[38px] justify-between items-center rounded-[60px] bg-alt-white shadow-sidebar"
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
import { useFilterStore } from "../store/FilterStore";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

const rangeValue = ref([0, 500]);
const min = ref(0);
const max = ref(500);
const filterStore = useFilterStore();
</script>

<style>
:root {
  --vs-border-width: 0px;
  --vs-dropdown-bg: #d9d9d9;
  --font-size: 20px;
  --vs-dropdown-z-index: 1000;
}

.vs__search,
.vs__selected,
.vs__actions {
  z-index: 1000;
  font-size: 20px;
  cursor: pointer;
}

.vs__dropdown-menu {
  border-radius: 10px;
}
</style>
