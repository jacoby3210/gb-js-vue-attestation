<script setup>
  import AppHeader from './gui/components/AppHeader.vue'
  import AppFooter from './gui/components/AppFooter.vue'
  import '../src/assets/themes/theme.css';

</script>

<template>
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>