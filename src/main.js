import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { store } from "./store/counter";

// 注册pinia
createApp(App).use(store).mount("#app");
