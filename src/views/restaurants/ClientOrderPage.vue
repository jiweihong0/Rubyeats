<script setup lang="ts">
import ClientHeader from '../../components/ClientHeader.vue';
import MealsCard from '../../components/MealsCard.vue';
import OrderForm from '../../components/form/OrderForm.vue';
import { reactive, ref } from 'vue';
const data = reactive([
    {
        meals_name: '餐點名稱',
        meals_address: '餐點地址',
        meals_price: 100,
        meals_hashtags: ['餐點標籤1', '餐點標籤2', '餐點標籤3'],
        meals_description: '好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧好吃到蹦蹦跳的奶茶，基本上應該不超過50個字左右吧',
        meals_image: 'https://picsum.photos/200/300?random=1',
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
        meals_image: 'https://picsum.photos/200/300?random=1',
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
const isShowMealsEditForm = ref<boolean>(false);
const indexprops = ref<number>(0);
const handleShowMealsEditForm = (e: any, index: number) => {
    e.preventDefault();
    indexprops.value = index;
    isShowMealsEditForm.value = !isShowMealsEditForm.value;
}
const closeModal = () => {
    isShowMealsEditForm.value = false;
}

</script>
<template>
    <div class="flex flex-col items-center w-screen h-full ">
        <div class="w-full h-full max-w-3xl">
            <ClientHeader />
            <div class="flex justify-between w-full pt-10 pl-5 pr-10 justify-items-start">
                <h2 class="ml-10 text-4xl">睡相茶弄</h2>
                <h2 class="mt-3 ml-10">台北市燕巢區湳仔路32號</h2>
                <div>
                    <img src="" alt="img">
                </div>
            </div>
            <div>
                <p class="pt-1 pl-5 text-2xl">
                    一些不超過50字的餐廳敘述一些不超過50字的餐廳敘述一些不超過50字的餐廳敘述一些不超過50字的餐廳敘述
                </p>
            </div>
            <div class="flex flex-row gap-2 pt-5 pl-5">
                <button class="h-10 mr-16 w-52 bg-graybg">餐點搜尋</button>
                <button>人氣精選</button>
                <button>店家設定分類1</button>
                <button>店家設定分類2</button>
                <button>店家設定分類3</button>
                <button>-></button>
            </div>
            <div class="mt-10 text-4xl">
                人氣精選
            </div>
            <div class="mb-5 ">大家都愛點這些</div>
            <div class="flex flex-col gap-3">
                <MealsCard v-for="(meal, index) in data" :key="index" :mealData="meal"
                    @click="e => handleShowMealsEditForm(e, index)" />
            </div>
            <div class="mt-10 text-4xl">
                店家設定分類1
            </div>
            <div class="mb-5 ">大家都愛點這些</div>
            <div class="flex flex-col gap-3">
                <MealsCard v-for="(meal, index) in data" :key="index" :mealData="meal"
                    @click="e => handleShowMealsEditForm(e, index)" />
            </div>
            <div v-if="isShowMealsEditForm"
                class="fixed z-20 w-full h-full max-w-3xl overflow-scroll bg-white top-10 rounded-3xl">
                <OrderForm :mealsData="data[indexprops]" />
            </div>
            
            <footer class="flex items-center justify-center w-full h-16 bg-graybg ">
                <div class="flex flex-row items-center justify-between w-4/5 p-5 m-2 bg-white h-4/5 rounded-xl">
                    <div class="inline-flex ">
                        <img src="../../assets/cart.png" alt="img">
                        <p>1</p>
                    </div>
                    <button>查看購物車</button>
                    <p>$60</p>
                </div>
            </footer>

        </div>
        <div class="fixed top-0 left-0 z-10 w-full h-full bg-black opacity-50" @click="closeModal"
     v-if="isShowMealsEditForm"></div>
    </div>
</template>