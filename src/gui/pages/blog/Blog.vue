<script>
  
  import { mapState, mapActions } from 'vuex';
  import ArticleCatalog from './components/ArticleCatalog.vue'
  import ArticleSample from './components/ArticleSample.vue';
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

<template>

  <main id="blog">
    <div id="blog-banner" class="content">
      <div id="blog-banner-image"></div>
      <div id="blog-banner-card">
        <h2>Статьи & Новости</h2>
        <p>Домой / Блог</p>
      </div>
    </div>
    <ArticleSample :article="articles.at(0)"/>
    <ArticleCatalog :count="count" :from="from" />

  </main>

</template>
  

<style scoped>
</style>
