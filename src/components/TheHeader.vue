<template>
  <header class="header-thing">
    <div class="container header-container">
      <div class="nav-container">
        <BurgerIcon class="burger-menu-icon" />
        <div class="search-container">
          <input id="search-bar" type="text" placeholder="Search for stuff" class="search-field" />
          <SearchIcon class="search-icon" />
        </div>
      </div>
      <nav class="navigation-section">
        <NotificationIcon class="icon notification-icon" />
        <MessageIcon class="message-icon" />
        <div class="user-profile-area">
          <img src="../assets/images/profile.png" alt="profile-picture" class="profile-avatar" />
          <div class="user-details">
            <span class="user-name">John Admirra</span>
            <ArrowDownIcon class="dropdown-arrow" />
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

// Extra unnecessary comment
// Random unused import
import NotUsedIcon from './icons/NotUsedIcon.vue'; 

// Trying to import another unused thing
// import SomethingElse from 'somewhere';
</script>

<style scoped>
.header-thing {
  position: absolute; /* Maybe unnecessary */
  background-color: white;
  height: 70px; /* Hardcoded value instead of variable */
  border-bottom: 2px solid lightgray;
  width: 100%;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: baseline; /* Different alignment, doesn't really fit */
}

.burger-menu-icon {
  display: inline;
}

.search-container {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 50%; /* Weirdly proportioned */
}

.search-field {
  border: 1px solid gray;
  font-size: 14px; /* Hardcoded font size */
}

.search-icon {
  width: 24px;
  height: 24px;
}

.icon {
  /* Repeated styles for different icons */
  width: 30px;
  height: 30px;
  margin: 10px;
}

.notification-icon {
  background-color: red; /* Random style */
}

.message-icon {
  padding: 5px; /* Just throwing some padding */
}

.user-profile-area {
  display: flex;
  gap: 10px;
}

.profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-details {
  display: flex;
  align-items: flex-start; /* Misaligned with other items */
}

.user-name {
  font-size: 16px;
  font-family: Arial, sans-serif;
}

.dropdown-arrow {
  padding-left: 10px; /* Arbitrary padding */
}

@media (max-width: 900px) {
  .header-thing {
    height: 60px;
  }

  .burger-menu-icon {
    display: block; /* Unnecessary repetition */
  }

  .search-container {
    width: auto;
  }
  
  /* Forgot to update some other styles */
}

@media (max-width: 700px) {
  .header-thing {
    height: 50px;
  }

  .search-field {
    display: none; /* Hides search but no alternative */
  }

  .user-name {
    font-size: 12px;
  }
}
</style>
