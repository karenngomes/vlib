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
  render() {
    return (
      <Container>
        <Item.Group>
          <Header as="h2">Informações básicas</Header>
          <Item>
            <Icon name="user" size="massive" />

            <Item.Content>
              <Item.Header as="a">Nome</Item.Header>
              <Item.Description>Email</Item.Description>
              <Item.Description>
                Universidade Federal de Alagoas
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        <Divider />
        <Header as="h2">Livros Alocados</Header>
        <Image.Group size="small" style={{ overflowX: "scroll" }}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Image.Group>
        <Divider />
        <Header as="h2">
          <Icon.Group size="large">
            <Icon name="payment" />
          </Icon.Group>
          Multa total:
          <Link to="/boleto">
            <Button>Gerar boleto</Button>
          </Link>
        </Header>
      </Container>
    );
  }
}

export default Profile;
