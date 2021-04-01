import {NavLink} from 'react-router-dom'

const Navbar = ({season}) => {
  return (
    <ul>
      <li>
        <NavLink to={`/Leagues/${season}`}>Список лиг</NavLink>
      </li>
      <li>
        <NavLink to="/Teams">Список команд</NavLink>
      </li>
      <li>
        <NavLink to="/LeagueCalendar">Календарь лиги</NavLink>
      </li>
      <li>
        <NavLink to="/TeamCalendar">Календарь команды</NavLink>
      </li>
    </ul>
  )
}

export default Navbar
