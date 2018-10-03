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

  state = {
    signIn: false,
    handleChangeSignIn: this.handleChangeSignIn,
    handleChangeSignOut: this.handleChangeSignOut
  };

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user);
    if(user == null) {
      this.setState({signIn: false,user: null})
    }else {
      this.setState({signIn:true,user:user})
    }
  }

  handleChangeSignIn = () => {
    this.setState({ signIn: true });
  };

  handleChangeSignOut = () => {
    this.setState({ signIn: false });
  };

  render() {
    const { signIn , handleChangeSignIn, handleChangeSignOut } = this.state;
    return signIn ? (
      <Router>
        <div>
          <HeaderMenu handleChangeSignOut={handleChangeSignOut}/>
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={CategoriesItem} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/boleto" component={Boleto} />
          <Route path="/signout" component={SignOut} />
        </div>
      </Router>
    ) : (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <Login handleChangeSignIn={handleChangeSignIn}/>}
          />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
