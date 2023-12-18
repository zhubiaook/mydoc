import { computed, ref } from "vue";

export default function () {
  let title = ref("");

  let todos = ref([
    { title: "do homework", done: false },
    { title: "play pinao", done: false },
  ]);

  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    });
    title.value = "";
  }

  let active = computed(() => todos.value.filter((v) => !v.done).length);
  let all = computed(() => todos.value.length);

  let allDone = computed({
    get: () => active.value === 0,
    set: (val) => todos.value.forEach((todo) => (todo.done = val)),
  });

  function clear() {
    todos.value = todos.value.filter((v) => !v.done);
  }

  return { title, todos, addTodo, active, all, allDone, clear };
}
