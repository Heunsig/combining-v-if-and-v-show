<script setup>
import { onMounted } from 'vue';
import { useRenderTime } from '../store';

const { start, end, increaseRenderCount } = useRenderTime();

start();
onMounted(() => {
  end();
  increaseRenderCount();
});
</script>

<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</template>