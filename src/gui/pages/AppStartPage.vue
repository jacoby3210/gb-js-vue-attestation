<script>

import { mapState, mapActions } from 'vuex';
import AppArticles from '/src/gui/common/AppArticles.vue'

export default {
  computed: {
    ...mapState(['projects', 'statistics'])
  },
}

</script>

<template>
  <main>
    <div id="banner" class="content">
      <div id="banner-image"></div>
      <div id="banner-card">
        <h2>Пусть ваш дом будет уникальным</h2>
        <p>
          Существует много вариаций Lorem Ipsum, <br />
          которые можно использовать
        </p>
        <button>Начать</button>
      </div>
    </div>
    <div id="project-view" class="content">
      <div class="content-header project-header">
        <h3>Следите за нашими проектами</h3>
        <p>
          Хорошо известно, что читатель будет отвлекаться <br />
          на читабельный контент страницы
        </p>
      </div>
      <div id="project-gallery">
        <div
          class="project-card"
          v-for="project in projects"
          :key="project.id"
        >
          <img
            class="project-card-preview"
            :src="project.image"
            :alt="'Превью ' + project.name"
          />
          <div class="project-card-details">
            <h5 class="project-card-name">{{ project.name }}</h5>
            <a href="#" class="project-card-category">
              {{ project.category }}
              </a>
            <button
              class="button-go project-card-menu-button "
              @click="openProjectDetails(project.id)"
            >
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="statistics" class="content">
      <div
        class="stat-item"
        v-for="(stat, index) in statistics"
        :key="index"
      >
        <span class="stat-value">{{ stat.value }}</span>
        <span class="stat-description">{{ stat.description }}</span>
      </div>
    </div>
    <AppArticles/>
  </main>
</template>

<style scoped>
</style>
