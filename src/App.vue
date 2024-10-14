<script setup>

  import Header from '/src/gui/layouts/header.vue'
  import Footer from '/src/gui/layouts/footer.vue'
  import '../src/assets/themes/theme.css';

</script>

<template>
  <Header/>
  <router-view></router-view>
  <Footer/>
</template>