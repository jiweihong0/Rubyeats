<template>
  <a-upload
  v-model:file-list="fileList"
  name="avatar"
  list-type="picture-card"
  style="width: fit-content"
  class="min-w-[128px] max-w-[768px] aspect-[4/3]"
  :show-upload-list="false"
  @change="handleChange"
>
    <img v-if="data.restaurant_image" :src="data.restaurant_image" alt="avatar" class="h-24 aspect-[4/3]" />
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import type { UploadChangeParam } from 'ant-design-vue';
import useGetEditRestaurantInfo from '../provider/useRestaurantEditProvider';

const data = useGetEditRestaurantInfo();
const fileList = ref([]);
const loading = ref<boolean>(false);

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true;
    return;
  } else {
    // Get this url from response in real world.
    
    // Save this to provider 
    console.log(info.file.originFileObj);
    
    getBase64(info.file.originFileObj!, (base64Url: string) => {
      data.restaurant_image = base64Url;
      loading.value = false;
    });
  }
};

</script>
<style scoped>
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>