import React, { Component } from "react";
import ModalRent from "./ModalRent";
import axios from "axios";
import { Header, Image, Container } from "semantic-ui-react";

class Search extends Component {
  state = {
    search: [],
    open: false,
    infoBook: {},
    idBook: ""
  };
  componentDidMount() {
    axios
      .get(`http://vlibrary.herokuapp.com/v1/book/filter/calculo`)
      .then(res => {
        console.log(this.state.search);
        this.setState({ search: res.data.items });
      });
  }
  render() {
    const { search, open, infoBook, idBook } = this.state;
    return (
      <div>
       
        <Container>
        <Header as='h2'>Pesquisa por: </Header>
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
      </div>
    );
  }
}

export default Search;
