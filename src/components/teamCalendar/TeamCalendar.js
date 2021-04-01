import TableRow from '../../common/TableRow'

const TeamCalendar = ({name, matches}) => {
  return (
    <div>
      <h1>Календарь {name ?? 'Arsenal FC'}</h1>
      {matches.map((match, i) => (
        <TableRow
          striped={!(i % 2)}
          homeTeam={match.homeTeam.name}
          awayTeam={match.awayTeam.name}
          date={match.utcDate}
          key={match.id}
        />
      ))}
    </div>
  )
}

export default TeamCalendar
