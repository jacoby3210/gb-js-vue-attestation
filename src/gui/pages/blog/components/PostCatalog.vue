
<script>

import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['articles'])
  },
  methods: {
    goToArticle(id) {
      this.$router.push(`/blog/article/${id}`); // Перенаправляем пользователя на страницу статьи
    },
  },
  props: {
    from: {
      default: 1,
      type: Number,
    },
    to: {
      default: 7,
      type: Number,
    },
  },
}

</script>

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
      <div class="articles-sample" v-for="article in articles.slice(from, to)" :key="article.id">
        <div class="articles-sample-preview">
          <img :alt="'Превью ' + article.title" :src="article.image" />
          <div class="articles-sample-category">{{article.category}}</div>
        </div>
        <div class="articles-sample-details">
          <a href="#" class="articles-sample-caption">{{ article.title }}</a>
          <div class="stats articles-sample-stats">
            <span class="stats-datestamp articles-sample-datestamp">{{ article.datestamp }}</span>
            <button class="stats-button button-go articles-sample-menu-button" @click="goToArticle(article.id)"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.articles {
  display: flex;
  flex-direction: column;
  gap: 52px;
}

.articles-catalog {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 27px;
}

.articles-sample{
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
.articles-sample:nth-child(even){background: #f4f0ec;}
.articles-sample:nth-child(even) .button-go {background-image: url(/src/assets/images/button-go-invert.png); }
.articles-sample:nth-child(3n+1) {clear: left;}

.articles-sample-preview{
  position: relative;
  width: 340px;
  height: 289px;
  background: #eaeaea;
  border-radius: 45px 45px 0 0;
}
.articles-sample-category {
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

.articles-sample-details {
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
}
.articles-sample-caption {font-size: 25px;}
</style>
