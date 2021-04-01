import {
  SET_SEASON,
  SET_SELECTED_LEAGUE,
  SET_SELECTED_TEAM,
} from './actions/types'

let initialState = {
  season: '2021',
  selectedTeam: '57',
  selectedLeague: '2001',
}

const userSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEASON: {
      return {...state, season: action.season}
    }
    case SET_SELECTED_LEAGUE: {
      return {...state, selectedLeague: action.selectedLeague}
    }
    case SET_SELECTED_TEAM: {
      return {...state, selectedTeam: action.selectedTeam}
    }
    default:
      return state
  }
}

export default userSettingReducer
