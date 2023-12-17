<script setup lang="ts">
import { ref, defineProps } from 'vue'
import arrow from '../../assets/arrow.svg'
const props = defineProps({
    handleButton: Function
})
const showDetail = ref(false)

const handleDetail = () => {
    showDetail.value = !showDetail.value
}
const handlearrow = () => showDetail.value ? "h-5 w-5 rotate-180" : "h-5 w-5"


</script>
<template>
    <div class="flex flex-col p-5 m-3 bg-graybg">
        <div class="flex flex-row justify-between py-4">
          <img class="aspect-[4/3] w-1/3" src="https://picsum.photos/400/300?random=1" alt="1234">
          <div class="inline-flex flex-col w-2/3 gap-2 px-4">
            <div class="flex justify-between w-full">
              <h2 class="text-xl font-semibold">王先生</h2>
              <span>
                  $413
              </span>
            </div>
            <div>
              <p class="text-sm text-gray-400 ">於8月23日 PM2:13 點餐</p>
              <p>1x 黑降牛雞套餐</p>
              <p>1x 黑降牛雞套餐</p>
              <p>1x 黑降牛雞套餐</p>
            </div>
          </div>
        </div>
        <div class="border border-grayline border-b-1"></div>
        <button @click="handleDetail" class="flex flex-row justify-between m-4 ">
            <p class="text-xl font-bold">查看細節</p>
            <img :src="arrow" alt="arrow" :class="handlearrow()">
        </button>
        <div v-if="showDetail">
            <div class="m-5 ">
                <div class="flex flex-row justify-between ">
                    <div>
                        <p class="text-xl font-semibold">1x 黑降牛雞套餐</p>
                        <div class="inline-flex flex-row ">
                            <p class="text-sm text-gray-400">
                                （Ｍ）七喜
                            </p>
                            <p class="text-sm text-gray-400">
                                （Ｍ）七喜
                            </p>
                        </div>
                    </div>
                    <p>$413</p>
                </div>
                <div class="flex flex-row justify-between ">
                    <div>

                        <p class="text-xl font-semibold">1x 黑降牛雞套餐</p>
                        <div class="inline-flex flex-row ">
                            <p class="text-sm text-gray-400">
                                （Ｍ）七喜
                            </p>
                            <p class="text-sm text-gray-400">
                                （Ｍ）七喜
                            </p>
                        </div>
                    </div>
                    <p>$413</p>
                </div>

            </div>
            <div class="border border-grayline border-b-1"></div>
            <div class="inline-flex flex-row justify-between w-full ">
                <p class="text-xl font-semibold">總計</p>
                <p class="text-xl font-semibold">$826</p>
            </div>
            <div class="inline-flex justify-center w-full ">
                <button v-if="props.handleButton" class="justify-center p-2 text-xl font-semibold text-white bg-gray-700 w-96">
                    通知客人取餐
                </button>
            </div>

        </div>

    </div>
</template>