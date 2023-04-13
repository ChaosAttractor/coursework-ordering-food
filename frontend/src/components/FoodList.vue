<template>
  <div class="w-full h-[700px] ml-[15px] z-0 flex gap-[30px]">
    <FoodItem v-for="item in menu" :key="item.product_id" :item="item" />
  </div>
</template>

<script>
import FoodItem from "./FoodItem.vue";
import axios from "axios";

export default {
  components: { FoodItem },
  data() {
    return {
      menu: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/menu", { withCredentials: true })
      .then((res) => (this.menu = res.data));
  },
};
</script>
