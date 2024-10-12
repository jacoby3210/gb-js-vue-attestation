<script>

export default {
  props: {
    project: {
      default: "",
      required: true,
      type: String,
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
    <Source :source="project"/>
  </main>
  <Error v-if="project===false"/>
</template>

<style scoped>
  .project-details-content {width: 804px; min-height: 300px; display: flex; flex-direction: column; gap:21px;}
</style>
