export interface State {
  stateMyTeamList: Array<object>
  countOrder: number
}

const state = (): State => ({
  stateMyTeamList: [],
  countOrder: 0
})

export default state
