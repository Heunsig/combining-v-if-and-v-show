<script setup>
import { onMounted } from 'vue';

console.time('Tab1 mounted');
onMounted(() => {
  console.timeEnd('Tab1 mounted');
});
</script>

<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</template>