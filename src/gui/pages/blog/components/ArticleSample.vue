

<script>

export default {
  props: {
    article: {
      default: {},
      type: Object,
    },
  },
}

</script>

<template>
  <div class="content article">
    <h3 class="article-title">{{ article.title }}</h3>
    <div class="article-content">
      <img class="article-content-image" :alt="'Превью ' + article.title" :src="article.image" />
      <div class="article-content-details">
        <h4>{{ article.subtitle }}</h4>
        <p>{{ article.text }}</p>
        <div class="stats article-content-stats">
          <span class="stats-datestamp article-content-stats-datestamp">{{ article.datestamp }}</span>
          <button class="button-go stats-button article-content-stats-button"></button>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
  .article {
    display: flex;
    flex-direction: column;
    gap:27px;
    height: 674px;
  }

  .article-content {
    display: flex;
    flex-direction: row;
    gap: 65px;
    padding: 22px;
    border: 1px solid #E7E7E7;
    border-radius: 62px;
  }

  .article-content-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>