<template>
  <div v-if="!$fetchState.pending">
    <PokemonDetail :pokemon="pokemon" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pokemon: {},
    }
  },
  async fetch() {
    const pokemonName = this.$route.params.pokemon_name
    this.pokemon = await fetch(
      'https://pokeapi.co/api/v2/pokemon/' + pokemonName
    ).then((res) => res.json())
  },
}
</script>
