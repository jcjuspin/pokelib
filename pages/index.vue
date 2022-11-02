<template>
  <div>
    <div class="container mx-auto max-w-lg max-w-xl">
      <PokemonList
        :pokemon-list="
          showFiltering ? stateFilteredPokemonDataList : statePokemonDataList
        "
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  data: function () {
    return {
      showFiltering: false,
    }
  },
  computed: {
    ...mapState('pokemonList', ['statePokemonDataList']),
    ...mapState('pokemonList', ['stateFilteredPokemonDataList']),
  },
  watch: {
    stateFilteredPokemonDataList(filteredList) {
      this.showFiltering = filteredList.length > 0
    },
  },
  async created() {
    const result = await this.getPokemonData()
    const pokemonDataList = result.map((pokemon, index) => {
      pokemon.isVisible = false
      pokemon.index = index + 1
      return pokemon
    })
    this.setPokemonData(pokemonDataList)

    this.$store.subscribe((mutation, state) => {
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
  mounted() {
    AOS.init({})
  },
  methods: {
    async getPokemonData() {
      const data = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=100'
      ).then((res) => res.json())
      return data.results
    },
    ...mapActions('pokemonList', ['setPokemonData']),
  },
}
</script>
