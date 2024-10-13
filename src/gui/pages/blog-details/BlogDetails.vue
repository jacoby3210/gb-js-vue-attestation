<script >
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        article: null,
        articleId: null,
      };
    },
    methods: {
      ...mapActions(['loadContent']),
    },
    mounted() {
      this.articleId = this.$route.params.id;
      this.loadContent({id: this.articleId, folder: 'articles'})
        .then(rs => this.article = rs);
    },
  };
</script>

<script setup>

  import Banner     from '/src/gui/components/common/Banner.vue';
  import Source     from '/src/gui/components/common/Source.vue';
  import Error      from '/src/gui/pages/error/Error.vue'
  import Cloud      from './components/Cloud.vue';

</script>

<template>
  <main class="blog-details" v-if="article">
    <Banner caption="" category="" image="banner-blog-details"/>
    <div class="content blog-details-article" >
      <Source :source="article"/>
      <Cloud :articleId="articleId"/>
    </div>
  </main>
  <Error v-if="article===false"/>
</template>
  
<style scoped>

  .blog-details-article {
    display: flex; 
    flex-direction: row; 
    gap: 52px;
  }
  h2{text-align: left;}

</style>
