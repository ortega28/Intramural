import React, { Component } from 'react'
import './EditPlayer.css'
export default class EditPlayer extends Component {
  state = {
    name: "",
    height: ""
  }

  componentDidMount() {
    if (this.props.player) {
      this.setPlayerForm();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.player !== this.props.player) {
      this.setPlayerdForm();
    }
  }

  setPlayerForm = () => {
    const { name, height, sex, jersey, team_id: team } = this.props.player;
    this.setState({ name, height, sex, jersey, team })
  }

  handleChange = (e) => {

    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, height, sex, jersey } = this.state;
    const { putPlayer, history, player } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        const { team, ...playerData } = this.state
        putPlayer(player.id, playerData, team);
        history.push(`/teams/${team}/players`);

      }}>

        <div className='edit-player-div'>
          <h2 className='edit-player-title'>Edit Player</h2>
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
          <button className='edit-player-submit-button'>Submit</button>
        </div>
      </form>
    )
  }
}