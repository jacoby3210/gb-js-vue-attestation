<script >
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['articles', 'articleTags']),
    selectedTags(){return this.articles.find((item) => item.id == this.articleId).tags},
  },
  
  props: {
    articleId: {
      default: -1,
    },
  },
}

</script>

<script setup>
</script>

<template>
  <div class="cloud">
    <h4>Теги</h4>
    <span
      class="cloud-tag"
      :key="index"
      :class="{ selected: selectedTags.includes(index) }"
      v-for="(tag, index) in articleTags"
    >
      {{ tag }}
    </span> 
  </div>
</template>
  
<style scoped>
  .cloud{
    display: flex; flex-wrap: wrap; gap:11px;
    height: min-content; width:345px; 
  }

  .cloud h4 {width: 100%;}
  .cloud-tag {
    padding: 9px 30px;
    height: 41px;

    background: var(--color-second-2);
    border-radius: 10px;
    line-height: 24px;
  }
  .cloud-tag.selected {
    background: var(--color-second);
    color: white;
  }

</style>