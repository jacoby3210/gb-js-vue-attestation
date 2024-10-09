<script setup>
  import AppHeader from './gui/common/AppHeader.vue'
  import AppFooter from './gui/common/AppFooter.vue'
  import '../src/assets/themes/theme.css';

</script>

<template>
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>