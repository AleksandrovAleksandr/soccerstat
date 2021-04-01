import {combineReducers} from 'redux'
import teamsCalendarReducer from './teamsCalendarReducer'
import leaguesReducer from './leaguesReducer'
import userSettingReducer from './userSettingReducer'
import leaguesCalendarReducer from './leaguesCalendarReducer'

const rootReducer = combineReducers({
  teamsPage: teamsCalendarReducer,
  leaguesPage: leaguesReducer,
  userSetting: userSettingReducer,
  leaguesCalendar: leaguesCalendarReducer,
  teamsCalendar: teamsCalendarReducer,
})

export default rootReducer
