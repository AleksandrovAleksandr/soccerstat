import {
  SET_LEAGUE_CALENDAR,
  SET_LEAGUES_NAME,
  SET_LEAGUES_ENSIGNURL,
  SET_LEAGUES_HOMETEAM,
  SET_LEAGUES_AWAYTEAM,
  SET_LEAGUES_UTCDATE,
  SET_SELECTED_LEAGUE,
  SET_SELECTED_DATE_FROM,
  SET_SELECTED_DATE_TO,
} from './actions/types'

let initialState = {
  matches: [],
  competitions: {},
  name: '',
  area: {},
  ensignUrl: '',
  utcDate: '',
  homeTeam: '',
  awayTeam: '',
  selectedLeague: '',
  selectedDateFrom: '',
  selectedDateTo: '',
}

const leaguesCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAGUE_CALENDAR: {
      return {
        ...state,
        matches: action.matches,
      }
    }
    case SET_LEAGUES_NAME: {
      return {
        ...state,
        name: action.name,
      }
    }
    case SET_LEAGUES_ENSIGNURL: {
      return {
        ...state,
        ensignUrl: action.ensignUrl,
      }
    }
    case SET_LEAGUES_UTCDATE: {
      return {
        ...state,
        utcDate: action.utcDate,
      }
    }
    case SET_LEAGUES_HOMETEAM: {
      return {
        ...state,
        homeTeam: action.homeTeam,
      }
    }
    case SET_LEAGUES_AWAYTEAM: {
      return {
        ...state,
        awayTeam: action.awayTeam,
      }
    }
    case SET_SELECTED_LEAGUE: {
      return {...state, selectedLeague: action.selectedLeague}
    }
    case SET_SELECTED_DATE_FROM: {
      return {...state, selectedDateFrom: action.selectedDateFrom}
    }
    case SET_SELECTED_DATE_TO: {
      return {...state, selectedDateTo: action.selectedDateTo}
    }

    default:
      return state
  }
}

export default leaguesCalendarReducer
