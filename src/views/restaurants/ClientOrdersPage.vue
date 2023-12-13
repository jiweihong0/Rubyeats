<script setup lang="ts">
import ClientHeader from '../../components/ClientHeader.vue';
import OrderCard from '../../components/card/orderCard.vue';
import { ref } from 'vue'
const showButton = ref(false)
const handleButton = () => {
    showButton.value = !showButton.value
}
</script>
<template>
    <div class="flex flex-col items-center w-screen h-ful">
        <div class="w-full max-w-3xl ">
            <ClientHeader/>
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