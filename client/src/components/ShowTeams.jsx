import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowTeams(props) {
  const { teams } = props;
  return (
    <>
      <hr />
      <h3>Teams</h3>

      {
        teams.map(team => (
          // <p key={team.id}>{team.name}</p>
          <Link to='/players' key={team.id}>{team.name}</Link>
        ))
      }
    </>
  )
}
