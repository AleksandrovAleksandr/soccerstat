import React from 'react'
import './LeagesCalendar.css'

import TableRow from '../../common/TableRow'

const LeagueCalendar = ({name, matches}) => {
  return (
    <>
      <table className="leageCalendar">
        <caption>Календарь {name}</caption>

        <tbody>
          {matches.map((match, index) => (
            <TableRow
              striped={!(index % 2)}
              homeTeam={match.homeTeam.name}
              awayTeam={match.awayTeam.name}
              date={match.utcDate}
              key={match.id}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default LeagueCalendar
