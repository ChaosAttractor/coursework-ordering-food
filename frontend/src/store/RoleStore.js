import { defineStore } from "pinia";
import { ref } from "vue";

export const useRoleStore = defineStore("RoleStore", () => {
  const role = ref("");
  return { role };
});
