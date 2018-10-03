import React, { Component } from "react";
import axios from "axios";

class CategoriesItem extends Component {
  state = {
    query: this.props.location.query
  };

  componentDidMount() {
    //console.log(this.state.query);
    axios
      .get(`https://vlibrary.herokuapp.com/v1/book/` + this.state.query)
      .then(res => {
        console.log("data", res.data);
      });
  }

  render() {
    return (
      <div>
        {console.log(this.props.location)}
        <h3>ID: {this.props.location.query}</h3>
      </div>
    );
  }
}

export default CategoriesItem;
