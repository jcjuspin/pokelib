import { ActionTree, ActionContext } from 'vuex'
import { State, Pokemon } from './state'
import RootState from '~/store/types'

// création d'une interface pour toutes mes actions
// est ce que ça marche si je retire RootState partout dans ce fichier??!
export interface Actions<S, R> extends ActionTree<S, R> {
  setPokemonData(context: ActionContext<S, R>, list: Array<Pokemon>): void
  setPokemonVisibility(context: ActionContext<S, R>, pokemonIndex: number): void
  setFilteredPokemonData(context: ActionContext<S, R>, filteredList: Array<Pokemon>): void
}

const actions: Actions<State, RootState> = {
  setPokemonData(context, list) {
    context.commit('setPokemonData', list)
  },
  setPokemonVisibility(context, pokemonIndex) {
    context.commit('setPokemonVisibility', pokemonIndex)
  },
  setFilteredPokemonData(context, filteredList) {
    context.commit('setFilteredPokemonData', filteredList)
  }
}

export default actions
