import Team from './Team'

const Teams = props => (
  <ul>
    {props.teams &&
      props.teams.map(team => (
        <Team
          team={team.name}
          key={team.id}
          crestUrl={team.crestUrl}
          id={team.id}
        />
      ))}
  </ul>
)

export default Teams
