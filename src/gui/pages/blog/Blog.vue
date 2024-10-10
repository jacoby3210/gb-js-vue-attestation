<script >

  import { mapState, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapState(['articles', 'projects', 'statistics'])
    },
    data() {
      return {
        count: 7,
        from: 1,
      };
    }
  }

</script>

<script setup>
  
  import Banner from './components/Banner.vue';
  import ArticleCatalog from './components/ArticleCatalog.vue'
  import ArticleSample from './components/ArticleSample.vue';

</script>

<template>

  <main id="blog">
    <Banner/>
    <ArticleSample :article="articles.at(0)"/>
    <ArticleCatalog :count="count" :from="from" />

  </main>

</template>
  
<style scoped>
</style>
