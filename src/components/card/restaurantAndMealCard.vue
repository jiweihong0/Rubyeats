<template>
  <a :href="redirect_url" class="flex flex-col border rounded-lg cursor-pointer">
    <img class="aspect-[4/3] min-w-[200px] object-fill rounded-t-lg" :src="$props.img" />
    <div class="p-4">
      <div class="flex justify-between">
        <h3>{{ props.title }}</h3>
        <p>{{ props.subTitle }}</p>
      </div>
      <p class="text-sm text-gray-200">{{ props.description }}</p> 
    </div>
  </a>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  id: Number,
  img: String,
  title: String,
  subTitle: Number,
  description: String,
  redirect_url: String
});
</script>