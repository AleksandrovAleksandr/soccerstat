import 'antd/dist/antd.css'
import React from 'react'
import Header from './components/header/Header'

import {Route, Switch} from 'react-router-dom'
import TeamsCalendarContainer from './components/teamCalendar/TeamsCalendarContainer'
import TeamsContainer from './components/Teams/TeamsContainer'
import LeaguesContainer from './components/Leagues/LeaguesContainer'
import LeaguesCalendarContainer from './components/leagueCalendar/LeaguesCalendarContainer'

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={LeaguesContainer} />
        <Route path="/SoccerStat" component={LeaguesContainer} />
        <Route
          path="/Leagues/:season?/:filterValue?"
          component={LeaguesContainer}
        />
        <Route path="/Teams/:filterValue?" component={TeamsContainer} />
        <Route
          path="/LeagueCalendar/:id?"
          component={LeaguesCalendarContainer}
        />
        <Route
          path="/TeamCalendar/:id?/:team?"
          component={TeamsCalendarContainer}
        />
      </Switch>
    </>
  )
}

export default App
