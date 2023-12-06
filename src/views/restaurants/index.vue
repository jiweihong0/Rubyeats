<template>
    <Layout>
        <div class="w-1/3">
          <a-input placeholder="餐廳名稱" />
        </div>
        <RestaurantList :restaurants="restaurants" />
    </Layout>
</template>

<script lang="ts" setup>
import Layout from "../../layouts/index.vue";
import RestaurantList from "../../components/list/restaurantList.vue";

type Restaurant = InstanceType<typeof RestaurantList>["restaurants"][0];

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 2,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 3,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 4,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 5,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 6,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 7,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300",
    price: 100,
    description: "餐廳描述",
  },
  {
    id: 8,
    name: "餐廳名稱",
    img: "https://picsum.photos/200/300",
    price: 100,
    description: "餐廳描述",
  },
];
</script>