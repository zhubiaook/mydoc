/*
 * 使用localStorage存储
 */
import { ref, watchEffect } from "vue";

// 通过watchEffect
function useStorage(name) {
  let data = ref(JSON.parse(localStorage.getItem(name) || []));
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value));
  });
  return data;
}

export { useStorage };
