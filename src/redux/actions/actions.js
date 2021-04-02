import {getCompetitions, getTeamCalendar, getTeams} from '../../api/api'
import {
  SET_LEAGUE_CALENDAR,
  SET_LEAGUES,
  SET_LEAGUES_NAME,
  SET_LEAGUES_ENSIGNURL,
  SET_LEAGUES_HOMETEAM,
  SET_LEAGUES_AWAYTEAM,
  SET_LEAGUES_UTCDATE,
  SET_SELECTED_LEAGUE,
  SET_SELECTED_DATE_FROM,
  SET_SELECTED_DATE_TO,
  SET_SEASON,
  SET_SELECTED_TEAM,
  SET_TEAMS,
  SET_TEAM_NAME,
  SET_TEAM_CALENDAR,
  SET_TEAM_HOMETEAM,
  SET_TEAM_AWAYTEAM,
  SET_NAME_SELECTED_TEAM,
  SET_TEAM_UTCDATE,
} from './types'

export const setSeason = season => ({type: SET_SEASON, season})

export const setSelectedLeague = selectedLeague => ({
  type: SET_SELECTED_LEAGUE,
  selectedLeague,
})

export const setSelectedTeam = selectedTeam => ({
  type: SET_SELECTED_TEAM,
  selectedTeam,
})

export const setLeagues = competitions => ({type: SET_LEAGUES, competitions})
export const setTeams = teams => ({type: SET_TEAMS, teams})

export const setTeamsCalendar = matches => ({
  type: SET_TEAM_CALENDAR,
  matches,
})
export const setTeamsName = name => ({type: SET_TEAM_NAME, name})

export const setTeamsUtcDate = utcDate => ({type: SET_TEAM_UTCDATE, utcDate})

export const setTeamsHomeTeam = homeTeam => ({
  type: SET_TEAM_HOMETEAM,
  homeTeam,
})

export const setTeamsAwayTeam = awayTeam => ({
  type: SET_TEAM_AWAYTEAM,
  awayTeam,
})

export const setSelectedDateFrom = selectedDateFrom => ({
  type: SET_SELECTED_DATE_FROM,
  selectedDateFrom,
})

export const setSelectedDateTo = selectedDateTo => ({
  type: SET_SELECTED_DATE_TO,
  selectedDateTo,
})

export const setNameSelectedTeam = nameSelectedTeam => ({
  type: SET_NAME_SELECTED_TEAM,
  nameSelectedTeam,
})

export const setLeaguesCalendar = matches => ({
  type: SET_LEAGUE_CALENDAR,
  matches,
})

export const setLeaguesName = name => ({type: SET_LEAGUES_NAME, name})

export const setLeaguesEnsignUrl = ensignUrl => ({
  type: SET_LEAGUES_ENSIGNURL,
  ensignUrl,
})

export const setLeaguesUtcDate = utcDate => ({
  type: SET_LEAGUES_UTCDATE,
  utcDate,
})

export const setLeaguesHomeTeam = homeTeam => ({
  type: SET_LEAGUES_HOMETEAM,
  homeTeam,
})

export const setLeaguesAwayTeam = awayTeam => ({
  type: SET_LEAGUES_AWAYTEAM,
  awayTeam,
})

export const requestCompetitions = () => {
  return async dispatch => {
    const data = await getCompetitions()
    dispatch(setLeagues(data.competitions))
  }
}

export const requestTeams = () => {
  return async dispatch => {
    const data = await getTeams()
    dispatch(setTeams(data.teams))
  }
}

export const requestTeamCalendar = (selectedTeam, dateFrom, dateTo) => {
  return async dispatch => {
    let data = await getTeamCalendar(selectedTeam, dateFrom, dateTo)
    dispatch(setTeamsCalendar(data.matches))
  }
}
