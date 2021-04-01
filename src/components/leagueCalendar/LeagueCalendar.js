import React from 'react'

import TableRow from '../../common/TableRow'

const LeagueCalendar = ({name, matches}) => {
  return (
    <div>
      <h1>Календарь {name}</h1>
      {matches.map((match, index) => (
        <TableRow
          striped={!(index % 2)}
          homeTeam={match.homeTeam.name}
          awayTeam={match.awayTeam.name}
          date={match.utcDate}
          key={match.id}
        />
      ))}
    </div>
  )
}

export default LeagueCalendar
