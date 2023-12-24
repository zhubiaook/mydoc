<template>
    <component :is="component"></component>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from './index';

const router = useRouter()

// 返回对路由匹配的组件
const component = computed(() => {
    const route = router.routes.find((i) => {
        return i.path === router.current.value
    })
    return route ? route.component : null
})
</script>
