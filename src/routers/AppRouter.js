import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Search from "../components/Search";

const AppRouter = () => {
    return (
        
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/search" component={Search} />
            </div>
        </Router>
     
    );
}

export default AppRouter;