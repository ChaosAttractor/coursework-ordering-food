<template>
  <div>
    <p class="font-montserrat text-[28px] font-bold text-black dark:text-white">
      {{ typeValue
      }}<span
        class="font-normal animate-blinkType select-none"
        :class="{ 'animate-none': typeStatus }"
        >|</span
      >
    </p>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";

const props = defineProps({
  typeArray: Array,
});

const typeValue = ref("");
const typeStatus = ref("");
const typingSpeed = ref(100);
const erasingSpeed = ref(100);
const newTextDelay = ref(2000);
const typeArrayIndex = ref(0);
const charIndex = ref(0);
const typeArray = computed(() => props.typeArray);

const typeText = () => {
  if (charIndex.value < typeArray.value[typeArrayIndex.value].length) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value += typeArray.value[typeArrayIndex.value].charAt(
      charIndex.value
    );
    charIndex.value += 1;
    setTimeout(typeText, typingSpeed.value);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay.value);
  }
};
const eraseText = () => {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = typeArray.value[typeArrayIndex.value].substring(
      0,
      charIndex.value - 1
    );
    charIndex.value -= 1;
    setTimeout(eraseText, erasingSpeed.value);
  } else {
    typeStatus.value = false;
    typeArrayIndex.value += 1;
    if (typeArrayIndex.value >= typeArray.value.length)
      typeArrayIndex.value = 0;
    setTimeout(typeText, typingSpeed.value + 500);
  }
};
onMounted(() => {
  setTimeout(typeText, newTextDelay.value);
});
</script>

<style scoped></style>
