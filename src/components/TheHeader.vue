<template>
  <header class="header-layout">
    <div class="container header">
      <div class="nav">
        <BurgerIcon class="icon burger-menu" />
        <div class="search-bar">
          <input id="search-input" type="text" placeholder="Search" class="search-input" />
          <SearchIcon class="icon" />
        </div>
      </div>
      <nav class="nav">
        <NotificationIcon class="icon" />
        <MessageIcon class="icon" />
        <div class="user-profile">
          <img src="../assets/images/profile.png" alt="User avatar" class="avatar" />
          <div class="user-info">
            <span class="username">Admirra John</span>
            <ArrowDownIcon class="icon" />
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchIcon from './icons/headerIcons/SearchIcon.vue';
import NotificationIcon from './icons/headerIcons/NotificationIcon.vue';
import MessageIcon from './icons/headerIcons/MessageIcon.vue';
import ArrowDownIcon from './icons/genericIcons/ArrowDownIcon.vue';
import BurgerIcon from './icons/headerIcons/BurgerIcon.vue';
</script>

<style scoped>
.header-layout {
  position: fixed;
  background: white;
  height: var(--header-height);
  border-bottom: 1px solid var(--color-whitesmoke-100);
  width: calc(100vw - var(--sibebar-width));
}
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  line-height: 150%;
  height: inherit;
}
.burger-menu {
  display: none;
  position: absolute;
  left: 0.625rem;
}
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 21.438rem;
  padding: 0.625rem 1rem;
  box-sizing: border-box;
  border: 1px solid var(--color-gainsboro-200);
  border-radius: 4px;
  background-color: var(--background-color);
  color: #b3b3b3;
  font-weight: 400;
}
.search-input {
  border: none;
  background: transparent;
}
.search-input::placeholder {
  color: var(--color-darkgray);
  font-family: Poppins;
}
.icon {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
}
.nav {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: auto;
  margin-bottom: auto;
  color: var(--Tertiary-Color, #161e54);
  font-weight: 500;
}
.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
}
.avatar {
  width: 2.625rem;
  height: 2.625rem;
  object-fit: cover;
  border-radius: 50%;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 4px;
  .username {
    font-family: Poppins;
  }
}
@media (max-width: 75em) {
  .header-layout {
    height: var(--header-small-height);
    width: calc(100vw - var(--sibebar-small-width));
  }
  .burger-menu {
    display: block;
  }
  .search-bar {
    width: 15.313rem;
    padding: 0.375rem 1rem;
  }
  .username {
    display: none;
  }
}
@media (max-width: 43.75em) {
  .header-layout {
    height: var(--header-small-height);
    width: 100%;
  }
  .burger-menu {
    position: relative;
    left: 0;
  }
  .search-bar {
    width: fit-content;
    border: none;
    background-color: inherit;
    padding: 0;
  }
  .search-input {
    display: none;
  }
  .nav {
    gap: 1.25rem;
  }
}
</style>
