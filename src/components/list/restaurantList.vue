<template>
  <div class="relative">
    <h2 class="text-4xl">推薦專區</h2>
    <div class="flex h-56 gap-4 overflow-hidden w-fit">
      <RestaurantAndMealCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :title="restaurant.name"
        :sub-title="restaurant.price"
        :img="restaurant.img"
        :description="restaurant.description"
      />
    </div>
    <button 
      class="absolute left-0 w-10 h-10 -translate-y-1/2 bg-gray-200 fill-white top-1/2 rounded-3xl"
    >
      <ArrowLeftOutlined class="-translate-y-1/4"/>
    </button>
    <button 
      class="absolute right-0 w-10 h-10 -translate-y-1/2 bg-gray-200 fill-white top-1/2 rounded-3xl"
    >
      <ArrowRightOutlined class="-translate-y-1/4"/>
    </button>
  </div>
</template>


<script lang="ts" setup>
import { PropType, defineProps } from "vue";
import RestaurantAndMealCard from "../../components/card/restaurantAndMealCard.vue";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";

type Restaurant = {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
};

const { restaurants } = defineProps({
  restaurants: {
    type: Array as PropType<Restaurant[]>,
    required: true
  }
})

</script>