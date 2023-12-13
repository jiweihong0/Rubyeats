<script lang="ts" setup>
import { reactive } from 'vue';
const dataex = reactive({
    meals_name: '餐點名稱',
    meals_price: 100,
    meals_description: '餐點敘述',
    meals_address: '餐點地址',
    meals_hashtags: ['餐點標籤1', '餐點標籤2', '餐點標籤3'],
    meals_options: [{
        name: "餐點選項1",
        options: [
            ["選項1", 60],
            ["選項2", 30]
        ]
    }, {
        name: "餐點選項2",
        options: [
            ["選項1", 60],
            ["選項2", 30]
        ]
    }]
})
const props = defineProps([
    "mealsData"
]);
const data = props.mealsData ? props.mealsData : dataex;
</script>
<template>
    <div class="w-full h-full">
        <div class="w-full aspect-[4/3] bg-gray-500">
            <img :src="data.meals_image" alt="" class="w-full h-full">
        </div>
        <div class="flex flex-col gap-1 p-5">

            <p>{{ data.meals_name }}</p>
            <p>{{ data.meals_description }}</p>
            <p>${{ data.meals_price }}</p>
            <div class="border border-grayline border-b-1"></div>
            <div>
                <div v-for="(option, index) in data.meals_options" :key="index"
                    class="gap-1 p-5 mt-1 bg-gray-100 rounded-xl">
                    <div class="inline-flex justify-between w-full">
                        <p>{{ option.name }}</p>
                        <p class="flex justify-center p-1 w-14 bg-graybg">必填</p>
                    </div>
                    <div v-for="(subOption, subIndex) in option.options" :key="subIndex" class="flex-col my-5">
                        <div class="inline-flex justify-between w-full">
                            <div>
                                <input type="radio">{{ subOption.name }}
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
                    <button class="w-12 h-12 bg-white rounded-full">
                        <span class="text-4xl">-</span>
                    </button>
                    <p class="h-full text-2xl">1</p>
                    <button class="w-12 h-12 bg-white rounded-full ">
                        <span class="text-4xl">+</span>
                    </button>
                </div>
                <button class="w-2/3 h-full py-4 bg-white">加入購物車</button>
            </div>
        </div>
    </div>
</template>

