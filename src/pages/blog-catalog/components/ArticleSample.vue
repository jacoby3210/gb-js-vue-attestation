

<script>

export default {
  methods: {
    goToArticle(id) {this.$router.push(`/blog/${id}`);},
  },
  props: {
    article: {
      default: {},
      type: Object,
    },
  },
}

</script>

<template>
  <div class="content article-sample">
    <h2 class="article-sample-caption">{{ article.title }}</h2>
    <div class="article-sample-content">
      <img class="article-sample-content-image" :alt="'Превью ' + article.title" :src="article.image" />
      <div class="article-sample-content-info">
        <h3>{{ article.subtitle }}</h3>
        <p>{{ article.text }}</p>
        <div class="stats article-content-stats">
          <span class="stats-datestamp article-content-stats-datestamp">{{ article.datestamp }}</span>
          <button class="button-go stats-button article-content-stats-button" @click="goToArticle(article.id)"></button>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>

  .article-sample {
    display: flex;
    flex-direction: column;
    gap:27px;
    height: 674px;
  }

  .article-sample-content {
    display: flex;
    flex-direction: row;
    gap: 65px;
    padding: 22px;
    border: 1px solid #E7E7E7;
    border-radius: 62px;
  }

  .article-sample-content-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

</style>