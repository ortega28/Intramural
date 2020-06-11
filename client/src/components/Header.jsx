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
            // <>Hello, {props.currentUser.username}<button onClick={props.handleLogout} className='header-logout-button'>Logout</button></>
            <div className='header-greeting'>Hello, {props.currentUser.username}<button onClick={props.handleLogout} className='header-logout-button'>Logout</button></div>
            :
            // <Link to='/user/login'>Login/Signup</Link>
            <>
              <Link to='/user/login' className='header-login-button'>Login</Link>
              <span>  </span>
              <Link to='/user/signup' className='header-signup-button'>Sign Up</Link>
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
