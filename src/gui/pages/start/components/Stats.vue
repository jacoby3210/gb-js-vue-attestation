<script>

import { mapState, mapActions } from 'vuex';

export default {
  computed: {...mapState(['statistics'])},
}

</script>

<template>
  <div id="stats" class="content stats">
    <div class="stat-item" :key="index" v-for="(stat, index) in statistics">
      <p class="stat-value">{{ stat.value }}</p>
      <p class="stat-description">{{ stat.description }}</p>
    </div>
  </div>
</template>

<style scoped>

  .stats {
    display: flex;
    align-items: center;
    
    margin: 20px 0;
    height: 460px;
    width: 100%;
    
    background-color: #F4F0EC;
  }

  .stat-item {
    flex: 1;
    text-align: center;
    
    margin: 0 10px;
    padding: 20px;
    height: 155px;
    
    border-radius: 10px;
  }

  .stat-value {
    display: block; 
    color: var(--color-main); 
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 85px;
    line-height: 125%;
    letter-spacing: 0.02em;
  }
  .stat-description {color: #777; font-size: 16px;}
</style>
