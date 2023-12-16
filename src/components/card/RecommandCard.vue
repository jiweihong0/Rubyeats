<template>
  <div class="flex flex-col gap-4 p-4 bg-white">
    <h2 class="text-xl font-bold">{{ props.title }}</h2>
    <span>{{ props.describe }}</span>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    title: string;
    describe: string;
  }>();

</script>