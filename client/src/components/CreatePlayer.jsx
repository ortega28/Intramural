import React, { Component } from 'react'
import './CreatePlayer.css'

export default class CreateFood extends Component {
  state = {
    name: "",
    // height: "",
    // sex: "",
    // jersey: ""
  }

  handleChange = (e) => {
    const { value, } = e.target;
    this.setState({
      name: value,
      // height: value
    })
  }

  render() {
    const { name, height, sex, jersey } = this.state;
    const { postPlayer, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        postPlayer(this.state);
        history.push('/players');
        this.setState({
          name: "",
          // height: "",
          // sex: "",
          // jersey: ""
        })
      }}>
        {/* <hr /> */}
        <div className='create-player-div'>
          <h2 className='create-player-title'>Create Player</h2>
          <div >
            <label htmlFor="name">Name:</label>
            <input
              id="id"
              type="text"
              value={name}
              onChange={this.handleChange}
              className='name-field'
            />
          </div>
          <div >
            <label htmlFor="height">Height:</label>
            <input
              id="id"
              type="text"
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
              value={sex}
              onChange={this.handleChange}
              className='sex-field'
            />
          </div>
          <div >
            <label htmlFor="jersey">Jersey #:</label>
            <input
              id="id"
              type="text"
              value={jersey}
              onChange={this.handleChange}
              className='jersey-field'
            />
          </div>
          <button className='create-player-submit-button'>Submit</button>
        </div>
      </form >
    )
  }
}
