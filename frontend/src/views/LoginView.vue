<template>
  <div
    class="h-screen w-full flex justify-center items-center bg-gradient-primary"
  >
    <div
      class="w-[400px] h-[360px] bg-gray-primary rounded-[60px] shadow-custom"
    >
      <p
        class="text-[36px] font-bold text-white mt-[20px] text-center font-montserrat"
      >
        ВХОД
      </p>
      <div class="flex justify-center">
        <div class="flex flex-col items-center w-[400px]">
          <label
            for="login"
            class="pl-[30px] text-white text-[28px] self-start font-montserrat-alt"
            >логин</label
          >
          <input
            type="text"
            name="login"
            class="w-[350px] bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px]"
          />
          <label
            for="password"
            class="pl-[30px] text-white text-[28px] self-start"
            >пароль</label
          >
          <input
            type="password"
            name="password"
            class="w-[350px] bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px] font-montserrat"
          />
          <button
            type="submit"
            class="w-[360px] bg-none bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px] my-[40px] font-bold font-montserrat"
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: null,
    };
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:3000/food-type", { withCredentials: true })
  //     .then((res) => (this.data = res.data));
  // },
};
</script>
