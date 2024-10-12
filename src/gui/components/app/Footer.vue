<script setup>

</script>

<template>
  <footer id="footer" class="content footer">
    <div id="footer-social-networks">
      <div class="logo-container">
        <div class="logo-image"></div>
        <span class="logo-title">Interno</span>
      </div>
    </div>
    <div class="sitemap footer-sitemap">
      <h4 class="sitemap-header footer-header footer-sitemap-header">
        Страницы
      </h4>
      <nav class="sitemap-nav footer-sitemap-nav">
        <router-link to="/">Домой</router-link>
        <router-link to="/projects">Проекты</router-link>
        <router-link to="/blog">Блог</router-link>
      </nav>
    </div>
    <div class="footer-contacts">
      <h4 class="footer-header footer-contacts-header">Контакты</h4>
      <span class="footer-contacts-line">55 East Birchwood Ave.</span>
      <span class="footer-contacts-line"> Brooklyn, New York 11201</span>
      <span class="footer-contacts-line">contact@interno.com</span>
      <span class="footer-contacts-line">(123) 456 - 7890</span>
    </div>
  </footer>
</template>

<style scoped>

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 33px;
    height: 390px;
  }

  .footer > * {
    display: flex;
    flex-direction: column;
    min-width: 260px;
    gap: 25px;
  }

  .footer-contacts-line {
    color: #4d5053;
    font-family: var(--font-family);
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 150%;
  }

</style>
