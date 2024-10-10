<script >

export default {
  props: {
    article: {
      default: "",
      type: Text,
    },
  },

};

</script>

<script setup>
</script>

<template>

  <div class="article" v-html="article"/>

</template>
  
<style scoped>
  .article {width: 804px; min-height: 300px; display: flex; flex-direction: column; gap:21px;}
</style>
