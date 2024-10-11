<script >

  import { mapState, mapActions } from 'vuex';
  export default {
    components: {Paginator,},
    computed: {
      ...mapState(['articles']),
      articlesOnPage() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.articles.slice(start + 1 , end + 1);
      },
      totalPages() {return Math.ceil(this.articles.length / this.itemsPerPage);},
    },
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 6,
      };
    },
  }

</script>

<script setup>

  import Banner          from '/src/gui/components/common/Banner.vue';
  import Paginator       from '/src/gui/components/common/Paginator.vue';
  import ArticleList     from './components/ArticleList.vue'
  import ArticleSample   from './components/ArticleSample.vue';

</script>

<template>

  <main id="blog" class="blog-catalog">
    <Banner caption="Статьи & Новости" category="Домой / Блог" image="banner-blog"/>
    <ArticleSample :article="articles.at(0)"/>
    <ArticleList :articles="articlesOnPage" />
    <Paginator :totalPages="totalPages" v-model="currentPage"/>
  </main>

</template>
  
<style scoped>
</style>
