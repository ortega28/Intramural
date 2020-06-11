import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <div className='header-div'>
      <div>
        <Link to='/' className='header-title'>
          <h1 >Intramural League</h1>
        </Link>
      </div>
      <div>
        {
          props.currentUser
            ?
            <>Hello, {props.currentUser.username}<button onClick={props.handleLogout} className='header-logout-button'>Logout</button></>
            :
            // <Link to='/user/login'>Login/Signup</Link>
            <>
              <Link to='/user/login'>Login</Link>
              <span>  </span>
              <Link to='/user/signup'>Sign Up</Link>
            </>
        }
        {/* <hr /> */}
        {
          // props.currentUser && (
          //   <nav>
          //     <NavLink to="/sports">Sports</NavLink>
          //     <NavLink to="/teams">Teams</NavLink>
          //   </nav>
          // )
        }
      </div>
    </div>
  )
}

export default Header
