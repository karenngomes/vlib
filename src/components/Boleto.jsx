import React, { Component } from "react";
import renderHTML from "react-render-html";
import axios from "axios";

export default class ModalRent extends Component {
  state = {
    boleto: ""
  };

  componentDidMount() {
    axios.get("https://vlib-node.herokuapp.com/boleto").then(res => {
      this.setState({ boleto: res.data });
    });
  }

  render() {
    return <div>{renderHTML(this.state.boleto)}</div>;
  }
}
