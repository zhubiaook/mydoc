<template>
    <div>
        <h5>Home Page</h5>
    </div>
    <div>
        <!--
            update-rate 是由子组件Rate所定义的事件
            rate3.vue
        -->
        <Rate :value="score" theme="black" @update-rate="updateRate"></Rate>

        <!--
            rate.vue
            自定义组件的子元素，可以在子组件中通过插槽 <slot></slot> 的方式显示出来
        -->
        <Rate :value="score2" theme="blue">
            <img src="../../public/vite.svg" alt="">
        </Rate>

        <!--
            v-mode 实现向自定义组件传递数据和接收子组件传递的数据
            rate.vue
        -->
        <Rate v-model="score3"> Hello World </Rate>
    </div>
</template>

<script setup>
import Rate from '../components/rate.vue';
import { ref } from 'vue';

// score between 0 and 5
let score = ref(2)
let score2 = 3
let score3 = ref(4)

// 修改评分
function updateRate(n) {
    score.value = n
}
</script>