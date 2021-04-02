import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = ({season}) => {
  return (
    <ul className="menu">
      <li>
        <NavLink className="menu__link" to={`/Leagues/${season}`}>
          Список лиг
        </NavLink>
      </li>
      <li>
        <NavLink className="menu__link" to="/Teams">
          Список команд
        </NavLink>
      </li>
      <li>
        <NavLink className="menu__link" to="/LeagueCalendar">
          Календарь лиги
        </NavLink>
      </li>
      <li>
        <NavLink className="menu__link" to="/TeamCalendar">
          Календарь команды
        </NavLink>
      </li>
    </ul>
  )
}

export default Navbar
