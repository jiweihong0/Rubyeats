<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps([
  "mealData"
]);
const mealData = props.mealData;

</script>

<template>
  <!-- card -->
  <div class="flex flex-row p-5 border-4 border-inherit rounded-3xl">
    <div>
      <div class="flex flex-row">
        <h2>{{ mealData.meals_name }}</h2>
        <p>${{ mealData.meals_price }}</p>
      </div>
      <p>{{ mealData.meals_description }}</p>
      <div class="flex flex-row gap-3 mb-2 ml-3">
        <p v-for="(tag, index) in mealData.meals_hashtags" :key="index" class="bg-graybg">{{ tag }}</p>
      </div>
    </div>
    <div>
      <img src="" alt="no image">
    </div>
  </div>
</template>
