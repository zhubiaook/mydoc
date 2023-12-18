<template>
    <!-- 
        Counter 
    -->
    <div>
        <h2 @click="add">{{ count }}</h2>
    </div>

    <!-- 
        Todo List
    -->
    <div>
        <h2>Todos</h2>
        <div>{{ title }}</div>
        <input type="text" v-model="title" @keydown.enter="addTodo">
        <button @click="clear">clear</button>

        <ul v-if="all > 0">
            <li v-for="todo in todos">
                <input type="checkbox" v-model="todo.done">
                <span :class="{ todoTitle: todo.done }">
                    {{ todo.title }}
                </span>
            </li>
        </ul>
        <div v-else>no data</div>
        <div>
            all: <input type="checkbox" v-model="allDone">
        </div>
        {{ active }} / {{ all }}
    </div>
</template>

<script setup>
// 得力于Vue3 的Composition API可以将不不同功能的数据放到单独的文件中进行维护，使得主体变得清爽
import countNum from '../../utils/count'
import useTodos from '../../utils/use-todos'

let { count, color, add } = countNum();
let { title, todos, addTodo, active, all, allDone, clear } = useTodos();
</script>

<style scoped>
h2 {
    color: v-bind(color);
}

.todoTitle {
    color: gray;
    text-decoration: line-through;
}
</style>