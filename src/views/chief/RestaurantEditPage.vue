<script setup lang="ts">
import ChiefHeader from '../../components/ChiefHeader.vue'
import { useRestaurantEditProvider} from '../../provider/useRestaurantEditProvider.js';
import RestaurantEditForm from '../../components/form/RestaurantEditForm.vue';

useRestaurantEditProvider();

</script>
<template>
    <div class="flex flex-col items-center w-screen h-full">
        <div class="w-full max-w-3xl">
            <ChiefHeader />
            <div class="flex w-full ml-10 justify-items-start">
                <h2>餐廳設定</h2>
            </div>
            <RestaurantEditForm />
        </div>
    </div>
</template>


<style>
button.weekday-btn.active {
    background-color: #ff0ff0;
}
</style>