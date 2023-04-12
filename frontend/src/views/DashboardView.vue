<template>
  <div
    class="h-screen w-full flex justify-center items-center bg-gradient-primary bg-size-300% animate-gradientMove"
  >
    <div class="flex justify-between w-screen">
      <!-- sidebar -->
      <div class="w-[230px] flex flex-col ml-[30px] justify-between">
        <div>
          <RouterLink
            to=""
            class="inline-flex relative items-center mt-[100px] w-[150px] pl-[10px] text-sidebar-inactive rounded-[60px] hover:shadow-sidebar hover:bg-sidebar-inactive hover:text-sidebar-active transition duration-400 ease-in-out"
          >
            <div class="flex items-center">
              <p class="font-montserrat text-[24px] font-semibold pr-[5px]">
                Меню
              </p>
            </div>
          </RouterLink>
          <RouterLink
            to=""
            class="inline-flex relative items-center mt-[15px] w-[150px] pl-[10px] text-sidebar-inactive rounded-[60px] hover:shadow-sidebar hover:bg-sidebar-inactive hover:text-sidebar-active transition duration-400 ease-in-out"
          >
            <div class="flex items-center">
              <p class="font-montserrat text-[24px] font-semibold">Корзина</p>
            </div>
          </RouterLink>
          <RouterLink
            to=""
            class="inline-flex relative items-center mt-[15px] w-[150px] pl-[10px] text-sidebar-inactive rounded-[60px] hover:shadow-sidebar hover:bg-sidebar-inactive hover:text-sidebar-active transition duration-400 ease-in-out"
          >
            <div class="flex items-center">
              <p class="font-montserrat text-[24px] font-semibold">История</p>
            </div>
          </RouterLink>
          <RouterLink
            to=""
            class="inline-flex relative items-center mt-[15px] w-[150px] pl-[10px] text-sidebar-inactive rounded-[60px] hover:shadow-sidebar hover:bg-sidebar-inactive hover:text-sidebar-active transition duration-400 ease-in-out"
          >
            <div class="flex items-center">
              <p class="font-montserrat text-[24px] font-semibold">Заказы</p>
            </div>
          </RouterLink>
        </div>
        <div
          class="inline-flex relative cursor-pointer items-center mb-[60px] w-[150px] pl-[10px] text-sidebar-inactive rounded-[60px] hover:shadow-sidebar hover:bg-sidebar-inactive hover:text-sidebar-active transition duration-400 ease-in-out"
          @click="logout"
        >
          <p class="font-montserrat text-[24px] font-semibold">Выйти</p>
        </div>
      </div>
      <!-- content with routerview -->
      <div
        class="w-full h-screen bg-content-primary rounded-l-[60px] shadow-content flex justify-center items-center"
      >
        <div class="w-[calc(100%-100px)] h-[calc(100vh-100px)]">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    logout() {
      axios
        .post("http://localhost:3000/logout", {}, { withCredentials: true })
        .then((res) => {
          console.log("success");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
