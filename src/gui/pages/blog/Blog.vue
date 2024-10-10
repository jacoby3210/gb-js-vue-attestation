<script >

  import { mapState, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapState(['articles', 'projects', 'statistics'])
    },
    data() {
      return {
        count: 7,
        from: 1,
      };
    }
  }

</script>

<script setup>
  
  import Banner from './components/Banner.vue';
  import PostCatalog from './components/PostCatalog.vue'
  import PostSample from './components/PostSample.vue';

</script>

<template>

  <main id="blog" >
    <Banner/>
    <PostSample :article="articles.at(0)"/>
    <PostCatalog :count="count" :from="from" />
  </main>

</template>
  
<style scoped>
</style>
