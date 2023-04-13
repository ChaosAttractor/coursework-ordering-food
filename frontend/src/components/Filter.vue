<template>
  <div class="flex gap-[30px] items-center">
    <p class="font-montserrat font-bold text-[24px] text-white">Фильтры</p>
    <v-select
      :options="books"
      :placeholder="selectedPlaceholder"
      label="title"
      class="w-[340px] bg-alt-white rounded-[60px] px-[10px] font-montserrat font-bold text-[20px]"
    />

    <!-- class="p-[5px] pt-[4px] rounded-[60px] font-montserrat text-[24px] font-bold bg-alt-white"
    > -->
    <!-- option v-for через бэк -->
    <div
      class="flex w-[340px] h-[36px] justify-between items-center rounded-[60px] bg-alt-white"
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

export default {
  components: {
    VueSlider,
    vSelect,
  },
  data() {
    return {
      selectedType: "",
      rangeValue: [0, 500],
      min: 0,
      max: 500,
      selectedPlaceholder: "По типу",
      books: [
        { title: "Old Man's War" },
        { title: "The Lock Artist" },
        { title: "HTML5" },
        { title: "Right Ho Jeeves" },
        { title: "The Code of the Wooster" },
        { title: "Thank You Jeeves" },
      ],
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

<style>
:root {
  --vs-border-width: 0px;
  --vs-dropdown-bg: #d9d9d9;
  --font-size: 20px;
}

.vs__search {
  font-size: 20px;
}

.vs_search {
  height: 29px;
}
</style>
