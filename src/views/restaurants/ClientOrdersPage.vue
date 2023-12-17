<script setup lang="ts">
import ClientHeader from '../../components/ClientHeader.vue';
import OrderCard from '../../components/card/orderCard.vue';
import Layout from "../../layouts/index.vue"

</script>
<template>
  <Layout>
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
  </Layout>
</template>