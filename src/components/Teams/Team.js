import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'

import unitedFlag from '../../images/all-poker-rooms.png'

import {setSelectedTeam, setNameSelectedTeam} from '../../redux/actions/actions'

const Team = ({team, crestUrl, id}) => {
  const dispatch = useDispatch()

  const handleChange = (id, team) => {
    dispatch(setSelectedTeam(id))
    dispatch(setNameSelectedTeam(team))
  }
  return (
    <li>
      <NavLink
        to={'/TeamCalendar/' + id + '/' + team}
        onClick={() => {
          handleChange(id, team)
        }}
      >
        {team}
        <img width="80" src={crestUrl || unitedFlag} alt=""></img>
      </NavLink>
    </li>
  )
}

export default Team
