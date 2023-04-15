<template>
  <div
    class="h-screen w-full flex justify-center items-center bg-gradient-primary bg-size-300% animate-gradientMove"
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
          >
            логин
          </label>
          <input
            type="text"
            name="login"
            v-model="UserLogin"
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
            v-model="UserPassword"
            class="w-[350px] bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px] font-montserrat"
          />
          <button
            type="submit"
            @click="login"
            class="w-[360px] bg-none bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px] my-[40px] font-bold font-montserrat"
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const UserLogin = ref("");
const UserPassword = ref("");
const router = useRouter();

const login = () =>
  axios
    .post(
      "http://localhost:3000/login",
      {
        login: UserLogin.value.trim(),
        password: UserPassword.value.trim(),
      },
      {
        withCredentials: true,
        "Access-Control-Allow-Origin": "http://localhost:3000/login",
      }
    )
    .then((res) => {
      router.push("/dashboard");
    })
    .catch((error) => {
      console.log(error);
    });
</script>
