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

  import Banner       from '../../components/Banner.vue';
  import Paginator    from '../../components/Paginator.vue';
  import PostCatalog  from './components/PostCatalog.vue'
  import PostSample   from './components/PostSample.vue';

</script>

<template>

  <main id="blog" >
    <Banner caption="Статьи & Новости" category="Домой / Блог" image="banner-blog"/>
    <PostSample :article="articles.at(0)"/>
    <PostCatalog :articles="articlesOnPage" />
    <Paginator 
      :totalPages="totalPages"
      v-model="currentPage"
    />
  </main>

</template>
  
<style scoped>
</style>
