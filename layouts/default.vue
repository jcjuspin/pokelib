<template>
  <div class="bg-image">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware({ store }) {
    store.subscribe((mutation, state) => {
      if (
        mutation.type === 'myTeam/addPokemon' ||
        mutation.type === 'myTeam/removePokemon'
      ) {
        localStorage.setItem(
          'myTeamData',
          JSON.stringify(state.myTeam.stateMyTeamList)
        )
      }
    })
  },
}
</script>

<style>
.bg-image {
  margin: 0;
  padding: 0;
  background: url(assets/1.jpg) center fixed;
  -webkit-background-size: cover; /* pour anciens Chrome et Safari */
  background-size: cover; /* version standardisée */
}
</style>
