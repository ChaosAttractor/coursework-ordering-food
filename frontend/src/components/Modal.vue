<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-black-30 flex justify-center items-center"
    >
      <div
        class="w-[400px] h-[600px] text-white bg-gray-primary rounded-[60px]"
      >
        <button @click="$emit('close')">1</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
});
</script>
