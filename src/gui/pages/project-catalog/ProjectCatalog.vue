<script >

  import { mapState, mapActions } from 'vuex';
  export default {
    components: {Paginator, Tabulator},
    computed: {
      ...mapState(['projects']),
      projectsOnPage() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.projects.filter((item) => item.type==this.tabs[this.currentTab]).slice(start, end);
      },
      totalPages() {return Math.ceil(this.projects.filter((item) => item.type==this.tabs[this.currentTab]).length / this.itemsPerPage);},
    },
    data() {
      return {
        currentPage: 1, itemsPerPage: 6, 
        currentTab: 1,
        tabs: ['Ванная', 'Спальня', 'Кухня', 'Гостинная']
      };
    },
  }

</script>

<script setup>

  import Banner           from '/src/gui/components/common/Banner.vue';
  import Paginator        from '/src/gui/components/common/Paginator.vue';
  import Tabulator        from '/src/gui/components/common/Tabulator.vue'
  import ProjectList      from './components/ProjectList.vue';

</script>

<template>

  <main id="blog" >
    <Banner caption="Наши проекты" category="Домой / Проект" image="banner-project-details"/>
    <Tabulator :tabs="tabs" v-model:currentTab="currentTab"/>
    <ProjectList :projects="projectsOnPage"/>
    <Paginator :totalPages="totalPages" v-model="currentPage" />
  </main>

</template>
  
<style scoped>
</style>