<script >

export default {
  props: {
    source: {
      default: "",
      required: true,
      type: String,
    },
  },

};

</script>

<script setup>
</script>

<template>

  <div class="source" v-html="source"/>

</template>
  
<style scoped>
  .source {
    min-height: 300px; 
    display: flex; 
    flex-direction: column; 
    gap:21px;
  }
</style>
