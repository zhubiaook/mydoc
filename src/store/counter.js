/*
 * Setup Store 即 Composition API
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
