import React from 'react'
import {connect} from 'react-redux'
import Teams from './Teams'
import {Input} from 'antd'
import {getTeams} from '../../api/api'
import {setTeams} from '../../redux/actions/actions'
const {Search} = Input

const filterTeams = (teams, filterValue) => {
  if (filterValue === '') {
    return teams
  }
  const filterTeams = teams.filter(teams => {
    return teams.name.toLowerCase().includes(filterValue)
  })
  return filterTeams
}

class TeamsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {filterValue: ''}
  }

  requestTeams = () => {
    return async dispatch => {
      let data = await getTeams()
      dispatch(setTeams(data.teams))
    }
  }

  componentDidMount() {
    this.requestTeams()
    if (this.props.history.location.search) {
      this.setState({
        filterValue: `${this.props.history.location.search.split('=')[1]}`,
      })
    }
  }

  render() {
    return (
      <main>
        <Search
          placeholder="Поиск..."
          defaultValue={this.state.filterValue}
          onChange={event => {
            if (event.target.value.toLowerCase() !== '') {
              this.props.history.push({
                pathname: '/Teams',
                search: `?search=${event.target.value.toLowerCase()}`,
              })
            } else {
              this.props.history.push({
                pathname: '/Teams',
              })
            }
            this.setState({filterValue: event.target.value.toLowerCase()})
          }}
        />
        <Teams teams={filterTeams(this.props.teams, this.state.filterValue)} />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  teams: state.teamsPage.teams,
  totalTeamsCount: state.teamsPage.count,
})

export default connect(mapStateToProps)(TeamsContainer)
