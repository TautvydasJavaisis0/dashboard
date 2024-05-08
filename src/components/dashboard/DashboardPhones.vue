<template>
  <div class="smartphones-layout" :class="{ expanded: showAllPhones }">
    <div class="smartphones-table">
      <div class="smartphones-heading-wrapper">
        <h2>Smartphones</h2>
        <BaseButton @click="refreshData">Refresh phones</BaseButton>
        <select class="select-item" id="select-phone" v-model="selectedSortOption">
          <option v-for="(item, index) in sortOptions" :key="index" :value="item">
            Sort by: {{ item }}
          </option>
        </select>
      </div>
      <ul>
        <li v-for="(item, index) in sortedProducts" :key="index">
          <div class="labels-wrapper">
            <span class="title">{{ item.title }}</span>
            <p class="description">{{ item.description }}</p>
            <span class="rating">Rating: {{ item.rating }}/5</span>
          </div>
          <span class="date-label">{{ item.price }}$</span>
        </li>
      </ul>
    </div>
    <button type="button" class="see-all-btn" @click="toggleSectionExpansion">See all</button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref, defineEmits } from 'vue';
import type { SmartphonesResponse } from '@/api/models';

const props = defineProps<{
  smartphones: SmartphonesResponse | null;
}>();
const emit = defineEmits(['refresh-data']);

const products = computed(() => (props.smartphones ? props.smartphones.products : []));

const sortOptions = [
  'none',
  'title asc',
  'title dsc',
  'rating asc',
  'rating dsc',
  'price asc',
  'price dsc',
];
const selectedSortOption = ref(sortOptions[0]);
const showAllPhones = ref(false);

const sortedProducts = computed(() => {
  if (selectedSortOption.value === 'none') {
    return products.value;
  }
  const [valueType, sortType] = selectedSortOption.value.split(' ');
  return [...products.value].sort((a, b) => {
    let comparisonValue: number;
    switch (valueType) {
      case 'title':
        comparisonValue = a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
        break;
      case 'rating':
        comparisonValue = a.rating - b.rating;
        break;
      case 'price':
        comparisonValue = a.price - b.price;
        break;
      default:
        comparisonValue = 0;
        break;
    }
    return sortType === 'dsc' ? comparisonValue * -1 : comparisonValue;
  });
});

const refreshData = () => {
  emit('refresh-data');
  const [firstSortOption] = sortOptions;
  selectedSortOption.value = firstSortOption;
};

const toggleSectionExpansion = () => {
  showAllPhones.value = !showAllPhones.value;
};
</script>

<style scoped>
.smartphones-layout {
  width: 100%;
  max-height: 26.5rem;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 1.25rem;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid var(--color-gainsboro-200);
}
.smartphones-layout.expanded {
  max-height: none;
}
.smartphones-heading-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.625rem;
  padding-bottom: 0.875rem;
  .select-item {
    height: 1.875rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 0.375rem;
    padding-right: 0.375rem;
    line-height: 1.75rem;
    font-family: Roboto;
    font-size: 0.75rem;
    gap: 0.375rem;
    border-radius: 4px;
    border: 1px solid var(--color-whitesmoke-200);
    color: var(--primary-subtitle-color);
    white-space: nowrap;
  }
}
.smartphones-table {
  overflow: hidden;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  ul {
    margin: 0;
    padding: 0;
    display: table;
    width: 100%;
    list-style-type: none;
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0.625rem 1rem 0.625rem 1rem;
      gap: 1.813rem;
      border-radius: 6px;
      border: 1px solid var(--color-gainsboro-200);
      background: var(--background-color);
      margin: 0;
      margin-bottom: 8px;
    }
  }
}
.labels-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  title {
    font-family: Poppins;
    font-size: 0.75rem;
    line-height: 1.5rem;
    color: var(--primary-subtitle-color);
    margin-bottom: 8px;
  }
  .description {
    font-family: Roboto;
    font-size: 0.625rem;
    line-height: 0.875rem;
    word-wrap: break-word;
    color: var(--primary-subtitle-color);
  }
  .rating {
    font-family: Roboto;
    font-size: 0.625rem;
    line-height: 0.875rem;
    word-wrap: break-word;
    color: var(--primary-subtitle-color);
  }
}
button.see-all-btn {
  min-height: 2.438rem;
  border-top: 1px solid var(--color-gainsboro-200);
  border-bottom: none;
  border-right: none;
  border-left: none;
  font-family: Poppins;
  font-size: 0.875rem;
  line-height: 2.438rem;
  font-weight: 500;
  color: var(--color-red);
  text-align: center;
  background: white;
  cursor: pointer;
}
</style>
