
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ShowPlayers.css'

export default function ShowPlayers(props) {
  const { players, currentUser, destroyPlayer, getPlayers, history } = props;

  const { team_id } = useParams()
  useEffect(() => {
    getPlayers(team_id)
  }, [])


  return (
    <>
      <div className='show-players-container'>
        <h3 className='players-title'>Players</h3>
        {
          players.map(player => (
            <React.Fragment key={player.id}>

              <div className='player-name-div'>
                <Link to={`/teams/${player.team_id}/players/${player.id}`} className='player-name'>{player.name}</Link>
              </div>
              {
                currentUser && currentUser.id === player.user_id && (
                  <div className='edit-delete-button-div'>
                    <button onClick={() => history.push(`/player/${player.id}/edit`)} className='show-players-edit-button'>Edit</button>
                    <button onClick={() => destroyPlayer(player.id, player.team_id)} className='show-players-delete-button'>Delete</button>
                  </div>
                )
              }
              <br />

            </React.Fragment>
          ))
        }
        <br />
        <div className='create-button-div'>
          <Link to='/new/player'><button className='create-button'>Create</button></Link>
        </div>
      </div>
    </>
  )
}