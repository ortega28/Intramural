import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <h1>Intramural League</h1>
      {
        props.currentUser
          ?
          <>{props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></>
          :
          // <Link to='/user/login'>Login/Register</Link>
          <>
            <Link to='/user/login'>Login</Link>
            <Link to='/user/signup'>Sign Up</Link>
          </>
      }
      <hr />
      {
        // props.currentUser && (
        // <nav>
        //   <NavLink to="/sports">Sports</NavLink>
        //   <NavLink to="/teams">Teams</NavLink>
        // </nav>
        //  )
      }
    </div>
  )
}

export default Header
