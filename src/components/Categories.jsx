import React, { Component } from "react";
import { Link } from "react-router-dom";
import ModalRent from "./ModalRent";
import axios from "axios";
import { Image, Container, Button, Modal } from "semantic-ui-react";

export default class Categories extends Component {
  state = {
    category: [],
    search: [],
    open: false,
    infoBook: {},
    idBook: ''
  };

  componentDidMount() {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=calculo`)
      .then(res => {
        console.log(this.state.search);
        this.setState({ search: res.data.items });
      });
  }
  /*
  showModal = () => {

    this.handleJSON

    this.setState({open: true});
  }*/

  handleJSON = book => {
    //const info = JSON.stringify(book.volumeInfo);
    //console.log(book.volumeInfo);
    this.setState({ infoBook: book.volumeInfo, open: true, idBook: book.id });
    console.log(this.state.infoBook);
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
      const { search, open, infoBook, idBook} = this.state;
    return (
      <Container>
        <Image.Group
          size="small"
          style={{ display: "flex", overflowX: "scroll" }}
        >
          {search.map((book, index) => (
            <Image
              onClick={() => this.handleJSON(book)}
              key={index}
              style={{ cursor: "pointer" }}
              src={book.volumeInfo.imageLinks.smallThumbnail}
            />
          ))}
        </Image.Group>

        <ModalRent
          open={open}
          close={this.close}
          info={infoBook}
          id={idBook}
        />
      </Container>
    );
  }
}
