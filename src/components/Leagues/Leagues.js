import League from './League'

let Leagues = props => {
  return (
    <ul>
      {props.competitions &&
        props.competitions.map(competition => (
          <League
            competition={competition.name}
            key={competition.id}
            id={competition.id}
            ensignUrl={competition.area.ensignUrl}
          />
        ))}
    </ul>
  )
}

export default Leagues
