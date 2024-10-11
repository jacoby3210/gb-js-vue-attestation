<script setup>
  import Header from './gui/components/app/header.vue'
  import Footer from './gui/components/app/footer.vue'
  import '../src/assets/themes/theme.css';

</script>

<template>
  <Header/>
  <router-view></router-view>
  <Footer/>
</template>