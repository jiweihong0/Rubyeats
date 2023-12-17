<template>
    

        <div>
            <h2>餐點照片</h2>
            <!-- <FileUpload /> -->
        </div>
        <div>
            <h2>餐點名稱</h2>
            <a-input type="text" v-model:value="data.meal_name" allow-clear />
        </div>
        <div>
            <h2>餐點敘述</h2>
            <a-textarea v-model:value="data.meal_description" allow-clear />
        </div>
        <div>
            <h2>餐點價格</h2>
            <a-input type="number" v-model:value="data.meal_price" allow-clear />
        </div>

        <div>
            <h2>餐點標籤</h2>
            <div class="flex flex-row gap-5">
                <a-input type="text" v-model:value="newTag" allow-clear />
                <a-button type="primary" ghost @click="addTag">新增</a-button>
            </div>

            <!-- 標籤列 -->
            <div class="flex flex-row gap-5">
                <a-tag v-for="(tag, index) in data.meal_hashtags" :key="index" closable @close.prevent
                    @close="() => removeTag(tag)">
                    {{ tag }}
                </a-tag>
            </div>
        </div>

        <!-- 餐點選項 -->
        <div>
            <!-- 餐點選項 -->
            <div>
                <h2>餐點選項</h2>
                <a-button type="primary" ghost @click="addInitialSelection">新增初始選項</a-button>

                <!-- 顯示和編輯選項 -->
                <div class="flex flex-col gap-5">
                    <div v-for="(selection, index) in data.meal_selections" :key="index" class="flex flex-col ">
                        <div class="flex justify-between w-full">
                            <a-input type="text" v-model:value="selection.name" allow-clear class="" />
                            <div>
                                <a-button type="primary" ghost @click="() => addOption(index)">新增</a-button>
                                <a-button type="primary" danger ghost @click="() => removeOption(index)">刪除</a-button>
                            </div>
                        </div>
                        <div class="flex flex-col gap-5 ">
                            <div v-for="(option, indexa) in selection.options" :key="index" class="flex flex-row">
                                <a-input v-model:value="option.name" />
                                <a-input v-model:value="option.price" />
                                <a-button type="primary" danger ghost
                                    @click="() => removeSubSelection(index, indexa)">刪除</a-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex flex-row justify-end gap-5 mt-5">

            <a-button type="primary" ghost @click="handleSaveButtonOnClick">儲存</a-button>
            <a-button type="primary" danger ghost>回復預設</a-button>
        </div>
</template>


<script lang="ts" setup>
import { ref, PropType } from 'vue';
import MealsCard from '../MealsCard.vue';

type Meal = NonNullable<InstanceType<typeof MealsCard>['$props']['mealData']>

const props = defineProps({
  meal: {
    type: Object as PropType<Meal>,
    required: true
  }
});

const data = props.meal


//    tag
const newTag = ref('');


const addTag = () => {
  // Add the new tag to the meal
  data.meal_hashtags.push(newTag.value);
  // Clear the new tag input
  newTag.value = '';
};

const removeTag = (tag: string) => {
  // Remove the selected tag from the meal
  data.meal_hashtags.splice(data.meal_hashtags.indexOf(tag), 1);
};

const addInitialSelection = () => {
  // Create a new Selection object with default values
  const newSelection = {
    id: data.meal_selections.length + 1,
    name: "新選擇",
    options: [
      {
        id: 1,
        name: "新選項1",
        price: 0
      }
    ]
  };
  // Add the new option to the meal
  data.meal_selections.push(newSelection);   
}

const addOption = (index: number) => {
    // Add a new empty option value to the selected option
    data.meal_selections[index].options.push({
        id: data.meal_selections[index].options.length + 1,
        name: "新選項",
        price: 0
    });
};

const removeOption = (index: number) => {
    // Remove the selected option
    data.meal_selections.splice(index, 1);
};

const removeSubSelection = (index: number, subIndex: number) => {
  // Remove the selected sub-option from the specified option
  data.meal_selections[index].options.splice(subIndex, 1);
};



// save
const handleSaveButtonOnClick = () => {
    console.log(data);
}
</script>