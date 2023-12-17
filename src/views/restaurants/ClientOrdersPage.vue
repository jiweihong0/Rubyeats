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
              <h2 class="text-2xl font-bold">我的訂單</h2>
              <div>
                <OrderCard/>
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-bold">正在處理的訂單</h2>
              <div>
                <OrderCard/>
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-bold">過往訂單</h2>
              <div>
                <OrderCard/>
              </div>
            </div>
        </div>
    </div>
</template>