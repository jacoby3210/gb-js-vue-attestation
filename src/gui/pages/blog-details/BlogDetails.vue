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
        axios.get(`/resources/data/articles/${id}/index.html`, { cache: 'no-cache' })
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
  import Error      from '/src/gui/pages/error/Error.vue'
  import Banner     from '/src/gui/components/Banner.vue';
  import Content    from './components/Content.vue';
  import TagCloud   from './components/TagCloud.vue';
</script>

<template>
  <main class="blog-details" v-if="article">
    <Banner/>
    <div class="blog-details-article content" >
      <Content :article="article"/>
      <TagCloud/>
    </div>
  </main>
  <Error v-else/>
</template>
  
<style scoped>
  .blog-details-article {display: flex; flex-direction: row; gap: 52px;}
</style>
