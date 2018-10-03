import React, { Component } from "react";
import "../styles/App.css";
import Login from "./Login";
import SignUp from "./SignUp";

class App extends Component {
  state = {
    createAccount: false
  };

  handleCreateAccount = () => {
    console.log('chegou')
    this.setState({ createAccount: true });
  };

  render() {
    const { createAccount, handleCreateAccount } = this.state;
    return (
      <div className="box">
        <div className="box__middle">
          <h1 className="box__title">VLib App</h1>
          {createAccount ? (
            <SignUp />
          ) : (
            <Login handleCreateAccount={handleCreateAccount} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
