<template>
  <div class="nf-text">
    <h1>The page doesn`t exist</h1>
    <router-link :to="{ name: 'country-grid' }"
      >Return to main page</router-link
    >
  </div>
</template>

<script>
export default {
  name: "app-404",
};
</script>

<style lang="scss">
  .nf-text {
    width: 100%;
    height: 100%;
    text-align: center;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>