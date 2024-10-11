<script>
export default {
  methods: {
    goToProjects(id) {this.$router.push(`/projects`);}
  },
};
</script>

<template>
  <div id="banner" class="content banner">
    <div class="banner-image"></div>
    <div class="banner-info">
      <h2>Пусть ваш дом будет уникальным</h2>
      <p>
        Существует много вариаций Lorem Ipsum, <br />
        которые можно использовать
      </p>
      <button class="banner-info-button" @click="goToProjects()">
        <span>Начать</span>
        <span class="button-arrow"></span></button>
    </div>
  </div>
</template>

<style scoped>
#banner {position: relative;}

.banner-image {
  height: 758px;
  width: 100%;
  background-image: url(/images/banner.jpeg);
  background-position: -75px -540px;
  background-size: 1353px 2028px;
  border-radius: 70px;
}

.banner-info {
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: absolute;
  top: 200px;
  transform: translateX(50px);
  
  padding: 20px;
  height: 350px;
  width: 650px;
  
  border-radius: 10px;
}

.banner-info h2 {margin-bottom: 10px; font-size: 65px;}

.banner-info-button {}

</style>