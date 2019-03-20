import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';

import User from './Components/User.js'
import UserPosts from './Components/UserPosts';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:4000/api/users/")
      .then(res => this.setState({users: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">

      <Route path="/posts/:id" render={props => <UserPosts {...props} />} />

        {this.state.users.length > 0 ? this.state.users.map(user => {
          return <User key={user.id} user={user} />
        }) : null}
      </div>
    );
  }
}

export default App;
