<template>
  <div :class="{ dark: settingsStore.darkMode }">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useSettingsStore } from "@/store/SettingsStore";
import { useCartStore } from "@/store/CartStore";

const settingsStore = useSettingsStore();
const cartStore = useCartStore();

onMounted(() => {
  settingsStore.darkMode = localStorage.darkMode;
});
</script>
