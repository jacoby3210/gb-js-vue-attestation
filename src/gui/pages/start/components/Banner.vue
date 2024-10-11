<script>
export default {
  methods: {
    goToProjects(id) {this.$router.push(`/projects`);}
  }
};
</script>

<template>
  <div id="banner" class="content">
    <div id="banner-image"></div>
    <div id="banner-card">
      <h2>Пусть ваш дом будет уникальным</h2>
      <p>
        Существует много вариаций Lorem Ipsum, <br />
        которые можно использовать
      </p>
      <button @click="goToProjects()">
        <span>Начать</span>
        <span class="button-arrow"></span></button>
    </div>
  </div>
</template>

<style scoped>

</style>