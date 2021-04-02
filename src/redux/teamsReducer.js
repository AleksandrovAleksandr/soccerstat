import {SET_TEAMS} from './actions/types'

const initialState = {
  teams: [],
}

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAMS: {
      return {...state, teams: action.teams}
    }
    default:
      return state
  }
}

export default teamsReducer
