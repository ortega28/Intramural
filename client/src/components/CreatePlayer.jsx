import React, { Component } from 'react'
import './CreatePlayer.css'

export default class CreatePlayer extends Component {
  state = {
    name: "",
    height: "",
    sex: "",
    jersey: "",
    team: ""
  }

  handleChange = (e) => {

    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  componentDidUpdate() {
    if (!this.state.team && this.props.teams.length) {
      this.setState({
        team: this.props.teams[0].id
      })
    }
  }

  render() {
    const { name, height, sex, jersey } = this.state;
    const { postPlayer, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        const { team, ...playerData } = this.state
        postPlayer(team, playerData);
        history.push(`/teams/${team}/players`);

      }}>
        {/* <hr /> */}
        <div className='create-player-div'>
          <h2 className='create-player-title'>Create Player</h2>
          <div >
            <label htmlFor="name">Name:</label>
            <input
              id="id"
              type="text"
              name='name'
              value={name}
              onChange={this.handleChange}
              className='name-field'
            />
          </div>
          <div >
            <label htmlFor="height">Height:</label>
            <input
              id="id"
              type="number"
              name="height"
              value={height}
              onChange={this.handleChange}
              className='height-field'
            />
          </div>
          <div className='sex-field'>
            <label htmlFor="sex">Sex:</label>
            <input
              id="id"
              type="text"
              name='sex'
              value={sex}
              onChange={this.handleChange}
              className='sex-field'
            />
          </div>
          <div >
            <label htmlFor="jersey">Jersey #:</label>
            <input
              id="id"
              type="number"
              name='jersey'
              value={jersey}
              onChange={this.handleChange}
              className='jersey-field'
            />
          </div>
          <div >
            <label htmlFor="team">Team #:</label>
            <select
              id="id"
              name='team'
              onChange={this.handleChange}
              className='team-field'
            >
              {
                this.props.teams.map(team => (
                  <option value={team.name}>
                    {team.name}
                  </option>
                ))
              }
            </select>
          </div>
          <button className='create-player-submit-button'>Submit</button>
        </div>
      </form >
    )
  }
}
