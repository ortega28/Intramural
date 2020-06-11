import React from 'react'
import { Link } from 'react-router-dom'
import './ShowTeams.css'

export default function ShowTeams(props) {
  const { teams } = props;
  return (
    <>
      {/* <hr /> */}
      <h3 className='show-teams-title'>Teams</h3>

      {
        teams.map(team => (
          // <p key={team.id}>{team.name}</p>
          <div className='team-name-div'>
            <Link to='/players' key={team.id} className='show-teams-team-name'>{team.name}</Link>
          </div>
        ))
      }
    </>
  )
}
