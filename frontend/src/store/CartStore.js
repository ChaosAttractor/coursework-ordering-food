import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("CartStore", () => {
  const cartItems = ref([]);
  const total = computed(() => {
    let result = [];

    if (cartItems.value.length) {
      for (let item of cartItems.value) {
        result.push(item.price * item.qnt);
      }
      result = result.reduce((sum, el) => parseInt(sum) + parseInt(el));
      return result;
    } else {
      return 0;
    }
  });
  const itemsInCart = computed(() => {
    let result = [];

    if (cartItems.value.length) {
      for (let item of cartItems.value) {
        result.push(item.qnt);
      }
      result = result.reduce((sum, el) => parseInt(sum) + parseInt(el));
      return result;
    } else {
      return 0;
    }
  });
  const addToCart = (item) => {
    if (cartItems.value.includes(item)) {
      item.qnt++;
    } else {
      item.qnt = 1;
      cartItems.value.push(item);
    }
  };
  const removeFromCart = (item) => {
    if (cartItems.value.includes(item)) {
      if (item.qnt > 1) {
        item.qnt--;
      } else {
        let index = cartItems.value.indexOf(item);
        cartItems.value.splice(index, 1);
      }
    }
  };

  return { cartItems, total, itemsInCart, addToCart, removeFromCart };
});
