<script >
  import axios from "axios";

  export default {
    data() {
      return {
        article: null,
        articleId: null,
      };
    },
    mounted() {
      this.articleId = this.$route.params.id;
      this.fetchArticle(this.articleId);
    },
    methods: {
      async fetchArticle(id) {
        return axios.get(`/data/articles/${id}/index.html`, { cache: 'no-cache' })
          .then(response => {
            if (response && response.headers.get('Content-Type') !== 'text/html') {
              this.article = response.data;
              console.log(`Файл существует.`);
            } else {
              console.log(`Файл не найден. `, response.ok, response.headers.get('Content-Type'));
              this.article = false;
            }
          })
          .catch(error => {
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

</style>
