<script>

import { mapState, mapActions } from 'vuex';
export default {
  methods: {
    goToArticle(id) {
      this.$router.push(`/blog/projects/${id}`); // Перенаправляем пользователя на страницу статьи
    },
  },
  props: {
    projects: {required: true, type: Array,},
  },
}

</script>

<template>
  <div class="content project-catalog">
    <div class="content-caption project-catalog-caption">
      <h3>Следите за нашими проектами</h3>
      <p>
        Хорошо известно, что читатель будет отвлекаться <br />
        на читабельный контент страницы
      </p>
    </div>
    <div class="project-catalog-content">
      <div
        class="project-catalog-sample"
        v-for="project in projects"
        :key="project.id"
      >
        <img
          class="project-catalog-sample-preview"
          :src="project.image"
          :alt="'Превью ' + project.name"
        />
        <div class="project-catalog-sample-details">
          <h5 class="project-catalog-sample-name">{{ project.name }}</h5>
          <a href="#" class="project-catalog-sample-category">
            {{ project.category }}
            </a>
          <button
            class="button-go project-catalog-sample-menu-button "
            @click="openProjectDetails(project.id)"
          >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .project-catalog {
    display: flex; 
    flex-direction: column; 
    gap: 93px;
  }
  .project-catalog-content {
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    column-gap: 100px; 
    row-gap: 56px;
  }

  .project-catalog-sample {
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
  }

  .project-catalog-sample-preview {height: 550px;}

  .project-catalog-sample-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70px;
  }

  .project-catalog-sample-name { margin: 0 0 10px; font-size: 25px; }
  .project-catalog-sample-category { text-decoration: none; }

  .project-catalog-sample-menu-button {
    position: absolute;  bottom: 0px; right: 0px;
    
    padding: 0px;
    height: 70px;
    width: 70px;
    cursor: pointer;
    
  }

</style>
