<script >
  
  export default {
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 6,
        prefix: import.meta.env.BASE_URL,
      };
    },
    props: {
      caption:  {default: "", required: true, type: String,},
      category: {default: "", required: true, type: String,},
      image:    {default: "", required: true, type: String,},
    },
  }

</script>

<script setup>
</script>

<template>

  <div class="blog-banner">
    <img class="blog-banner-image " :src="`${this.prefix}/images/${image}.png`" />
    <div class="blog-banner-info" v-if="caption.length!=0">
      <h2>{{ caption }}</h2>
      <p>{{ category }}</p>
    </div>
  </div>

</template>
  
<style scoped>
  .blog-banner {position: relative; height: 452px;}

  .blog-banner-image {height: 356px; width: 100%;}

  .blog-banner-info {
    position: absolute;
    bottom: 0px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);

    padding: 41px 0px;
    height: 274px;
    width: 500px;
    
    background-color: white;
    border-radius: 37px;
  }

  .blog-banner-info p {height: 66px; line-height: 66px;}

</style>
