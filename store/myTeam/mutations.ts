import { MutationTree } from 'vuex'
import { State } from './state'

const mutations: MutationTree<State> = {
  addPokemon(state, pokemon: object) {
    state.stateMyTeamList.push({...pokemon, order: state.countOrder})
  },
  removePokemon(state, order: number) {
    const hasTheRightOrder = (pokemon: any) => pokemon.order === order
    const item = state.stateMyTeamList.findIndex(hasTheRightOrder)
    state.stateMyTeamList.splice(item, 1)
  },
  addOrder(state) {
    state.countOrder++
  },
  initialiseMyTeamData(state) {
    if(localStorage.getItem('myTeamData')) {
      const dataString = localStorage.getItem('myTeamData')
      const data = dataString ? JSON.parse(dataString) : []
      state.stateMyTeamList = data
    }
  },
}

export default mutations
