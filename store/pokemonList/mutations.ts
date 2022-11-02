import { MutationTree } from 'vuex'
import { State, Pokemon } from './state'

// pkoi ne pas mettre une interface ici aussi? c'est trop?!

const mutations: MutationTree<State> = {
  setPokemonData(state, list: Array<Pokemon>) {
    state.statePokemonDataList = list
  },
  setPokemonVisibility(state, pokemonIndex: number) {
    Object.assign(state.statePokemonDataList[pokemonIndex], { isVisible: true })
  },
  setFilteredPokemonData(state, filteredList: Array<Pokemon>) {
    const visibleFilteredList = filteredList.map((pokemon) => {
      if (!pokemon.isVisible) {
        pokemon.isVisible = true
      }
      return pokemon
    })
    state.stateFilteredPokemonDataList = visibleFilteredList
  }
}

export default mutations
