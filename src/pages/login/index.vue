<template>
    <h5>
        Login Page
    </h5>

    <!--
        change icon
    -->
    <div>
        <button @click="changeIcon">click</button>
    </div>
    <!--
        VueUse
    -->
    <div>
        <button @click="toggle">FullScreen</button>
    </div>
</template>

<script setup>
import { useStorage } from '../../utils/use-storage'
import { useFavicon } from '../../utils/usefavicon'
import { useFullscreen } from '@vueuse/core';

// localStorage
let todos = useStorage("todos")
todos.value.push({
    title: "do homework", done: false,
})
console.log(todos.value.length)

// 修改icon
function changeIcon() {
    let { favicon } = useFavicon()
    favicon.value = "https://media.flaticon.com/dist/min/img/apple-icon-58x58.png"
}

// 使用vueuse中useFullscreen里的toggle函数实现全屏
const { toggle } = useFullscreen()
</script>