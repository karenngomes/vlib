import React, { Component } from "react";
import ModalRent from "./ModalRent";
import axios from "axios";
import { Image, Container, ItemContent, Item } from "semantic-ui-react";

export default class Categories extends Component {
  state = {
    categories: [],
    open: false,
    infoBook: {},
    idBook: ""
  };

  componentDidMount() {
    axios
      .get('http://vlibrary.herokuapp.com/v1/category/')
      .then(res => {
        this.setState({ categories : res.data})
      });

  }
  handleJSON = book => {
    this.setState({ infoBook: book.volumeInfo, open: true, idBook: book.id });
    //console.log(this.state.infoBook);
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { categories, open, infoBook, idBook } = this.state;
    return (
      <Container>
          <Item>{categories.map(category => (
            axios.get('http://vlibrary.herokuapp.com/v1/book/category/' + category.id)
            .then(res => {
              console.log(res.data)
            })
          ))}</Item>
          
        <ModalRent open={open} close={this.close} info={infoBook} id={idBook} />
      </Container>
    );
  }
}
