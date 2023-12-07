<template>
  <div>
    <h2 class="py-4 text-3xl">{{ title }}</h2>
    <div class="relative">
      <div 
        class="relative grid w-full grid-cols-3 gap-4 transition-all"
        ref="listRef"
      >
        <RestaurantAndMealCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :title="restaurant.name"
          :sub-title="restaurant.price"
          :img="restaurant.img"
          :description="restaurant.description"
        />
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { PropType } from "vue";
import RestaurantAndMealCard from "../../components/card/restaurantAndMealCard.vue";

type Restaurant = {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
};

const { title, restaurants } = defineProps({
  title: {
    type: String,
    required: true
  },
  restaurants: {
    type: Array as PropType<Restaurant[]>,
    required: true
  }
})

</script>