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
import { computed } from 'vue';
import { useStore } from 'vuex';

let store = useStore()
let double = computed(() => store.getters.double)
let count = computed(() => store.state.count)
store.commit('increment')
store.commit('increment')
store.dispatch('asyncAdd')
</script>

<style scoped></style>