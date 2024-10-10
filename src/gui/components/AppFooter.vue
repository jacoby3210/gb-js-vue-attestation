<script setup>

</script>

<template>
  <footer id="footer" class="content">
    <div id="social-networks">
      <div class="logo-container">
        <div class="logo-image"></div>
        <span class="logo-title">Interno</span>
      </div>
    </div>
    <div class="sitemap">
      <h5 class="footer-header">Страницы</h5>
      <nav class="sitemap-nav">
        <router-link to="/">Домой</router-link>
        <router-link to="/">Проекты</router-link>
        <router-link to="/blog">Блог</router-link>
      </nav>
    </div>
    <div class="contacts">
      <h5 class="footer-header">Контакты</h5>
      <span>
        55 East Birchwood Ave.<br />
        Brooklyn, New York 11201
      </span>
      <span>contact@interno.com</span>
      <span>(123) 456 - 7890</span>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 33px;
  height: 390px;
}

#footer > * {
  display: flex;
  flex-direction: column;
  width: 260px;
}

.footer-header {font-size: 25px;}
</style>
