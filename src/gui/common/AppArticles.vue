
<template>
  <div id="news-and-articles" class="content articles">
    <div class="content-header project-header">
      <h3>Статьи & Новости</h3>
      <p>
        Хорошо известно, что читатель будет отвлекаться <br />
        на читабельный контент страницы
      </p>
    </div>
    <div class="articles-catalog">
      <div class="articles-sample" v-for="article in articles" :key="article.id">
        <div class="articles-sample-preview">
          <img :alt="'Превью ' + article.title" :src="article.image" />
          <div class="articles-sample-category">{{article.category}}</div>
        </div>
        <div class="articles-sample-details">
          <a href="#" class="articles-sample-caption">{{ article.title }}</a>
          <div class="articles-sample-stats">
            <span class="articles-sample-datestamp">{{ article.datestamp }}</span>
            <button
              class="button-go articles-sample-menu-button"
              @click="openProjectDetails(project.id)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['articles'])
  },
}

</script>

<style scoped>
</style>
