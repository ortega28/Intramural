import React, { Component } from 'react'
import { getOnePlayer } from '../services/players';

export default class Player extends Component {
  // We need to store the food in state once we make our api.
  // Additionally we have a form in this component so we will
  // need some data for that form in state.
  state = {
    player: null,
  }

  // setFood will make an api call with the id that we passed from props
  // this it will set state. We're only calling setFood on componentDidMount
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
              <h1>Name: {player.name}</h1>
              <h3>Height: {player.height}</h3>
              <h3>Sex: {player.sex}</h3>
              <h3>Jersey #: {player.jersey}</h3>
                )
              }
            </>
          )
        }
      </div>
    )
  }
}