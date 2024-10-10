<script >
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['articleTags'])
  },
  props: {
    article: {
      default: {selectedTags: [1]},
      type: Object,
    },
  },
}

</script>

<script setup>
</script>

<template>
  <div class="tag-cloud">
    <h4>Теги</h4>
    <span
      class="tag"
      :class="{ selected: article.selectedTags.includes(index) }"
      :key="index"
      v-for="(tag, index) in articleTags"
    >
      {{ tag }}
    </span>
  </div>
</template>
  
<style scoped>
.tag-cloud{
  display: flex; flex-wrap: wrap; gap:11px;
  height: min-content; width:345px; 
}
.tag-cloud h4 {width: 100%;}
.tag {
  padding: 9px 30px;
  height: 41px;

  background: var(--color-second-2);
  border-radius: 10px;
  line-height: 24px;
}
.tag.selected {
  background: var(--color-second);
  color: white;
}
</style>
