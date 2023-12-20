import { ref, watch } from "vue";

// watch方法监听favicon属性的变化，变化后修改icon
function useFavicon() {
  const favicon = ref("");
  function updateIcon(icon) {
    document.head
      .querySelectorAll(`link[rel="icon"]`)
      .forEach((el) => (el.href = `${icon}`));
  }

  const reset = () => {
    favicon.value = "/favicon.ico";
  };
  watch(favicon, (i) => {
    updateIcon(i);
  });

  return { favicon, reset };
}

export { useFavicon };
