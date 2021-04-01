import React from 'react'
import {connect} from 'react-redux'
import {
  setSelectedDateFrom,
  setSelectedDateTo,
  setTeamsCalendar,
} from '../../redux/actions/actions'
import TeamCalendar from './TeamCalendar'
import {DatePicker, Space} from 'antd'

import moment from 'moment'
import {getTeamCalendar} from '../../api/api'

class TeamsCalendarContainer extends React.Component {
  requestTeamCalendar = (selectedTeam, dateFrom, dateTo) => {
    return async dispatch => {
      let data = await getTeamCalendar(selectedTeam, dateFrom, dateTo)
      dispatch(setTeamsCalendar(data.matches))
    }
  }

  handleDateFromChange(object, string) {
    this.requestTeamCalendar(this.props.id, string, this.props.dateTo)
    this.props.setSelectedDateFrom(string)
  }
  handleDateToChange(object, string) {
    this.requestTeamCalendar(this.props.id, this.props.dateFrom, string)
    this.props.setSelectedDateTo(string)
  }
  componentDidMount() {
    this.requestTeamCalendar(
      this.props.match.params.id ? this.props.match.params.id : '57',
      this.props.dateFrom,
      this.props.dateTo
    )
  }
  render() {
    return (
      <main>
        <div>
          <Space direction="vertical">
            Показать, начиная с:
            <DatePicker
              onChange={this.handleDateFromChange.bind(this)}
              defaultValue={moment(this.props.dateFrom, 'YYYY-MM-DD')}
            />
            до:
            <DatePicker
              onChange={this.handleDateToChange.bind(this)}
              defaultValue={moment(this.props.dateTo, 'YYYY-MM-DD')}
            />
          </Space>
        </div>
        <TeamCalendar
          matches={this.props.matches}
          name={this.props.match.params.team}
        />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  matches: state.teamsCalendar.matches,
  id: state.teamsCalendar.selectedTeam,
  dateFrom: state.teamsCalendar.selectedDateFrom,
  dateTo: state.teamsCalendar.selectedDateTo,
  nameSelectedTeam: state.teamsCalendar.nameSelectedTeam,
})

export default connect(mapStateToProps, {
  setSelectedDateFrom,
  setSelectedDateTo,
})(TeamsCalendarContainer)
