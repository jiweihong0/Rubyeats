<script lang="ts" setup>
import { ref, computed } from 'vue'
import useGetEditRestaurantInfo from '../provider/useRestaurantEditProvider';

const data = useGetEditRestaurantInfo();

const currentSelectedWeekdayNumber = ref(0)
const currentSelectedWeekdayData = computed(
  () => data.restaurant_business_hours.find((day) => day.weekday===currentSelectedWeekdayNumber.value)
)

const handleWeekdayButtonOnClick = (num: number) => {
  currentSelectedWeekdayNumber.value = num
}

const convertNumberToWeekday = (num: number): string => {
  switch (num) {
    case 0:
      return '日';
    case 1:
      return '一';
    case 2:
      return '二';
    case 3:
      return '三';
    case 4:
      return '四';
    case 5:
      return '五';
    case 6:
      return '六';
    default:
      return '無效的星期數字';
  }
}

</script>

<template>
  <label>餐廳營業時段</label>
  <div>
    <button
    class="w-10 h-10 border border-gray-500"
    :class="{ 'bg-gray-200': currentSelectedWeekdayNumber === index }"
    v-for="(_, index) in new Array(7)"
    @click="() => handleWeekdayButtonOnClick(index)"
    >
      {{convertNumberToWeekday(index)}}
    </button>
    <div class="mt-4">
      <input class="px-2 py-1 bg-gray-200" type="time" v-model="currentSelectedWeekdayData!.bussinessStartTime">
      -
      <input class="px-2 py-1 bg-gray-200" type="time" v-model="currentSelectedWeekdayData!.bussinessEndTime">
    </div>

    <input type="checkbox" v-model="currentSelectedWeekdayData!.isOnBussiness">
    <span>今日不營業</span>
  </div>
</template>