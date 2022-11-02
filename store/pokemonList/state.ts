
export interface Pokemon {
  index: number,
  name: string,
  url: string,
  isVisible: boolean
}

export interface State {
  statePokemonDataList: Array<Pokemon>
  stateFilteredPokemonDataList: Array<Pokemon>
}


const state = (): State => ({
  statePokemonDataList: [],
  stateFilteredPokemonDataList: []
})

export default state
