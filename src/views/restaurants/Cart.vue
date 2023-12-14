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
      <div 
        :class="['py-4', 'border-b', 'border-gray-300']"
        v-for="(restaurant) in cartData.data"
        :key="restaurant.restaurantId"
      >
        <span class="text-lg font-bold">{{ restaurant.restaurantName }}</span>
        <ul class="w-full">
          <MealInOrderCard 
            v-for="(meal) in restaurant.meals"
            :key="meal.mealId"
            :meal="meal"
          />
        </ul>
      </div>
      <div class="p-4 bg-gray-200">
        <div class="flex justify-between">
          <span class="text-lg font-bold">總金額</span>
          <span class="text-lg font-bold">NT$ {{ cartData.methods.getTotalPrice() }}</span>
        </div>
        <div>
          <button class="w-full px-4 py-2 text-white bg-gray-500 rounded-md">送出訂單</button>
        </div>
      </div>
    </Layout>
</template>