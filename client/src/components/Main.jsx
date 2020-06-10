import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
//import Sports from './Sports.jsx';
import { getAllPlayers, createPlayer, deletePlayer, updatePlayer } from '../services/players';
import { getAllTeams } from '../services/teams';
import ShowPlayers from './ShowPlayers';
import ShowTeams from './ShowTeams';
import Sports from './Sports.jsx';
import basketballImage from '../images/photo-1546519638-68e109498ffc.jpeg'
import './Main.css';
import CreatePlayer from './CreatePlayer';
// import UpdatePlayer from './UpdatePlayer';
// import PlayerProfile from './PlayerProfile';

export default class Main extends Component {
  state = {
    players: [],
    teams: []
  }

  componentDidMount() {
    this.getPlayers();
    this.getTeams();
  }

  // ============================
  // ========== Players =========
  // ============================

  getPlayers = async () => {
    const players = await getAllPlayers();
    this.setState({ players });
  }

  postPlayer = async (playerData) => {
    const newPlayer = await createPlayer(playerData);
    this.setState(prevState => ({
      players: [...prevState.players, newPlayer]
    }))
  }

  putPlayer = async (id, playerData) => {
    const updatedPlayer = await updatePlayer(id, playerData);
    this.setState(prevState => ({
      players: prevState.players.map(player => player.id === id ? updatedPlayer : player)
    }))
  }

  destroyPlayer = async (id) => {
    await deletePlayer(id);
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  }
  // ============================
  // ========== Teams ===========
  // ============================

  getTeams = async () => {
    const teams = await getAllTeams();
    this.setState({ teams });
  }


  render() {
    return (
      <div className='main-component'>
        <>
          <Route exact path='/'>

            <img src={basketballImage} alt="Basketball" className="home-basketball-image" />
            <Link to='/sports'>Check Out Our Sports</Link>
          </Route>
          <main>
            <Route path='/user/login' render={(props) => (
              <Login
                {...props}
                handleLoginSubmit={this.props.handleLoginSubmit}
              />
            )} />
            <Route path='/user/signup' render={(props) => (
              <Signup
                {...props}
                handleSignupSubmit={this.props.handleSignupSubmit}
              />
            )} />
            <Route path='/players' render={() => (
              <ShowPlayers
                players={this.state.players}
                currentUser={this.props.currentUser}
                destroyPlayer={this.destroyPlayer}
              />
            )} />
            <Route path='/teams' render={() => (
              <ShowTeams
                teams={this.state.teams}
              />
            )} />
            <Route path='/sports' render={() => (
              <Sports />
            )} />

            <Route path='/new/player' render={() => (
              <CreatePlayer />
            )} />
          </main>
        </>
      </div>
    )
  }
}