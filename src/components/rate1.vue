<template>
    <div :style="{ color: fontstyle }">
        {{ rate }}
    </div>
</template>

<script setup>
/*
 * 评级分数
 * 通过defenProps接收父组件传过来的属性值
*/

import { computed, defineProps } from 'vue';

let props = defineProps({
    value: Number,
    theme: { type: String, default: 'green' }
})

// rate
const rate = computed(
    () => '★★★★★☆☆☆☆☆'.slice(5 - props.value, 10 - props.value)
)

// theme
const fontstyle = computed(() => `${props.theme}`)
</script>

<style scoped></style>