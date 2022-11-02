<template>
  <div class="bg-image">
    <NavBar />
    <Nuxt />
  </div>
</template>

<style>
.bg-image {
  margin: 0;
  padding: 0;
  background: url(assets/1.jpg) center fixed;
  -webkit-background-size: cover; /* pour anciens Chrome et Safari */
  background-size: cover; /* version standardisée */
}
</style>
