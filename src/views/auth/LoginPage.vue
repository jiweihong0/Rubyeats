<!-- login page -->
<script setup lang="ts">
import InputCard from '../../components/InputCard.vue'
import loginimg from '../../assets/foodcuslogin.png'
console.log(loginimg);

</script>
<template>
    <div class="bg-orangebg h-screen flex flex-row">
        <div class="w-1/2 flex flex-col items-center justify-center">

            <img :src="loginimg"  alt="Vite logo" class="min-h-fit" />
            <p class="rounded-full bg-orangetext text-white text-2xl w-52 h-10 p-1 absolute bottom-6 left-10 pl-5">餐廳管理員登入</p>
        </div>
        <InputCard class="w-1/2"/>
    </div>
</template>
