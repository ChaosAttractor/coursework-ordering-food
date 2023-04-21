<template>
  <div :class="{ dark: settingsStore.darkMode }">
    <RouterView />
  </div>
</template>

<script setup>
import { useSettingsStore } from "./store/SettingsStore";

const settingsStore = useSettingsStore();
</script>
