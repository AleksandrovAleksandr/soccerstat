import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': '1a9c09ed331b41a9aaedcb073e908f77',
  },
})

export const getTeams = () =>
  instance.get('teams').then(response => response.data)

export const getCompetitions = () =>
  instance.get('competitions').then(response => response.data)

export const getLeagueCalendar = (id = '', dateFrom = '', dateTo = '') =>
  instance
    .get(
      'competitions/' +
        id +
        '/matches?dateFrom=' +
        dateFrom +
        '&dateTo=' +
        dateTo
    )
    .then(response => response.data)

export const getTeamCalendar = (id = '', dateFrom = '', dateTo = '') =>
  instance
    .get('teams/' + id + '/matches?dateFrom=' + dateFrom + '&dateTo=' + dateTo)
    .then(response => response.data)
