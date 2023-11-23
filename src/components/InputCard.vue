<template>
    <div class="flex flex-col items-center bg-white rounded-3xl m-3 justify-center">
        <div >
            <input class=" w-80 mb-20 bg-transparent  border-b-2 outline-transparent" type="email" id="email" name="email" v-model="email" placeholder=" 電子信箱" />
        </div>
        <div class="w-80 ">
            <input class="w-full bg-transparent  border-b-2 outline-transparent " :type="visible" id="password" name="password" v-model="password" placeholder=" 密碼" />
            <img class=" relative left-72 bottom-7" v-on:click="handlevisible" :src="eye"/>
        </div>
        <div class="flex  mt-10 justify-between w-80">
            <div>
                <input class="mr-1" type="checkbox" />
                <span class="mr-10">記住我</span>
            </div>
            <span class="text-grayforget">忘記密碼?</span>
        </div>
        <button class=" rounded-full bg-orangetext text-white text-2xl font-black mt-14 w-56 h-14">登入</button>
        <div class="flex absolute bottom-12">
            <span class="mr-2">還沒有帳號嗎?</span>
            <a href="/signin" class="text-orangetext">註冊</a>
        </div> 
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import eye from '../assets/eye.png'
    const email = ref('')
    const password = ref('')
    const visible = ref("password")
    const handlevisible = () => {
        visible.value = visible.value === "password" ? "text" : "password"
    }


</script>