<script lang="ts" setup>
import { PropType, ref } from 'vue';
import useGetCartProvider from '../../provider/useCartProvider';
import { message } from 'ant-design-vue';

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

const props = defineProps({
  restaurantId: {
    type: Number,
    default: 0
  },
  restaurantName: {
    type: String,
    default: ''
  },
  mealsData: {
      type: Object as PropType<Meal>,
      default: null
  }
});
const data = {
  ...props.mealsData,
  meal_selections: props.mealsData.meal_selections.map((selection) => {
    return {
      ...selection,
      options: selection.options.map((subOption) => {
        return {
          ...subOption,
          isSelected: false
        }
      })
    }
  })
}

const mealCount = ref(1);
const setCount = (offset: number) => {
  const newCount = mealCount.value + offset;
  if (newCount < 1) return

  mealCount.value = newCount;
}

const cartHook = useGetCartProvider();

const toggleOption = (selectionIndex: number, optionIndex: number) => {
  // make other to be false
  data.meal_selections[selectionIndex].options.forEach((option, index) => {
    if (index !== optionIndex) {
      option.isSelected = false;
      return 
    }
    option.isSelected = true;
  })
}

const addMealToCart = () => {
  cartHook.methods.addMeal(props.restaurantId , {
    mealId: data.meal_id,
    mealName: data.meal_name,
    mealPrice: data.meal_price,
    count: mealCount.value,
    selections: data.meal_selections
  })
  message.success('成功將餐點加入購物車');
}

</script>
<template>
    <div class="w-full h-full">
        <div class="w-full aspect-[4/3] bg-gray-500">
            <img :src="data.meal_image" alt="" class="w-full h-full">
        </div>
        <div class="flex flex-col gap-1 p-5">

            <p>{{ data.meal_name }}</p>
            <p>{{ data.meal_description }}</p>
            <p>${{ data.meal_price }}</p>
            <div class="border border-grayline border-b-1"></div>
            <div>
                <div v-for="(option, index) in data.meal_selections" :key="index"
                    class="gap-1 p-5 mt-1 bg-gray-100 rounded-xl">
                    <div class="inline-flex justify-between w-full">
                        <p>{{ option.name }}</p>
                        <p class="flex justify-center p-1 w-14 bg-graybg">必填</p>
                    </div>
                    <div v-for="(subOption, subIndex) in option.options" :key="subIndex" class="flex-col my-5">
                        <div class="inline-flex justify-between w-full">
                            <div>
                                <input @click="() => toggleOption(index, subIndex)" type="radio">{{ subOption.name }}
                            </div>
                            ${{ subOption.price }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-10 text-4xl">
                餐點備註
            </div>
            <div >請體諒店家製餐恐有其限制，未符合期待還請多包容哦</div>
            <textarea name="" id="" cols="10" rows="5"></textarea>
            <div class="text-4xl ">
                若此商品目前暫時無法供應
            </div>
            <select name="" id="">
                <option value="">取消訂單</option>
                <option value="">打電話更換餐點</option>
            </select>

        </div>
        <div class="flex items-center justify-center w-full py-12 bg-graybg ">
            <div class="flex flex-row justify-between w-4/5 ">
                <div class="flex items-center h-full gap-5">
                    <button class="w-12 h-12 bg-white rounded-full" @click="() => setCount(-1)">
                        <span class="text-4xl">-</span>
                    </button>
                    <p class="h-full text-2xl">{{ mealCount }}</p>
                    <button class="w-12 h-12 bg-white rounded-full " @click="() => setCount(1)">
                        <span class="text-4xl">+</span>
                    </button>
                </div>
                <button 
                  class="w-2/3 h-full py-4 bg-white" 
                  @click="addMealToCart"
                >
                  加入購物車
                </button>
            </div>
        </div>
    </div>
</template>

