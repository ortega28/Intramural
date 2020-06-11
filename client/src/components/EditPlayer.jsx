import React, { Component } from 'react'
import './EditPlayer.css'
export default class EditPlayer extends Component {
  state = {
    name: "",
    height: ""
  }

  // Our update component is very similar to our Create
  // component except that we have additional methods to
  // set the form data for the item in state that we want to update.

  // componentDidMount will set our form data when the component renders
  // however if we refresh the page on the form, the food wont exist yet.
  // This is why we only setFoodForm inside of the conditional.
  componentDidMount() {
    if (this.props.player) {
      this.setPlayerForm();
    }
  }

  // componentDidUpdate only gets triggered when we refresh the page on the form.
  // the food props wont be there when the component first mounts but will
  // "arrive" a moment later. componentDidUpdate will see this and then setFoodForm.
  componentDidUpdate(prevProps) {
    if (prevProps.player !== this.props.player) {
      this.setPlayerdForm();
    }
  }

  // setFoodForm just grabs the food passed from props and sets state
  setPlayerForm = () => {
    const { name } = this.props.player;
    this.setState({ name })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
      height: value
    })
  }

  render() {
    const { name, height, sex, jersey } = this.state;
    const { putPlayer, history, player } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        putPlayer(player.id, this.state);
        history.push('/players');
        this.setState({
          name: "",
          height: ""
        })
      }}>
        {/* <hr /> */}
        <div className='edit-player-div'>
          <h3 className='edit-player-title'>Edit Player</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="id"
              type="text"
              value={name}
              onChange={this.handleChange}
              className='name-field'
            />
          </div>
          <div>
            <label htmlFor="height">Height:</label>
            <input
              id="id"
              type="text"
              value={height}
              onChange={this.handleChange}
              className='height-field'
            />
          </div>
          <div>
            <label htmlFor="sex">Sex:</label>
            <input
              id="id"
              type="text"
              value={sex}
              onChange={this.handleChange}
              className='edit-sex-field'
            />
          </div>
          <div>
            <label htmlFor="jersey">Jersey #:</label>
            <input
              id="id"
              type="text"
              value={jersey}
              onChange={this.handleChange}
              className='jersey-field'
            />
          </div>
          <button className='edit-player-submit-button'>Submit</button>
        </div>
      </form>
    )
  }
}