import { defineStore } from "pinia";

export const useFilterStore = defineStore("FilterStore", {
  state: () => ({
    rangeValue: [0, 500],
    type: 0,
  }),
});
