import React, { Component } from 'react'
import { loginUser, signupUser, removeToken, verifyUser } from './services/auth'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

class App extends Component {

  state = {
    currentUser: null
  }

  componentDidMount() {
    this.handleVerify()
  }

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  }

  handleSignupSubmit = async (signupData) => {
    const currentUser = await signupUser(signupData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear();
    removeToken();
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Main
          handleLoginSubmit={this.handleLoginSubmit}
          handleSignupSubmit={this.handleSignupSubmit}
          currentUser={this.state.currentUser}
        />
      </div>
    )
  }
}


export default App