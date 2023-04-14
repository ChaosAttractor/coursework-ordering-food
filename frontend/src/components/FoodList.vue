<template>
  <div class="w-full h-[700px] ml-[15px] pl-[30px] overflow-y-auto">
    <!-- повесить лоадер потом при условии menu > 0 && filtered >=0 -->
    <div v-if="filteredMenuLength > 0">
      <div v-if="filteredMenuSoupLength > 0">
        <p class="font-montserrat font-bold text-[24px] text-white my-[20px]">
          Первое
        </p>
        <div class="flex gap-[30px] flex-wrap">
          <FoodItem
            v-for="item in filteredMenuSoup"
            :key="item.product_id"
            :item="item"
          />
        </div>
      </div>
      <div v-if="filteredMenuDishLength > 0">
        <p class="font-montserrat font-bold text-[24px] text-white my-[20px]">
          Второе
        </p>
        <div class="flex gap-[30px] flex-wrap">
          <FoodItem
            v-for="item in filteredMenuDish"
            :key="item.product_id"
            :item="item"
          />
        </div>
      </div>
      <div v-if="filteredMenuBakeryLength > 0">
        <p class="font-montserrat font-bold text-[24px] text-white my-[20px]">
          Выпечка
        </p>
        <div class="flex gap-[30px] flex-wrap">
          <FoodItem
            v-for="item in filteredMenuBakery"
            :key="item.product_id"
            :item="item"
          />
        </div>
      </div>
      <div v-if="filteredMenuDrinkLength > 0">
        <p class="font-montserrat font-bold text-[24px] text-white my-[20px]">
          Напитки
        </p>
        <div class="flex gap-[30px] flex-wrap mb-[25px]">
          <FoodItem
            v-for="item in filteredMenuDrink"
            :key="item.product_id"
            :item="item"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <p class="font-montserrat font-bold text-[34px] text-white text-center">
        Ничего в соответствии с фильтрами не найдено
        <img :src="resultImg" class="m-auto" />
      </p>
    </div>
  </div>
</template>

<script setup>
import FoodItem from "./FoodItem.vue";
import axios from "axios";
import { useFilterStore } from "../store/FilterStore";
import { ref, onMounted, computed } from "vue";

const filterStore = useFilterStore();
const menu = ref([]);
const foodType = ref([]);

const minPrice = computed(() => filterStore.rangeValue[0]);
const maxPrice = computed(() => filterStore.rangeValue[1]);
const filteredMenu = computed(() => {
  return menu.value.filter(
    (item) => item.price >= minPrice.value && item.price <= maxPrice.value
  );
});
const filteredMenuSoup = computed(() =>
  filteredMenu.value.filter((item) => item.type == 1)
);
const filteredMenuDish = computed(() =>
  filteredMenu.value.filter((item) => item.type == 2)
);
const filteredMenuBakery = computed(() =>
  filteredMenu.value.filter((item) => item.type == 3)
);
const filteredMenuDrink = computed(() =>
  filteredMenu.value.filter((item) => item.type == 4)
);
const filteredMenuLength = computed(() => filteredMenu.value.length);
const filteredMenuSoupLength = computed(() => filteredMenuSoup.value.length);
const filteredMenuDishLength = computed(() => filteredMenuDish.value.length);
const filteredMenuBakeryLength = computed(
  () => filteredMenuBakery.value.length
);
const filteredMenuDrinkLength = computed(() => filteredMenuDrink.value.length);
const resultImg = computed(() => "http://localhost:3000/photos/" + "404.gif");

onMounted(() => {
  axios
    .get("http://localhost:3000/menu", { withCredentials: true })
    .then((res) => {
      console.log(res.data);
      return (menu.value = res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get("http://localhost:3000/food-type", { withCredentials: true })
    .then((res) => (foodType.value = res.data));
});
</script>
