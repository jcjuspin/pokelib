<template>
  <div class="bggg">
    <div class="container mx-auto max-w-lg max-w-xl">
      <PokemonList :pokemon-list="stateMyTeamList" />
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
      unsubscribe: '',
    }
  },
  computed: {
    ...mapState('myTeam', ['stateMyTeamList']),
  },
  created() {
    this.initialiseMyTeamData()
  },
  mounted() {
    AOS.init({})
  },
  methods: {
    ...mapActions('myTeam', ['initialiseMyTeamData']),
    ...mapActions('pokemonList', ['setPokemonData']),
  },
}
</script>
