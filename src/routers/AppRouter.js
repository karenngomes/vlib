import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderMenu from "../components/Header";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Search from "../components/Search";
import Login from "../components/Login";
import Boleto from "../components/Boleto";
import CategoriesItem from "../components/CategoriesItem";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <HeaderMenu />
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={CategoriesItem} />
        <Route path="/profile" component={Profile} />
        <Route path="/search" component={Search} />
        <Route path="/boleto" component={Boleto} />
        <Route path="/logout" component={Login} />
      </div>
    </Router>
  );
};

export default AppRouter;
