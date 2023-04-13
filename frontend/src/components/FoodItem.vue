<template>
  <div
    class="w-[288px] h-[350px] bg-alt-white rounded-[60px] flex flex-col justify-center shadow-card"
  >
    <div>
      <img :src="resultImg" />
    </div>
    <div class="flex items-center justify-between">
      <div
        class="font-montserrat text-[24px] font-bold self-start pl-[30px] mt-[20px]"
      >
        <p>{{ item.product_name }}</p>
        <p>{{ item.price }} ₽</p>
      </div>

      <button
        class="mr-[30px] font-montserrat text-[24px] p-[5px] font-bold bg-alt-white shadow-sidebar rounded-[60px] self-end"
      >
        купить
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    item: {
      product_id: Number,
      product_name: String,
      image: String,
      type: Number,
      product_weight: Number,
      price: Number,
    },
  },
  data() {
    return {
      image: "",
    };
  },
  computed: {
    resultImg() {
      return "http://localhost:3000/photos/" + this.item.image;
    },
  },
};
</script>
