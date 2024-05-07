<template>
  <div class="graph-layout">
    <div class="section">
      <h2>{{ heading }}</h2>
      <span class="total-count-label">{{ counts.totalCount }}</span>
      <div class="sub-count-section">
        <span>{{ counts.menCount }} Men</span>
        <span>{{ counts.womenCount }} Women</span>
      </div>
    </div>
    <div class="section">
      <img :src="imageSrc" contain alt="graph" class="graph-img" />
      <span class="change-label">{{ counts.change }} Past month</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from 'vue';

const props = defineProps<{
  heading: string;
  counts: { totalCount: number; menCount: number; womenCount: number; change: string };
  image: string;
}>();

const { image: imageRef } = ref(props).value;

const imageSrc = computed(() => `src/assets/images/${imageRef}`);
</script>

<style scoped>
.graph-layout {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.25rem;
  box-sizing: border-box;
  gap: 1rem;
  border-radius: 10px;
  border: 1px solid var(--color-gainsboro-200);
}
.section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: center;
  width: fit-content;
}
.total-count-label {
  font-family: Poppins;
  font-size: 3rem;
  line-height: 1;
  font-weight: 500;
  margin: 0px;
  color: var(--dark-blue-title-color);
}
.sub-count-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.25rem;
  font-size: 0.75rem;
  line-height: 1.125rem;
}
.graph-img {
  width: 100%;
  height: 100%;
  max-width: 7.188rem;
  max-height: 7.563rem;
  object-fit: contain;
  margin-left: auto;
}
.change-label {
  background: var(--color-linen);
  border-radius: 4px;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  font-size: 0.75rem;
  line-height: 1.5rem;
  margin-left: auto;
  color: var(--secondary-title-color);
}
@media (max-width: 75em) {
  .total-count-label {
    font-size: 2.625rem;
  }
}
</style>
