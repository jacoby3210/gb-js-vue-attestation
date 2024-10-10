<script >

  import { mapState, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapState(['articles']),
      articlesOnPage() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.articles.slice(start + 1 , end + 1);
      },
      totalPages() {return Math.ceil(this.articles.length / this.itemsPerPage);},
    },
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 6,
      };
    },
  }

</script>

<script setup>

import PostCatalog      from '/src/gui/pages/blog/components/PostCatalog.vue'
import Banner           from './components/Banner.vue'
import ProjectCatalog   from './components/ProjectCatalog.vue';
import Stats            from './components/Stats.vue';

</script>

<template>
  <main>
    <Banner/>
    <ProjectCatalog/>
    <Stats/>
    <PostCatalog :articles="articlesOnPage" />
  </main>
</template>

<style scoped>

  .statistics {
    display: flex;
    align-items: center;
    
    margin: 20px 0;
    height: 460px;
    width: 100%;
    
    background-color: #F4F0EC;
  }

  .stat-item {
    flex: 1;
    text-align: center;
    
    margin: 0 10px;
    padding: 20px;
    height: 155px;
    
    border-radius: 10px;
  }

  .stat-value {display: block; color: #CDA274; font-size: 85px; font-weight: bold;}
  .stat-description {color: #777; font-size: 16px;}
</style>
