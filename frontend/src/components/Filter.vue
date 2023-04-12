<template>
  <div class="flex gap-[30px] items-center">
    <p class="font-montserrat font-bold text-[24px] text-white">Фильтры</p>
    <select v-model="selectedType">
      <option disabled value="">Выберите тип</option>
      <!-- option v-for через бэк -->
    </select>
    <div
      class="flex w-[340px] h-[40px] justify-between items-center rounded-[60px] bg-alt-white"
    >
      <p class="font-montserrat pl-[10px] font-bold text-[24px] text-black">
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

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      selectedType: "",
      rangeValue: [0, 500],
      min: 0,
      max: 500,
    };
  },
  methods: {
    choosePrice() {
      this.$emit("getPrice", {
        price: this.rangeValue,
      });
    },
  },
};
</script>
