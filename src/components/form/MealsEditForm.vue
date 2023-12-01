<template>
    

        <div>
            <h2>餐點照片</h2>
            <!-- <FileUpload /> -->
        </div>
        <div>
            <h2>餐點名稱</h2>
            <a-input type="text" v-model:value="data.meals_name" allow-clear />
        </div>
        <div>
            <h2>餐點敘述</h2>
            <a-textarea v-model:value="data.meals_description" allow-clear />
        </div>
        <div>
            <h2>餐點價格</h2>
            <a-input type="number" v-model:value="data.meals_price" allow-clear />
        </div>

        <div>
            <h2>餐點標籤</h2>
            <div class="flex flex-row gap-5">
                <a-input type="text" v-model:value="newTag" allow-clear />
                <a-button type="primary" ghost @click="addTag">新增</a-button>
            </div>

            <!-- 標籤列 -->
            <div class="flex flex-row gap-5">
                <a-tag v-for="(tag, index) in data.meals_hashtags" :key="index" closable @close.prevent
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
                <a-button type="primary" ghost @click="addInitialOption">新增初始選項</a-button>

                <!-- 顯示和編輯選項 -->
                <div class="flex flex-col gap-5">
                    <div v-for="(option, index) in data.meals_options" :key="index" class="flex flex-col ">
                        <div class="flex justify-between inline w-full">
                            <a-input type="text" v-model:value="option.name" allow-clear class="" />
                            <div>
                                <a-button type="primary" ghost @click="() => addOption(index)">新增</a-button>
                                <a-button type="primary" danger ghost @click="() => removeOption(index)">刪除</a-button>
                            </div>
                        </div>
                        <div class="flex flex-col gap-5 ">
                            <div v-for="(optionValue, indexa) in option.options" :key="index" class="flex flex-row">
                                <a-input v-model:value="optionValue[0]" />
                                <a-input v-model:value="optionValue[1]" />
                                <a-button type="primary" danger ghost
                                    @click="() => removeSubOption(index, indexa)">刪除</a-button>
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
import { ref, reactive } from 'vue';
const dataex = reactive({
    meals_name: '餐點名稱',
    meals_description: '餐點敘述',
    meals_address: '餐點地址',
    meals_hashtags: ['餐點標籤1', '餐點標籤2', '餐點標籤3'],
    meals_options: [{
        name: "餐點選項1",
        options: [
            ["選項1", 60],
            ["選項2", 30]
        ]
    }, {
        name: "餐點選項2",
        options: [
            ["選項1", 60],
            ["選項2", 30]
        ]
    }]
})
const props = defineProps([
    "mealsData"
]);

const data = props.mealsData ? props.mealsData : dataex;


//    tag
const newTag = ref('');


const addTag = () => {

    if (newTag.value) {
        data.meals_hashtags.push(newTag.value);
        newTag.value = ''; // Clear the input after adding a tag
    }
};

const removeTag = (tag: any) => {
    let tags = [...data.meals_hashtags];
    tags = tags.filter((_, index) => index !== data.meals_hashtags.indexOf(tag));
    console.log(tags);

    data.meals_hashtags = tags;
};

// option
const addInitialOption = () => {
    // Create a new option object with default values
    const newOption = {
        name: "",
        options: [["", 0]]
    };
    data.meals_options.push(newOption);
};

const addOption = (index: number) => {
    // Add a new empty option value to the selected option
    data.meals_options[index].options.push(["", 0]);
};

const removeOption = (index: number) => {
    // Remove the selected option
    data.meals_options.splice(index, 1);
};

const removeSubOption = (index: number, subIndex: number) => {
    // Remove the selected sub-option from the specified option
    data.meals_options[index].options.splice(subIndex, 1);
};



// save
const handleSaveButtonOnClick = () => {
    console.log(data);
}
</script>