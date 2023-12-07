<template>
  <div>
    <h2 class="py-4 text-3xl">{{ title }}</h2>
    <div class="relative" ref="containerRef">
      <div 
        class="relative flex h-56 gap-4 transition-all w-fit"
        :style="`transform: translateX(-${listOffset}px)`"
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
      <button 
        class="absolute w-10 h-10 -translate-y-1/2 bg-gray-200 left-2 fill-white top-1/2 rounded-3xl"
        @click="() => handleScroll(-300)"
      >
        <ArrowLeftOutlined class="-translate-y-1/4"/>
      </button>
      <button 
        class="absolute w-10 h-10 -translate-y-1/2 bg-gray-200 right-2 fill-white top-1/2 rounded-3xl"
        @click="() => handleScroll(300)"
      >
        <ArrowRightOutlined class="-translate-y-1/4"/>
      </button>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { PropType, ref } from "vue";
import RestaurantAndMealCard from "../../components/card/restaurantAndMealCard.vue";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";

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

const listOffset = ref<number>(0);
const listRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);

const handleScroll = (offset: number) => {
  if (listRef === null || listRef.value === null || containerRef === null || containerRef.value === null) return
  
  const maxScrollWidth = listRef.value.scrollWidth - containerRef.value.clientWidth;
  
  const newOffset = listOffset.value + offset;

  if (newOffset <= 0) {
    listOffset.value = 0;
    return;
  }

  if (newOffset >= maxScrollWidth) {
    listOffset.value = maxScrollWidth
    return;
  }
  
  listOffset.value = newOffset
  
};

</script>