import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderMenu from "../components/Header";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Search from "../components/Search";
import Login from "../components/Login";
import Boleto from "../components/Boleto";
import CategoriesItem from "../components/CategoriesItem";
import SignUp from "../components/SignUp";

class AppRouter extends Component {
  state = {
    signIn: false
  };

  handleChangeSignIn = () => {
    this.setState({ signIn: true });
  };

  handleChangeSignOut = () => {
    this.setState({ signIn: false });
  };

  render() {
    const { signIn, handleChangeSignIn, handleChangeSignOut } = this.state;
    return signIn ? (
      <Router>
        <div>
          <HeaderMenu />
          <Route
            exact
            path="/"
            render={() => <Home handleChangeSignOut={handleChangeSignOut} />}
          />
          <Route path="/categories" component={CategoriesItem} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/boleto" component={Boleto} />
        </div>
      </Router>
    ) : (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <Login handleChangeSignIn={handleChangeSignIn} />}
          />
          <Route path="/create" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
