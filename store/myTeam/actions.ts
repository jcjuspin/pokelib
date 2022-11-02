import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import RootState from '~/store/types'

export interface Actions<S, R> extends ActionTree<S, R> {
  addPokemon(context: ActionContext<S, R>, pokemon: object): void
  addOrder(context: ActionContext<S, R>, order: number): void
  removePokemon(context: ActionContext<S, R>, order: number): void
  initialiseMyTeamData(context: ActionContext<S, R>): void
}

const actions: Actions<State, RootState> = {
  addPokemon(context, pokemon) {
    context.commit('addPokemon', pokemon)
  },
  removePokemon(context, order) {
    context.commit('removePokemon', order)
  },
  addOrder(context, order) {
    context.commit('addOrder', order)
  },
  initialiseMyTeamData(context) {
    context.commit('initialiseMyTeamData')
  },
}

export default actions
