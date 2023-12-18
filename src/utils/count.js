import { ref } from "vue";

export default function () {
  let count = ref(0);

  function add() {
    count.value++;
  }

  let color = ref("green");

  return { count, color, add };
}
