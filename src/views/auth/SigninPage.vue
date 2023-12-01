<template>
    <div class="flex justify-center h-screen bg-greenbg">
        <SigninInputCard class="w-2/5" :who="who"/>
    </div>
   
</template>
<script setup lang="ts">
import SigninInputCard from '../../components/SigninInputCard.vue'
</script>