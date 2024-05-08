<template>
  <button type="button" class="red-btn" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  onClick: Function;
}>();
</script>

<style scoped>
.red-btn {
  cursor: pointer;
  padding: 0.625rem 1rem 0.625rem 1rem;
  border-radius: 4px;
  border: 0;
  background: var(--color-red);
  color: var(--white);
  white-space: nowrap;
}
</style>
