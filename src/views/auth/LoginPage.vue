<!-- login page -->
<script setup lang="ts">
import LoginInputCard from '../../components/LoginInputCard.vue'
import loginimg from '../../assets/foodcuslogin.png'
console.log(loginimg);
const who = "admin"

</script>
<template>
    <div class="flex flex-row h-screen bg-orangebg">
        <div class="flex flex-col items-center justify-center w-1/2">

            <img :src="loginimg"  alt="Vite logo" class="min-h-fit" />
            <p class="absolute h-10 p-1 pl-5 text-2xl text-white rounded-full bg-orangetext w-52 bottom-6 left-10">餐廳管理員登入</p>
        </div>
        <LoginInputCard class="w-1/2" :who="who"/>
    </div>
</template>
