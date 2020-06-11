import React, { Component } from 'react';
import './Signup.css'
export default class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, email, password } = this.state;
    const { handleSignupSubmit, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSignupSubmit(this.state);
        history.push('/');
        this.setState({
          username: "",
          email: "",
          password: ""
        })
      }}>
        <div className='signup-div'>
          <h3 className='signup-form-title'>Sign Up</h3>
          <label htmlFor="username">Username:
          <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              className='signup-username-field'
            />
          </label>
          <br />
          <label htmlFor="email">Email:
          <input
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              className='signup-email-field'
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
              className='signup-password-field'
            />
          </label>
          <br />
          <button className='signup-submit-button'>Submit</button>
        </div>
      </form>
    )
  }
}