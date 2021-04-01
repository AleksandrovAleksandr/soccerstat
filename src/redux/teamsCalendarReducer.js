import moment from 'moment'

let initialState = {
  matches: [],
  competitions: {},
  name: '',
  area: {},
  utcDate: '',
  homeTeam: '',
  awayTeam: '',
  selectedTeam: '57',
  selectedDateFrom: moment().subtract(1, 'years').format('YYYY-MM-DD'),
  selectedDateTo: moment().subtract(-1, 'years').format('YYYY-MM-DD'),
  nameSelectedTeam: 'Arsenal FC',
}

const teamsCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TEAM_CALENDAR': {
      return {
        ...state,
        matches: action.matches,
      }
    }

    case 'SET_TEAM_NAME': {
      return {
        ...state,
        name: action.name,
      }
    }

    case 'SET_TEAM_UTCDATE': {
      return {
        ...state,
        utcDate: action.utcDate,
      }
    }
    case 'SET_TEAM_HOMETEAM': {
      return {
        ...state,
        homeTeam: action.homeTeam,
      }
    }
    case 'SET_TEAM_AWAYTEAM': {
      return {
        ...state,
        awayTeam: action.awayTeam,
      }
    }
    case 'SET_SELECTED_TEAM': {
      return {...state, selectedTeam: action.selectedTeam}
    }
    case 'SET_SELECTED_DATE_FROM': {
      return {...state, selectedDateFrom: action.selectedDateFrom}
    }
    case 'SET_SELECTED_DATE_TO': {
      return {...state, selectedDateTo: action.selectedDateTo}
    }
    case 'SET_NAME_SELECTED_TEAM': {
      return {...state, nameSelectedTeam: action.nameSelectedTeam}
    }
    default:
      return state
  }
}

export default teamsCalendarReducer
