import React, { Component } from "react";
import ModalRent from "./ModalRent";
import axios from "axios";
import { Image, Container } from "semantic-ui-react";

export default class Categories extends Component {
  state = {
    category: [],
    open: false,
    infoBook: {},
    idBook: ""
  };

  componentDidMount() {
    axios
      .get(`http://vlibrary.herokuapp.com/v1/book/filter/calculo`)
      .then(res => {
        this.setState({ category: res.data.items });
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
    const { category, open, infoBook, idBook } = this.state;
    return (
      <Container>
        <Image.Group
          size="small"
          style={{ display: "flex", overflowX: "scroll" }}
        >
          {category.map((book, index) => (
            <Image
              onClick={() => this.handleJSON(book)}
              key={index}
              style={{ cursor: "pointer" }}
              src={book.volumeInfo.imageLinks.smallThumbnail}
            />
          ))}
        </Image.Group>

        <ModalRent open={open} close={this.close} info={infoBook} id={idBook} />
      </Container>
    );
  }
}
