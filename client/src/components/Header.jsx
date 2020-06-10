import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <Link to='/'>
        <h1>Intramural League</h1>
      </Link>
      {
        props.currentUser
          ?
          <>Hello, {props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></>
          :
          // <Link to='/user/login'>Login/Signup</Link>
          <>
            <Link to='/user/login'>Login</Link>
            <span>  </span>
            <Link to='/user/signup'>Sign Up</Link>
          </>
      }
      <hr />
      {
        // props.currentUser && (
        //   <nav>
        //     <NavLink to="/sports">Sports</NavLink>
        //     <NavLink to="/teams">Teams</NavLink>
        //   </nav>
        // )
      }
    </div>
  )
}

export default Header
