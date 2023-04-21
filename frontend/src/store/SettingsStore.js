import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore("SettingsStore", () => {
  const darkMode = ref(false);

  const toggleDark = () => {
    darkMode.value = !darkMode.value;
    localStorage.darkMode = darkMode.value;
  };
  return { darkMode, toggleDark };
});
