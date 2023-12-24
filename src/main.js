import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import router from "./router/index";

// vue plugin 必须为一个函数，或者具有install方法的对象
// 此处 router 返回值为一个具有intaller方法的Router类
createApp(App).use(router).mount("#app");
