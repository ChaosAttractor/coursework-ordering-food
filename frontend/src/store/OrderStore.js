import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrderStore = defineStore("OrderStore", () => {
  const orderId = ref(0);
  const orderFormPage = ref(true);
  const orderInfoPage = ref(false);
  const showModal = ref(false);

  return { orderId, orderFormPage, orderInfoPage, showModal };
});
