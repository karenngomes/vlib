import React, { Component } from "react";
import axios from "axios";
import ModalRent from "./ModalRent";
import { Image } from "semantic-ui-react";

class CategoriesItem extends Component {
  state = {
    query: this.props.location.query,
    books: [],
    open: false,
    infoBook: {},
    idBook: ""
  };

  componentDidMount() {
    //console.log(this.state.query);
    axios
      .get(`https://vlibrary.herokuapp.com/v1/book/category/` + this.state.query)
      .then(res => {
        this.setState({
          books: res.data
        })
      });
  }

  handleJSON = book => {
    this.setState({ infoBook: book, open: true, idBook: book.id });
    //console.log(this.state.infoBook);
  };

  render() {
    const { open, infoBook, idBook } = this.state;
    return (
      <div>
        <Image.Group
          size="small"
        >
          {this.state.books.map((book, index) => (
            <Image
              key={index}
              style={{ cursor: "pointer" }}
              src={book.thumbnail}
            />
          ))}
        </Image.Group>
        <ModalRent open={open} close={this.close} info={infoBook} id={idBook} />
      </div>
    );
  }
}

export default CategoriesItem;
