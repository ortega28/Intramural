// import React from 'react'

// export default function ShowPlayers(props) {
//   const { players } = props;
//   return (
//     <>
//       <hr />
//       <h3>Players</h3>
//       {
//         players.map(player => (
//           <p key={player.id}>{player.name} {player.height} {player.sex} {player.jersey}</p>
//         ))
//       }
//     </>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowPlayers(props) {
  const { players, currentUser, destroyPlayer, history } = props;
  return (
    <>
      <hr />
      <h3>Players</h3>
      {
        players.map(player => (
          <React.Fragment key={player.id}>
            {/* small change:  we made the p tags into links to the player item route */}
            <Link to={`/players/${player.id}`}>{player.name}</Link>
            {
              currentUser && currentUser.id === player.user_id && (
                <>
                  {/* our edit button just needs to route us to the edit component */}
                  {/* we also need to interpolate the id in the route */}
                  <button onClick={() => history.push(`/player/${player.id}/edit`)}>edit</button>
                  <button onClick={() => destroyPlayer(player.id)}>delete</button>
                </>
              )
            }
            <br />
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/new/player'><button>Create</button></Link>
    </>
  )
}