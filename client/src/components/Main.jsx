import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
//import Sports from './Sports.jsx';
import { getAllPlayers, createPlayer, deletePlayer, updatePlayer } from '../services/players';
import { getAllTeams } from '../services/teams';
import ShowPlayers from './ShowPlayers';
import ShowTeams from './ShowTeams';
import Sports from './Sports.jsx';
import basketballImage from '../images/photo-1505666287802-931dc83948e9.jpeg'
import './Main.css';
import CreatePlayer from './CreatePlayer';
import EditPlayer from './EditPlayer';
import ShowPlayer from './ShowPlayer.jsx'
// import PlayerProfile from './PlayerProfile';

export default class Main extends Component {
  state = {
    players: [],
    teams: []
  }

  componentDidMount() {
    this.getTeams();

  }

  // ============================
  // ========== Players =========
  // ============================

  getPlayers = async (teamId) => {
    const players = await getAllPlayers(teamId);
    console.log(players)
    this.setState({ players });
  }

  postPlayer = async (teamId, playerData) => {
    const newPlayer = await createPlayer(teamId, playerData);
    this.setState(prevState => ({
      players: [...prevState.players, newPlayer]
    }))
  }

  putPlayer = async (id, playerData, teamId) => {
    const updatedPlayer = await updatePlayer(id, playerData, teamId);
    this.setState(prevState => ({
      players: prevState.players.map(player => player.id === id ? updatedPlayer : player)
    }))
  }

  destroyPlayer = async (id, teamId) => {
    await deletePlayer(id, teamId);
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
    console.log(this.state.players)
    return (
      <div className='main-component'>
        <>
          <Switch >
            <Route exact path='/'>

              <img src={basketballImage} alt="Basketball" className="home-basketball-image" />
              <Link to='/sports' className='link-to-sports'>Check Out Our Sports</Link>
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

              <Route exact path='/teams/:team_id/players' render={(props) => (
                <ShowPlayers
                  {...props}
                  teams={this.state.teams}
                  players={this.state.players}
                  currentUser={this.props.currentUser}
                  destroyPlayer={this.destroyPlayer}
                  getPlayers={this.getPlayers}
                />
              )} />

              <Route exact path='/teams' render={() => (
                <ShowTeams
                  teams={this.state.teams}
                />
              )} />

              <Route path='/sports' render={() => (
                <Sports />
              )} />

              <Route path='/new/player' render={(props) => (
                <CreatePlayer
                  {...props}
                  postPlayer={this.postPlayer}
                  teams={this.state.teams}
                />
              )} />

              <Route path='/player/:id/edit' render={(props) => {
                const playerId = props.match.params.id;
                const player = this.state.players.find(player => player.id === parseInt(playerId));
                return <EditPlayer
                  {...props}
                  teams={this.state.teams}
                  player={player}
                  putPlayer={this.putPlayer}
                />
              }} />

              <Route exact path='/teams/:team_id/players/:id' render={(props) => {
                const playerId = props.match.params.id;
                return <ShowPlayer
                  playerId={playerId}
                  currentUser={this.props.currentUser}
                />
              }} />

            </main>
          </Switch>
        </>
      </div>
    )
  }
}