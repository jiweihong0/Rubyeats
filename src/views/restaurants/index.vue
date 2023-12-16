<template>
    <Layout>
        <div class="flex justify-between w-full">
          <a-input placeholder="餐廳名稱" />
            <a-button type="link" href="/recommand-setting">設定推薦</a-button>
        </div>
        <div class="flex flex-col gap-y-4">
          <RestaurantList title="推薦專區" :restaurants="restaurants" />
          <RestaurantList title="附近的餐廳" :restaurants="restaurants" />
          <RestaurantGrid title="所有餐廳" :restaurants="restaurants" />
        </div>
    </Layout>
</template>

<script lang="ts" setup>
import Layout from "../../layouts/index.vue";
import RestaurantList from "../../components/list/restaurantList.vue";
import RestaurantGrid from "../../components/list/restaurantGrid.vue";

type Restaurant = InstanceType<typeof RestaurantList>["restaurants"][0];

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300?random=1",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 2,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300?random=2",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 3,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300?random=3",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 4,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300?random=4",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 5,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300?random=5",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 6,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300?random=6",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 7,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300?random=7",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 8,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300?random=8",
    price: 100,
    description: "餐廳描述",
  },
];
</script>