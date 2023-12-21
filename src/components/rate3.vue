<template>
    <div :style="{ color: fontstyle }">
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5">☆</span>
            <span class="hollow" :style="fontwidth">
                <span @mouseover="mouseOver(num)" @click="onRate(num)" v-for="num in 5">★</span>
            </span>
        </div>
    </div>
</template>

<script setup>
/*
 * 评级分数
 * 通过defenProps接收父组件传过来的属性值
 * 通过defineEmits将事件传递到父组件
*/

import { computed, defineProps, ref, defineEmits } from 'vue';

let props = defineProps(
    {
        value: Number,
        theme: { type: String, default: 'green' }
    }
)

// theme
const fontstyle = computed(() => `${props.theme}`)

// 设置<span class="hollow" :style="fontwidth"> 宽度
let width = ref(props.value)

// 当鼠标移到上时更新宽度
let mouseOver = (n) => {
    width.value = n
}
let fontwidth = computed(() => `width:${width.value}em`)

// 当鼠标移出该区域时恢复宽度为props.value的值
let mouseOut = () => {
    width.value = props.value
}

// 传递事件到父组件
let emits = defineEmits(['update-rate']);
function onRate(n) {
    emits('update-rate', n)
}

</script>

<style scoped>
.rate {
    position: relative;
    display: inline-block;
}

.rate>span.hollow {
    position: absolute;
    display: inline-block;
    left: 0;
    top: 0;
    width: 0;
    overflow: hidden;
}
</style>