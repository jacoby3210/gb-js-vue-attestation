<script>

import { mapState, mapActions } from 'vuex';
export default {
  methods: {
    goToProject(id) {
      this.$router.push(`/projects/${id}`); // Перенаправляем пользователя на страницу статьи
    },
  },
  props: {
    projects: {required: true, type: Array,},
  },
}

</script>

<template>
  <div class="content project-list">
    <div class="content-caption project-list-caption">
      <h2>Следите за нашими проектами</h2>
      <p>
        Хорошо известно, что читатель будет отвлекаться <br />
        на читабельный контент страницы
      </p>
    </div>
    <div class="project-list-content">
      <div
        class="project-list-sample"
        v-for="project in projects"
        :key="project.id"
      >
        <img
          class="project-list-sample-preview"
          :src="project.image"
          :alt="'Превью ' + project.name"
        />
        <div class="project-list-sample-details">
          <h3 class="project-list-sample-name">{{ project.name }}</h3>
          <a href="#" class="project-list-sample-category">{{project.category}}</a>
          <button
            class="button-go project-list-sample-menu-button "
            @click="goToProject(project.id)"
          >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .project-list {
    display: flex; 
    flex-direction: column; 
    gap: 93px;
  }

  .project-list-content {
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    column-gap: 100px; 
    row-gap: 56px;
  }

  .project-list-sample {
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
  }

  .project-list-sample-preview {height: 550px;}

  .project-list-sample-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70px;
  }

  .project-list-sample-name { margin: 0 0 10px; font-size: 25px; }
  .project-list-sample-category { text-decoration: none; }

  .project-list-sample-menu-button {
    position: absolute;  bottom: 0px; right: 0px;
    
    padding: 0px;
    height: 70px;
    width: 70px;
    cursor: pointer;
    
  }

</style>
