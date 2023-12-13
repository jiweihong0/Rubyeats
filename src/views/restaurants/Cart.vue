<script setup lang="ts">
import Layout from "../../layouts/index.vue"
import MealInOrderCard from '../../components/card/MealInOrderCard.vue'
import useGetCartProvider from "../../provider/useCartProvider";

const cartData = useGetCartProvider();

</script>
<template>
    <Layout class="px-8">
      <div class="py-4">
        <h1 class="text-3xl font-bold">購物車</h1>
      </div>
      <div class="py-4">
        <h2>你的餐點</h2>
      </div>
      <div v-for="(restaurant) in cartData.data" :key="restaurant.restaurantId">
        <span class="text-lg font-bold">{{ restaurant.restaurantName }}</span>
        <ul class="w-full">
          <MealInOrderCard 
            v-for="(meal) in restaurant.meals"
            :key="meal.mealId"
            :meal="meal"
          />
        </ul>
      </div>

    </Layout>
</template>