
import React from 'react';
import { Link } from 'react-router-dom';
import './ShowPlayers.css'

export default function ShowPlayers(props) {
  const { players, currentUser, destroyPlayer, history } = props;
  return (
    <>
      <hr />
      <h3 className='players-title'>Players</h3>
      {
        players.map(player => (
          <React.Fragment key={player.id}>
            {/* <div> */}
            {/* small change:  we made the p tags into links to the player item route */}
            <Link to={`/player/${player.id}`} className='player-name'>{player.name}</Link>
            {
              currentUser && currentUser.id === player.user_id && (
                <div className='edit-delete-button-div'>
                  {/* our edit button just needs to route us to the edit component */}
                  {/* we also need to interpolate the id in the route */}
                  <button onClick={() => history.push(`/player/${player.id}/edit`)} className='show-players-edit-button'>Edit</button>
                  <button onClick={() => destroyPlayer(player.id)} className='show-players-delete-button'>Delete</button>
                </div>
              )
            }
            <br />
            {/* </div> */}
          </React.Fragment>
        ))
      }
      <br />

      <Link to='/new/player'><button className='create-button'>Create</button></Link>
    </>
  )
}