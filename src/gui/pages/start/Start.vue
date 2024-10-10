<script setup>

import ArticleCatalog from '/src/gui/pages/blog/components/ArticleCatalog.vue'
import Banner         from './components/Banner.vue'
import ProjectCatalog from './components/ProjectCatalog.vue';
import Stats          from './components/Stats.vue';

</script>

<template>
  <main>
    <Banner/>
    <ProjectCatalog/>
    <Stats/>
    <ArticleCatalog :from="1" />
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
