<!--
    实现弹窗提示效果
-->
<template>
    <h3>TodoList</h3>

    <div class="info" v-if="showMsg"> You didn't enter data </div>

    <div>
        <input v-model="title" type="text" @keypress.enter="addTodo">
    </div>
    <div>
        <div v-if="todos.length > 0">
            <ul id="list">
                <li v-for="todo in todos">
                    <input type="checkbox" v-model="todo.done">
                    <span :class="{ done: todo.done }">
                        {{ todo.title }}
                    </span>
                </li>
            </ul>
        </div>
        <div v-else>
            no data
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let title = ref("")
let todos = ref([])
let showMsg = ref(false)

function addTodo() {
    // 没有输入数据时，showMsg.value为true, 1.5s后恢复为false
    if (!title.value) {
        showMsg.value = true
        setTimeout(() => showMsg.value = false, 1500)
        return
    }
    todos.value.push({
        title: title.value,
        done: false
    })
    title.value = ""
}
</script>

<style scoped>
.done {
    color: gray
}

#list {
    text-align: left;
}

.info {
    position: fixed;
    top: 0;
    background: #d88986;
    padding: 20px;
    width: 200px;
    color: white;
}
</style>