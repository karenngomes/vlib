import React, { Component } from "react";
import renderHTML from "react-render-html";
import axios from "axios";

export default class ModalRent extends Component {
  state = {
    boleto: ""
  };

  

  componentDidMount() {
    const data = {
      tax: this.props.location.tax,
      name: this.props.location.name
    };

    axios.post("https://vlib-node.herokuapp.com/boleto",data).then(res => {
      this.setState({ boleto: res.data });
    });
  }

  render() {
    return <div>{renderHTML(this.state.boleto)}</div>;
  }
}
