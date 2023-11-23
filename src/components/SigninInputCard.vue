<template>
    <div class="flex flex-col items-center bg-white rounded-3xl m-20 justify-center">
        <h2 class="text-4xl font-black mt-10 mb-10 text-greentext">用戶註冊</h2>
        <div class="w-80 mb-12 " >
            <input class=" w-80  bg-transparent  border-b-2 outline-transparent" type="email" id="email" name="email" v-model="email" placeholder=" 用戶姓名" />
        </div>
        <div class="w-80 mb-12 ">
            <input class=" w-80 bg-transparent  border-b-2 outline-transparent" type="email" id="email" name="email" v-model="email" placeholder=" 電子信箱" />
        </div>
        <div class="w-80 mb-8 ">
            <input class="w-full bg-transparent  border-b-2 outline-transparent " :type="visible" id="password" name="password" v-model="password" placeholder=" 密碼" />
            <img class=" relative left-72 bottom-7" v-on:click="handlevisible" :src="eye"/>
        </div>
        <div class="w-80 ">
            <input class="w-full bg-transparent  border-b-2 outline-transparent " :type="visibleckpw" id="password" name="password" v-model="checkpw" placeholder=" 確認密碼" />
            <img class=" relative left-72 bottom-7" v-on:click="handlevisibleckpw" :src="eye"/>
        </div>
        <div class="flex  mt-10 justify-between w-80">
            <div>
                <input class="mr-1" type="checkbox" />
                <span class="mr-10">記住我</span>
            </div>
            <span class="text-grayforget">忘記密碼?</span>
        </div>
        <button class="bg-greentext text-white text-2xl w-80 h-12 p-1 mt-10 rounded-3xl">註冊</button>
     
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import eye from '../assets/eye.png'
    const props = defineProps({
        who: String
    })

    const email = ref('')
    const password = ref('')
    const checkpw = ref('')
    const visible = ref("password")
    const visibleckpw = ref("password")
    const handlevisible = () => {
        visible.value = visible.value === "password" ? "text" : "password"
    }
    const handlevisibleckpw = () => {
        visibleckpw.value = visibleckpw.value === "password" ? "text" : "password"
    }
</script>