import MyButton from '@/base/MyButton.vue';
<template>
  <div class="activity-layout">
    <div class="activity-heading-wrapper">
      <h2>Recent Activity</h2>
    </div>
    <div class="activity-mid-section">
      <div class="post-info">
        <span class="date-label">10.40 AM, Fri 10 Sept 2021</span>
        <h2>You Posted a New Job</h2>
        <span class="notifcation-label">
          Kindly check the requirements and terms of work and make sure everything is right.
        </span>
      </div>
      <div class="activity-bottom">
        <span class="activity-count-label">Today you made 12 Activities </span>
        <MyButton @click="() => {}">See All Activities</MyButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from '@/base/MyButton.vue';
</script>

<style scoped>
h2 {
  color: var(--white);
}
.activity-layout {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  border: 0;
  color: var(--white);
}
.activity-heading-wrapper {
  padding: 0.625rem 0.625rem 0.625rem 1.5rem;
  box-sizing: border-box;
  background: var(--dark-blue-title-color);
  width: 100%;
}
.activity-mid-section {
  padding: 1.625rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #161e54;
  width: 100%;
}
.post-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.date-label {
  font-family: Roboto;
  font-size: 0.625rem;
  opacity: 0.6;
}
.posted-label {
  font-family: Poppins;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
}
.notifcation-label {
  font-family: Roboto;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.8;
}
.activity-bottom {
  height: 2.375rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  font-family: Poppins;
  font-size: 0.875rem;
}
.activity-count-label {
  align-self: center;
}
</style>
