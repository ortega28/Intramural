import React, { Component } from 'react'

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
        <hr />
        <h3>Create Player</h3>
        <label htmlFor="name">Name:</label>
        <input
          id="id"
          type="text"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          id="id"
          type="text"
          value={height}
          onChange={this.handleChange}
        />
        <label htmlFor="sex">Sex:</label>
        <input
          id="id"
          type="text"
          value={sex}
          onChange={this.handleChange}
        />
        <label htmlFor="jersey">Jersey #:</label>
        <input
          id="id"
          type="text"
          value={jersey}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
