<template>
  <div class="app-layout">
    <TheSidebar />
    <div class="main-content-wrapper">
      <TheHeader />
      <main class="router-content-wrapper">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
</script>

<style scoped>
.app-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.main-content-wrapper {
  width: 100%;
  max-width: calc(100vw - var(--sibebar-width));
  margin-left: var(--sibebar-width);
}
.router-content-wrapper {
  height: calc(100vh - var(--header-height));
  margin-top: var(--header-height);
  overflow-y: auto;
  overflow-x: hidden;
}
@media (max-width: 75em) {
  .main-content-wrapper {
    max-width: calc(100vw - var(--sibebar-small-width));
    margin-left: var(--sibebar-small-width);
  }
  .router-content-wrapper {
    margin-top: var(--header-small-height);
    height: calc(100vh - var(--header-small-height));
  }
}
@media (max-width: 43.75em) {
  .main-content-wrapper {
    max-width: 100%;
    margin-left: 0;
  }
}
</style>
