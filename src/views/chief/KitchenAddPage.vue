<script setup lang="ts">
import ChiefHeader from '../../components/ChiefHeader.vue'

// showImage 
const imageSource = ref('');
const showImage = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        imageSource.value = reader.result as string;
    };
};

// texta
const texttitle = ref('');
const textcontent = ref('');
const textaddress = ref('');
console.log(texttitle.value);

import { ref, computed } from 'vue'

type IWeekdayBussiness = {
    weekday: number
    bussinessStartTime: string
    bussinessEndTime: string
    isOnBussiness: boolean
}

type Props = {
    weekdayInfo: IWeekdayBussiness[]
}

const props = withDefaults(defineProps<Props>(), {
    weekdayInfo: () => [
        {
            weekday: 0, // Sunday
            bussinessStartTime: '09:00',
            bussinessEndTime: '17:00',
            isOnBussiness: true,
        },
        {
            weekday: 1, // Monday
            bussinessStartTime: '09:00',
            bussinessEndTime: '17:00',
            isOnBussiness: true,
        },
        {
            weekday: 2, // Tuesday
            bussinessStartTime: '09:00',
            bussinessEndTime: '17:00',
            isOnBussiness: true,
        },
        {
            weekday: 3, // Wednesday
            bussinessStartTime: '09:00',
            bussinessEndTime: '17:00',
            isOnBussiness: true,
        },
        {
            weekday: 4, // Thursday
            bussinessStartTime: '09:00',
            bussinessEndTime: '17:00',
            isOnBussiness: true,
        },
        {
            weekday: 5, // Friday
            bussinessStartTime: '09:00',
            bussinessEndTime: '17:00',
            isOnBussiness: true,
        },
        {
            weekday: 6, // Saturday
            bussinessStartTime: '09:00',
            bussinessEndTime: '17:00',
            isOnBussiness: true,
        },
    ],
});

const currentSelectedWeekdayNumber = ref(0)
const currentSelectedWeekdayData = computed(
    () => props.weekdayInfo.find((day) => day.weekday === currentSelectedWeekdayNumber.value)
)

const handleWeekdayButtonOnClick = (num: number) => {
    currentSelectedWeekdayNumber.value = num
}

const convertNumberToWeekday = (num: number): string => {
    switch (num) {
        case 0:
            return '日';
        case 1:
            return '一';
        case 2:
            return '二';
        case 3:
            return '三';
        case 4:
            return '四';
        case 5:
            return '五';
        case 6:
            return '六';
        default:
            return '無效的星期數字';
    }
}

</script>
<template>
    <div class=" w-screen h-full  flex  items-center flex-col">
        <div class=" max-w-3xl w-full">
            <ChiefHeader />
            <div class=" flex justify-items-start w-full ml-10">
                <h2>餐廳設定</h2>
            </div>
            <div>
                <h2>餐廳照片</h2>
                <img :src="imageSource" alt="avatar" />
                <input type="file" accept="image/jpeg,image/png" @change="showImage" />
            </div>
            <div>
                <h2>餐廳名稱</h2>
                <a-input type="text" v-model="texttitle" allow-clear />
            </div>
            <div>
                <h2>餐廳敘述</h2>
                <a-textarea v-model="textcontent" allow-clear />
            </div>
            <div>
                <h2>餐廳地址</h2>
                <a-input type="text" v-model="textaddress" allow-clear />
            </div>
            <label>餐廳營業時段</label>
            <div class="flex items-center flex-col">
                <div class="flex flex-row">

                    <button class="weekday-btn" v-for="(item, index) in new Array(7)"
                        :class="{ active: currentSelectedWeekdayNumber === index }"
                        @click="() => handleWeekdayButtonOnClick(index)">
                        {{ convertNumberToWeekday(index) }}
                    </button>
                </div>
                <div>
                    <input type="time" v-model="currentSelectedWeekdayData.bussinessStartTime">
                    -
                    <input type="time" v-model="currentSelectedWeekdayData.bussinessEndTime">
                </div>
                <input type="checkbox" v-model="currentSelectedWeekdayData.isOnBussiness">
                
                <label>營業</label>
            </div>
            <div class="flex justify-end flex-row gap-5">

                <a-button type="primary" ghost>儲存</a-button>
                <a-button type="primary" danger ghost>回復預設</a-button>
            </div>




        </div>
    </div>
</template>


<style>
button.weekday-btn.active {
    background-color: #ff0ff0;
}
</style>