import React, { Component } from 'react'
import './CreatePlayer.css'

export default class CreatePlayer extends Component {
  state = {
    name: "",
    height: "",
    sex: "",
    jersey: ""
  }

  handleChange = (e) => {

    const { name, value } = e.target;
    console.log(name)
    this.setState({
      [name]: value
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
              type="text"
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
              type="text"
              name='jersey'
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
