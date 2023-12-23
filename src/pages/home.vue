<template>
    <div>
        <h3>home page</h3>
        <div>
            count: {{ count }}
            double: {{ double }}
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter'

const store = useCounterStore()

// 解构函数保持响应式
const { count, double } = storeToRefs(store)

store.increment()
store.increment()

</script>

<style scoped></style>