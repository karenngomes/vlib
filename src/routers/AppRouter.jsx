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
import SignOut from "../components/SignOut";

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.handleChangeSignIn = this.handleChangeSignIn.bind(this);
    this.handleChangeSignOut = this.handleChangeSignOut.bind(this);
  }

  state = {
    signIn: false,
  };

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"))

    if(user != null) {
      this.handleChangeSignIn()
    }else {
      this.handleChangeSignOut()
    }
  }

  handleChangeSignIn = () => {
    this.setState({ signIn: true });
  };

  handleChangeSignOut = () => {
    this.setState({ signIn: false });
  };

  render() {
    const { signIn } = this.state;
    return signIn ? (
      <Router>
        <div>
          <HeaderMenu/>
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={CategoriesItem} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/boleto" component={Boleto} />
          <Route path="/signout" 
            render={() => <SignOut handleChangeSignOut={this.handleChangeSignOut}/>}
          />
        </div>
      </Router>
    ) : (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <Login handleChangeSignIn={this.handleChangeSignIn}/>}
          />
          <Route path="/signup" 
            render={() => <SignUp handleChangeSignIn={this.handleChangeSignIn}/>}
          />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
