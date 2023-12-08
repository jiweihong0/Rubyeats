<script setup lang="ts">
import { ref } from 'vue'
import arrow from '../../assets/arrow.svg'
const showDetail = ref(false)
const handleDetail = () => {
    showDetail.value = !showDetail.value
}


</script>
<template>
    <div class="flex flex-col p-5 m-3 bg-graybg">
        <div class="flex flex-row justify-between ">

            <div class=" flex flex-row">

                <img src="" alt="1234">
                <div class="inline-flex flex-col ">
                    <h2>王先生</h2>
                    <p>於8月23日 PM2:13 點餐</p>
                    <p>1x 黑降牛雞套餐</p>
                    <p>1x 黑降牛雞套餐</p>
                    <p>1x 黑降牛雞套餐</p>
                </div>
            </div>
            <div>
                $413
            </div>
        </div>
        <div class="border border-grayline border-b-1"></div>
        <button @click="handleDetail" class=" flex flex-row justify-between mt-5">
            <p>查看細節</p>
            <img :src="arrow" alt="arrow" class=" w-5 h-5">
        </button>
        <div v-if="showDetail">
            <div>
                <div>

                    <p>1x 黑降牛雞套餐</p>
                    <p>$413</p>
                </div>
                <div>

                    <p>1x 黑降牛雞套餐</p>
                    <p>$413</p>
                </div>

            </div>
            <div class="border border-grayline border-b-1"></div>
            <div>
                <p>總計</p>
                <p>$826</p>
                </div>  
        </div>
    </div>
</template>