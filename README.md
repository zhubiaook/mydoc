# mydoc

组件见共享数据方法一：pinia

> Pinia 是未来的Vuex, Vuex5的实现

**pinia的特点**

- 支持`options api` 和 `composition api`
- 去除 `mutations` 比vuex更加精简
- 在页面或者组件直接引用后使用, 数据来源更加清晰调试更加方便
- 全面的`TypeScript`支持
- 服务器端渲染支持
- 轻量 压缩后的体积只有1kb左右

## 创建项目

1. 创建mydoc项目
   
   ```bash
   npm create vite@latest mydoc
   ```

2. 安装vue-router, vuex, pinia模块
   
   ```bash
   npm install pinia@next
   ```

## Pinia使用

1. 注册pinia
   
   ```js
   /* 
    * src/store/index.js
    */
   // 实例化Pinia
   import { createPinia } from "pinia";
   export default createPinia();
   
   
   /*
    * src/main.js
    */
   // 注册Pinina
   import { createApp } from "vue";
   import "./style.css";
   import App from "./App.vue";
   
   import pinia from "./store/index";
   
   // 注册pinia
   createApp(App).use(pinia).mount("#app");
   
   ```

2.  添加 store
   
   ```js
   /* 
    * src/store/counter.js
    * 此处是CompontionAPI, Options API 请查看 src/store/counter1.js
    */
   
   import { defineStore } from "pinia";
   import { computed, ref } from "vue";
   
   // id: counter必须唯一
   const useCounterStore = defineStore("counter", () => {
     const count = ref(0);
   
     function increment() {
       count.value++;
     }
   
     const double = computed(() => {
       return 2 * count.value;
     });
   
     return { count, double, increment };
   });
   export { useCounterStore };
   
   ```

3. 使用 store
   
   ```js
   /*
    * pages/home.vue
    */
   
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
   ```
