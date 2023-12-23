<!--
    实现弹窗提示效果
    通过Vue Transition组件 实现淡入淡出的动画
    通过Vue TransitionGroup组件，实现列表中的元素动画效果
-->
<template>
    <h3>TodoList</h3>

    <Transition name="fade">
        <div class="info" v-if="showMsg"> You didn't enter data </div>
    </Transition>

    <div>
        <input v-model="title" type="text" @keypress.enter="addTodo">
    </div>
    <div>
        <div v-if="todos.length > 0">
            <ul id="list">
                <TransitionGroup name="list" tag="ul">
                    <li v-for="todo in todos" :key="todo.title">
                        <input type="checkbox" v-model="todo.done">
                        <span :class="{ done: todo.done }">
                            {{ todo.title }}
                        </span>
                    </li>
                </TransitionGroup>
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

/*
 * name="fade"表示 Transition fade-xxx classes
*/
.fade-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}

.fade-enter-active {
    transition: all 1s ease;
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}

.fade-leave-active {
    transition: all 1s ease;
}

/*
 * name="list" 表示TransitionGroup list-xxx classes
*/
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(50px);
}

.list-enter-active,
list-leave-active {
    transition: all 1s linear;
}
</style>