<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  start: Function,
  end: Function,
  increaseRenderCount: Function,
});

props.start();
onMounted(() => {
  props.end();
  props.increaseRenderCount();
});
</script>

<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</template>