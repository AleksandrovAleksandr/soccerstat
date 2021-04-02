import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import './Team.css'

import unitedFlag from '../../images/all-poker-rooms.png'

import {setSelectedTeam, setNameSelectedTeam} from '../../redux/actions/actions'

const Team = ({team, crestUrl, id}) => {
  const dispatch = useDispatch()

  const handleChange = (id, team) => {
    dispatch(setSelectedTeam(id))
    dispatch(setNameSelectedTeam(team))
  }
  return (
    <li className="team__card">
      <NavLink
        to={'/TeamCalendar/' + id + '/' + team}
        onClick={() => {
          handleChange(id, team)
        }}
      >
        <h3 className="team__title">{team}</h3>
        <img width="80" src={crestUrl || unitedFlag} alt=""></img>
      </NavLink>
    </li>
  )
}

export default Team
