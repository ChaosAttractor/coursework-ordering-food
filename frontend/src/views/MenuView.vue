<template>
  <div>
    <p class="text-[36px] font-montserrat font-bold text-white">Меню</p>
    <Filter class="mt-[20px] z-30" />
    <FoodList class="mt-[30px] z-0" />
  </div>
</template>

<script>
import Filter from "../components/Filter.vue";
import FoodList from "../components/FoodList.vue";

export default { components: { Filter, FoodList } };
</script>
