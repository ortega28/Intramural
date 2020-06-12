import React, { Component } from 'react'
import { getOnePlayer } from '../services/players';
import './ShowPlayer.css'

export default class ShowPlayer extends Component {

  state = {
    player: null,
  }

  componentDidMount() {
    this.setPlayer()
  }

  setPlayer = async () => {
    const player = await getOnePlayer(this.props.playerId);
    this.setState({ player })
  }

  render() {
    const { player } = this.state;
    return (
      <div>
        {
          player && (
            <>
              <h1 className='show-player-name'>Name: {player.name}</h1>
              <h3 className='show-player-height'>Height: {player.height} inches</h3>
              <h3 className='show-player-sex'>Sex: {player.sex}</h3>
              <h3 className='show-player-jersey'>Jersey #: {player.jersey}</h3>
            </>
          )
        }
      </div>
    )
  }
}