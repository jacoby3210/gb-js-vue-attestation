<script>

import axios from "axios";

export default {
  data() {
    return {
      project: null,
      projectId: null,
    };
  },
  mounted() {
    this.projectId = this.$route.params.id;
    this.fetchProject(this.projectId);
  },
  methods: {
    async fetchProject(id) {
      return axios.get(
        `${import.meta.env.BASE_URL}/data/projects/${id}/index.html`, 
        { cache: 'no-cache' }
      ).then(response => {
          if (response && response.headers.get('Content-Type') !== 'text/html') {
            this.project = response.data;
            console.log(`Файл существует.`);
          } else {
            console.log(`Файл не найден. `);
            this.project = false;
          }
       }).catch(error => {
          console.error(`Ошибка при загрузке статьи: ${error}`);
        });
      },
    },
  };
</script>

<script setup>

  import Banner     from '/src/gui/components/common/Banner.vue';
  import Source     from '/src/gui/components/common/Source.vue';
  import Error      from '/src/gui/pages/error/Error.vue'

</script>

<template>
  <main class="project-details" v-if="project">
    <Banner caption="" category="" image="banner-project-details"/>
    <Source :source="project" class="content project-details-content"/>
  </main>
  <Error v-if="project===false"/>
</template>

<style scoped>
  .project-details-content {
    min-height: 300px; 
    display: flex; 
    flex-direction: column; 
    gap:21px;
    justify-content: center;
    align-items: center;
  }
  .project-details-content > *:not(img) {
    width: 700px;
  }

</style>
