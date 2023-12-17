<template>
    <Layout>
        <ClientHeader class="mb-4"/>
        <div class="flex justify-between w-full">
          <a-input placeholder="餐廳名稱" />
            <a-button type="link" href="/recommand-setting">設定推薦</a-button>
        </div>
        <div class="flex flex-col gap-y-4">
          <!--<RestaurantList title="推薦專區" :restaurants="restaurants" />
          <RestaurantList title="附近的餐廳" :restaurants="restaurants" />-->
          <RestaurantGrid title="推薦專區" :restaurants="restaurants" />
        </div>
    </Layout>
</template>

<script lang="ts" setup>
import { onMounted, watchEffect, reactive } from "vue";
import Layout from "../../layouts/index.vue";
import RestaurantList from "../../components/list/restaurantList.vue";
import RestaurantGrid from "../../components/list/restaurantGrid.vue";
import useGetRecommandation from "../../hooks/useRecommandation";
import getRecommandationRestaurant from "../../utils/getRecommandation"
import ClientHeader from "../../components/ClientHeader.vue";
type Restaurant = InstanceType<typeof RestaurantList>["restaurants"][0];

const restaurants = reactive<Restaurant[]>([]);

// get from query
const location = reactive({
  latitude: 0,
  longitude: 0,
});

const userRecommandSetting = useGetRecommandation();

const successCallback: PositionCallback = (position) => {
  location.latitude = position.coords.latitude;
  location.longitude = position.coords.longitude;
};

const errorCallback: PositionErrorCallback | null | undefined = (error) => {
  console.log(error);
  alert("無法取得您的位置，請手動輸入地址")
};

watchEffect(() => {
  if (location.latitude !== 0
    && location.longitude
    && userRecommandSetting.tags.length > 0
  ) {
      const newRecommandRestaurants = getRecommandationRestaurant(
        { latitude: location.latitude, longitude: location.longitude },
        userRecommandSetting.tags
      );

      const organizeRestaurants = newRecommandRestaurants.map((restaurant) => {
        return {
          id: Math.random(),
          name: restaurant[0],
          img: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 10)}`,
          price: Math.floor(Math.random() * 1000),
          description: "餐廳描述",
        };
      });

      restaurants.push(...organizeRestaurants)
    }
})

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
})



//const restaurants: Restaurant[] = [
//  {
//    id: 1,
//    name: "餐廳名稱",
//    img: "https://picsum.photos/200/300?random=1",
//    price: 100,
//    description: "餐廳描述",
//  },
//];
</script>