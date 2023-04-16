<template>
  <div
    class="h-screen w-full flex justify-center items-center bg-gradient-primary bg-size-300% animate-gradientMove"
  >
    <div class="flex justify-between w-screen">
      <div class="w-[230px] flex flex-col ml-[30px] justify-between">
        <div>
          <RouterLink
            to="/dashboard"
            class="sidebar-btn transition duration-400 ease-in-out mt-[100px]"
          >
            <div class="flex items-center select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 45 576 512"
                class="w-[24px] h-[24px] mr-[5px] cursor-pointer self-center"
              >
                <path
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
              <p class="font-montserrat text-[24px] font-semibold pr-[5px]">
                Меню
              </p>
            </div>
          </RouterLink>
          <RouterLink
            to="/dashboard/cart"
            class="sidebar-btn mt-[15px] transition duration-400 ease-in-out"
          >
            <div class="flex items-center select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="w-[24px] h-[24px] mr-[5px] cursor-pointer"
              >
                <path
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                />
              </svg>
              <p class="font-montserrat text-[24px] pr-[5px] font-semibold">
                Корзина
              </p>
            </div>
          </RouterLink>
          <RouterLink
            to="/dashboard/history"
            class="sidebar-btn mt-[15px] transition duration-400 ease-in-out"
          >
            <div class="flex items-center select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-[24px] h-[24px] mr-[5px] cursor-pointer"
              >
                <path
                  d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
                />
              </svg>
              <p class="font-montserrat text-[24px] font-semibold">История</p>
            </div>
          </RouterLink>
          <RouterLink
            to="/dashboard/orders"
            class="sidebar-btn mt-[15px] transition duration-400 ease-in-out"
          >
            <div class="flex items-center select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-[24px] h-[24px] mr-[5px] cursor-pointer"
              >
                <path
                  d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
                />
              </svg>
              <p class="font-montserrat text-[24px] font-semibold">Заказы</p>
            </div>
          </RouterLink>
        </div>
        <div
          class="sidebar-btn mb-[60px] transition duration-400 ease-in-out cursor-pointer"
          @click="logout"
        >
          <div class="flex items-center select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-[24px] h-[24px] mr-[5px]"
            >
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              />
            </svg>
            <p class="font-montserrat text-[24px] font-semibold">Выйти</p>
          </div>
        </div>
      </div>

      <div
        class="w-full h-screen bg-gray-primary rounded-l-[60px] shadow-content flex justify-center items-center"
      >
        <div class="w-[calc(100%-100px)] h-[calc(100vh-100px)]">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const logout = () => {
  axios
    .post("http://localhost:3000/logout", {}, { withCredentials: true })
    .then((res) => {
      console.log("success");
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
