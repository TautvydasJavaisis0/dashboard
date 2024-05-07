<template>
  <div class="dashboard-layout container">
    <h1>Dashboard</h1>
    <div class="content">
      <div class="first-section">
        <div class="section-item">
          <DashboardOverview
            theme="orange"
            heading="Available positions"
            count="24"
            additionalNotice="4 Urgently needed"
          />
          <DashboardOverview
            theme="blue"
            heading="Job Open"
            count="10"
            additionalNotice="4 Active hiring"
          />
          <DashboardOverview
            theme="purple"
            heading="New Employee"
            count="24"
            additionalNotice="4 Department"
          />
        </div>
        <div class="section-item">
          <DashboardGraph
            heading="Total Employees"
            :counts="{ totalCount: 216, menCount: 120, womenCount: 96, change: '2%' }"
            image="graph.png"
          />
          <DashboardGraph
            heading="Talent requests"
            :counts="{ totalCount: 16, menCount: 6, womenCount: 10, change: '5%' }"
            image="graph2.png"
          />
        </div>
        <div class="section-item">
          <DashboardPhones :smartphones="smartphones" @refresh-data="loadPhoneData" />
        </div>
      </div>
      <div class="second-section">
        <div class="section-item">
          <DashboardActivity />
        </div>
        <div class="section-item">
          <DashboardSchedule :scheduleList="scheduleList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardActivity from '@/components/dashboard/DashboardActivity.vue';
import DashboardOverview from '@/components/dashboard/DashboardOverview.vue';
import DashboardSchedule from '@/components/dashboard/DashboardSchedule.vue';
import DashboardGraph from '@/components/dashboard/DashboardGraph.vue';
import DashboardPhones from '@/components/dashboard/DashboardPhones.vue';
import { onMounted, ref } from 'vue';
import useFetch from '@/api/fetch';
import type { SmartphonesResponse } from '@/api/models';

const scheduleList = [
  { heading: 'Review candidate applications', date: 'Today - 11.30 AM' },
  { heading: 'Interview with candidates', date: 'Today - 10.30 AM' },
  {
    heading: 'Short meeting with product designer from IT Departement',
    date: 'Today - 09.15 AM',
  },
  {
    heading: 'Sort Front-end developer candidates',
    date: 'Today - 11.30 AM',
  },
];

const smartphones = ref<SmartphonesResponse | null>(null);
const loadPhoneData = async () => {
  const { data } = await useFetch<SmartphonesResponse>(
    'https://dummyjson.com/products/category/smartphones',
  );
  smartphones.value = data.value;
};

onMounted(() => {
  loadPhoneData();
});
</script>

<style scoped>
.dashboard-layout {
  width: 100%;
  padding-top: 0.75rem;
  padding-bottom: 1.375rem;
}
.content {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  gap: 1.875rem;
  min-width: 0;
  .first-section {
    display: flex;
    min-width: 0;
    flex-direction: column;
    flex: 1 1 60%;
    gap: 1.25rem;
  }
  .second-section {
    display: flex;
    flex-direction: column;
    flex: 1 1 40%;
    gap: 1.25rem;
  }
}
.section-item {
  display: flex;
  flex-direction: row;
  gap: 0.875rem;
  flex: 0 1;
}
.announcement-box {
  height: 150px;
  width: 100%;
  background-color: rgb(196, 194, 45);
}
@media (max-width: 75em) {
  .content {
    flex-direction: column;
  }
}
@media (max-width: 43.75em) {
  .section-item {
    flex-direction: column;
  }
}
</style>
