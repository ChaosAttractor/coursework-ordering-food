<template>
  <div
    class="h-screen w-full flex justify-center items-center bg-gradient-light dark:bg-gradient-primary bg-size-300% animate-gradientMove"
  >
    <ModeSwitcher class="absolute bottom-[15px] left-[15px]" />
    <div
      class="w-[400px] h-[360px] bg-alt-white dark:bg-gray-primary rounded-[60px] shadow-custom"
      :class="{ shake: shake }"
    >
      <p
        class="text-[36px] font-bold text-black dark:text-white mt-[20px] text-center font-montserrat select-none"
      >
        ВХОД
      </p>
      <div class="flex justify-center">
        <div class="flex flex-col items-center w-[400px]">
          <label
            for="login"
            class="pl-[30px] dark:text-white text-[28px] self-start font-montserrat-alt select-none"
          >
            логин
            <TransitionGroup name="error" tag="span">
              <p
                class="inline text-[15px] font-bold text-red-600"
                v-for="error in vuelidate.userLogin.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
            </TransitionGroup>
          </label>
          <input
            type="text"
            name="login"
            v-model="vuelidate.userLogin.$model"
            class="w-[350px] dark:bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px]"
          />
          <label
            for="password"
            class="pl-[30px] dark:text-white text-[28px] self-start font-montserrat-alt select-none"
            >пароль
            <TransitionGroup name="error" tag="span">
              <p
                class="inline text-[15px] font-bold text-red-600"
                v-for="error in vuelidate.userPassword.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
            </TransitionGroup>
          </label>

          <input
            type="password"
            name="password"
            v-model="vuelidate.userPassword.$model"
            class="w-[350px] dark:bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px] font-montserrat"
          />
          <button
            @click="login"
            class="w-[360px] bg-white dark:bg-alt-white h-[40px] rounded-[60px] text-[24px] px-[10px] my-[40px] font-bold font-montserrat hover:scale-[1.02] transition duration-400 ease-in-out"
            :class="{ 'active-btn': clicked }"
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
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { helpers, minLength, required } from "@vuelidate/validators";
import ModeSwitcher from "../components/UI/ModeSwitcher.vue";
import { useEventStore } from "@/store/EventStore";

const eventStore = useEventStore();

const userLogin = ref("");
const userPassword = ref("");
const router = useRouter();
const shake = ref(false);
const clicked = ref(false);

const rules = computed(() => ({
  userLogin: {
    minLength: helpers.withMessage("Мин. длина 6 символов", minLength(6)),
    required: helpers.withMessage("*", required),
  },
  userPassword: {
    minLength: helpers.withMessage("Мин. длина 6 символов", minLength(6)),
    required: helpers.withMessage("*", required),
  },
}));
const vuelidate = useVuelidate(rules, { userLogin, userPassword });

const login = () => {
  clicked.value = true;
  eventStore.onClick(clicked, 100);
  vuelidate.value.$touch();
  let errors = vuelidate.value.$errors.length;
  if (errors) return;
  axios
    .post(
      "http://localhost:3000/login",
      {
        login: userLogin.value.trim(),
        password: userPassword.value.trim(),
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
      eventStore.onClick(shake, 300);
    });
};
</script>

<style scoped>
.error-move,
.error-enter-active,
.error-leave-active {
  transition: all 0.3s ease;
}
.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.error-leave-active {
  position: absolute;
}
</style>
