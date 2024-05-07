<template>
  <div class="sidebar">
    <span class="heading">WeHR</span>
    <div>
      <div class="section-title">Main menu</div>
      <nav>
        <router-link
          v-for="(item, index) in topNavItems"
          :key="index"
          :to="item.url"
          :class="`nav-item ${item.name === selected ? 'selected' : ''}`"
        >
          <component :is="item.icon" class="nav-icon"></component>
          <span class="nav-label">{{ item.name }}</span>
        </router-link>
      </nav>
    </div>
    <div>
      <div class="section-title">Other</div>
      <nav>
        <router-link
          v-for="(item, index) in bottomNavItems"
          :key="index"
          :to="item.url"
          :class="`nav-item ${item.name === selected ? 'selected' : ''}`"
        >
          <component :is="item.icon" class="nav-icon"></component>
          <span class="nav-label">{{ item.name }}</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardIcon from './icons/sidebarIcons/DashboardIcon.vue';
import RecruitmentIcon from './icons/sidebarIcons/RecruitmentIcon.vue';
import ScheduleIcon from './icons/sidebarIcons/ScheduleIcon.vue';
import EmployeeIcon from './icons/sidebarIcons/EmployeeIcon.vue';
import DepartmentIcon from './icons/sidebarIcons/DepartmentIcon.vue';
import SupportIcon from './icons/sidebarIcons/SupportIcon.vue';
import SettingsIcon from './icons/sidebarIcons/SettingsIcon.vue';

const topNavItems = [
  { icon: DashboardIcon, url: '/', name: 'Dashboard' },
  { icon: RecruitmentIcon, url: '/', name: 'Recruitment' },
  { icon: ScheduleIcon, url: '/', name: 'Schedule' },
  { icon: EmployeeIcon, url: '/', name: 'Employee' },
  { icon: DepartmentIcon, url: '/', name: 'Department' },
];

const bottomNavItems = [
  { icon: SupportIcon, url: '/', name: 'Support' },
  { icon: SettingsIcon, url: '/', name: 'Settings' },
];

const selected = 'Dashboard';
</script>

<style scoped>
.sidebar {
  position: fixed;
  overflow-y: auto;
  background: var(--background-color);
  width: var(--sibebar-width);
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 1.25rem 0rem;
  border-right: 1px solid var(--color-whitesmoke-100);
  gap: 2.438rem;
}
.heading {
  line-height: 2.625rem;
  font-weight: 600;
  font-size: 2.25rem;
  font-family: Poppins;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  color: black;
}
.section-title {
  padding: 0.625rem 0rem 0.625rem 1.875rem;
  font-size: 0.75rem;
  color: var(--color-dimgray-100);
  font-family: Roboto;
  text-transform: uppercase;
  line-height: 1.125rem;
  font-weight: 500;
}
.nav-item {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  padding: 1rem 0rem 1rem 1.875rem;
  gap: 1.5rem;
  .nav-icon {
    height: 1.5rem;
    width: 1.5rem;
  }
  .nav-label {
    font-size: 1rem;
    font-family: Poppins;
    color: var(--primary-subtitle-color);
  }
}
.nav-item.selected {
  color: var(--color-red);
}
@media (max-width: 75em) {
  .sidebar {
    width: var(--sibebar-small-width);
    gap: 1.25rem;
  }
  .heading {
    font-size: 1.25rem;
  }
  .nav-item,
  .section-title {
    padding-left: 0;
    text-align: center;
  }
  .nav-icon {
    margin-left: auto;
    margin-right: auto;
  }
  .nav-label {
    display: none;
  }
}
@media (max-width: 43.75em) {
  .sidebar {
    display: none;
  }
}
</style>
