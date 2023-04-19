<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoleStore } from "./store/RoleStore";

const roleStore = useRoleStore();

axios
  .post(
    "http://localhost:3000/user/role",
    { "Access-Control-Allow-Origin": "http://localhost:3000" },
    { withCredentials: true }
  )
  .then((res) => (roleStore.role = res.data));
</script>
