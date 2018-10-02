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
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Item.Group>
          <Header as="h2">Informações básicas</Header>
          <Item>
            <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

            <Item.Content>
              <Item.Header as="a">Nome</Item.Header>
              <Item.Meta>meta</Item.Meta>
              <Item.Description>Email</Item.Description>
              <Item.Description>Instituição</Item.Description>
              <Item.Extra>Extra</Item.Extra>
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
        perfil: fotinea, nome, email, instituição (ufal) livros: lista de livros
        alugados (mesmo modal sem a opção alugar - botão desativado) multas:
        valor
      </Container>
    );
  }
}

export default Profile;
