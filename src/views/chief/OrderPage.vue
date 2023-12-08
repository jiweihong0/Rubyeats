<script setup lang="ts">
import ChiefHeader from '../../components/ChiefHeader.vue'
import OrderCard from '../../components/card/orderCard.vue';
import { ref } from 'vue'
const showButton = ref(false)
const handleButton = () => {
    showButton.value = !showButton.value
}
</script>
<template>
    <div class="flex flex-col items-center w-screen h-ful">
        <div class=" w-full max-w-3xl">
            <ChiefHeader/>
            <div>
                我的訂單
            </div>
            <OrderCard/>
            <div>
                正在處理的訂單
            </div>
            <OrderCard :handleButton="handleButton"/>
            <div>
                
                過往訂單
            </div>
            <OrderCard/>
        </div>
    </div>
</template>