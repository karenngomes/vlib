import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Item,
  Divider,
  Image,
  Header,
  Icon,
  Button
} from "semantic-ui-react";

class Profile extends Component {
  state = {
    user : JSON.parse(localStorage.getItem("user"))
  }

  render() {
    return (
      <Container>
        <Item.Group>
          <Header as="h2">Informações básicas</Header>
          <Item>
            <Icon name="user" size="massive" />

            <Item.Content>
              <Item.Header as="a">{this.state.user.name}</Item.Header>
              <Item.Description>{this.state.user.email}</Item.Description>
              <Item.Description>
                Universidade Federal de Alagoas
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        <Divider />
        <Header as="h2">Livros Alocados</Header>
        {this.state.user.rentedBooks.length > 0 ? 
          <Image.Group size="small" style={{ overflowX: "scroll" }}>
            { this.state.user.rentedBooks.map((book, index) => (
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            ))}
          </Image.Group>
          : <Item.Content><Item.Description>Você não possui nenhum livro alugado.</Item.Description></Item.Content>
        }
        
        <Divider />
        <Header as="h2">
          <Icon.Group size="large">
            <Icon name="payment" />
          </Icon.Group>
          Multa total: R$ {this.state.user.totalTax.toFixed(2)} 
          <Link to={{ pathname: "/boleto", tax: this.state.user.totalTax, name: this.state.user.name }}>
            <Button>Gerar boleto</Button>
          </Link>
        </Header>
      </Container>
    );
  }
}

export default Profile;
