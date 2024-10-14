<script>


</script>

<template>
  <main class="content error">
    <div class="error-details">
      <h1>404</h1>
      <p>Приносим извинения, но <br/>страница, которую вы искали, не найдена</p>
      <button><span>Домой</span><span class="button-arrow"></span></button>
    </div>
    <img src="/images/error.png"/>
  </main>
</template>

<style scoped>
  .error {
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    gap: 81px; 
    padding-right: 0px;
  }
  .error-details {
    display: flex; 
    flex-direction: column; 
    gap:23px; 
    width: 569px; 
  }
  img { 
    width: 913px;
  }
  h1 {
    color:var(--color-main); 
    font-size: 250px;
  }
  p { 
    font-size: 35px;
  }
</style>
