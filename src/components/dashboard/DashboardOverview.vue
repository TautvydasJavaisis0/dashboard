<template>
  <div :class="boxTheme">
    <h2>{{ heading }}</h2>
    <span class="count-label">{{ count }}</span>
    <span class="additional-notice-label">{{ additionalNotice }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from 'vue';

type ThemeTypes = 'orange' | 'blue' | 'purple';

const props = defineProps<{
  theme: ThemeTypes;
  heading: string;
  count: string;
  additionalNotice: string;
}>();

const { theme: themeRef } = ref(props).value;

const boxTheme = computed(() => {
  return {
    'overview-layout theme-orange': themeRef === 'orange',
    'overview-layout theme-blue': themeRef === 'blue',
    'overview-layout theme-purple': themeRef === 'purple',
  };
});
</script>

<style scoped>
.overview-layout {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.75rem 0.75rem 0.75rem 1.25rem;
  box-sizing: border-box;
  gap: 1rem;
  border-radius: 10px;
}
.theme-orange {
  background-color: var(--color-linen);
  .additional-notice-label {
    color: var(--color-red);
  }
}
.theme-blue {
  background-color: var(--color-aliceblue);
  .additional-notice-label {
    color: var(--color-blue);
  }
}
.theme-purple {
  background-color: var(--color-orchid-light);
  .additional-notice-label {
    color: var(--color-orchid);
  }
}
.count-label {
  font-family: Poppins;
  font-size: 2.25rem;
  line-height: 1;
  font-weight: 500;
  color: var(--dark-blue-title-color);
}
.additional-notice-label {
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--secondary-title-color);
}
@media (max-width: 75em) {
  .count-label {
    font-size: 2rem;
  }
  .additional-notice-label {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
}
</style>
