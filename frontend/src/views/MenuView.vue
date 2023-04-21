<template>
  <div>
    <p
      class="text-[36px] font-montserrat font-bold select-none text-black dark:text-white"
    >
      Меню
    </p>
    <Filter class="mt-[20px]" />
    <FoodList class="mt-[30px]" />
  </div>
</template>

<script setup>
import Filter from "../components/Filter.vue";
import FoodList from "../components/FoodList.vue";
</script>
