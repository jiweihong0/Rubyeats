<template>
    <div class="bg-greenbg h-screen flex justify-center">
        <SigninInputCard class="w-2/5" :who="who"/>
    </div>
   
</template>
<script setup lang="ts">
import SigninInputCard from '../../components/SigninInputCard.vue'
</script>