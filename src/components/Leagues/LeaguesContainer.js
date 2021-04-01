import React from 'react'
import {connect} from 'react-redux'
import Leagues from './Leagues'
import {Input} from 'antd'
import {setLeagues} from '../../redux/actions/actions'
import {getCompetitions} from '../../api/api'
const {Search} = Input

const filterLeagues = (competitions, filterValue) => {
  if (filterValue === '') {
    return competitions
  }
  return competitions.filter(competitions =>
    competitions.name.toLowerCase().includes(filterValue)
  )
}

const selectCompetitionsByYear = (year = 2020, competitions) => {
  if (competitions) {
    const FilteredCompetitions = competitions.filter(competition =>
      competition.currentSeason
        ? new Date(competition.currentSeason.endDate).getFullYear() === +year ||
          new Date(competition.currentSeason.startDate).getFullYear() === +year
        : false
    )
    return FilteredCompetitions
  } else return []
}

class LeaguesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterValue: '',
      season: this.props.match.params.season ?? '2021',
    }
  }

  requestCompetitions = props => {
    return async dispatch => {
      let data = await getCompetitions()
      // dispatch(setLeagues(data.competitions))
      props.setLeagues(data.competitions)
    }
  }

  componentDidMount() {
    this.requestCompetitions()
    if (this.props.history.location.search) {
      this.setState({
        filterValue: `${this.props.history.location.search.split('=')[1]}`,
      })
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.season !== prevProps.season) {
      this.setState({season: this.props.season})
      this.props.history.push({
        pathname: '/Leagues/' + this.props.season,
      })
    }
  }
  render() {
    return (
      <main>
        <Search
          placeholder="Поиск..."
          onChange={event => {
            if (event.target.value.toLowerCase() !== '') {
              this.props.history.push({
                pathname: '/Leagues/' + this.state.season,
                search: `?search=${event.target.value.toLowerCase()}`,
              })
            } else {
              this.props.history.push({
                pathname: '/Leagues/' + this.state.season,
              })
            }
            this.setState({filterValue: event.target.value.toLowerCase()})
          }}
        />
        <Leagues
          competitions={filterLeagues(
            selectCompetitionsByYear(
              this.state.season,
              this.props.competitions
            ),
            this.state.filterValue
          )}
        />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  competitions: state.leaguesPage.competitions,
  season: state.userSetting.season,
})

const mapDispatchToProps = dispatch => ({
  setLeagues: data => dispatch(setLeagues(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LeaguesContainer)
