<template>
  <div class="w-full h-[700px] ml-[15px] pl-[30px] overflow-y-auto">
    <div v-for="fType in foodType">
      <p class="font-montserrat font-bold text-[24px] text-white">
        {{ fType.type_name }}
      </p>
      <div class="flex gap-[30px]">
        <FoodItem
          v-for="item in filteredMenu"
          :key="item.product_id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FoodItem from "./FoodItem.vue";
import axios from "axios";
import { useFilterStore } from "../store/FilterStore";
import { mapState } from "pinia";

export default {
  components: { FoodItem },
  data() {
    return {
      menu: [],
      foodType: [],
    };
  },
  computed: {
    ...mapState(useFilterStore, ["type"]),
    ...mapState(useFilterStore, ["rangeValue"]),
    minPrice() {
      return this.rangeValue[0];
    },
    maxPrice() {
      return this.rangeValue[1];
    },
    filteredMenu() {
      return this.menu.filter(
        (item) => item.price >= this.minPrice && item.price <= this.maxPrice
        // && item.type == fType.type_id
      );
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/menu", { withCredentials: true })
      .then((res) => (this.menu = res.data));
    axios
      .get("http://localhost:3000/food-type", { withCredentials: true })
      .then((res) => (this.foodType = res.data));
  },
};
</script>
