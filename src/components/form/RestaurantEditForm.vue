<template>
 <div>
  <h2>餐廳照片</h2>
      <FileUpload />
  </div>
  <div>
      <h2>餐廳名稱</h2>
      <a-input type="text" v-model:value="data.restaurant_name" allow-clear />
  </div>
  <div>
      <h2>餐廳敘述</h2>
      <a-textarea v-model:value="data.restaurant_description" allow-clear />
  </div>
  <div>
      <h2>餐廳地址</h2>
      <a-input type="text" v-model:value="data.restaurant_address" allow-clear />
  </div>

  <BusinessTimeEditor />

  <div class="flex flex-row justify-end gap-5">

      <a-button type="primary" ghost @click="handleSaveButtonOnClick">儲存</a-button>
      <a-button type="primary" danger ghost>回復預設</a-button>
  </div>
</template>

<script lang="ts" setup>
import useGetEditRestaurantInfo from '../../provider/useRestaurantEditProvider';

const data = useGetEditRestaurantInfo();

const handleSaveButtonOnClick = () => {
  console.log(data);
}
</script>