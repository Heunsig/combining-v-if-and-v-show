<template>
  <main>
    <div class="nav">
      <router-link to="/example1" class="nav-link">Using v-if</router-link>
      <router-link to="/example2" class="nav-link">Using v-show</router-link>
      <router-link to="/example3" class="nav-link">Using v-if + v-show</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 2rem 0;
}

.nav {
  display: flex;
  gap: 0.625rem;
  width: clamp(18.75rem, 100%, 43.75rem);
  margin: 0 auto;
  margin-bottom: 2rem;
}

.nav-link {
  display: inline-block;
  color: #333;
}

.nav-link:hover {
  text-decoration: underline;
}

.router-link-active {
  color: #1f64bd;
}

.content {
  width: clamp(18.75rem, 100%, 43.75rem);
  margin: 0 auto;
}
</style>
