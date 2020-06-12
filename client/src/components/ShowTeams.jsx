import React from 'react'
import { Link } from 'react-router-dom'
import './ShowTeams.css'

export default function ShowTeams(props) {

  let { teams, match } = props;
  console.log(teams)

  const filterTeams = () => {
    console.log(props.match)
    let type = match.location.state.type
    return teams.filter(team => {
      return type === team.sport_type ? team : null
    })
  }

  return (
    <>
      {/* <hr /> */}
      <h3 className='show-teams-title'>Teams</h3>

      {

        filterTeams().map(team => (
          // <p key={team.id}>{team.name}</p>
          <div className='team-name-div'>
            <Link to={`/teams/${team.id}/players`} key={team.id} className='show-teams-team-name'>{team.name}</Link>
          </div>
        ))
      }
    </>
  )
}
