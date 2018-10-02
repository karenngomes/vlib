import React, { Component } from "react";
import renderHTML from "react-render-html";
import axios from "axios";

export default class ModalRent extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    boleto: ""
  };

  componentDidMount() {
    axios.get("https://vlib-node.herokuapp.com/boleto").then(res => {
      //console.log(res.data);
      this.setState({ boleto: res.data });
    });
  }

  render() {
    return (
      <div>
        {renderHTML(this.state.boleto)}
      </div>
    );
  }
}
