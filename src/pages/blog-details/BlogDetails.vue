<script >
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        contentMain: null,
        articleId: null,
      };
    },
    methods: {
      ...mapActions(['loadContent']),
    },
    mounted() {
      this.articleId = this.$route.params.id;
    const localPath = `articles/${this.articleId}/content.html`
      this.loadContent({localPath})
        .then(rs => this.contentMain = rs);
    },
  };

</script>

<script setup>

  import Banner     from '/src/gui/components/Banner.vue';
  import Source     from '/src/gui/components/Source.vue';
  import Error      from '/src/pages/error/Error.vue'
  import Cloud      from './components/Cloud.vue';

</script>

<template>
  <main class="blog-details" v-if="contentMain">
    <Banner caption="" category="" image="banner-blog-details"/>
    <div class="content blog-details-article" >
      <Source :source="contentMain"/>
      <Cloud :articleId="articleId"/>
    </div>
  </main>
  <Error v-if="contentMain===false"/>
</template>
  
<style scoped>

  .blog-details-article {
    display: flex; 
    flex-direction: row; 
    gap: 52px;
  }
  h2{text-align: left;}

</style>
