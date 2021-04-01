import {SET_SEASON, SET_LEAGUES} from './actions/types'

let initialState = {
  competitions: [],
  currentSeason: {endDate: null},
  season: '2019',
}

const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAGUES: {
      return {...state, competitions: action.competitions}
    }
    case SET_SEASON: {
      return {...state, season: action.season}
    }
    default:
      return state
  }
}

export default leaguesReducer
