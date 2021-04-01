import React from 'react'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {setSelectedLeague} from '../../redux/actions/actions'
import unitedFlag from '../../images/all-poker-rooms.png'

let League = ({competition, id, ensignUrl}) => {
  const dispatch = useDispatch()
  const handleChange = event => {
    dispatch(setSelectedLeague(event))
  }
  const arr = [
    2000,
    2001,
    2002,
    2003,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2021,
  ]
  if (arr.includes(id)) {
    return (
      <li>
        <NavLink
          to={`/LeagueCalendar/${id}`}
          onClick={e => {
            handleChange(id)
          }}
        >
          {competition}
          <img
            width="80"
            src={ensignUrl || unitedFlag}
            alt={`${competition}-logo`}
          ></img>
        </NavLink>
      </li>
    )
  } else {
    return (
      <li>
        {competition}
        <img
          width="80"
          src={ensignUrl || unitedFlag}
          alt={`logotype of ${competition}`}
        />
      </li>
    )
  }
}

export default League
