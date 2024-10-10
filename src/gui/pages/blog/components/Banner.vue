<script >

</script>

<script setup>
</script>

<template>

  <div class="content blog-banner">
    <div class="blog-banner-image"></div>
    <div class="blog-banner-info">
      <h2>Статьи & Новости</h2>
      <p>Домой / Блог</p>
    </div>
  </div>

</template>
  
<style scoped>
  .blog-banner {position: relative; height: 452px;}

  .blog-banner-image {
    height: 356px;
    background-image: url(/resources/images/blog-banner-image.png);
  }

  .blog-banner-info {
    position: absolute;
    bottom: 0px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);

    padding: 41px;
    height: 274px;
    width: 500px;
    
    background-color: white;
    border-radius: 37px;
  }

  .blog-banner-info p {height: 66px; line-height: 66px;}

</style>
