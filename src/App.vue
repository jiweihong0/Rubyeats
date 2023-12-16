<script setup lang="ts">
  import { useSetCartProvider } from "./provider/useCartProvider";
  useSetCartProvider();
</script>

<template>
  <RouterView />
</template>