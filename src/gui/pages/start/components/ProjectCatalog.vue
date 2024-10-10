<script>

import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['projects'])
  },
  props: {
    from: {
      default: 0,
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
  <div class="content project-catalog">
    <div class="content-header project-header">
      <h3>Следите за нашими проектами</h3>
      <p>
        Хорошо известно, что читатель будет отвлекаться <br />
        на читабельный контент страницы
      </p>
    </div>
    <div class="project-view">
      <div
        class="project-sample"
        v-for="project in projects.slice(from, to)"
        :key="project.id"
      >
        <img
          class="project-sample-preview"
          :src="project.image"
          :alt="'Превью ' + project.name"
        />
        <div class="project-sample-details">
          <h5 class="project-sample-name">{{ project.name }}</h5>
          <a href="#" class="project-sample-category">
            {{ project.category }}
            </a>
          <button
            class="button-go project-sample-menu-button "
            @click="openProjectDetails(project.id)"
          >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .project-catalog {display: flex; flex-direction: column; gap: 93px;}

  .project-view {display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 100px; row-gap: 56px;}

  .project-sample {
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
  }

  .project-sample-preview {height: 550px;}

  .project-sample-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70px;
  }

  .project-sample-name { margin: 0 0 10px; font-size: 25px; }
  .project-sample-category { text-decoration: none; }

  .project-sample-menu-button {
    position: absolute;  bottom: 0px; right: 0px;
    
    padding: 0px;
    height: 70px;
    width: 70px;
    cursor: pointer;
    
  }

</style>
