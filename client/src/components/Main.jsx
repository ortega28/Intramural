import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
// import Signup from './Signup';
// //import { getAllFlavors } from '../services/flavors';
// import { getAllFoods, createFood, deleteFood, updateFood } from '../services/foods';
// import ShowFlavors from './ShowFlavors';
// import ShowFoods from './ShowFoods';
// import CreateFood from './CreateFood';
// import UpdateFood from './UpdateFood';
// import FoodItem from './FoodItem';

export default class Main extends Component {
  // state = {
  //   // flavors: [],
  //   // foods: []
  // }

  // componentDidMount() {
  //   this.getFlavors();
  //   this.getFoods();
  // }




  render() {
    return (
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
      </main>
    )
  }
}