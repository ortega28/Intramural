import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLoginSubmit(this.state);
        history.push('/');
        this.setState({
          username: "",
          password: ""
        })
      }}>
        <div className='login-div'>
          <h2 className='login-form-title'>Login</h2>
          <label htmlFor="username" >Username:
          <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              className='login-username-field'
            />
          </label>
          <br />
          <label htmlFor="password">Password:
          <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className='login-password-field'
            />
          </label>
          <br />
          <div className='login-buttons-div'>
            <Link to='/user/signup' className='login-signup-link'>Sign Up</Link>
            <button className='login-submit-button'>Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Login