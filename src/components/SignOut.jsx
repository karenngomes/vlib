import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class SignOut extends Component {
    
    componentDidMount() {
        localStorage.removeItem("user");
    }

    render() {
        return (
            <div>
                <Redirect to="/"/>
            </div>
        );
    }
}

export default SignOut;