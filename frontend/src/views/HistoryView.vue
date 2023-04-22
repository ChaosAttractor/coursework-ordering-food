<template>
  <div>
    <p class="text-[36px] font-montserrat font-bold text-black dark:text-white">
      История заказов
    </p>
    <HistoryList class="mt-[30px] w-full" />
  </div>
</template>

<script setup>
import HistoryList from "../components/History/HistoryList.vue";
</script>
