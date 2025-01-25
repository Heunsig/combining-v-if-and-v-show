import { computed, ref } from "vue";


export function useRenderTime() {
  const t0 = ref(0);
  const t1 = ref(0);
  const renderCount = ref(0);

  function start() {
    t0.value = performance.now();
  }

  function end() {
    t1.value = performance.now();
  }


  function increaseRenderCount() {
    renderCount.value++;
  }

  return { 
    renderTime: computed(() => t1.value - t0.value),
    renderCount: computed(() => renderCount.value),
    start,
    end,
    increaseRenderCount
  };
}