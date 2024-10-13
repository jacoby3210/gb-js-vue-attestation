<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      project: null,
      projectId: null,
    };
  },
  methods: {
    ...mapActions(['loadContent']),
  },
  mounted() {
    this.projectId = this.$route.params.id;
    this.loadContent({id: this.projectId, folder: 'projects'})
      .then(rs => this.project = rs);
  },
}

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
