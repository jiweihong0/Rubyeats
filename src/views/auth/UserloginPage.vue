<!-- login page -->
<script setup lang="ts">
import LoginInputCard from '../../components/LoginInputCard.vue'
import customer from '../../assets/customer.png'
const who = "user"

</script>
<template>
    <div class="flex flex-row h-screen bg-pinkbg">
        <div class="flex flex-col items-center justify-center w-1/2">

            <img :src="customer"  alt="Vite logo" class="min-h-fit" />
            <p class="absolute h-12 p-1 pt-2 text-2xl text-white rounded-full bg-pinktext w-52 bottom-6 left-10 pl-14">顧客登入</p>
        </div>
        <LoginInputCard class="w-1/2" :who="who"/>
    </div>
</template>
