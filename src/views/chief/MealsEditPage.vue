<script setup lang="ts">
import ChiefHeader from '../../components/ChiefHeader.vue'
import MealsCard from '../../components/MealsCard.vue';
import MealsEditForm from '../../components/form/MealsEditForm.vue';
import { reactive, ref } from 'vue';
const isShowMealsEditForm = ref<boolean>(false);

const data = reactive([
    {
        meals_name: '餐點名稱',
        meals_address: '餐點地址',
        meals_price: 100,
        meals_hashtags: ['餐點標籤1', '餐點標籤2', '餐點標籤3'],
        meals_description: '好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧',
        meals_options: [{
            name: "餐點選項1",
            options: [
                {
                    name: "選項1",
                    price: 60
                },
                {
                    name: "選項2",
                    price: 30
                }

            ]
        }, {
            name: "餐點選項2",
            options: [
                {
                    name: "選項1",
                    price: 60
                },
                {
                    name: "選項2",
                    price: 30
                }

            ]
        }]
    },
    {
        meals_name: '餐點名稱',
        meals_address: '餐點地址',
        meals_price: 10,
        meals_hashtags: ['餐點標4', '餐點標籤5', '餐點標籤6'],
        meals_description: '好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧',
        meals_options: [{
            name: "餐點選項1",
            options: [
                {
                    name: "選項1",
                    price: 60
                },
                {
                    name: "選項2",
                    price: 30
                }
            ]
        }, {
            name: "餐點選項2",
            options: [
                {
                    name: "選項1",
                    price: 60
                },
                {
                    name: "選項2",
                    price: 30
                }
            ]
        }]
    }
])
const indexprops = ref<number>(0);
const handleShowMealsEditForm = (e: any, index: number) => {
    e.preventDefault();
    indexprops.value = index;
    isShowMealsEditForm.value = !isShowMealsEditForm.value;


}

const handlelist = () => {
    data.push({
        meals_name: '餐點名稱',
        meals_address: '餐點地址',
        meals_price: 100,
        meals_hashtags: ['餐點標籤1', '餐點標籤2', '餐點標籤3'],
        meals_description: '好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧',
        meals_options: [{
            name: "餐點選項1",
            options: [
                {
                    name: "選項1",
                    price: 60
                },
                {
                    name: "選項2",
                    price: 30
                }
            ]
        }, {
            name: "餐點選項2",
            options: [
                {
                    name: "選項1",
                    price: 60
                },
                {
                    name: "選項2",
                    price: 30
                }
            ]
        }]
    })
}
const closeModal = () => {
    isShowMealsEditForm.value = false;
}

</script>
<template>
    <div class="flex flex-col items-center w-screen h-full">
        <div class="w-full max-w-3xl">
            <ChiefHeader />
            <div class="flex justify-between w-full justify-items-start">
                <h2 class="ml-10">餐點設定</h2>
                <div>

                    <p>必須在休息時間才能修改內容</p>
                    <button class=" bg-graybg w-52">臨時休息</button>
                </div>
            </div>
            <div class="flex flex-row ">
                <h2>分類設定</h2>
                <div>
                    <button>新增分類</button>
                </div>
            </div>
            <div class="flex flex-row">
                <button>店家設定分類1</button>
                <button>店家設定分類2</button>
                <button>店家設定分類3</button>
                <button>-></button>
            </div>
            <div class="flex flex-row justify-between">
                <h2>店家設定分類1</h2>
                <div>

                    <button>編輯分類</button>
                    <button>刪除分類</button>
                </div>
            </div>
            <!-- v-for mealsCard -->
            <div class="flex flex-col gap-3">
                <!-- 使用 v-for 循環遍歷 mealsData 陣列 -->
                <MealsCard v-for="(meal, index) in data" :key="index" :mealData="meal"
                    @click="e => handleShowMealsEditForm(e, index)" />
            </div>
            <!-- new card -->
            <button @click="handlelist" class="w-full mt-2 border-black h-36 border-3 bg-graybg rounded-3xl ">+</button>
           
            <div v-if="isShowMealsEditForm"
                class="fixed z-20 w-full h-full max-w-3xl overflow-auto border border-black border-solid top-1/4 l-1/4 rounded-3xl">
                <div class="p-20 bg-white border rounded-3xl">
                    <MealsEditForm :mealsData="data[indexprops]" />
                </div>
            </div>

        </div>
        <div class="absolute z-10 w-screen h-screen bg-black opacity-50 t-0 l-0" @click="closeModal"
                v-if="isShowMealsEditForm"></div>
    </div>
</template>
