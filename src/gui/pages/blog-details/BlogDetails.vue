<script >
  import axios from "axios";

  export default {
    data() {
      return {
        article: null,
      };
    },
    mounted() {
      const articleId = this.$route.params.id;
      this.fetchArticle(articleId);
    },
    methods: {
      async fetchArticle(id) {
        // try {
        axios.get(`/data/articles/${id}/index.html`, { cache: 'no-cache' })
        .then(response => {
          if (response && response.headers.get('Content-Type') !== 'text/html') {
            this.article = response.data;
            console.log(`Файл существует.`);
          } else {
            console.log(`Файл не найден. `, response.ok, response.headers.get('Content-Type'));
            this.article = null;
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
  import Error      from '/src/gui/pages/error/Error.vue'
  import Content    from './components/Content.vue';
  import TagCloud   from './components/TagCloud.vue';
</script>

<template>
  <main class="blog-details" v-if="article">
    <Banner caption="" category="" image="banner-blog-details"/>
    <div class="blog-details-article content" >
      <Content :article="article"/>
      <TagCloud/>
    </div>
  </main>
  <Error v-else/>
</template>
  
<style scoped>
  .blog-banner-info{display: none;}
  .blog-details-article {display: flex; flex-direction: row; gap: 52px;}
</style>
