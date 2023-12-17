
<template>
    <header class="sticky top-0 z-20 flex items-center justify-between w-full h-20 bg-graybg">
        <div class="h-full">
            <a href="/restaurants">
                <img :src="ClientIcon" alt="Icon" class="aspect-[4/3] h-full">
            </a>
        </div>
        <div class="flex flex-row gap-3 mr-20">
            <a href="/restaurants">
                首頁
            </a>
            <a href="/client/order">
                我的訂單
            </a>

            <a class="flex items-center" href="/cart">
                <ShoppingCartOutlined />
                {{ cartProvider.methods.getTotalMealTypeCount() }}
            </a>
        </div>
    </header>

</template>


<script setup lang="ts">
import useGetCartProvider from '../provider/useCartProvider';
import { ShoppingCartOutlined } from '@ant-design/icons-vue'
import ClientIcon from "../assets/Icon.png";

const cartProvider = useGetCartProvider();

</script>