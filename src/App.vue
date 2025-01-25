<script setup>
import { onMounted, ref, shallowRef, watch } from 'vue';
import Tab1 from './components/TabContent1.vue';
import Tab2 from './components/TabContemt2.vue';
import Tab3 from './components/TabContent3.vue';
import { useRenderTime } from './store';

const { renderTime, renderCount } = useRenderTime();
const currentTab = ref(1);
const tabs = shallowRef([
  { id: 1, title: 'Tab 1 - Light Component', component: Tab1, isRendered: false },
  { id: 2, title: 'Tab 2 - Heavy Component', component: Tab2, isRendered: false },
  { id: 3, title: 'Tab 3 - Light Component', component: Tab3, isRendered: false },
]);

watch(currentTab, (newVal) => {
  tabs.value.forEach(tab => {
    if (tab.isRendered) {
      return;
    }

    tab.isRendered = tab.id === newVal;
  });
}, { immediate: true });


const appT0 = ref(0);
const appT1 = ref(0);

appT0.value = performance.now();
onMounted(() => {
  appT1.value = performance.now();
});
</script>

<template>
  <div class="render-info">
    <div>App 컴포넌트 렌더링 시간: {{ appT1 - appT0 }} ms</div>
    <div>컴포넌트 렌더링 시간: {{ renderTime }} ms</div>
    <div>컴포넌트 렌더링 횟수: {{ renderCount }}</div>
  </div>
  <div class="tabs-container">
    <div class="tabs">
      <button 
        v-for="(tab, index) in tabs" 
        :key="index"
        :class="{ active: currentTab === tab.id }"
        @click="currentTab = tab.id"
      >
        {{ tab.title }}
      </button>
    </div>
    
    <template v-for="tab in tabs" :key="tab.id">
      <div 
        v-if="tab.isRendered"
        v-show="currentTab === tab.id"
        class="tab-content"
      >
        <component :is="tab.component" />
      </div>
    </template>
  </div>
</template>



<style scoped>
.render-info {
  margin: 20px;
}

.tabs-container {
  margin: 20px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tabs button {
  padding: 10px 20px;
  border: none;
  background: #f0f0f0;
  cursor: pointer;
  border-radius: 4px;
}

.tabs button.active {
  background: #007bff;
  color: white;
}

.tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
