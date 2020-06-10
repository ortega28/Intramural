import React from 'react'

export default function ShowTeams(props) {
  const { teams } = props;
  return (
    <>
      <hr />
      <h3>Teams</h3>
      {
        teams.map(team => (
          <p key={team.id}>{team.name}</p>
        ))
      }
    </>
  )
}
