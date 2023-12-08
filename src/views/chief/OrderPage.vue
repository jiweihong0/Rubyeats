<script setup lang="ts">
import ChiefHeader from '../../components/ChiefHeader.vue'
import OrderCard from '../../components/card/orderCard.vue';
</script>
<template>
    <ChiefHeader/>
    <div>
        我的訂單
    </div>
    <div>
        正在處理的訂單
    </div>
    <OrderCard/>
    <div>

        過往訂單
    </div>
</template>