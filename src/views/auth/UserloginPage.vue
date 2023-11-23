<!-- login page -->
<script setup lang="ts">
import InputCard from '../../components/InputCard.vue'
import customer from '../../assets/customer.png'
const who = "user"

</script>
<template>
    <div class="bg-pinkbg h-screen flex flex-row">
        <div class="w-1/2 flex flex-col items-center justify-center">

            <img :src="customer"  alt="Vite logo" class="min-h-fit" />
            <p class="rounded-full bg-pinktext text-white text-2xl w-52 h-12 p-1 absolute bottom-6 left-10 pl-14 pt-2">顧客登入</p>
        </div>
        <InputCard class="w-1/2" :who="who"/>
    </div>
</template>
