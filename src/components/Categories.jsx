import React, { Component } from "react";
import ModalRent from "./ModalRent";
import axios from "axios";
import { Image, Container, ItemContent, Item } from "semantic-ui-react";

export default class Categories extends Component {
  state = {
    categories: [],
    books: [],
    open: false,
    infoBook: {}
  };

  componentDidMount() {
    axios
      .get('http://vlibrary.herokuapp.com/v1/category/')
      .then(res => {
        this.setState({ categories : res.data})

        this.state.categories.map(category => {
          console.log(category)
          axios.get('http://vlibrary.herokuapp.com/v1/book/category/' + category.id)
            .then(res => {
              let joined = this.state.books.concat(res.data);
              
              this.setState({ books: joined })
            })
        });
      });
    console.log(this.state.books)
  }
  handleJSON = book => {
    this.setState({ infoBook: book, open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Container>
        <Image.Group
          size="small"
        >
          {this.state.books.map((book, index) => (
            <Image
              onClick={() => this.handleJSON(book)}
              key={index}
              style={{ cursor: "pointer" }}
              src={book.thumbnail}
            />
          ))}
        </Image.Group>
          
        <ModalRent open={this.state.open} close={this.close} info={this.state.infoBook} />
      </Container>
    );
  }
}
