import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Icon, Header, Input } from "semantic-ui-react";
import axios from "axios";

const trigger = (
  <span>
    <Icon name="user" /> Olá, Pedro
  </span>
);

let optionsCategories = [];

export default class HeaderMenu extends Component {
  options = [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>Bob Smith</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "profile",
      text: <Link to="/profile">Meu Peril</Link>
    },
    {
      key: "sign-out",
      text: <a onClick={this.props.handleChangeSignOut}>Sair</a>
    }
  ];
  componentDidMount() {
    axios.get(`https://vlibrary.herokuapp.com/v1/category`).then(res => {
      res.data.forEach(category => {
        optionsCategories.push({
          key: category.id,
          text: (
            <Link to={{ pathname: "/categories/", query: category.id }}>
              {category.name}
            </Link>
          )
        });
      });
    });
  }

  render() {
    return (
      <div>
        <Menu>
          <Menu.Item>
            <Link to="/">
              <Header as="h3" color="red">
                <Icon name="book" />
                <Header.Content>VLib</Header.Content>
              </Header>
            </Link>
          </Menu.Item>
          <Dropdown item simple text="Categorias" options={optionsCategories} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Pesquisa por um livro" />
            </Menu.Item>
            <Dropdown item simple trigger={trigger} options={this.options} />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
