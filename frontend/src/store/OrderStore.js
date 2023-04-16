import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrderStore = defineStore("OrderStore", () => {
  const orderId = ref(0);
  const orderPage = ref("OrderForm");
  const showModal = ref(false);

  return { orderId, orderPage, showModal };
});
