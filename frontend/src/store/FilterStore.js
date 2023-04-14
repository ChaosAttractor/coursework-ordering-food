import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilterStore = defineStore("FilterStore", () => {
  const rangeValue = ref([0, 500]);

  return { rangeValue };
});
