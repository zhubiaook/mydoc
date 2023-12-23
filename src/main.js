import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import pinia from "./store/index";

// 注册pinia
createApp(App).use(pinia).mount("#app");
