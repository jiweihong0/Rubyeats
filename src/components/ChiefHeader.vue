<template>
  <header class="sticky top-0 z-20 flex items-center justify-between w-full h-20 bg-graybg">
    <div class="h-full">
      <a href="/restaurants">
          <img :src="Icon" alt="Icon" class="aspect-[4/3] h-full">
      </a>
    </div>
    <div class="flex flex-row gap-3 mr-20">
      <a href="/vendor/restaurant/edit/1">
          餐廳設定
      </a>
      <a href="/meals">
          餐點設定
      </a>
      <a href="/order">
          我的訂單
      </a>
    </div>
  </header>
</template>
<script setup lang="ts">
import Icon from "../assets/Icon.png";

</script>