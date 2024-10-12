
<script>

export default {
  methods: {
    goToArticle(id) {
      this.$router.push(`/blog/${id}`); // Перенаправляем пользователя на страницу статьи
    },
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}

</script>

<template>
  <div id="news-and-articles" class="content article-list">
    <div class="content-caption project-header">
      <h2>Статьи & Новости</h2>
      <p>
        Хорошо известно, что читатель будет отвлекаться <br />
        на читабельный контент страницы
      </p>
    </div>
    <div class="article-list-content">
      <div class="article-list-sample" v-for="article in articles" :key="article.id">
        <div class="article-list-sample-preview">
          <img :alt="'Превью ' + article.title" :src="article.image" />
          <div class="article-list-sample-category">{{article.category}}</div>
        </div>
        <div class="article-list-sample-info">
          <h3 class="article-list-sample-info-caption">{{ article.title }}</h3>
          <div class="stats article-list-sample-info-stats">
            <span class="stats-datestamp article-list-sample-info-datestamp">{{ article.datestamp }}</span>
            <button class="stats-button button-go article-list-sample-menu-button" @click="goToArticle(article.id)"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

  .article-list {
    display: flex;
    flex-direction: column;
    gap: 52px;
  }

  .article-list-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 27px;
  }

  .article-list-sample{
    display: flex;
    flex-direction: column;
    gap: 21px;
    padding: 21px;
    height: 520px;
    width: 382px; 

    border: 1px solid #e7e7e7;
    border-radius: 62px;
    box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
  }
  .article-list-sample:nth-child(even){background: #f4f0ec;}
  .article-list-sample:nth-child(even) .button-go {background-image: url(/images/button-go-invert.png); }
  .article-list-sample:nth-child(3n+1) {clear: left;}

  .article-list-sample-preview{
    position: relative;
    width: 340px;
    height: 289px;
    background: #eaeaea;
    border-radius: 45px 45px 0 0;
  }
  .article-list-sample-category {
    position: absolute; 
    bottom: 20px; 
    left: 20px;

    padding: 5px;
    height: 41px;
    width: 124px;

    background: #fff;
    border-radius: 8px 8px 8px 0;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .article-list-sample-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
  }
  .article-list-sample-info-caption {font-size: 25px;}
  
</style>
