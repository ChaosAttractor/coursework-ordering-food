<template>
  <div class="flex gap-[68px] items-center">
    <p class="font-montserrat font-bold text-[24px] text-white">Фильтры</p>
    <v-select
      :options="foodType"
      :placeholder="selectPlaceholder"
      v-model="selectedType"
      label="type_name"
      class="w-[340px] bg-alt-white rounded-[60px] px-[10px] font-montserrat font-bold text-[20px] cursor-pointer shadow-sidebar"
    />
    <div
      class="flex w-[340px] h-[38px] justify-between items-center rounded-[60px] bg-alt-white shadow-sidebar"
    >
      <p class="font-montserrat pl-[10px] font-bold text-[20px] text-black">
        По цене
      </p>
      <vue-slider
        v-model="rangeValue"
        :enable-cross="false"
        :tooltip="'active'"
        :tooltip-placement="'top'"
        :min="min"
        :max="max"
        @change="choosePrice"
        style="width: 190px; height: 8px; padding-right: 20px"
      />
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import axios from "axios";
import { useFilterStore } from "../store/FilterStore";

export default {
  components: {
    VueSlider,
    vSelect,
  },
  data() {
    return {
      foodType: [],
      selectPlaceholder: "По типу",
      selectedType: "",
      rangeValue: [0, 500],
      min: 0,
      max: 500,
    };
  },
  methods: {
    choosePrice() {
      useFilterStore().rangeValue = this.rangeValue;
    },
  },
  watch: {
    selectedType() {
      useFilterStore().type = this.selectedType;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/food-type", { withCredentials: true })
      .then((res) => (this.foodType = res.data));
  },
};
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
