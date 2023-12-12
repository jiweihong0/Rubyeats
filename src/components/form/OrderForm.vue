<template>
    <div>
        <h2>餐點照片</h2>
        <!-- <FileUpload /> -->
    </div>
    <p>{{ data.meals_name }}</p>
    <p>{{ data.meals_description }}</p>
    <p>${{ data.meals_price }}</p>

    <!-- 餐點選項 -->
    <div>
        <!-- 餐點選項 -->
        <div v-for="(option, index) in data.meals_options" :key="index" class="gap-1 ">
            <div class="inline-flex justify-between w-full">

                <p>{{ option.name }}</p>
                <p class="flex justify-center p-1 w-14 bg-graybg">必填</p>
            </div>
            <div v-for="(subOption, subIndex) in option.options" :key="subIndex" class="flex-col ">
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
    <div class="mb-5 ">請體諒店家製餐恐有其限制，未符合期待還請多包容哦</div>
    <div class="mt-10 text-4xl">
        若此商品目前暫時無法供應
    </div>
    <div class="mb-5 ">取消訂單或請店家打電話通知我</div>
    <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
    <footer class="flex items-center justify-center w-full h-30 bg-graybg">
        <div class="flex flex-row justify-between w-4/5 p-5 m-3 ">
            <div class="inline-flex ">
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <button>加入購物車</button>
        </div>
    </footer>
</template>


<script lang="ts" setup>
import { reactive } from 'vue';
const dataex = reactive({
    meals_name: '餐點名稱',
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