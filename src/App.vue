<template>
  <div class="nav">
    <router-link to="/example1" class="nav-link">v-if 사용</router-link>
    <router-link to="/example2" class="nav-link">v-show 사용</router-link>
    <router-link to="/example3" class="nav-link">v-if + v-show 사용</router-link>
  </div>
  <div class="">
    <router-view />
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.content {
  margin: 20px;
}

.nav-link {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  background-color: #f0f0f0;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
}

.router-link-active {
  background-color: #42b983;
  color: white;
}
</style>
