<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      projectId: null,
      contentMain: null,
      contentSlider: null
    };
  },
  methods: {
    ...mapActions(['loadContent']),
  },
  mounted() {
    this.projectId = this.$route.params.id;
    const localPathContent = `projects/${this.projectId}/content.html`
    const localPathSlider = `projects/${this.projectId}/slider.html`
    this.loadContent({localPath: localPathContent})
      .then(rs => this.contentMain = rs);
    this.loadContent({localPath: localPathSlider})
      .then(rs => this.contentSlider = rs);
  },
}

</script>

<script setup>

  import Banner     from '/src/gui/components/Banner.vue'
  import Slider     from '/src/gui/components/Slider.vue';
  import Source     from '/src/gui/components/Source.vue';
  import Error      from '/src/pages/error/Error.vue'

</script>

<template>
  <main class="project-details" v-if="contentMain">
    <Banner caption="" category="" image="banner-project-details"/>
    <Source :source="contentMain" class="content project-details-content"/>
    <Slider :content="contentSlider" class="content" v-if="contentSlider"/>
  </main>
  <Error v-if="contentMain===false"/>
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
