import { inject, ref } from "vue";
import RouterLink from "./router-link.vue";
import RouterView from "./router-view.vue";

const RouterKey = "__router__";

function createWebHashHistory() {
  // hashchang 监听URL中#后面标签的变化，叫做hash router
  const bindEvents = (fn) => window.addEventListener("hashchange", fn);
  return {
    bindEvents,
  };
}

// 作为vue的plugin, 需要有install方法
class Router {
  constructor(options) {
    this.routes = options.routes;
    this.current = ref(window.location.hash.slice(1));
    this.history = options.history;
    this.history.bindEvents(() => {
      this.current.value = window.location.hash.slice(1);
    });
  }

  install(app) {
    // 注册后可通过vue inject引用
    app.provide(RouterKey, this);

    // 注册模块
    app.component("router-link", RouterLink);
    app.component("router-view", RouterView);
  }
}

// 返回 Router的一个实例
function createRouter(options) {
  return new Router(options);
}

function useRouter() {
  return inject(RouterKey);
}

export { createRouter, useRouter, createWebHashHistory };
