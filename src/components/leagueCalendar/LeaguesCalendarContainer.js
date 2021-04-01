import React from 'react'
import {connect} from 'react-redux'
import {
  setLeaguesCalendar,
  setLeaguesName,
  setSelectedDateFrom,
  setSelectedDateTo,
} from '../../redux/actions/actions'
import LeagueCalendar from './LeagueCalendar'
import {DatePicker, Space} from 'antd'
import {getLeagueCalendar} from '../../api/api'

const requestLeagueCalendar = (id, dateFrom, dateTo) => {
  return async dispatch => {
    let data = await getLeagueCalendar(id, dateFrom, dateTo)
    dispatch(setLeaguesCalendar(data.matches.slice(0, 100)))
    dispatch(setLeaguesName(data.competition.name))
  }
}

class LeaguesCalendarContainer extends React.Component {
  handleDateFromChange(object, string) {
    this.props.requestLeagueCalendar(this.props.id, string, this.props.dateTo)
    this.props.setSelectedDateFrom(string)
  }
  handleDateToChange(object, string) {
    this.requestLeagueCalendar(this.props.id, this.props.dateFrom, string)
    this.props.setSelectedDateTo(string)
  }
  componentDidMount() {
    this.props.requestLeagueCalendar(
      this.props.match.params.id ? this.props.match.params.id : '2001',
      this.props.dateFrom,
      this.props.dateTo
    )
  }

  render() {
    return (
      <main>
        <div>
          <Space direction="vertical">
            Показать, начиная от:
            <DatePicker
              onChange={this.handleDateFromChange.bind(this)}
            /> до: <DatePicker onChange={this.handleDateToChange.bind(this)} />
          </Space>
        </div>
        <LeagueCalendar name={this.props.name} matches={this.props.matches} />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  matches: state.leaguesCalendar.matches,
  name: state.leaguesCalendar.name,
  id: state.leaguesCalendar.selectedLeague,
  dateFrom: state.leaguesCalendar.selectedDateFrom,
  dateTo: state.leaguesCalendar.selectedDateTo,
})

export default connect(mapStateToProps, {
  requestLeagueCalendar,
  setSelectedDateFrom,
  setSelectedDateTo,
})(LeaguesCalendarContainer)
