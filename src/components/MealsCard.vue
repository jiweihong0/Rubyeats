<script setup lang="ts">
import { defineProps, PropType } from 'vue';

type Meal = {
  meal_id: number;
  meal_name: string;
  meal_image: string;
  meal_price: number;
  meal_description: string;
  meal_address: string;
  meal_hashtags: string[];
  meal_selections: {
      id: number;
      name: string;
      options: {
        id: number,
        name: string,
        price: number,
      }[];
  }[];
}

const { mealData } = defineProps({
  mealData: {
      type: Object as PropType<Meal>,
      default: null
  }
});

</script>

<template>
  <!-- card -->
  <div class="flex flex-row p-5 border-4 cursor-pointer border-inherit rounded-3xl">
    <div class="mr-10">
      <div class="flex flex-row justify-between">
        <h2 class="text-xl">{{ mealData.meal_name }}</h2>
        <p class="text-lg">${{ mealData.meal_price }}</p>
      </div>
      <p class="text-sm text-gray-500">{{ mealData.meal_description }}</p>
      <div class="flex flex-row items-end gap-3">
        <p v-for="(tag, index) in mealData.meal_hashtags" :key="index" class="px-2 py-1 text-sm bg-graybg">{{ tag }}</p>
      </div>
    </div>
    <div>
      <img :src="mealData.meal_image" alt="no image" class="aspect-[4/3] h-full">
    </div>
  </div>
</template>
