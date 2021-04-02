import TableRow from '../../common/TableRow'
import './TeamCalendar.css'

const TeamCalendar = ({name, matches}) => {
  return (
    <table className="teamCalendar">
      <caption>Календарь {name ?? 'Arsenal FC'}</caption>
      <tbody>
        {matches.map((match, i) => (
          <TableRow
            striped={!(i % 2)}
            homeTeam={match.homeTeam.name}
            awayTeam={match.awayTeam.name}
            date={match.utcDate}
            key={match.id}
          />
        ))}
      </tbody>
    </table>
  )
}

export default TeamCalendar
