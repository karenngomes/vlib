import React, { Component } from 'react';
import '../styles/App.css';
import Login from './Login';


class App extends Component {
  render() {
    return (
      <div className="box">
        <div className="box__middle">
          <h1 className="box__title">VLib App</h1>
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
