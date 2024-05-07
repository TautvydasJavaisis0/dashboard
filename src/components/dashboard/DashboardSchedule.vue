<template>
  <div class="schedule-layout">
    <div class="schedule-table">
      <div class="schedule-heading-wrapper">
        <h2>Upcoming Schedule</h2>
        <select class="date-select-item" id="select-date">
          <option value="item">Today, 13 Sep 2021</option>
        </select>
      </div>
      <ul>
        <li class="title">Priority</li>
        <li key="priority" class="schedule">
          <div class="labels-wrapper">
            <h3>{{ first.heading }}</h3>
            <span class="date-label">{{ first.date }}</span>
          </div>
          <MenuIcon class="icon-menu" />
        </li>
        <li class="title">Other</li>
        <li v-for="(item, index) in rest" :key="index" class="schedule">
          <div class="labels-wrapper">
            <h3>{{ item.heading }}</h3>
            <span class="date-label">{{ item.date }}</span>
          </div>
          <MenuIcon class="icon-menu" />
        </li>
      </ul>
    </div>
    <div class="new-schedule-btn">Creat a New Schedule</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import MenuIcon from '../icons/genericIcons/MenuIcon.vue';

interface Schedule {
  heading: string;
  date: string;
}
const props = defineProps<{
  scheduleList: Schedule[];
}>();

const { scheduleList: scheduleListRef } = ref(props).value;

const [first, ...rest] = scheduleListRef;
</script>

<style scoped>
.schedule-layout {
  width: 100%;
  max-height: 26.5rem;
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
.schedule-heading-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.625rem;
  .date-select-item {
    height: 1.875rem;
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
.schedule-table {
  overflow: hidden;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  ul {
    margin: 0;
    padding: 0;
    display: table;
    width: 100%;
    list-style-type: none;
    li.title {
      font-family: Poppins;
      font-size: 0.75rem;
      line-height: 1.5rem;
      color: var(--primary-subtitle-color);
      margin-bottom: 8px;
    }
    li.schedule {
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
  gap: 0.375rem;
  .date-label {
    font-family: Roboto;
    font-size: 0.625rem;
    line-height: 0.875rem;
    color: var(--primary-subtitle-color);
  }
}
.icon-menu {
  height: 1.125rem;
  width: 1.125rem;
}
.new-schedule-btn {
  min-height: 2.438rem;
  border-top: 1px solid var(--color-gainsboro-200);
  font-family: Poppins;
  font-size: 0.875rem;
  line-height: 2.438rem;
  font-weight: 500;
  color: var(--color-red);
  text-align: center;
}
</style>
